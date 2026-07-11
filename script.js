document.addEventListener('DOMContentLoaded', () => {
    // Register Service Worker for PWA
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }

    // --- State Variables ---
    let currentLang = 'ku';
    let currentMode = 'students'; // 'students' or 'teachers'
    let appStudents = [];
    let appTeachers = [];
    let isBulkMode = false;
    let selectedBulkStudents = [];
    let queueIndex = 0;

    // --- DOM Elements - Main ---
    const studentNameInput = document.getElementById('studentName');
    const studentClassInput = document.getElementById('studentClass');
    const studentSectionInput = document.getElementById('studentSection');
    const parentNumberInput = document.getElementById('parentNumber');
    const eventDateInput = document.getElementById('eventDate');
    const eventTimeInput = document.getElementById('eventTime');
    const studentReasonsGrid = document.getElementById('studentReasonsGrid');
    const teacherReasonsGrid = document.getElementById('teacherReasonsGrid');
    const reasonRadios = document.querySelectorAll('input[name="reason"]');
    const teacherReasonRadios = document.querySelectorAll('input[name="teacher_reason"]');
    
    // --- Mode Switcher ---
    const modeStudentsBtn = document.getElementById('modeStudentsBtn');
    const modeTeachersBtn = document.getElementById('modeTeachersBtn');
    
    const messagePreview = document.getElementById('messagePreview');
    const previewTime = document.getElementById('previewTime');
    const sendBtn = document.getElementById('sendBtn');
    const langSelect = document.getElementById('langSelect');
    const studentsListDatalist = document.getElementById('studentsList');

    // --- DOM Elements - Modals & Buttons ---
    const manageStudentsBtn = document.getElementById('manageStudentsBtn');
    const bulkSelectBtn = document.getElementById('bulkSelectBtn');
    
    const manageStudentsModal = document.getElementById('manageStudentsModal');
    const closeManageModal = document.getElementById('closeManageModal');
    const tabAddSingle = document.getElementById('tabAddSingle');
    const tabAddBulk = document.getElementById('tabAddBulk');
    const panelAddSingle = document.getElementById('panelAddSingle');
    const panelAddBulk = document.getElementById('panelAddBulk');
    const saveSingleStudentBtn = document.getElementById('saveSingleStudentBtn');
    const saveBulkStudentsBtn = document.getElementById('saveBulkStudentsBtn');
    const studentsTableBody = document.getElementById('studentsTableBody');

    const bulkSelectModal = document.getElementById('bulkSelectModal');
    const closeBulkModal = document.getElementById('closeBulkModal');
    const searchBulk = document.getElementById('searchBulk');
    const bulkListContainer = document.getElementById('bulkListContainer');
    const confirmBulkBtn = document.getElementById('confirmBulkBtn');
    const selectedCountMsg = document.getElementById('selectedCountMsg');

    const reasonModal = document.getElementById('reasonModal');
    const closeReasonModal = document.getElementById('closeReasonModal');
    const openReasonModalBtn = document.getElementById('openReasonModalBtn');
    const selectedReasonDisplay = document.getElementById('selectedReasonDisplay');

    const queueModal = document.getElementById('queueModal');
    const queueProgressText = document.getElementById('queueProgressText');
    const queueProgressBar = document.getElementById('queueProgressBar');
    const queueStudentName = document.getElementById('queueStudentName');
    const queueSendBtn = document.getElementById('queueSendBtn');
    const queueNextBtn = document.getElementById('queueNextBtn');
    const queueCancelBtn = document.getElementById('queueCancelBtn');

    // --- DOM Elements - Custom Dialog ---
    const customDialogModal = document.getElementById('customDialogModal');
    const customDialogTitleText = document.getElementById('customDialogTitleText');
    const customDialogMessage = document.getElementById('customDialogMessage');
    const customDialogConfirmBtn = document.getElementById('customDialogConfirmBtn');
    const customDialogCancelBtn = document.getElementById('customDialogCancelBtn');
    
    let dialogConfirmCallback = null;
    let dialogCancelCallback = null;

    const showDialog = (message, isConfirm = false, onConfirm = null, onCancel = null) => {
        customDialogMessage.textContent = message;
        if (isConfirm) {
            customDialogCancelBtn.style.display = 'inline-block';
            customDialogTitleText.textContent = currentLang === 'ku' ? 'پشتڕاستکرن' : (currentLang === 'en' ? 'Confirm' : 'تأكيد');
        } else {
            customDialogCancelBtn.style.display = 'none';
            customDialogTitleText.textContent = currentLang === 'ku' ? 'ئاگەهداری' : (currentLang === 'en' ? 'Alert' : 'تنبيه');
        }
        
        dialogConfirmCallback = onConfirm;
        dialogCancelCallback = onCancel;
        
        customDialogModal.style.display = 'block';
    };

    const closeDialog = () => {
        customDialogModal.style.display = 'none';
        dialogConfirmCallback = null;
        dialogCancelCallback = null;
    };

    customDialogConfirmBtn.addEventListener('click', () => {
        const cb = dialogConfirmCallback;
        closeDialog();
        if (cb) cb();
    });

    customDialogCancelBtn.addEventListener('click', () => {
        const cb = dialogCancelCallback;
        closeDialog();
        if (cb) cb();
    });

    // --- Initializations ---
    const now = new Date();
    eventDateInput.value = now.toISOString().split('T')[0];
    eventTimeInput.value = now.toTimeString().split(' ')[0].substring(0, 5);
    previewTime.textContent = now.toTimeString().split(' ')[0].substring(0, 5);

    // --- Database Functions ---
    const loadDatabase = () => {
        const storedStudents = localStorage.getItem('appStudents');
        if (storedStudents) {
            appStudents = JSON.parse(storedStudents);
        } else if (typeof studentsDatabase !== 'undefined') {
            appStudents = [...studentsDatabase];
            localStorage.setItem('appStudents', JSON.stringify(appStudents));
        }

        const storedTeachers = localStorage.getItem('appTeachers');
        if (storedTeachers) {
            appTeachers = JSON.parse(storedTeachers);
        }

        refreshDatalist();
        renderStudentsTable();
    };

    const saveDatabase = () => {
        if (currentMode === 'students') {
            localStorage.setItem('appStudents', JSON.stringify(appStudents));
        } else {
            localStorage.setItem('appTeachers', JSON.stringify(appTeachers));
        }
        refreshDatalist();
        renderStudentsTable();
    };

    const refreshDatalist = () => {
        studentsListDatalist.innerHTML = '';
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        currentData.forEach(person => {
            const option = document.createElement('option');
            option.value = person.name;
            studentsListDatalist.appendChild(option);
        });
    };

    // --- Manage Students Logic ---
    const openManageModal = () => manageStudentsModal.style.display = 'block';
    const closeManageModalFn = () => manageStudentsModal.style.display = 'none';

    tabAddSingle.addEventListener('click', () => {
        tabAddSingle.classList.add('active');
        tabAddBulk.classList.remove('active');
        panelAddSingle.style.display = 'block';
        panelAddBulk.style.display = 'none';
    });

    tabAddBulk.addEventListener('click', () => {
        tabAddBulk.classList.add('active');
        tabAddSingle.classList.remove('active');
        panelAddBulk.style.display = 'block';
        panelAddSingle.style.display = 'none';
    });

    saveSingleStudentBtn.addEventListener('click', () => {
        const name = document.getElementById('newStudentName').value.trim();
        const cls = document.getElementById('newStudentClass').value.trim();
        const sec = document.getElementById('newStudentSection').value.trim();
        const num = document.getElementById('newStudentNumber').value.trim();

        if(!name || !num) return showDialog('يجب إدخال الاسم ورقم الهاتف على الأقل.');

        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        currentData.push({ name, class: cls, section: sec, parentNumber: num });
        saveDatabase();
        
        document.getElementById('newStudentName').value = '';
        document.getElementById('newStudentClass').value = '';
        document.getElementById('newStudentSection').value = '';
        document.getElementById('newStudentNumber').value = '';
    });

    // --- Modal Logic ---
    if (openReasonModalBtn) {
        openReasonModalBtn.addEventListener('click', () => {
            if (reasonModal.style.display === 'block') {
                reasonModal.style.display = 'none';
            } else {
                reasonModal.style.display = 'block';
            }
        });
    }

    if (closeReasonModal) {
        closeReasonModal.addEventListener('click', () => {
            reasonModal.style.display = 'none';
        });
    }

    saveBulkStudentsBtn.addEventListener('click', () => {
        const text = document.getElementById('bulkExcelData').value.trim();
        const defaultClass = document.getElementById('bulkDefaultClass').value.trim();
        const defaultSection = document.getElementById('bulkDefaultSection').value.trim();

        if(!text) return;

        const rows = text.split('\n');
        let addedCount = 0;

        rows.forEach(row => {
            const cols = row.split('\t'); // Excel copy uses tabs
            if (cols.length >= 1) {
                const name = cols[0] ? cols[0].trim() : '';
                
                let cls = defaultClass;
                let sec = defaultSection;
                let num = '';

                if (cols.length >= 4) {
                    cls = cols[1] ? cols[1].trim() : defaultClass;
                    sec = cols[2] ? cols[2].trim() : defaultSection;
                    num = cols[3] ? cols[3].trim() : '';
                } else if (cols.length === 3) {
                    cls = cols[1] ? cols[1].trim() : defaultClass;
                    num = cols[2] ? cols[2].trim() : '';
                } else if (cols.length === 2) {
                    num = cols[1] ? cols[1].trim() : '';
                }

                if (name) {
                    const currentData = currentMode === 'students' ? appStudents : appTeachers;
                    currentData.push({ name, class: cls, section: sec, parentNumber: num });
                    addedCount++;
                }
            }
        });

        if (addedCount > 0) {
            saveDatabase();
            document.getElementById('bulkExcelData').value = '';
            showDialog(`تم إضافة ${addedCount} طلاب بنجاح!`);
        }
    });

    const renderStudentsTable = () => {
        studentsTableBody.innerHTML = '';
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        currentData.forEach((student, index) => {
            const tr = document.createElement('tr');
            tr.style.cursor = 'pointer';
            tr.innerHTML = `
                <td style="text-align: center;"><input type="checkbox" class="student-row-checkbox" data-index="${index}"></td>
                <td>${student.name}</td>
                <td style="${currentMode === 'teachers' ? 'display:none;' : ''}">${student.class || '-'}</td>
                <td style="${currentMode === 'teachers' ? 'display:none;' : ''}">${student.section || '-'}</td>
                <td dir="ltr">${student.parentNumber}</td>
                <td><button onclick="window.deleteStudent(${index}); event.stopPropagation();"><i class="fa-solid fa-trash"></i></button></td>
            `;
            
            tr.addEventListener('click', (e) => {
                if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') return;
                if (e.target.closest('button')) return;

                const cb = tr.querySelector('.student-row-checkbox');
                cb.checked = !cb.checked;
                updateDeleteSelectedBtnVisibility();
            });

            studentsTableBody.appendChild(tr);
        });

        document.querySelectorAll('.student-row-checkbox').forEach(cb => {
            cb.addEventListener('change', updateDeleteSelectedBtnVisibility);
        });
        
        const selectAllCb = document.getElementById('selectAllTableCheckbox');
        if (selectAllCb) selectAllCb.checked = false;
        
        updateDeleteSelectedBtnVisibility();
    };

    window.deleteStudent = (index) => {
        const msg = translations[currentLang].msg_confirm_delete_single || 'هل أنت متأكد من حذف هذا الطالب؟';
        showDialog(msg, true, () => {
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            currentData.splice(index, 1);
            saveDatabase();
        });
    };

    const deleteAllBtn = document.getElementById('deleteAllBtn');
    const deleteSelectedBtn = document.getElementById('deleteSelectedBtn');
    const selectAllTableCheckbox = document.getElementById('selectAllTableCheckbox');

    if (deleteAllBtn) {
        deleteAllBtn.addEventListener('click', () => {
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            if (currentData.length === 0) return;
            const msg = translations[currentLang].msg_confirm_delete_all || 'هل أنت متأكد من مسح جميع الطلاب؟';
            showDialog(msg, true, () => {
                if (currentMode === 'students') appStudents = [];
                else appTeachers = [];
                saveDatabase();
            });
        });
    }

    if (deleteSelectedBtn) {
        deleteSelectedBtn.addEventListener('click', () => {
            const checkedBoxes = document.querySelectorAll('.student-row-checkbox:checked');
            if (checkedBoxes.length === 0) return;
            
            let msg = translations[currentLang].msg_confirm_delete_selected || `هل أنت متأكد من حذف ${checkedBoxes.length} طلاب؟`;
            msg = msg.replace('{count}', checkedBoxes.length);
            
            showDialog(msg, true, () => {
                const currentData = currentMode === 'students' ? appStudents : appTeachers;
                const indicesToDelete = Array.from(checkedBoxes).map(cb => parseInt(cb.getAttribute('data-index'))).sort((a, b) => b - a);
                indicesToDelete.forEach(index => {
                    currentData.splice(index, 1);
                });
                saveDatabase();
            });
        });
    }

    if (selectAllTableCheckbox) {
        selectAllTableCheckbox.addEventListener('change', (e) => {
            const isChecked = e.target.checked;
            document.querySelectorAll('.student-row-checkbox').forEach(cb => {
                cb.checked = isChecked;
            });
            updateDeleteSelectedBtnVisibility();
        });
    }

    const updateDeleteSelectedBtnVisibility = () => {
        if (!deleteSelectedBtn) return;
        const checkedCount = document.querySelectorAll('.student-row-checkbox:checked').length;
        if (checkedCount > 0) {
            deleteSelectedBtn.style.display = 'inline-block';
            const baseText = translations[currentLang].btn_delete_selected || 'حذف المحدد';
            deleteSelectedBtn.textContent = `${baseText} (${checkedCount})`;
        } else {
            deleteSelectedBtn.style.display = 'none';
        }
    };

    // --- Bulk Select Logic ---
    const openBulkModal = () => {
        renderBulkCheckboxes('');
        bulkSelectModal.style.display = 'block';
    };
    
    const closeBulkModalFn = () => bulkSelectModal.style.display = 'none';

    const renderBulkCheckboxes = (filterText) => {
        bulkListContainer.innerHTML = '';
        const lowerFilter = filterText.toLowerCase().trim();
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        const filtered = currentData.filter(s => {
            if (!lowerFilter) return true;
            const matchName = s.name.toLowerCase().includes(lowerFilter);
            const matchClass = s.class && s.class.toLowerCase().includes(lowerFilter);
            const matchSection = s.section && s.section.toLowerCase().includes(lowerFilter);
            return matchName || matchClass || matchSection;
        });
        
        filtered.forEach(student => {
            const isChecked = selectedBulkStudents.some(s => s.name === student.name);
            const label = document.createElement('label');
            label.className = 'student-checkbox-item';
            label.innerHTML = `
                <input type="checkbox" value="${student.name}" ${isChecked ? 'checked' : ''}>
                <span>${student.name}</span>
                <small style="margin-left: auto;">${student.class || ''} - ${student.section || ''}</small>
            `;
            const checkbox = label.querySelector('input');
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    if (!selectedBulkStudents.some(s => s.name === student.name)) {
                        selectedBulkStudents.push(student);
                    }
                } else {
                    selectedBulkStudents = selectedBulkStudents.filter(s => s.name !== student.name);
                }
                updateBulkSelectedCount();
            });
            bulkListContainer.appendChild(label);
        });
        updateBulkSelectedCount();
    };

    searchBulk.addEventListener('input', (e) => renderBulkCheckboxes(e.target.value));

    const selectAllFilteredBtn = document.getElementById('selectAllFilteredBtn');
    if (selectAllFilteredBtn) {
        selectAllFilteredBtn.addEventListener('click', () => {
            const filterText = searchBulk.value.toLowerCase().trim();
            const currentData = currentMode === 'students' ? appStudents : appTeachers;
            const filtered = currentData.filter(s => {
                if (!filterText) return true;
                const matchName = s.name.toLowerCase().includes(filterText);
                const matchClass = s.class && s.class.toLowerCase().includes(filterText);
                const matchSection = s.section && s.section.toLowerCase().includes(filterText);
                return matchName || matchClass || matchSection;
            });
            
            filtered.forEach(student => {
                if (!selectedBulkStudents.some(s => s.name === student.name)) {
                    selectedBulkStudents.push(student);
                }
            });
            
            renderBulkCheckboxes(searchBulk.value);
        });
    }

    const updateBulkSelectedCount = () => {
        selectedCountMsg.textContent = `${selectedBulkStudents.length} طلاب محددين`;
    };

    confirmBulkBtn.addEventListener('click', () => {
        if (selectedBulkStudents.length > 0) {
            isBulkMode = true;
            studentNameInput.value = `تم تحديد ${selectedBulkStudents.length} طلاب (إرسال جماعي)`;
            studentNameInput.disabled = true;
            studentClassInput.disabled = true;
            studentSectionInput.disabled = true;
            parentNumberInput.disabled = true;
            closeBulkModalFn();
            updatePreview();
        } else {
            isBulkMode = false;
            studentNameInput.disabled = false;
            studentClassInput.disabled = false;
            studentSectionInput.disabled = false;
            parentNumberInput.disabled = false;
            studentNameInput.value = '';
            studentClassInput.value = '';
            studentSectionInput.value = '';
            parentNumberInput.value = '';
            // Clear search
            searchBulk.value = '';
            renderBulkCheckboxes('');
            closeBulkModalFn();
        }
    });

    // Close Modals on outside click
    window.addEventListener('click', (e) => {
        if (e.target === manageStudentsModal) {
            manageStudentsModal.style.display = 'none';
        }
        if (e.target === bulkSelectModal) {
            bulkSelectModal.style.display = 'none';
        }
        
        // Handle dropdown click outside
        if (reasonModal && reasonModal.style.display === 'block') {
            if (!reasonModal.contains(e.target) && e.target !== openReasonModalBtn && !openReasonModalBtn.contains(e.target)) {
                reasonModal.style.display = 'none';
            }
        }
    });


    // --- Message Logic ---
    const applyTranslations = () => {
        const dict = translations[currentLang];
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.innerHTML = dict[key];
        });
        document.querySelectorAll('[data-i18n-ph]').forEach(el => {
            const key = el.getAttribute('data-i18n-ph');
            if (dict[key]) el.setAttribute('placeholder', dict[key]);
        });
    };

    const changeLanguage = () => {
        currentLang = langSelect.value;
        document.documentElement.dir = currentLang === 'en' ? 'ltr' : 'rtl';
        document.documentElement.lang = currentLang;
        applyTranslations();
        updatePreview();
    };

    const handleStudentSelection = () => {
        if(isBulkMode) return;
        const selectedName = studentNameInput.value;
        const currentData = currentMode === 'students' ? appStudents : appTeachers;
        const person = currentData.find(s => s.name === selectedName);
        if (person) {
            studentClassInput.value = person.class;
            studentSectionInput.value = person.section || '';
            parentNumberInput.value = person.parentNumber;
        }
        updatePreview();
    };

    const generateMessageForStudent = (studentName, studentClass, studentSection) => {
        const date = eventDateInput.value;
        const time = eventTimeInput.value;
        const selector = currentMode === 'students' ? 'input[name="reason"]:checked' : 'input[name="teacher_reason"]:checked';
        const selectedReasonElement = document.querySelector(selector);
        if (!selectedReasonElement) return "";
        
        return getLocalizedMessageTemplate(currentLang, selectedReasonElement.value, studentName, studentClass, studentSection, date, time);
    };

    const updatePreview = () => {
        if (isBulkMode) {
            if(selectedBulkStudents.length > 0) {
                const firstStudent = selectedBulkStudents[0];
                const msg = generateMessageForStudent(firstStudent.name, firstStudent.class, firstStudent.section);
                messagePreview.innerText = `[وضع الإرسال الجماعي لـ ${selectedBulkStudents.length} طلاب]\n\nمثال للرسالة الأولى:\n\n${msg}`;
            }
        } else {
            const msg = generateMessageForStudent(studentNameInput.value, studentClassInput.value, studentSectionInput.value);
            messagePreview.innerText = msg;
        }
        
        // Update display if reason changes
        const selector = currentMode === 'students' ? 'input[name="reason"]:checked' : 'input[name="teacher_reason"]:checked';
        const selectedReasonElement = document.querySelector(selector);
        if (selectedReasonElement && selectedReasonDisplay) {
            const content = selectedReasonElement.nextElementSibling.innerHTML;
            selectedReasonDisplay.innerHTML = content;
        }
    };

    const formatPhoneNumber = (number) => {
        if (!number) return '';
        let cleaned = number.replace(/[^\d+]/g, '');
        if (cleaned.startsWith('+')) {
            cleaned = cleaned.substring(1);
        } else if (cleaned.startsWith('00')) {
            cleaned = cleaned.substring(2);
        } else if (cleaned.startsWith('07')) {
            cleaned = '964' + cleaned.substring(1);
        }
        return cleaned;
    };

    // --- Sending Logic ---
    const sendWhatsAppMessage = () => {
        if (isBulkMode) {
            startQueue();
        } else {
            const number = formatPhoneNumber(parentNumberInput.value);
            if (!number) return showDialog('يرجى إدخال رقم الهاتف.');
            if (!studentNameInput.value) return showDialog('يرجى إدخال اسم الطالب.');

            const message = messagePreview.innerText;
            // Use api.whatsapp.com for better Windows Desktop app compatibility
            window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, '_blank');
        }
    };

    // --- Queue Logic ---
    const startQueue = () => {
        if (selectedBulkStudents.length === 0) return;
        queueIndex = 0;
        queueModal.style.display = 'block';
        updateQueueUI();
    };

    const updateQueueUI = () => {
        const student = selectedBulkStudents[queueIndex];
        const currentNum = queueIndex + 1;
        const totalNum = selectedBulkStudents.length;
        const progressPercentage = (queueIndex / totalNum) * 100;

        queueProgressText.textContent = `رسالة ${currentNum} من ${totalNum}`;
        queueProgressBar.style.width = `${progressPercentage}%`;
        queueStudentName.textContent = student.name;
        
        queueNextBtn.disabled = true;
        
        if (queueIndex >= totalNum) {
            queueModal.style.display = 'none';
            showDialog('تم الانتهاء من الإرسال لجميع الطلاب المحددين!');
        }
    };

    queueSendBtn.addEventListener('click', () => {
        const student = selectedBulkStudents[queueIndex];
        const number = formatPhoneNumber(student.parentNumber);
        
        if (number) {
            const message = generateMessageForStudent(student.name, student.class, student.section);
            // Use api.whatsapp.com for better Windows Desktop app compatibility
            window.open(`https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, '_blank');
        } else {
            showDialog(`الطالب ${student.name} لا يملك رقم هاتف صالح.`);
        }
        
        // Enable next button after clicking send
        queueNextBtn.disabled = false;
        
        // If it's the last student, change Next button text to Finish
        if (queueIndex === selectedBulkStudents.length - 1) {
            queueNextBtn.textContent = "إنهاء";
        }
    });

    queueNextBtn.addEventListener('click', () => {
        queueIndex++;
        if (queueIndex >= selectedBulkStudents.length) {
            queueModal.style.display = 'none';
            isBulkMode = false; // Reset
            selectedBulkStudents = [];
            studentNameInput.disabled = false;
            studentClassInput.disabled = false;
            studentSectionInput.disabled = false;
            parentNumberInput.disabled = false;
            studentNameInput.value = '';
            studentClassInput.value = '';
            studentSectionInput.value = '';
            parentNumberInput.value = '';
            updatePreview();
        } else {
            updateQueueUI();
        }
    });

    queueCancelBtn.addEventListener('click', () => {
        showDialog('هل أنت متأكد من إلغاء الإرسال الجماعي؟', true, () => {
            queueModal.style.display = 'none';
        });
    });


    // --- Event Listeners Setup ---
    langSelect.addEventListener('change', changeLanguage);
    studentNameInput.addEventListener('input', handleStudentSelection);
    studentClassInput.addEventListener('input', updatePreview);
    studentSectionInput.addEventListener('input', updatePreview);
    eventDateInput.addEventListener('change', updatePreview);
    eventTimeInput.addEventListener('change', () => {
        updatePreview();
        previewTime.textContent = eventTimeInput.value || now.toTimeString().split(' ')[0].substring(0, 5);
    });
    
    reasonRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updatePreview();
            setTimeout(() => {
                if (reasonModal) reasonModal.style.display = 'none';
            }, 150);
        });
    });

    teacherReasonRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            updatePreview();
            setTimeout(() => {
                if (reasonModal) reasonModal.style.display = 'none';
            }, 150);
        });
    });
    sendBtn.addEventListener('click', sendWhatsAppMessage);

    manageStudentsBtn.addEventListener('click', openManageModal);
    closeManageModal.addEventListener('click', closeManageModalFn);
    
    bulkSelectBtn.addEventListener('click', openBulkModal);
    closeBulkModal.addEventListener('click', closeBulkModalFn);

    window.onclick = (event) => {
        if (event.target == manageStudentsModal) closeManageModalFn();
        if (event.target == bulkSelectModal) closeBulkModalFn();
        if (event.target == customDialogModal) closeDialog();
    };

    // --- Mode Switcher Logic ---
    const setMode = (mode) => {
        currentMode = mode;
        
        if (mode === 'students') {
            modeStudentsBtn.classList.add('active');
            modeStudentsBtn.style.background = 'var(--accent-color)';
            modeStudentsBtn.style.color = 'white';
            
            modeTeachersBtn.classList.remove('active');
            modeTeachersBtn.style.background = 'transparent';
            modeTeachersBtn.style.color = 'var(--text-secondary)';
            
            studentReasonsGrid.style.display = 'flex';
            teacherReasonsGrid.style.display = 'none';
            
            document.getElementById('classSectionGroup').style.display = 'grid';
            document.getElementById('newStudentClass').style.display = 'inline-block';
            document.getElementById('newStudentSection').style.display = 'inline-block';
            document.getElementById('bulkClassSectionGroup').style.display = 'grid';
            
            // update i18n keys
            document.getElementById('lblStudentName').setAttribute('data-i18n', 'lbl_student_name');
            studentNameInput.setAttribute('data-i18n-ph', 'ph_student_name');
            document.getElementById('lblParentNumber').setAttribute('data-i18n', 'lbl_parent_number');
            parentNumberInput.setAttribute('data-i18n-ph', 'ph_parent_number');
            
            document.querySelector('.wa-name').setAttribute('data-i18n', 'wa_name');
            
            manageStudentsBtn.querySelector('span').setAttribute('data-i18n', 'btn_manage_students');
            document.querySelector('#manageStudentsModal h2').setAttribute('data-i18n', 'modal_manage_title');
            
            document.getElementById('tabAddSingle').setAttribute('data-i18n', 'tab_add_single');
            document.getElementById('tabAddBulk').setAttribute('data-i18n', 'tab_add_bulk');
            document.querySelector('h3[data-i18n^="title_saved_"]').setAttribute('data-i18n', 'title_saved_students');
            document.querySelector('.hint-text').setAttribute('data-i18n', 'hint_excel');
            
            document.getElementById('newStudentName').setAttribute('data-i18n-ph', 'ph_student_name');
            document.getElementById('newStudentNumber').setAttribute('data-i18n-ph', 'ph_parent_number');
            
            const thClass = document.querySelector('[data-i18n="th_class"]');
            if(thClass) thClass.style.display = '';
            const thSection = document.querySelector('[data-i18n="th_section"]');
            if(thSection) thSection.style.display = '';

            const checkedStudentReason = document.querySelector('input[name="reason"]:checked');
            if (checkedStudentReason) {
                selectedReasonDisplay.innerHTML = checkedStudentReason.nextElementSibling.innerHTML;
            }
        } else {
            modeTeachersBtn.classList.add('active');
            modeTeachersBtn.style.background = 'var(--accent-color)';
            modeTeachersBtn.style.color = 'white';
            
            modeStudentsBtn.classList.remove('active');
            modeStudentsBtn.style.background = 'transparent';
            modeStudentsBtn.style.color = 'var(--text-secondary)';
            
            studentReasonsGrid.style.display = 'none';
            teacherReasonsGrid.style.display = 'flex';
            
            document.getElementById('classSectionGroup').style.display = 'none';
            document.getElementById('newStudentClass').style.display = 'none';
            document.getElementById('newStudentSection').style.display = 'none';
            document.getElementById('bulkClassSectionGroup').style.display = 'none';
            
            // update i18n keys
            document.getElementById('lblStudentName').setAttribute('data-i18n', 'lbl_teacher_name');
            studentNameInput.setAttribute('data-i18n-ph', 'ph_teacher_name');
            document.getElementById('lblParentNumber').setAttribute('data-i18n', 'lbl_teacher_number');
            parentNumberInput.setAttribute('data-i18n-ph', 'ph_teacher_number');
            
            document.querySelector('.wa-name').setAttribute('data-i18n', 'wa_teacher_name');
            
            manageStudentsBtn.querySelector('span').setAttribute('data-i18n', 'btn_manage_teachers');
            document.querySelector('#manageStudentsModal h2').setAttribute('data-i18n', 'modal_manage_teachers_title');
            
            document.getElementById('tabAddSingle').setAttribute('data-i18n', 'tab_add_single_teacher');
            document.getElementById('tabAddBulk').setAttribute('data-i18n', 'tab_add_bulk_teacher');
            document.querySelector('h3[data-i18n^="title_saved_"]').setAttribute('data-i18n', 'title_saved_teachers');
            document.querySelector('.hint-text').setAttribute('data-i18n', 'hint_excel_teacher');
            document.querySelector('[data-i18n="th_class"]').style.display = 'none';
            document.querySelector('[data-i18n="th_section"]').style.display = 'none';
            
            document.getElementById('newStudentName').setAttribute('data-i18n-ph', 'ph_teacher_name');
            document.getElementById('newStudentNumber').setAttribute('data-i18n-ph', 'ph_teacher_number');
            
            const checkedTeacherReason = document.querySelector('input[name="teacher_reason"]:checked');
            if (checkedTeacherReason) {
                selectedReasonDisplay.innerHTML = checkedTeacherReason.nextElementSibling.innerHTML;
            }
        }
        
        applyTranslations();
        refreshDatalist();
        renderStudentsTable();
        
        // clear inputs when switching mode
        studentNameInput.value = '';
        studentClassInput.value = '';
        studentSectionInput.value = '';
        parentNumberInput.value = '';
        
        updatePreview();
    };

    modeStudentsBtn.addEventListener('click', () => setMode('students'));
    modeTeachersBtn.addEventListener('click', () => setMode('teachers'));

    // Start
    loadDatabase();
    applyTranslations();
    updatePreview();
});
