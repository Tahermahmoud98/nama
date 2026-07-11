const translations = {
    ar: {
        title: "منصة الإشعارات المدرسية",
        subtitle: "قم بتجهيز وإرسال رسائل واتساب لأولياء الأمور بسهولة",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> اسم الطالب",
        ph_student_name: "أدخل اسم الطالب الثلاثي",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> الصف",
        ph_student_class: "مثال: الأول المتوسط",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> الشعبة",
        ph_student_section: "مثال: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> رقم واتساب ولي الأمر",
        ph_parent_number: "مثال: +9647XXXXXXXXX",
        hint_parent_number: "يرجى إدخال الرقم مع رمز الدولة (مثل +964 للعراق)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> تاريخ الحضور",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> وقت الحضور",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> سبب الإشعار (اختر واحداً)",
        reason_absence: "كثرة الغياب",
        reason_badBehavior: "سلوك سيئ",
        reason_lowGrades: "درجات منخفضة",
        reason_goodBehavior: "سلوك جيد",
        reason_highGrades: "درجات عالية",
        reason_fight: "شجار بالمدرسة",
        reason_reward: "مكافأة / تكريم",
        reason_meeting: "دعوة لاجتماع",
        reason_late: "تأخر صباحي",
        reason_homework: "عدم أداء الواجب",
        reason_phone: "جلب الهاتف",
        reason_uniform: "مخالفة الزي",
        reason_cheating: "الغش في الامتحان",
        reason_vandalism: "تخريب الممتلكات",
        reason_truancy: "الهروب من المدرسة",
        reason_books: "عدم جلب الكتب",
        reason_bullying: "التنمر",
        reason_sleeping: "النوم في الفصل",
        reason_hygiene: "النظافة الشخصية",
        reason_profanity: "ألفاظ نابية",
        reason_smoking: "التدخين",
        reason_leave_early: "مغادرة مبكرة",
        reason_participation: "عدم المشاركة",
        reason_forbidden: "مواد ممنوعة",
        reason_health: "وعكة صحية",
        reason_trip: "رحلة مدرسية",
        reason_fees: "أقساط مدرسية",
        reason_parent_council: "مجلس الآباء",
        reason_exam_schedule: "جدول الامتحانات",
        reason_document_missing: "نواقص في المستمسكات",
        reason_excellent_project: "مشروع متميز",
        reason_activity: "مشاركة بنشاط مدرسي",
        reason_late_pickup: "التأخر في استلام الطالب",
        reason_bus_issue: "مشكلة في النقل",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> قسم الطلاب",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> تنبيه معلم",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> اسم المعلم",
        ph_teacher_name: "أدخل اسم المعلم الثلاثي",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> المادة الدراسية",
        ph_teacher_subject: "مثال: الرياضيات",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> رقم هاتف المعلم",
        ph_teacher_number: "مثال: +9647XXXXXXXXX",
        btn_manage_teachers: "إدارة المعلمين",
        modal_manage_teachers_title: "إدارة المعلمين",
        reason_t_absence: "غياب عن الدوام",
        reason_t_late: "تأخر عن الدوام",
        reason_t_meeting: "دعوة لاجتماع إدارة",
        reason_t_duty: "تذكير بالمناوبة",
        reason_t_thanks: "شكر وتقدير",
        reason_t_violation: "مخالفة تعليمات",
        reason_t_grades: "تسليم الدرجات",
        reason_t_notice: "تبليغ هام",
        reason_t_exam_questions: "تسليم أسئلة الامتحانات",
        reason_t_lesson_plan: "الخطة اليومية/السنوية",
        reason_t_class_management: "إدارة الصف",
        reason_t_parent_meeting: "لقاء مع أولياء الأمور",
        reason_t_training: "دورة تدريبية/تطويرية",
        reason_t_activity_supervision: "الإشراف على نشاط",
        reason_t_student_issue: "مشكلة تخص طالب",
        reason_t_excellent_performance: "أداء متميز في التدريس",
        reason_t_leave_early: "مغادرة مبكرة",
        reason_t_schedule_change: "تغيير في جدول الدروس",
        reason_t_supplies: "نقص في المستلزمات",
        reason_t_technology: "استخدام الوسائل التعليمية",
        reason_t_cooperation: "تعاون مع الزملاء",
        reason_t_committee: "اجتماع لجنة",
        reason_t_celebration: "احتفالية مدرسية",
        reason_t_vacation_approval: "الموافقة على الإجازة",
        reason_t_vacation_rejection: "رفض الإجازة",
        reason_t_evaluation: "تقييم الأداء",
        reason_t_warning: "توجيه لفت نظر",
        reason_t_emergency: "حالة طارئة",

        // --- Modals & Buttons ---
        btn_manage_students: "إدارة الطلاب",
        btn_bulk_select: "تحديد متعدد",
        modal_manage_title: "إدارة الطلاب",
        tab_add_single: "إضافة طالب واحد",
        tab_add_bulk: "إضافة مجموعة (إكسل)",
        tab_add_single_teacher: "إضافة معلم واحد",
        tab_add_bulk_teacher: "إضافة مجموعة (إكسل)",
        title_saved_teachers: "المعلمون المحفوظون:",
        hint_excel_teacher: "قم بنسخ بيانات المعلمين من إكسل ولصقها هنا. (الاسم، الرقم)",
        btn_save: "حفظ",
        hint_excel: "قم بنسخ بيانات الطلاب من إكسل ولصقها هنا. الترتيب: (الاسم، الصف، الشعبة، الرقم)",
        btn_save_bulk: "حفظ المجموعة",
        title_saved_students: "الطلاب المحفوظون:",
        th_name: "الاسم",
        th_class: "الصف",
        th_section: "الشعبة",
        th_number: "الرقم",
        th_action: "إجراء",
        modal_bulk_title: "تحديد مجموعة طلاب",
        modal_reason_title: "اختر السبب",
        ph_search: "ابحث عن طالب...",
        btn_confirm: "تأكيد",
        modal_queue_title: "جاري الإرسال الجماعي",
        btn_delete_all: "مسح الكل",
        btn_delete_selected: "حذف المحدد",
        msg_confirm_delete_all: "هل أنت متأكد من مسح جميع الطلاب؟",
        msg_confirm_delete_selected: "هل أنت متأكد من حذف {count} طلاب؟",
        msg_confirm_delete_single: "هل أنت متأكد من حذف هذا الطالب؟",

        preview_title: "<i class='fa-regular fa-eye'></i> معاينة الرسالة",
        wa_name: "ولي الأمر",
        wa_teacher_name: "المعلم",
        wa_status: "متصل الآن",
        preview_placeholder: "الرجاء إدخال بيانات الطالب لرؤية المعاينة هنا...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> إرسال عبر واتساب"
    },
    ku: {
        title: "پلاتفۆرما ئاگەهداریێن قوتابخانێ",
        subtitle: "ب ساهی نامەیێن واتسئاپێ بۆ سمیانێن قوتابیان بەرهەڤ بکە و فرێبکە",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> ناڤێ قوتابی",
        ph_student_name: "ناڤێ قوتابی یێ سێقۆڵی بنڤیسە",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> پۆل",
        ph_student_class: "نموونە: حەفتێ بنەڕەتی",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> هۆبە",
        ph_student_section: "نموونە: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> ژمارا واتسئاپا سمیانی",
        ph_parent_number: "نموونە: +9647XXXXXXXXX",
        hint_parent_number: "هیڤییە ژمارێ دگەل کۆدێ وەلاتی بنڤیسە (وەک +964 بۆ عێراقێ)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> رێکەفتا سەرەدانێ",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> دەمێ سەرەدانێ",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> ئەگەرێ ئاگەهداریێ (ئێکێ هەلبژێرە)",
        reason_absence: "گەلەک نەهاتن",
        reason_badBehavior: "رەفتارا خراب",
        reason_lowGrades: "نمرەیێن نزم",
        reason_goodBehavior: "رەفتارا باش",
        reason_highGrades: "نمرێن بلند",
        reason_fight: "شەڕ ل قوتابخانێ",
        reason_reward: "پاداشت / رێزلێنان",
        reason_meeting: "بانگهێشتنا جڤینێ",
        reason_late: "درەنگ هاتن",
        reason_homework: "نەکرنا ئەرکێن مال",
        reason_phone: "ئینانا مۆبایلێ",
        reason_uniform: "نەپێگیری ب جلوبەرگان",
        reason_cheating: "فێلبازیکرن",
        reason_vandalism: "تێکدانا کەلوپەلان",
        reason_truancy: "رەڤین ژ قوتابخانێ",
        reason_books: "نەئینانا پەرتووکان",
        reason_bullying: "بێزارکرن",
        reason_sleeping: "خەوتن ل پۆلێ",
        reason_hygiene: "نەپاقژی",
        reason_profanity: "ئاخفتنێن نەجوان",
        reason_smoking: "جکەرەکێشان",
        reason_leave_early: "دەرکەفتن بەری دووماهی هاتنێ",
        reason_participation: "نەپشکداریکرن",
        reason_forbidden: "تشتێن قەدەغەکری",
        reason_health: "نەخۆشی",
        reason_trip: "گەشتا زانستی",
        reason_fees: "پارەیێ قوتابخانێ",
        reason_parent_council: "جڤاتا سمیانان",
        reason_exam_schedule: "خشتەیێ ئەزموونان",
        reason_document_missing: "کێماسی د بەلگەنامەیان دا",
        reason_excellent_project: "پرۆژەیێ نایاب",
        reason_activity: "پشکداریکرن د چالاکیەکێ دا",
        reason_late_pickup: "درەنگ وەرگرتنا قوتابی",
        reason_bus_issue: "کێشە د ڤەگوهاستنێ دا",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> بەشێ قوتابیان",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> ئاگەهداریا مامۆستای",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> ناڤێ مامۆستای",
        ph_teacher_name: "ناڤێ مامۆستای یێ سێقۆڵی بنڤیسە",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> بابەتێ وانەیێ",
        ph_teacher_subject: "نموونە: بیرکاری",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> ژمارا تەلەفۆنا مامۆستای",
        ph_teacher_number: "نموونە: +9647XXXXXXXXX",
        btn_manage_teachers: "رێڤەبرنا مامۆستایان",
        modal_manage_teachers_title: "رێڤەبرنا مامۆستایان",
        reason_t_absence: "ئامادەنەبوون",
        reason_t_late: "درەنگ کەفتن",
        reason_t_meeting: "بانگهێشتنا جڤینێ",
        reason_t_duty: "ئەرکێ چاڤدێریێ",
        reason_t_thanks: "سوپاس و پێزانین",
        reason_t_violation: "پێشێلکرنا رێنمایان",
        reason_t_grades: "رادەستکرنا نمرەیان",
        reason_t_notice: "ئاگەهداری پێدڤی",
        reason_t_exam_questions: "رادەستکرنا پرسیارێن ئەزموونان",
        reason_t_lesson_plan: "پلانا وانەیێ",
        reason_t_class_management: "رێڤەبرنا پۆلێ",
        reason_t_parent_meeting: "دیدار دگەل سمیانان",
        reason_t_training: "خولا راهێنانێ",
        reason_t_activity_supervision: "سەرپەرشتیا چالاکیەکێ",
        reason_t_student_issue: "کێشەیا قوتابیەکێ",
        reason_t_excellent_performance: "ئاستێ نایاب د وانەگوتنێ دا",
        reason_t_leave_early: "دەرکەفتنا زوو",
        reason_t_schedule_change: "گوهۆڕین د خشتەیێ وانەیان دا",
        reason_t_supplies: "کێماسی د پێداویستیان دا",
        reason_t_technology: "بکارئینانا ئامرازێن فێرکرنێ",
        reason_t_cooperation: "هەڤکاری دگەل هەڤکاران",
        reason_t_committee: "جڤینا کۆمیتەیێ",
        reason_t_celebration: "ئاهەنگا قوتابخانێ",
        reason_t_vacation_approval: "پەسەندکرنا دەستویریێ",
        reason_t_vacation_rejection: "رەتکرنا دەستویریێ",
        reason_t_evaluation: "هەلسەنگاندنا ئاستی",
        reason_t_warning: "تێبینی و هۆشداری",
        reason_t_emergency: "رەوشا ژنیشکێڤە",

        // --- Modals & Buttons ---
        btn_manage_students: "رێڤەبرنا قوتابیان",
        btn_bulk_select: "دیارکرنا کۆمەڵ",
        modal_manage_title: "رێڤەبرنا قوتابیان",
        tab_add_single: "زێدەکرنا ئێک قوتابی",
        tab_add_bulk: "زێدەکرنا ب کۆمەل (Excel)",
        tab_add_single_teacher: "زێدەکرنا ئێک مامۆستا",
        tab_add_bulk_teacher: "زێدەکرنا ب کۆمەل (Excel)",
        title_saved_teachers: "مامۆستایێن پاشەکەوتکری:",
        hint_excel_teacher: "پێزانینێن مامۆستایان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، ژمارە)",
        btn_save: "پاشەکەوتکرن",
        hint_excel: "پێزانینێن قوتابیان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، پۆل، هۆبە، ژمارە)",
        btn_save_bulk: "پاشەکەوتکرنا کۆمەڵێ",
        title_saved_students: "قوتابیێن پاشەکەوتکری:",
        th_name: "ناڤ",
        th_class: "پۆل",
        th_section: "هۆبە",
        th_number: "ژمارە",
        th_action: "کردار",
        modal_bulk_title: "دیارکرنا کۆمەلا قوتابیان",
        modal_reason_title: "ئەگەرێ ئاگەهداریێ هەلبژێرە",
        ph_search: "ل قوتابی بگەڕە...",
        btn_confirm: "پەسەندکرن",
        modal_queue_title: "فرێکرنا ب کۆمەل",
        btn_delete_all: "سڕینا هەمیان",
        btn_delete_selected: "سڕینا یێن دیارکری",
        msg_confirm_delete_all: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت هەمی قوتابیان بسڕی؟",
        msg_confirm_delete_selected: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤان {count} قوتابیان بسڕی؟",
        msg_confirm_delete_single: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤی قوتابی بسڕی؟",

        preview_title: "<i class='fa-regular fa-eye'></i> دیتنا نامەیێ",
        wa_name: "سمیانێ قوتابی",
        wa_teacher_name: "مامۆستا",
        wa_status: "ئۆنلاینە",
        preview_placeholder: "هیڤییە پێزانینێن قوتابی بنڤیسە دا نامەیێ ل ڤێرێ ببینی...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> فرێکرن ب واتسئاپێ"
    },
    en: {
        title: "School Notification Platform",
        subtitle: "Easily prepare and send WhatsApp messages to parents",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> Student Name",
        ph_student_name: "Enter full student name",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> Grade",
        ph_student_class: "e.g.: 7th Grade",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> Section",
        ph_student_section: "e.g.: A",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> Parent's WhatsApp Number",
        ph_parent_number: "e.g.: +9647XXXXXXXXX",
        hint_parent_number: "Please enter the number with the country code (e.g. +964 for Iraq)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> Visit Date",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> Visit Time",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> Reason for Notification",
        reason_absence: "Frequent Absences",
        reason_badBehavior: "Bad Behavior",
        reason_lowGrades: "Low Grades",
        reason_goodBehavior: "Good Behavior",
        reason_highGrades: "High Grades",
        reason_fight: "School Fight",
        reason_reward: "Reward / Recognition",
        reason_meeting: "Meeting Invitation",
        reason_late: "Morning Tardiness",
        reason_homework: "Missing Homework",
        reason_phone: "Bringing Phone",
        reason_uniform: "Uniform Violation",
        reason_cheating: "Cheating on Exams",
        reason_vandalism: "Vandalism",
        reason_truancy: "Skipping School",
        reason_books: "Missing Textbooks",
        reason_bullying: "Bullying",
        reason_sleeping: "Sleeping in Class",
        reason_hygiene: "Poor Hygiene",
        reason_profanity: "Using Profanity",
        reason_smoking: "Smoking",
        reason_leave_early: "Leaving Early",
        reason_participation: "No Participation",
        reason_forbidden: "Forbidden Items",
        reason_health: "Health Issue",
        reason_trip: "School Trip",
        reason_fees: "School Fees",
        reason_parent_council: "Parents Council",
        reason_exam_schedule: "Exam Schedule",
        reason_document_missing: "Missing Documents",
        reason_excellent_project: "Excellent Project",
        reason_activity: "School Activity Participation",
        reason_late_pickup: "Late Pickup",
        reason_bus_issue: "Transportation Issue",
        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> Students Mode",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> Teacher Warning",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> Teacher Name",
        ph_teacher_name: "Enter full teacher name",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> Subject",
        ph_teacher_subject: "e.g., Mathematics",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> Teacher Phone Number",
        ph_teacher_number: "e.g., +9647XXXXXXXXX",
        btn_manage_teachers: "Manage Teachers",
        modal_manage_teachers_title: "Manage Teachers",
        reason_t_absence: "Absence",
        reason_t_late: "Late Arrival",
        reason_t_meeting: "Meeting Invitation",
        reason_t_duty: "Duty Reminder",
        reason_t_thanks: "Thanks & Appreciation",
        reason_t_violation: "Instruction Violation",
        reason_t_grades: "Grades Submission",
        reason_t_notice: "Important Notice",
        reason_t_exam_questions: "Exam Questions",
        reason_t_lesson_plan: "Lesson Plan",
        reason_t_class_management: "Class Management",
        reason_t_parent_meeting: "Parent Meeting",
        reason_t_training: "Training Course",
        reason_t_activity_supervision: "Activity Supervision",
        reason_t_student_issue: "Student Issue",
        reason_t_excellent_performance: "Excellent Performance",
        reason_t_leave_early: "Early Leave",
        reason_t_schedule_change: "Schedule Change",
        reason_t_supplies: "Supplies Shortage",
        reason_t_technology: "Use of Technology",
        reason_t_cooperation: "Peer Cooperation",
        reason_t_committee: "Committee Meeting",
        reason_t_celebration: "School Celebration",
        reason_t_vacation_approval: "Vacation Approval",
        reason_t_vacation_rejection: "Vacation Rejection",
        reason_t_evaluation: "Performance Evaluation",
        reason_t_warning: "Warning Notice",
        reason_t_emergency: "Emergency",

        // --- Modals & Buttons ---
        btn_manage_students: "Manage Students",
        btn_bulk_select: "Bulk Select",
        modal_manage_title: "Manage Students",
        tab_add_single: "Add Single Student",
        tab_add_bulk: "Bulk Add (Excel)",
        tab_add_single_teacher: "Add Single Teacher",
        tab_add_bulk_teacher: "Bulk Add (Excel)",
        title_saved_teachers: "Saved Teachers:",
        hint_excel_teacher: "Copy teacher data from Excel and paste here. (Name, Number)",
        btn_save: "Save",
        hint_excel: "Copy student data from Excel and paste here. (Name, Class, Section, Number)",
        btn_save_bulk: "Save Bulk",
        title_saved_students: "Saved Students:",
        th_name: "Name",
        th_class: "Class",
        th_section: "Section",
        th_number: "Number",
        th_action: "Action",
        modal_bulk_title: "Select Multiple Students",
        modal_reason_title: "Select Reason",
        ph_search: "Search for a student...",
        btn_confirm: "Confirm",
        modal_queue_title: "Sending Bulk Messages",
        btn_delete_all: "Delete All",
        btn_delete_selected: "Delete Selected",
        msg_confirm_delete_all: "Are you sure you want to delete all students?",
        msg_confirm_delete_selected: "Are you sure you want to delete {count} students?",
        msg_confirm_delete_single: "Are you sure you want to delete this student?",

        preview_title: "<i class='fa-regular fa-eye'></i> Message Preview",
        wa_name: "Parent",
        wa_status: "online",
        preview_placeholder: "Please enter student details to see the preview here...",
        btn_send: "<i class='fa-brands fa-whatsapp'></i> Send via WhatsApp"
    }
};

const getLocalizedMessageTemplate = (lang, reason, studentName, studentClass, studentSection, date, time) => {
    const isKu = lang === 'ku';
    const isEn = lang === 'en';
    const isTeacher = reason && reason.startsWith('t_');
    
    const tFormattedDate = date ? date : (isKu ? "[رێکەفت]" : (isEn ? "[Date]" : "[التاريخ]"));
    const tFormattedTime = time ? time : (isKu ? "[دەم]" : (isEn ? "[Time]" : "[الوقت]"));
    
    if (isTeacher) {
        let tName = studentName.trim() ? `*${studentName.trim()}*` : (isKu ? "[ناڤێ مامۆستای]" : (isEn ? "[Teacher Name]" : "[اسم المعلم]"));
        let tSubject = studentClass.trim() ? studentClass.trim() : (isKu ? "[بابەت]" : (isEn ? "[Subject]" : "[المادة]"));
        let msg = "";
        
        if (isKu) {
            msg = `سلاڤ،\nکارگێڕیا قوتابخانێ حەز دکەت ب رێیا ڤێ نامەیێ پەیوەندیێ ب هەوە بکەت.\n`;
            msg += `ئەم حەز دکەین ڤی بابەتی دگەل مامۆستا: ${tName} گەنگەشە بکەین.\n`;
            msg += `بابەتێ وانەیێ: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *بابەت: ئاگەهداریا نەهاتنێ*\nمە تێبینی کریە کو هوین نەهاتینە سەر کاری. هیڤیدارین ئەگەرێ نەهاتنێ دیار بکەن و پەیوەندیێ ب کارگێڕیێ بکەن.`; break;
                case 't_late': msg += `📌 *بابەت: درەنگ کەفتن*\nتێبینی هاتیە کرن کو هوین درەنگ هاتینە سەر کاری. پابەندبوون ب دەمی گەلەک گرنگە، هیڤیدارین سەرەدانا کارگێڕیێ بکەن.`; break;
                case 't_meeting': msg += `🤝 *بابەت: بانگهێشتنا جڤینێ*\nکارگێڕیا قوتابخانێ هەوە بانگهێشت دکەت بۆ جڤینەکا کارگێڕی ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}. ئامادەبوونا هەوە پێدڤیە.`; break;
                case 't_duty': msg += `📋 *بابەت: ئەرکێ چاڤدێریێ*\nئەم دڤێت هەوە بیربینین ب ئەرکێ هەوە یێ چاڤدێریێ. هیڤیدارین ب باشترین شێوە کارێ خۆ ئەنجام بدەن.`; break;
                case 't_thanks': msg += `🌟 *بابەت: سوپاس و پێزانین*\nکارگێڕیا قوتابخانێ سوپاسیا هەوە دکەت بۆ بزاڤ و ماندووبوونا هەوە دگەل قوتابیان دا. ئەم شانازیێ ب هەوە دکەین.`; break;
                case 't_violation': msg += `⚠️ *بابەت: پێشێلکرنا رێنمایان*\nتێبینی هاتیە کرن کو پێشێلکاریەک د رێنمایێن قوتابخانێ دا هاتیە کرن. هیڤیدارین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *بابەت: رادەستکرنا نمرەیان*\nئەم داخوازێ ژ هەوە دکەین کو بلەز نمرەیێن قوتابیان رادەست بکەن، ژبەر کو دەمێ دیارکری خەریکە ب دوماهی دهێت.`; break;
                case 't_notice': msg += `🔔 *بابەت: ئاگەهداریەکا گرنگ*\nهیڤیدارین پەیوەندیێ ب کارگێڕیێ بکەن ژبەر بابەتەکێ گرنگ یێ پەروەردەیی.`; break;
                case 't_exam_questions': msg += `📝 *بابەت: رادەستکرنا پرسیارێن ئەزموونان*\nهیڤیدارین بلەز پرسیارێن ئەزموونان رادەست بکەن بەریا دەمێ دیارکری ب دوماهی بهێت.`; break;
                case 't_lesson_plan': msg += `📖 *بابەت: پلانا وانەیێ*\nهیڤیدارین پلانا وانەیێ (رۆژانە/سالانە) بۆ رێڤەبەریێ بهێتە رادەستکرن.`; break;
                case 't_class_management': msg += `🗣️ *بابەت: رێڤەبرنا پۆلێ*\nتێبینی لسەر کۆنترۆلکرنا پۆلێ هەنە. هیڤیدارین رێکارێن پێدڤی بگرنە بەر بۆ رێڤەبرنەکا باشتر.`; break;
                case 't_parent_meeting': msg += `🤝 *بابەت: دیدار دگەل سمیانان*\nهیڤیدارین ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} ئامادەبن بۆ دیدارەکێ دگەل سمیانێ قوتابی.`; break;
                case 't_training': msg += `🎓 *بابەت: خولا راهێنانێ*\nهوین یێن هاتینە دەستنیشانکرن بۆ پشکداریکرن د خولەکا راهێنانێ دا. هیڤیدارین ئامادەبوونا هەوە ل جهـ و دەمێ دیارکری بیت.`; break;
                case 't_activity_supervision': msg += `🎭 *بابەت: سەرپەرشتیا چالاکیەکێ*\nکارگێڕیا قوتابخانێ ئەڤ چالاکیە ب هەوە سپارتیە. هیڤیدارین ب باشترین شێوە سەرپەرشتیا وێ بکەن.`; break;
                case 't_student_issue': msg += `⚠️ *بابەت: کێشەیا قوتابیەکێ*\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ گەنگەشەکرنا کێشەیەکا تایبەت ب قوتابیەکێ هەوە ڤە.`; break;
                case 't_excellent_performance': msg += `🌟 *بابەت: ئاستێ نایاب د وانەگوتنێ دا*\nسوپاس بۆ خەمخۆری و ئاستێ هەوە یێ نایاب د گۆتنا وانەیان دا. ماندووبوونا هەوە جهێ رێزێیە.`; break;
                case 't_leave_early': msg += `🚪 *بابەت: دەرکەفتنا زوو*\nتێبینی هاتیە کرن کو هوین بەری دەمێ دیارکری دەرکەفتینە. پابەندبوون ب دەمی گەلەک گرنگە.`; break;
                case 't_schedule_change': msg += `📅 *بابەت: گوهۆڕین د خشتەیێ وانەیان دا*\nئەم دڤێت هەوە ئاگەهدار بکەین کو گوهۆڕینەک د خشتەیێ وانەیێن هەوە دا هاتیە کرن. هیڤیدارین خشتەیێ نوی وەرگرن.`; break;
                case 't_supplies': msg += `📦 *بابەت: کێماسی د پێداویستیان دا*\nداخوازیا هەوە بۆ پێداویستیان گەهشتیە مە و ئەم دێ ب زووترین دەم چارەسەر کەین.`; break;
                case 't_technology': msg += `💻 *بابەت: بکارئینانا ئامرازێن فێرکرنێ*\nهیڤیدارین پتر مفا ژ ئامرازێن فێرکرنێ (وەک تاقیگەهـ یان شاشە) بهێتە وەرگرتن بۆ باشترکرنا پرۆسێسا فێربوونێ.`; break;
                case 't_cooperation': msg += `🤝 *بابەت: هەڤکاری دگەل هەڤکاران*\nرێڤەبەری سوپاسیا گیانێ هەڤکاریێ یێ هەوە دگەل مامۆستایێن دی دکەت. ئەڤە دبيتە ئەگەرێ سەرکەفتنا کارێ مە هەمییان.`; break;
                case 't_committee': msg += `👥 *بابەت: جڤینا کۆمیتەیێ*\nهوین وەک ئەندامێ کۆمیتەیێ دهێنە بانگهێشتکرن بۆ جڤینەکێ ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *بابەت: ئاهەنگا قوتابخانێ*\nئەم داخوازێ ژ هەوە دکەین کو پشکداریێ د ئامادەکاریێن ئاهەنگا قوتابخانێ دا بکەن.`; break;
                case 't_vacation_approval': msg += `✅ *بابەت: پەسەندکرنا دەستویریێ*\nئەم دڤێت هەوە ئاگەهدار بکەین کو داخوازیا هەوە بۆ دەستویریێ هاتیە پەسەندکرن.`; break;
                case 't_vacation_rejection': msg += `❌ *بابەت: رەتکرنا دەستویریێ*\nب مخابنیڤە، ژبەر پێدڤیا کاری ل ڤی دەمی، داخوازیا هەوە بۆ مۆلەتێ نەهاتیە پەسەندکرن.`; break;
                case 't_evaluation': msg += `📊 *بابەت: هەلسەنگاندنا ئاستی*\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ دیتن و گەنگەشەکرنا ئەنجامێن هەلسەنگاندنا ئاستێ هەوە یێ سالانە.`; break;
                case 't_warning': msg += `⚠️ *بابەت: تێبینی و هۆشداری*\nئەڤە وەک تێبینیەکا کارگێڕیێ یە لسەر بابەتەکێ تایبەت ب کاری ڤە. هیڤیدارین دووبارە نەبیت.`; break;
                case 't_emergency': msg += `🚨 *بابەت: رەوشا ژنیشکێڤە*\nهیڤیدارین ب زووترین دەم پەیوەندیێ ب کارگێڕیێ بکەن ژبەر رەوشەکا ژنیشکێڤە و گرنگ.`; break;
            }
        } else if (isEn) {
            msg = `Greetings,\nThe school administration would like to communicate with you.\n`;
            msg += `This message is regarding Teacher: ${tName}\n`;
            msg += `Subject: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *Subject: Absence Notice*\nWe noticed your absence. Please provide the reason and contact the administration.`; break;
                case 't_late': msg += `📌 *Subject: Late Arrival*\nWe noticed a late arrival. Punctuality is important, please visit the administration.`; break;
                case 't_meeting': msg += `🤝 *Subject: Meeting Invitation*\nYou are invited to a management meeting on ${tFormattedDate} at ${tFormattedTime}. Your attendance is required.`; break;
                case 't_duty': msg += `📋 *Subject: Duty Reminder*\nThis is a reminder regarding your supervision duty.`; break;
                case 't_thanks': msg += `🌟 *Subject: Thanks & Appreciation*\nThe administration appreciates your efforts and hard work.`; break;
                case 't_violation': msg += `⚠️ *Subject: Instruction Violation*\nA violation of school instructions has been recorded. Please visit the administration on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *Subject: Grades Submission*\nPlease submit the students' grades as the deadline is approaching.`; break;
                case 't_notice': msg += `🔔 *Subject: Important Notice*\nPlease contact the administration regarding an important educational matter.`; break;
                case 't_exam_questions': msg += `📝 *Subject: Exam Questions*\nPlease submit the exam questions before the deadline.`; break;
                case 't_lesson_plan': msg += `📖 *Subject: Lesson Plan*\nPlease submit your lesson plan to the administration.`; break;
                case 't_class_management': msg += `🗣️ *Subject: Class Management*\nWe have some notes regarding class management. Please review the required procedures.`; break;
                case 't_parent_meeting': msg += `🤝 *Subject: Parent Meeting*\nPlease attend a meeting with a parent on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_training': msg += `🎓 *Subject: Training Course*\nYou have been nominated for a training course. Please attend at the specified time and place.`; break;
                case 't_activity_supervision': msg += `🎭 *Subject: Activity Supervision*\nThe administration has assigned you to supervise a school activity.`; break;
                case 't_student_issue': msg += `⚠️ *Subject: Student Issue*\nPlease visit the administration to discuss an issue related to one of your students.`; break;
                case 't_excellent_performance': msg += `🌟 *Subject: Excellent Performance*\nThank you for your excellent performance and dedication to teaching.`; break;
                case 't_leave_early': msg += `🚪 *Subject: Early Leave*\nWe noticed you left before the official working hours ended.`; break;
                case 't_schedule_change': msg += `📅 *Subject: Schedule Change*\nPlease be informed that there is a change in your lesson schedule.`; break;
                case 't_supplies': msg += `📦 *Subject: Supplies Shortage*\nWe received your request for supplies and will address it soon.`; break;
                case 't_technology': msg += `💻 *Subject: Use of Technology*\nPlease make better use of educational tools (like labs or smart screens) to improve the learning process.`; break;
                case 't_cooperation': msg += `🤝 *Subject: Peer Cooperation*\nThe administration appreciates your cooperative spirit with other teachers.`; break;
                case 't_committee': msg += `👥 *Subject: Committee Meeting*\nYou are invited to a committee meeting on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *Subject: School Celebration*\nWe request your participation in the preparations for the school celebration.`; break;
                case 't_vacation_approval': msg += `✅ *Subject: Vacation Approval*\nWe would like to inform you that your vacation request has been approved.`; break;
                case 't_vacation_rejection': msg += `❌ *Subject: Vacation Rejection*\nUnfortunately, due to work requirements, your vacation request has not been approved.`; break;
                case 't_evaluation': msg += `📊 *Subject: Performance Evaluation*\nPlease visit the administration to discuss your annual performance evaluation.`; break;
                case 't_warning': msg += `⚠️ *Subject: Warning*\nThis is an administrative warning regarding a specific matter. Please ensure it does not happen again.`; break;
                case 't_emergency': msg += `🚨 *Subject: Emergency*\nPlease contact the administration immediately regarding an urgent matter.`; break;
            }
        } else {
            msg = `تحية طيبة،\nتود إدارة المدرسة التواصل معكم من خلال هذه الرسالة.\n`;
            msg += `نود إعلامكم بخصوص الأستاذ/ة: ${tName}\n`;
            msg += `المادة الدراسية: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *الموضوع: غياب عن الدوام*\nلقد تم تسجيل غيابكم عن الدوام. نرجو توضيح سبب الغياب ومراجعة الإدارة.`; break;
                case 't_late': msg += `📌 *الموضوع: تأخر عن الدوام*\nلوحظ تأخركم عن الحضور في الوقت المحدد. الالتزام بالوقت مهم جداً، نرجو مراجعة الإدارة.`; break;
                case 't_meeting': msg += `🤝 *الموضوع: دعوة لاجتماع إدارة*\nتدعوكم إدارة المدرسة لحضور اجتماع إداري بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}. حضوركم ضروري.`; break;
                case 't_duty': msg += `📋 *الموضوع: تذكير بالمناوبة*\nنود تذكيركم بموعد مناوبتكم. نرجو الالتزام والقيام بالمهام الموكلة إليكم.`; break;
                case 't_thanks': msg += `🌟 *الموضوع: شكر وتقدير*\nتتقدم إدارة المدرسة بخالص الشكر والتقدير لجهودكم المبذولة وتفانيكم في العمل.`; break;
                case 't_violation': msg += `⚠️ *الموضوع: مخالفة تعليمات*\nتم رصد مخالفة للتعليمات المدرسية. نرجو مراجعة الإدارة بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *الموضوع: تسليم الدرجات*\nنرجو منكم الإسراع في تسليم درجات الطلاب حيث اقترب الموعد النهائي المحدد لتسليمها.`; break;
                case 't_notice': msg += `🔔 *الموضوع: تبليغ هام*\nيرجى مراجعة الإدارة أو التواصل معنا بخصوص أمر هام وعاجل.`; break;
                case 't_exam_questions': msg += `📝 *الموضوع: تسليم أسئلة الامتحانات*\nنرجو الإسراع في تسليم أسئلة الامتحانات قبل الموعد النهائي.`; break;
                case 't_lesson_plan': msg += `📖 *الموضوع: الخطة اليومية/السنوية*\nيرجى تسليم الخطة الدراسية إلى الإدارة لغرض المتابعة.`; break;
                case 't_class_management': msg += `🗣️ *الموضوع: إدارة الصف*\nلدينا بعض الملاحظات حول السيطرة على الطلاب وإدارة الصف. نرجو اتخاذ الإجراءات اللازمة.`; break;
                case 't_parent_meeting': msg += `🤝 *الموضوع: لقاء مع أولياء الأمور*\nنرجو حضوركم بتاريخ ${tFormattedDate} الساعة ${tFormattedTime} للقاء مع ولي أمر أحد الطلاب.`; break;
                case 't_training': msg += `🎓 *الموضوع: دورة تدريبية/تطويرية*\nلقد تم ترشيحكم لحضور دورة تطويرية. نرجو الالتزام بالحضور في الزمان والمكان المحددين.`; break;
                case 't_activity_supervision': msg += `🎭 *الموضوع: الإشراف على نشاط*\nتم تكليفكم بالإشراف على نشاط مدرسي. نأمل منكم المتابعة بأفضل صورة.`; break;
                case 't_student_issue': msg += `⚠️ *الموضوع: مشكلة تخص طالب*\nيرجى مراجعة الإدارة لمناقشة أمر يخص أحد طلابكم.`; break;
                case 't_excellent_performance': msg += `🌟 *الموضوع: أداء متميز في التدريس*\nتتقدم الإدارة بالشكر الجزيل لأدائكم المتميز وحرصكم العالي في إيصال المادة العلمية.`; break;
                case 't_leave_early': msg += `🚪 *الموضوع: مغادرة مبكرة*\nلوحظ خروجكم من المدرسة قبل انتهاء وقت الدوام الرسمي. الالتزام بالوقت ضروري جداً.`; break;
                case 't_schedule_change': msg += `📅 *الموضوع: تغيير في جدول الدروس*\nنود إعلامكم بوجود تعديل على جدول حصصكم. يرجى استلام النسخة الجديدة.`; break;
                case 't_supplies': msg += `📦 *الموضوع: نقص في المستلزمات*\nلقد استلمنا طلبكم بخصوص النواقص وسنقوم بتوفيرها في أقرب وقت ممكن.`; break;
                case 't_technology': msg += `💻 *الموضوع: استخدام الوسائل التعليمية*\nنؤكد على ضرورة استخدام الوسائل التعليمية (كالمختبر والشاشة الذكية) لتعزيز فهم الطلاب.`; break;
                case 't_cooperation': msg += `🤝 *الموضوع: تعاون مع الزملاء*\nتثمن الإدارة عالياً روح التعاون التي تبدونها مع زملائكم المعلمين مما ينعكس إيجاباً على بيئة العمل.`; break;
                case 't_committee': msg += `👥 *الموضوع: اجتماع لجنة*\nبصفتكم عضواً في اللجنة، ندعوكم لحضور الاجتماع المقرر بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *الموضوع: احتفالية مدرسية*\nنرجو منكم المشاركة والمساهمة في التحضيرات الخاصة بالاحتفالية المدرسية القادمة.`; break;
                case 't_vacation_approval': msg += `✅ *الموضوع: الموافقة على الإجازة*\nنود إعلامكم بأنه تمت الموافقة على طلب الإجازة المقدم من قبلكم.`; break;
                case 't_vacation_rejection': msg += `❌ *الموضوع: رفض طلب الإجازة*\nنعتذر لعدم تمكننا من الموافقة على طلب الإجازة في الوقت الحالي نظراً لحاجة العمل.`; break;
                case 't_evaluation': msg += `📊 *الموضوع: تقييم الأداء*\nيرجى مراجعة الإدارة للاطلاع على نتائج التقييم السنوي لأدائكم ومناقشتها.`; break;
                case 't_warning': msg += `⚠️ *الموضوع: توجيه لفت نظر*\nهذا تنبيه إداري بخصوص ملاحظة معينة تخص عملكم. نأمل ألا يتكرر ذلك مستقبلاً.`; break;
                case 't_emergency': msg += `🚨 *الموضوع: حالة طارئة*\nيرجى مراجعة الإدارة فوراً لأمر عاجل وطارئ.`; break;
            }
        }
        if (isKu) {
            msg += `\n\nدگەل رێز و سڵاڤان،\n*کارگێڕیا قوتابخانێ*`;
        } else if (isEn) {
            msg += `\n\nWith our sincere regards and appreciation,\n*School Administration*`;
        } else {
            msg += `\n\nمع خالص تحياتنا،\n*إدارة المدرسة*`;
        }
        return msg;
    }

    let nameFallback = "[اسم الطالب الثلاثي]";
    let classFallback = "[الصف]";
    let sectionFallback = "[الشعبة]";
    let dateFallback = "[التاريخ]";
    let timeFallback = "[الوقت]";

    if (isKu) {
        nameFallback = "[ناڤێ قوتابی یێ سێقۆڵی]";
        classFallback = "[پۆل]";
        sectionFallback = "[هۆبە]";
        dateFallback = "[رێکەفت]";
        timeFallback = "[دەم]";
    } else if (isEn) {
        nameFallback = "[Student Name]";
        classFallback = "[Grade]";
        sectionFallback = "[Section]";
        dateFallback = "[Date]";
        timeFallback = "[Time]";
    }

    const name = studentName.trim() ? `*${studentName.trim()}*` : nameFallback;
    const sClass = studentClass.trim() ? studentClass.trim() : classFallback;
    const sSection = studentSection.trim() ? studentSection.trim() : sectionFallback;
    const formattedDate = date ? date : dateFallback;
    const formattedTime = time ? time : timeFallback;

    let msg = "";

    if (isKu) {
        msg = `سلاڤ و رێز،\nکارگێڕیا قوتابخانێ دڤێت پەیوەندیێ ب هەوە بکەت وەک هەڤپشکێن مە د رێکا پەروەردەیێ دا.\n`;
        msg += `دڤیا ئەم هەوە ئاگەهدار بکەین ل دۆر قوتابی: ${name}\n`;
        msg += `قۆناغا خواندنێ: پۆلا ${sClass} - هۆبا (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *بابەت: ئاگەهداریا نەهاتنێ*\nمە ژ تۆمارێن ئامادەبوونێ دیتیە کو قوتابیێ ناڤبری بێی ئەگەرەکێ باوەرپێکری یان نوژداری گەلەک نەهاتیە.\nژبەر گرنگیا پێگیریێ ب ئامادەبوونێ و کارتێکرنا وێ لسەر ئاستێ زانستی، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنا بابەتی.`;
                break;
            case 'badBehavior':
                msg += `📌 *بابەت: ئاگەهداریا رەفتارا خراب*\nرەفتارەکا نەگونجای ژ لایێ قوتابیێ ناڤبری ڤە هاتیە تۆمارکرن.\nئەم ل کارگێڕیا قوتابخانێ گرنگییەکا مەزن ددەینە سەر راستڤەکرنا رەفتارێن قوتابیان دگەل فێرکرنا وان.\nلەوما، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنا رێکارێن پەروەردەیی یێن پێدڤی.`;
                break;
            case 'lowGrades':
                msg += `📌 *بابەت: ئاگەهداریا نزمبوونا ئاستێ زانستی*\nب رێکا دووڤچوونا هەلسەنگاندنان، مە تێبینی کریە کو ئاستێ خواندنا قوتابی د ڤی دەمێ دووماهیێ دا داکەتیە.\nژبەر خەمخۆریا مە بۆ پاشەرۆژا قوتابی، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنێ ل دۆر باشترکرنا ئاستێ وی یێ زانستی.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *بابەت: دەستخۆشی ل سەر رەفتارا باش*\nگەلەک کەیفخۆشین ل کارگێڕیا قوتابخانێ کو شانازیێ ب قوتابیێ ناڤبری ببەین، ژبەر کو خودان رەفتارەکا باش و رەوشتەکێ بەرزە و پێگیرە ب رێسایێن قوتابخانێ.\nئەڤ پێگیرییە ب روونی پەروەردا هەوە یا باش ددەتە دیارکرن. سوپاس بۆ بزاڤێن هەوە و ئەم داخوازا سەرکەفتنێ بۆ قوتابی دکەین.`;
                break;
            case 'highGrades':
                msg += `🎓 *بابەت: پیرۆزباهی بۆ سەرکەفتنا زانستی*\nجوانترین پیرۆزباهیان ئاراستەی هەوە دکەین ب هەلکەفتا سەرکەفتنا زانستی و نمرەیێن بلند یێن کو قوتابیێ ناڤبری ب دەستڤە ئیناین.\nئەڤ پێشکەفتنە بەرهەمێ بزاڤ و شەونخوونیا وی یە، و بەرهەمێ پالپشتیا هەوە یە. کارگێڕیا قوتابخانێ گەلەک شانازیێ پێ دکەت و داخوازا سەرکەفتنێن پتر بۆ دکەین.`;
                break;
            case 'fight':
                msg += `⚠️ *بابەت: گازیکرن ب ئەگەرێ شەڕکرنێ*\nگەلەک ب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری تووشی شەڕی بوویە دگەل هەڤالێن خۆ ل ناڤ قوتابخانێ.\nل دویڤ رێنمایێن قوتابخانێ، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ زانینا ئەگەرێن ئاریشێ و گەنگەشەکرنا رێکارێن پێدڤی.`;
                break;
            case 'reward':
                msg += `🏆 *بابەت: ئاگەهداریا خەلاتکرنێ*\nب شانازی ڤە، ئەم گەلەک کەیفخۆشین کو هەوە ئاگەهدار بکەین ب بڕیارا خەلاتکرنا قوتابیێ ناڤبری وەک رێزگرتن ل بزاڤ، پێشکەفتن، و پشکداریا وی یا چالاک.\nئەم شانازیێ ب هەبوونا قوتابیێن ڤی ئاستی د قوتابخانا خۆ دا دکەین، و ئەم هیڤیدارین ئەڤ خەلاتە ببیتە هاندەرەک بۆ پێشکەفتنێن پتر.`;
                break;
            case 'meeting':
                msg += `🤝 *بابەت: داخوازیا کۆمبوونێ*\nژبەر بەرژەوەندیا قوتابیێ ناڤبری و پەیداکرنا باشترین ژینگەها هاریکار بۆ وی، هیڤیدارین سەرەدانا قوتابخانێ بکەن بۆ کۆمبوونەکا تایبەت ل دۆر چەند بابەتێن گرنگ یێن پەروەردەیی.\nدەمێ پێشنیارکری بۆ کۆمبوونێ: ${formattedDate} دەمژمێر ${formattedTime}.\nهیڤییە ئامادەبوونا خۆ پەسەند بکەن یان پەیوەندیێ ب مە بکەن بۆ دەستنیشانکرنا دەمەکێ دی یێ گونجای. سوپاس بۆ هەڤکاریا هەوە.`;
                break;
            case 'late':
                msg += `📌 *بابەت: ئاگەهداریا درەنگ هاتنێ*\nمە تێبینی کریە کو قوتابیێ ناڤبری چەندین جاران درەنگ هاتیە دەوامی بێی ئەگەرەکێ باوەرپێکری.\nژبەر گرنگیا ئامادەبوونا وانەیێ ژ دەستپێکێڤە، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ چارەسەرکرنا ڤێ کێشەیێ.`;
                break;
            case 'homework':
                msg += `📌 *بابەت: نەکرنا ئەرکێن مال*\nمە تێبینی کریە کو قوتابیێ ناڤبری د ڤی دەمێ دووماهیێ دا ئەرکێن خۆ یێن مال بجهـ نەئیناینە.\nپێگیریکرن ب ئەرکێن مال کاریگەریا راستەوخۆ لسەر ئاستێ زانستی یێ قوتابی هەیە، هیڤیدارین دووڤچوونێ بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'phone':
                msg += `⚠️ *بابەت: ئینانا مۆبایلێ بۆ قوتابخانێ*\nوەک هوین دزانن، ئینانا مۆبایلا زیرەک بۆ ناڤ قوتابخانێ قەدەغەیە د رێنمایێن پەروەردەیی دا.\nمە مۆبایلا قوتابیێ ناڤبری دەستەسەر کریە. هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ وەرگرتنا مۆبایلێ و گەنگەشەکرنا بابەتی.`;
                break;
            case 'uniform':
                msg += `📌 *بابەت: نەپێگیری ب جلوبەرگێن پێدڤی*\nقوتابیێ ناڤبری پێگیری ب جلوبەرگێن پێدڤی یێن قوتابخانێ نەکریە.\nپێگیریکرن ب یەکپۆشیێ بەشەکە ژ رێسایێن مە، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ دووڤچوونا بابەتی.`;
                break;
            case 'cheating':
                msg += `⚠️ *بابەت: ئاگەهداریا فێلبازیکرنێ*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری د دەمێ ئەنجامدانا ئەزموونێ دا فێلبازی کریە.\nئەڤ رەفتارە دژی رێنمایێن قوتابخانێ یە، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنا رێکارێن هاتیە وەرگرتن.`;
                break;
            case 'vandalism':
                msg += `⚠️ *بابەت: تێکدانا کەلوپەلێن قوتابخانێ*\nمە تێبینی کریە کو قوتابیێ ناڤبری هندەک ژ کەلوپەلێن قوتابخانێ تێکداینە.\nپاراستنا سامانێ گشتی ئەرکێ هەمووانە، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ چارەسەرکرنا بابەتی و قەرەبووکرنا زیانان.`;
                break;
            case 'truancy':
                msg += `⚠️ *بابەت: رەڤین ژ قوتابخانێ*\nئاگەهداریا هەوە دکەین کو قوتابیێ ناڤبری ژ قوتابخانێ یان ژ وانەیان رەڤیە.\nئەڤ رەفتارە مەترسیێ لسەر پاراستن و ئاستێ زانستی یێ قوتابی دروست دکەت، هیڤیدارین ب زوترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'books':
                msg += `📌 *بابەت: نەئینانا پەرتووکێن خواندنێ*\nقوتابیێ ناڤبری چەندین جاران پەرتووک و دەفتەرێن خۆ یێن پێدڤی بۆ قوتابخانێ نەئیناینە.\nئەڤ چەندە دبیتە رێگر ل پێشیا تێگەهشتنا وی بۆ وانەیان، هیڤیدارین دووڤچوونێ بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'bullying':
                msg += `⚠️ *بابەت: بێزارکرن و بێزارکرن*\nئاگەهداریا هەوە دکەین کو قوتابیێ ناڤبری زۆرداری ل هەڤالێن خۆ کریە.\nئەم ل قوتابخانێ ب چ رەنگان ڤان رەفتاران پەسەند ناکەین، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ گەنگەشەکرنا ڤی بابەتی ب رژدی.`;
                break;
            case 'sleeping':
                msg += `📌 *بابەت: خەوتن و بێ ئاگەهی ل پۆلێ*\nمە تێبینی کریە کو قوتابیێ ناڤبری د دەمێ وانەیان دا دخەویت یان گەلەک یێ بێ ئاگەهە.\nئەڤ چەندە کارتێکرنێ ل تێگەهشتنا وی دکەت، هیڤیدارین دووڤچوونا دەمێ خەوا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'hygiene':
                msg += `📌 *بابەت: تێبینی لسەر پاقژیا کەسی*\nب رێزڤە دڤێین سەرنجا هەوە رابکێشین کو پێدڤییە قوتابیێ ناڤبری پتر گرنگیێ ب پاقژیا خۆ یا کەسی و جلی بدەت.\nپاقژی بەشەکێ گرنگە ژ ساخلەمی و ژینگەها قوتابخانێ، سوپاس بۆ هەڤکاریا هەوە.`;
                break;
            case 'profanity':
                msg += `⚠️ *بابەت: بکارئینانا ئاخفتنێن نەجوان*\nئاگەهداریا هەوە دکەین کو قوتابیێ ناڤبری ئاخفتنێن نەجوان و نەگونجای دگەل رەوشتی بکارئیناینە.\nئەڤ رەفتارە ب تەمامی نەیا پەسەندکریە، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ راستڤەکرنا ڤێ رەفتارێ.`;
                break;
            case 'smoking':
                msg += `⚠️ *بابەت: جکەرەکێشان ل قوتابخانێ*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری هاتیە دیتن دکێشا جکەرە ل ناڤ قوتابخانێ.\nئەڤ رەفتارە مەترسییە لسەر ساخلەمیا وی و دژی رێنمایانە. هیڤیدارین ب زوترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'leave_early':
                msg += `⚠️ *بابەت: دەرکەفتن بەری ب دووماهی هاتنا خواندنێ*\nقوتابیێ ناڤبری بێی دەستویریا کارگێڕیێ قوتابخانە بجهـ هێلایە بەری کو خواندن ب دووماهی بهێت.\nئەڤ چەندە مەترسیێ لسەر پاراستنا وی دروست دکەت، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'participation':
                msg += `📌 *بابەت: لاوازیا پشکداریکرنێ د وانەیێ دا*\nمامۆستایێن قوتابیێ ناڤبری تێبینی کرینە کو پشکداریا وی د وانەیان دا گەلەک یا لاوازە.\nئەڤە کارتێکرنێ ل ئاستێ وی یێ زانستی دکەت، هیڤیدارین هاندانا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'forbidden':
                msg += `⚠️ *بابەت: ئینانا تشتێن قەدەغەکری*\nئاگەهداریا هەوە دکەین کو تشتێن قەدەغەکری یێن کو نابیت بهێنە د ناڤ قوتابخانێ دا ل دەف قوتابیێ ناڤبری هاتینە دیتن.\nئەڤە دژی رێسایێن پاراستنێ یە، هیڤیدارین ب لەز سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'health':
                msg += `🏥 *بابەت: تێکچوونا ساخلەمیێ*\nئەم دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری تووشی نەخۆشیەکێ یان تێکچوونەکا ساخلەمیێ بوویە د ناڤ قوتابخانێ دا.\nهیڤیدارین ب زووترین دەم سەرەدانا مە بکەن یان پەیوەندیێ پێڤە بکەن بۆ پشتڕاستبوون ژ رەوشا وی.`;
                break;
            case 'trip':
                msg += `🚌 *بابەت: گەشتا زانستی*\nقوتابخانە دێ رابیت ب رێکخستنا گەشتەکا زانستی/بەسەربرنا دەمی.\nداخوازا پەسەندکرنا هەوە دکەین بۆ پشکداریکرنا قوتابیێ ناڤبری د ڤێ گەشتێ دا. هیڤیدارین پەیوەندیێ ب کارگێڕیێ بکەن.`;
                break;
            case 'fees':
                msg += `💰 *بابەت: پارەیێ قوتابخانێ*\nئەم دڤێت هەوە بیربینین ب درەنگ کەفتنا دانا پارەیێ قوتابخانێ یێن پێدڤی لسەر قوتابیێ ناڤبری.\nهیڤیدارین ب زووترین دەم سەرەدانا بەشێ ژمێریاریێ بکەن.`;
                break;
            case 'parent_council':
                msg += `👥 *بابەت: جڤاتا سمیانان*\nئەم هەوە بانگهێشت دکەین بۆ ئامادەبوون د کۆمبوونا جڤاتا سمیانان دا.\nپشکداریا هەوە د گەنگەشەکرنا رەوشا قوتابیان دا گەلەک گرنگە، هیڤیدارین ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} ئامادە بن.`;
                break;
            case 'exam_schedule':
                msg += `📅 *بابەت: خشتەیێ ئەزموونان*\nئەم دڤێت هەوە ئاگەهدار بکەین کو خشتەیێ ئەزموونێن داهاتی هاتیە بەلاڤکرن.\nهیڤیدارین هاندانا قوتابیێ ناڤبری بکەن بۆ خوەئامادەکرنەکا باش.`;
                break;
            case 'document_missing':
                msg += `📄 *بابەت: کێماسی د بەلگەنامەیان دا*\nهندەک کێماسی د بەلگەنامەیێن پێدڤی یێن قوتابیێ ناڤبری دا هەنە (وەک وێنە یان ناسنامە).\nهیڤیدارین ب زووترین دەم ڤان بەلگەنامەیان بۆ کارگێڕیا قوتابخانێ دابین بکەن.`;
                break;
            case 'excellent_project':
                msg += `💡 *بابەت: پرۆژەیێ نایاب*\nئەم سوپاسیا هەوە و قوتابیێ ناڤبری دکەین بۆ ئەنجامدانا پرۆژەیەکێ زانستی یان هونەری یێ گەلەک نایاب.\nئەڤ بەرهەمە نیشانا ژێهاتیبوونێ یە، دەستخۆشیێ لێ دکەین.`;
                break;
            case 'activity':
                msg += `🎭 *بابەت: پشکداریکرن د چالاکیەکێ دا*\nئەم دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری هاتیە دەستنیشانکرن بۆ پشکداریکرن د چالاکیەکا قوتابخانێ دا.\nپالپشتیا هەوە دێ بیتە هاندەرەک مەزن بۆ وی.`;
                break;
            case 'late_pickup':
                msg += `🚗 *بابەت: درەنگ وەرگرتنا قوتابی*\nتێبینی هاتیە کرن کو هوین گەلەک جاران درەنگ دهێن بۆ وەرگرتنا قوتابیێ ناڤبری پشتی دووماهی هاتنا خواندنێ.\nهیڤیدارین پێگیریێ ب دەمێ دووماهی هاتنا خواندنێ بکەن ل پێخەمەت پاراستنا وی.`;
                break;
            case 'bus_issue':
                msg += `🚐 *بابەت: کێشە د ڤەگوهاستنێ دا*\nئاگەهداریا هەوە دکەین کو تێبینی یان کێشەیەک ل دۆر ڤەگوهاستنا (پاسا) قوتابیێ ناڤبری هەیە.\nهیڤیدارین پەیوەندیێ ب سەرپەرشتیارێ هێلێ یان کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            default:
                msg += `نامەیەک ژ قوتابخانێ ل دۆر قوتابی.`;
        }

        msg += `\n\nدگەل رێز و سڵاڤان،\n*کارگێڕیا قوتابخانێ*`;
    } else if (!isEn) {
        msg = `تحية طيبة وبعد،\nيسر إدارة المدرسة أن تتواصل معكم بصفتكم شركاءنا في العملية التربوية.\n`;
        msg += `نود إعلامكم بخصوص الطالب/ة: ${name}\n`;
        msg += `المرحلة الدراسية: الصف ${sClass} - شعبة (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *الموضوع: إشعار غياب*\nلقد لاحظنا من خلال سجلات الحضور والغياب تكرار غياب الطالب المذكور أعلاه بدون تقديم عذر رسمي أو طبي.\nنظراً لأهمية الالتزام بالدوام وتأثير الغياب المباشر على التحصيل العلمي، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر.`;
                break;
            case 'badBehavior':
                msg += `📌 *الموضوع: إشعار بسلوك مخالف*\nلقد تم تسجيل مخالفة سلوكية من قبل الطالب المذكور.\nنحن في إدارة المدرسة نولي اهتماماً كبيراً بتقويم سلوك أبنائنا الطلبة جنباً إلى جنب مع تعليمهم.\nلذا، نرجو حضوركم إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات التربوية اللازمة.`;
                break;
            case 'lowGrades':
                msg += `📌 *الموضوع: تنبيه بانخفاض المستوى الدراسي*\nمن خلال متابعة التقييمات المستمرة، لاحظنا تراجعاً وانخفاضاً في مستوى الطالب الدراسي في الفترة الأخيرة.\nنظراً لحرصنا على مستقبل الطالب، نرجو حضوركم إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة سبل تدارك هذا التراجع وتحسين مستواه العلمي.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *الموضوع: إشادة بالسلوك المتميز*\nيسعدنا جداً في إدارة المدرسة أن ننقل لكم فخرنا واعتزازنا بالطالب المذكور أعلاه، حيث يتمتع بسلوك حسن وأخلاق عالية والتزام تام بقوانين المدرسة.\nهذا الانضباط يعكس بوضوح حسن تربيتكم ومتابعتكم المستمرة. نشكر لكم جهودكم ونتمنى للطالب دوام التميز والتوفيق.`;
                break;
            case 'highGrades':
                msg += `🎓 *الموضوع: تهنئة بالتفوق الدراسي*\nنبعث لكم بأجمل التهاني والتبريكات بمناسبة التفوق الدراسي والدرجات العالية التي حققها الطالب المذكور.\nإن هذا التميز هو ثمرة لجهده واجتهاده المستمر، وثمرة لدعمكم المتواصل له. إدارة المدرسة فخورة جداً به وتتمنى له المزيد من التألق والنجاح في مسيرته العلمية.`;
                break;
            case 'fight':
                msg += `⚠️ *الموضوع: استدعاء بسبب شجار*\nيؤسفنا جداً إعلامكم بأن الطالب المذكور قد تورط في شجار واحتكاك مع زملائه داخل الحرم المدرسي.\nبناءً على لوائح الانضباط المدرسي، نرجو منكم ضرورة الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للوقوف على أسباب المشكلة ومناقشة الإجراءات التربوية اللازمة.`;
                break;
            case 'reward':
                msg += `🏆 *الموضوع: إشعار تكريم*\nبكل فخر واعتزاز، يسعدنا إعلامكم بأنه تقرر تكريم الطالب المذكور تقديراً لجهوده، تميزه، ومشاركته الفعالة.\nنحن فخورون بوجود طلاب يمتلكون هذا الشغف والحرص في مدرستنا، ونتمنى أن يكون هذا التكريم حافزاً له لمزيد من الإبداع.`;
                break;
            case 'meeting':
                msg += `🤝 *الموضوع: دعوة لاجتماع خاص*\nحرصاً منا على مصلحة الطالب المذكور وتوفير أفضل بيئة داعمة له، نرجو منكم التفضل بالحضور إلى المدرسة لعقد اجتماع خاص ومناقشة بعض الأمور التربوية والتعليمية الهامة.\nالموعد المقترح للاجتماع هو: ${formattedDate} في تمام الساعة ${formattedTime}.\nيرجى تأكيد الحضور أو التواصل معنا لتحديد موعد بديل مناسب. شاكرين لكم حسن تعاونكم الدائم.`;
                break;
            case 'late':
                msg += `📌 *الموضوع: إشعار تأخر صباحي*\nلقد لاحظنا تكرار تأخر الطالب المذكور عن الدوام الصباحي بدون عذر مقبول.\nنظراً لأهمية الالتزام بالوقت، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر ومعالجة هذه المشكلة.`;
                break;
            case 'homework':
                msg += `📌 *الموضوع: إهمال الواجبات المدرسية*\nلقد تم رصد تقصير مستمر من قبل الطالب المذكور في أداء الواجبات المدرسية المطلوبة منه.\nنظراً لتأثير ذلك المباشر على مستواه العلمي، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمتابعة الموضوع ومناقشته.`;
                break;
            case 'phone':
                msg += `⚠️ *الموضوع: مخالفة جلب الهاتف المحمول*\nنود إعلامكم بأنه تم ضبط هاتف محمول مع الطالب المذكور داخل الحرم المدرسي، وهو ما يخالف قوانين وأنظمة المدرسة.\nنرجو منكم التفضل بالحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات التربوية اللازمة.`;
                break;
            case 'uniform':
                msg += `📌 *الموضوع: عدم الالتزام بالزي المدرسي*\nلقد خالف الطالب المذكور قواعد الزي المدرسي الرسمي الخاص بالمدرسة.\nبما أن الالتزام بالزي الموحد هو جزء من الانضباط المدرسي، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الأمر.`;
                break;
            case 'cheating':
                msg += `⚠️ *الموضوع: حالة غش*\nيؤسفنا إعلامكم بأنه تم ضبط الطالب المذكور في حالة غش أثناء أداء الامتحان.\nيعد هذا السلوك مخالفة صريحة للأنظمة المدرسية ويؤثر سلباً على مصداقية تقييم الطالب. نرجو حضوركم إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات المتخذة.`;
                break;
            case 'vandalism':
                msg += `⚠️ *الموضوع: إشعار بتخريب ممتلكات المدرسة*\nنود إعلامكم بأن الطالب المذكور قد قام بتخريب بعض ممتلكات المدرسة عمداً.\nيعد الحفاظ على الممتلكات العامة مسؤولية الجميع، ونرجو حضوركم إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر والتعويض عن الأضرار.`;
                break;
            case 'truancy':
                msg += `⚠️ *الموضوع: إشعار بالهروب من المدرسة*\nلقد تم تسجيل حالة هروب (تسرب) للطالب المذكور من المدرسة أو من الحصص الدراسية.\nهذا التصرف يشكل خطراً على سلامة الطالب ومستقبله الدراسي، نرجو منكم الحضور بشكل عاجل إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'books':
                msg += `📌 *الموضوع: عدم إحضار الكتب المدرسية*\nلقد تكرر عدم إحضار الطالب المذكور للكتب والدفاتر المدرسية المطلوبة للحصص.\nهذا النقص يعيق مشاركته الفعالة وفهمه للدروس، نرجو منكم متابعة الأمر والحضور أو التواصل معنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'bullying':
                msg += `⚠️ *الموضوع: حالة تنمر*\nنود إعلامكم بأن الطالب المذكور قد قام بالتنمر على زملائه.\nنحن لا نتسامح إطلاقاً مع هذا السلوك، ونرجو حضوركم إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الأمر بشكل جدي.`;
                break;
            case 'sleeping':
                msg += `📌 *الموضوع: النوم وعدم الانتباه في الفصل*\nلقد لاحظنا أن الطالب المذكور يعاني من قلة التركيز أو ينام أثناء الحصص الدراسية.\nهذا يؤثر بشكل كبير على استيعابه ومستواه، نرجو منكم متابعة تنظيم أوقات نومه والتواصل معنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'hygiene':
                msg += `📌 *الموضوع: ملاحظة حول النظافة الشخصية*\nنود لفت انتباهكم بلطف إلى أن الطالب المذكور بحاجة إلى اهتمام أكبر بنظافته الشخصية ومظهره العام.\nالحفاظ على النظافة جزء مهم من الصحة والبيئة المدرسية، نرجو متابعة هذا الجانب شاكرين تعاونكم.`;
                break;
            case 'profanity':
                msg += `⚠️ *الموضوع: استخدام ألفاظ نابية*\nلقد تم تسجيل استخدام الطالب المذكور لألفاظ غير لائقة ومخالفة للأخلاق المدرسية.\nيعد هذا السلوك غير مقبول بتاتاً، ونرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة وتقويم هذا السلوك.`;
                break;
            case 'smoking':
                msg += `⚠️ *الموضوع: التدخين داخل المدرسة*\nيؤسفنا إعلامكم بأنه تم ضبط الطالب المذكور وهو يدخن داخل الحرم المدرسي.\nهذا السلوك يشكل خطراً على صحته ويخالف أنظمة المدرسة بشدة. نرجو منكم الحضور بشكل عاجل إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لاتخاذ الإجراءات اللازمة.`;
                break;
            case 'leave_early':
                msg += `⚠️ *الموضوع: مغادرة المدرسة بدون إذن*\nلقد غادر الطالب المذكور المدرسة قبل انتهاء الدوام الرسمي وبدون أخذ إذن من الإدارة.\nهذا التصرف يشكل خطراً على سلامته، نرجو منكم الحضور إلى المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا التجاوز.`;
                break;
            case 'participation':
                msg += `📌 *الموضوع: ضعف المشاركة والتفاعل الصفي*\nلاحظ معلمو الطالب المذكور ضعفاً ملحوظاً في مشاركته داخل الفصل وعدم تفاعله مع الدروس.\nهذا يؤثر على تقييمه وفهمه للمادة العلمية، نرجو منكم حثه على المشاركة والتواصل معنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'forbidden':
                msg += `⚠️ *الموضوع: إحضار مواد ممنوعة*\nنود إعلامكم بأنه تم ضبط مواد ممنوعة (لا يسمح بإدخالها للمدرسة) بحوزة الطالب المذكور.\nيعد هذا انتهاكاً لسياسة الأمن والسلامة في المدرسة. نرجو حضوركم فوراً بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة الموقف.`;
                break;
            case 'health':
                msg += `🏥 *الموضوع: وعكة صحية*\nنود إعلامكم بأن الطالب المذكور أعلاه قد تعرض لوعكة صحية أثناء تواجده في المدرسة.\nنرجو منكم الحضور بأسرع وقت ممكن للاطمئنان على صحته أو التواصل معنا للضرورة.`;
                break;
            case 'trip':
                msg += `🚌 *الموضوع: رحلة مدرسية*\nتعتزم المدرسة تنظيم رحلة علمية/ترفيهية قريباً.\nنرجو تزويدنا بموافقتكم على مشاركة الطالب المذكور في هذه الرحلة. للتفاصيل يرجى مراجعة الإدارة.`;
                break;
            case 'fees':
                msg += `💰 *الموضوع: أقساط مدرسية*\nنود تذكيركم بضرورة تسديد الأقساط المدرسية المتأخرة الخاصة بالطالب المذكور.\nنرجو مراجعة قسم الحسابات في المدرسة بأقرب فرصة ممكنة.`;
                break;
            case 'parent_council':
                msg += `👥 *الموضوع: مجلس الآباء*\nيسعدنا دعوتكم لحضور اجتماع مجلس الآباء والمعلمين.\nمشاركتكم تساهم في تحسين البيئة التعليمية، نرجو حضوركم بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'exam_schedule':
                msg += `📅 *الموضوع: جدول الامتحانات*\nنود إعلامكم بأنه تم توزيع جدول الامتحانات القادمة.\nنرجو منكم حث الطالب المذكور على الاستعداد الجيد والمثابرة لتحقيق أفضل النتائج.`;
                break;
            case 'document_missing':
                msg += `📄 *الموضوع: نواقص في المستمسكات*\nنحيطكم علماً بوجود نقص في المستمسكات الرسمية الخاصة بالطالب المذكور (مثل الصور أو الهوية).\nنرجو الإسراع في تزويد الإدارة بها لإكمال ملف الطالب.`;
                break;
            case 'excellent_project':
                msg += `💡 *الموضوع: مشروع متميز*\nتتقدم إدارة المدرسة بالشكر والتقدير للطالب المذكور ولكم لتقديم مشروع أو نشاط متميز جداً.\nهذا الإنجاز يعكس مدى الإبداع والمثابرة، نتمنى له دوام التوفيق.`;
                break;
            case 'activity':
                msg += `🎭 *الموضوع: مشاركة بنشاط مدرسي*\nنود إعلامكم بأنه تم اختيار الطالب المذكور للمشاركة في نشاط مدرسي مميز.\nدعمكم وتشجيعكم له سيكون له أثر إيجابي كبير على أدائه.`;
                break;
            case 'late_pickup':
                msg += `🚗 *الموضوع: التأخر في استلام الطالب*\nلوحظ تكرار التأخر في استلام الطالب المذكور بعد انتهاء الدوام الرسمي.\nحفاظاً على سلامته وتجنباً لبقائه منفرداً، نرجو الالتزام بموعد الانصراف.`;
                break;
            case 'bus_issue':
                msg += `🚐 *الموضوع: مشكلة في النقل*\nنود إعلامكم بوجود ملاحظة أو مشكلة تتعلق بنقل الطالب المذكور (حافلة المدرسة).\nنرجو التواصل مع مشرف النقل أو مراجعة الإدارة بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            default:
                msg += `رسالة تواصل من المدرسة بخصوص الطالب.`;
        }

        msg += `\n\nمع خالص تحياتنا وتقديرنا،\n*إدارة المدرسة*`;
    } else if (isEn) {
        msg = `Greetings,\nThe school administration would like to communicate with you as our partners in the educational process.\n`;
        msg += `We would like to inform you regarding the student: ${name}\n`;
        msg += `Educational Level: Grade ${sClass} - Section (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *Subject: Notice of Absence*\nWe have noticed through our attendance records that the aforementioned student has been frequently absent without an official or medical excuse.\nGiven the importance of consistent attendance and its direct impact on academic achievement, we request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the matter.`;
                break;
            case 'badBehavior':
                msg += `📌 *Subject: Notice of Misbehavior*\nA behavioral violation has been recorded by the aforementioned student.\nWe at the school administration place great importance on correcting our students' behavior alongside their education.\nTherefore, we request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the necessary educational measures.`;
                break;
            case 'lowGrades':
                msg += `📌 *Subject: Notice of Academic Decline*\nThrough our continuous assessments, we have noticed a recent decline in the student's academic performance.\nOut of concern for the student's future, we request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss ways to address this decline and improve their academic standing.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *Subject: Commendation for Excellent Behavior*\nWe at the school administration are delighted to express our pride in the aforementioned student, as they exhibit excellent behavior, high morals, and complete adherence to school rules.\nThis discipline clearly reflects your excellent upbringing and continuous follow-up. We thank you for your efforts and wish the student continued excellence.`;
                break;
            case 'highGrades':
                msg += `🎓 *Subject: Congratulations on Academic Excellence*\nWe send you our warmest congratulations on the academic excellence and high grades achieved by the aforementioned student.\nThis excellence is the result of their continuous effort and diligence, as well as your ongoing support. The school administration is very proud of them and wishes them further brilliance and success in their educational journey.`;
                break;
            case 'fight':
                msg += `⚠️ *Subject: Summons Due to an Altercation*\nWe regret to inform you that the aforementioned student was involved in an altercation with their classmates within the school premises.\nAccording to the school's disciplinary regulations, we request your attendance at the school on ${formattedDate} at ${formattedTime} to understand the causes of the issue and discuss the necessary educational measures.`;
                break;
            case 'reward':
                msg += `🏆 *Subject: Notice of Recognition*\nWith great pride, we are pleased to inform you that it has been decided to recognize and reward the aforementioned student in appreciation of their efforts, excellence, and active participation.\nWe are proud to have students with such passion and dedication in our school, and we hope this recognition serves as an incentive for further creativity.`;
                break;
            case 'meeting':
                msg += `🤝 *Subject: Invitation for a Special Meeting*\nOut of our concern for the best interests of the aforementioned student and to provide the best supportive environment, we kindly request your attendance at the school for a special meeting to discuss some important educational matters.\nThe proposed time for the meeting is: ${formattedDate} at ${formattedTime}.\nPlease confirm your attendance or contact us to schedule another suitable time. Thank you for your constant cooperation.`;
                break;
            case 'late':
                msg += `📌 *Subject: Notice of Morning Tardiness*\nWe have noticed that the aforementioned student has been frequently late to school without a valid excuse.\nGiven the importance of punctuality, we request your attendance at the school on ${formattedDate} at ${formattedTime} to address this issue.`;
                break;
            case 'homework':
                msg += `📌 *Subject: Notice of Incomplete Homework*\nWe have observed that the aforementioned student has been consistently failing to complete their assigned homework.\nAs this directly affects their academic progress, we request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the matter.`;
                break;
            case 'phone':
                msg += `⚠️ *Subject: Violation for Bringing a Phone*\nWe would like to inform you that the aforementioned student brought a mobile phone to school, which violates our school rules.\nWe request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the necessary disciplinary actions.`;
                break;
            case 'uniform':
                msg += `📌 *Subject: Uniform Violation*\nThe aforementioned student has violated the school's official uniform dress code.\nSince adhering to the uniform policy is part of school discipline, we request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss this matter.`;
                break;
            case 'cheating':
                msg += `⚠️ *Subject: Notice of Cheating*\nWe regret to inform you that the aforementioned student was caught cheating during an exam.\nThis behavior is a clear violation of school regulations. We request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the actions taken.`;
                break;
            case 'vandalism':
                msg += `⚠️ *Subject: Notice of Vandalism*\nWe would like to inform you that the aforementioned student has intentionally damaged school property.\nPreserving public property is everyone's responsibility. We request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss the matter.`;
                break;
            case 'truancy':
                msg += `⚠️ *Subject: Notice of Truancy / Skipping School*\nA case of truancy (skipping classes or school) has been recorded for the aforementioned student.\nThis behavior poses a risk to the student's safety and academic future. We urgently request your attendance at the school on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'books':
                msg += `📌 *Subject: Missing Textbooks*\nThe aforementioned student has repeatedly failed to bring their required textbooks and notebooks to class.\nThis hinders their participation and understanding of the lessons. We request your attendance or communication on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'bullying':
                msg += `⚠️ *Subject: Notice of Bullying*\nWe would like to inform you that the aforementioned student has been involved in bullying their peers.\nWe have a zero-tolerance policy for this behavior. We request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss this matter seriously.`;
                break;
            case 'sleeping':
                msg += `📌 *Subject: Sleeping/Inattentiveness in Class*\nWe have noticed that the aforementioned student has been sleeping or showing a lack of focus during classes.\nThis significantly affects their comprehension and performance. We kindly request that you monitor their sleep schedule and communicate with us on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'hygiene':
                msg += `📌 *Subject: Notice regarding Personal Hygiene*\nWe kindly want to bring to your attention that the aforementioned student needs to pay more attention to their personal hygiene and appearance.\nMaintaining hygiene is an important part of health and the school environment. Thank you for your cooperation.`;
                break;
            case 'profanity':
                msg += `⚠️ *Subject: Use of Profanity*\nIt has been recorded that the aforementioned student used inappropriate language and profanity.\nThis behavior is completely unacceptable. We request your attendance at the school on ${formattedDate} at ${formattedTime} to address and correct this behavior.`;
                break;
            case 'smoking':
                msg += `⚠️ *Subject: Notice of Smoking*\nWe regret to inform you that the aforementioned student was caught smoking on school premises.\nThis behavior poses a risk to their health and strongly violates school regulations. We urgently request your attendance at the school on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'leave_early':
                msg += `⚠️ *Subject: Leaving School Early*\nThe aforementioned student left the school premises before the end of the school day without permission.\nThis poses a risk to their safety. We request your attendance at the school on ${formattedDate} at ${formattedTime} to discuss this violation.`;
                break;
            case 'participation':
                msg += `📌 *Subject: Lack of Class Participation*\nTeachers have noticed a significant lack of participation and engagement from the aforementioned student during classes.\nThis affects their understanding and evaluation. We request your communication or attendance on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'forbidden':
                msg += `⚠️ *Subject: Bringing Forbidden Items*\nWe would like to inform you that the aforementioned student was found in possession of forbidden items not allowed on school premises.\nThis violates our safety and security policies. We request your urgent attendance on ${formattedDate} at ${formattedTime} to address this situation.`;
                break;
            case 'health':
                msg += `🏥 *Subject: Health Issue*\nWe would like to inform you that the aforementioned student experienced a health issue while at school.\nPlease visit us as soon as possible to check on their health or contact us if necessary.`;
                break;
            case 'trip':
                msg += `🚌 *Subject: School Trip*\nThe school is planning an educational/recreational trip soon.\nPlease provide your consent for the aforementioned student to participate in this trip. For details, please check with the administration.`;
                break;
            case 'fees':
                msg += `💰 *Subject: School Fees*\nWe would like to remind you to settle the outstanding school fees for the aforementioned student.\nPlease visit the school's accounting department at your earliest convenience.`;
                break;
            case 'parent_council':
                msg += `👥 *Subject: Parents Council*\nWe are pleased to invite you to attend the Parents and Teachers Council meeting.\nYour participation contributes to improving the educational environment. We request your attendance on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'exam_schedule':
                msg += `📅 *Subject: Exam Schedule*\nWe would like to inform you that the upcoming exam schedule has been distributed.\nPlease encourage the aforementioned student to prepare well and persevere to achieve the best results.`;
                break;
            case 'document_missing':
                msg += `📄 *Subject: Missing Documents*\nPlease be informed that there are missing official documents for the aforementioned student (such as photos or ID).\nPlease provide them to the administration as soon as possible to complete the student's file.`;
                break;
            case 'excellent_project':
                msg += `💡 *Subject: Excellent Project*\nThe school administration extends its thanks and appreciation to the aforementioned student and to you for presenting a very distinguished project or activity.\nThis achievement reflects their creativity and perseverance. We wish them continued success.`;
                break;
            case 'activity':
                msg += `🎭 *Subject: School Activity Participation*\nWe would like to inform you that the aforementioned student has been selected to participate in a special school activity.\nYour support and encouragement will have a great positive impact on their performance.`;
                break;
            case 'late_pickup':
                msg += `🚗 *Subject: Late Pickup*\nWe have noticed repeated delays in picking up the aforementioned student after official school hours.\nFor their safety and to avoid them being left alone, please adhere to the dismissal time.`;
                break;
            case 'bus_issue':
                msg += `🚐 *Subject: Transportation Issue*\nWe would like to inform you of an issue related to the transportation of the aforementioned student (school bus).\nPlease contact the transportation supervisor or visit the administration on ${formattedDate} at ${formattedTime}.`;
                break;
            default:
                msg += `Communication from the school regarding the student.`;
        }

        msg += `\n\nWith our sincere regards and appreciation,\n*School Administration*`;
    }

    return msg;
};
