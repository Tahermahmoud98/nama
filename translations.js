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
        subtitle: "ب ساناهی نامەیێن واتسئاپێ بۆ سمیانێن قوتابییان بەرهەڤ بکە و فرێ بکە",
        lbl_student_name: "<i class='fa-solid fa-user-graduate'></i> ناڤێ قوتابی",
        ph_student_name: "ناڤێ قوتابیی یێ سێقۆڵی بنڤیسە",
        lbl_student_class: "<i class='fa-solid fa-chalkboard-user'></i> پۆل",
        ph_student_class: "نموونە: حەفتێ بنەڕەتی",
        lbl_student_section: "<i class='fa-solid fa-layer-group'></i> هۆبە",
        ph_student_section: "نموونە: أ",
        lbl_parent_number: "<i class='fa-solid fa-phone'></i> ژمارەیا واتسئاپا سمیانی",
        ph_parent_number: "نموونە: +9647XXXXXXXXX",
        hint_parent_number: "هیڤیدارین ژمارەیێ دگەل کۆدێ وەلاتی بنڤیسە (وەک +964 بۆ عێراقێ)",
        lbl_event_date: "<i class='fa-solid fa-calendar-days'></i> رێکەفتا سەرەدانێ",
        lbl_event_time: "<i class='fa-solid fa-clock'></i> دەمێ سەرەدانێ",
        lbl_reason: "<i class='fa-solid fa-list-check'></i> ئەگەرێ ئاگەهداریێ (ئێکێ هەلبژێرە)",
        reason_absence: "گەلەک نەهاتن",
        reason_badBehavior: "رەفتارا خراب",
        reason_lowGrades: "نمرەیێن نزم",
        reason_goodBehavior: "رەفتارا باش",
        reason_highGrades: "نمرێن بلند",
        reason_fight: "شەڕکرن ل قوتابخانێ",
        reason_reward: "پاداشت / رێزلێنان",
        reason_meeting: "داخازکر بۆ کۆمبوونێ",
        reason_late: "درەنگ هاتن",
        reason_homework: "ئەنجام نەدانا ئەرکێن مال",
        reason_phone: "ئینانا مۆبایلێ",
        reason_uniform: "نەپێگیری ب جلوبەرگان",
        reason_cheating: "کۆپیکرن (غشکرن)",
        reason_vandalism: "تێکدانا کەلوپەلان",
        reason_truancy: "رەڤین ژ قوتابخانێ",
        reason_books: "نەئینانا پەرتووکان",
        reason_bullying: "زۆرداری کرن",
        reason_sleeping: "نڤستن ل پۆلێ",
        reason_hygiene: "نەپاقژی",
        reason_profanity: "ئاخفتنێن نەجوان و کرێت",
        reason_smoking: "جگارە کێشان",
        reason_leave_early: "دەرکەفتن بەری دووماهی هاتنێ",
        reason_participation: "نەپشکداریکرن",
        reason_forbidden: "ئینانا تشتێن قەدەغەکری",
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
    reason_forgot_id: "نەپێڤەکرنا ناسنامەیێ",
    reason_disrespect_teacher: "رێزنەگرتنا مامۆستای",
    reason_lack_focus: "کێم تەرکیزی",
    reason_eating_in_class: "خوارن د ناڤ پۆلێ دا",
    reason_chewing_gum: "جووینا بنیشتی",
    reason_failing_exam: "دەرنەچوون د ئەزموونێ دا",
    reason_damaging_books: "تێکدانا پەرتووکان",
    reason_makeup_accessories: "بکارئینانا تشتێن نەگونجای (مکیاج)",
    reason_hallway_noise: "دەنگەدەنگ د مەمەڕان دا",
    reason_leave_class_no_permission: "دەرکەفتن بێی دەستویریێ",

        
        // --- Teachers ---
        mode_students: "<i class='fa-solid fa-user-graduate'></i> بەشێ قوتابییان",
        mode_teachers: "<i class='fa-solid fa-chalkboard-user'></i> ئاگەهدارکرنا مامۆستای",
        lbl_teacher_name: "<i class='fa-solid fa-chalkboard-user'></i> ناڤێ مامۆستای",
        ph_teacher_name: "ناڤێ مامۆستایی یێ سێقۆڵی بنڤیسە",
        lbl_teacher_subject: "<i class='fa-solid fa-book'></i> بابەتێ وانەیێ",
        ph_teacher_subject: "نموونە: بیرکاری",
        lbl_teacher_number: "<i class='fa-solid fa-phone'></i> ژمارەیا مامۆستای",
        ph_teacher_number: "نموونە: +9647XXXXXXXXX",
        btn_manage_teachers: "رێڤەبرنا مامۆستایان",
        modal_manage_teachers_title: "رێڤەبرنا مامۆستایان",
        reason_t_absence: "ئامادەنەبوون",
        reason_t_late: "درەنگ کەفتن",
        reason_t_meeting: "داخازکر بۆ کۆمبوونێ",
        reason_t_duty: "ئەرکێ چاڤدێریێ",
        reason_t_thanks: "سوپاس و پێزانین",
        reason_t_violation: "پێشێلکرنا رێنمایان",
        reason_t_grades: "رادەستکرنا نمرەیان",
        reason_t_notice: "ئاگەهدارییەکا پێدڤی",
        reason_t_exam_questions: "رادەستکرنا پرسیارێن ئەزموونان",
        reason_t_lesson_plan: "پلانا وانەیێ",
        reason_t_class_management: "رێڤەبرنا پۆلێ",
        reason_t_parent_meeting: "دیدار دگەل سمیانان",
        reason_t_training: "خولا راهێنانێ",
        reason_t_activity_supervision: "سەرپەرشتیا چالاکیەکێ",
        reason_t_student_issue: "کێشەیا قوتابییەکێ",
        reason_t_excellent_performance: "ئاستێ نایاب د وانەگۆتنێ دا",
        reason_t_leave_early: "دەرکەفتنا زوو",
        reason_t_schedule_change: "گوهۆڕین د خشتەیێ وانەیان دا",
        reason_t_supplies: "کێماسی د پێداویستیان دا",
        reason_t_technology: "بکارئینانا ئامرازێن فێرکرنێ",
        reason_t_cooperation: "هەڤکاریکرن دگەل هەڤالان",
        reason_t_committee: "کۆمبوونا کۆمیتەیێ",
        reason_t_celebration: "ئاهەنگا قوتابخانێ",
        reason_t_vacation_approval: "پەسەندکرنا دەستویریێ",
        reason_t_vacation_rejection: "رەتکرنا دەستویریێ",
        reason_t_evaluation: "هەلسەنگاندنا ئاستی",
        reason_t_warning: "تێبینی و هۆشداری",
        reason_t_emergency: "رەوشا ژنیشکێڤە",

        // --- Modals & Buttons ---
        btn_manage_students: "رێڤەبرنا قوتابییان",
        btn_bulk_select: "دیارکرنا ب کۆمەل",
        modal_manage_title: "رێڤەبرنا قوتابییان",
        tab_add_single: "زێدەکرنا ئێک قوتابی",
        tab_add_bulk: "زێدەکرنا ب کۆمەل (Excel)",
        tab_add_single_teacher: "زێدەکرنا ئێک مامۆستا",
        tab_add_bulk_teacher: "زێدەکرنا ب کۆمەل (Excel)",
        title_saved_teachers: "مامۆستایێن پاشەکەوتکری:",
        hint_excel_teacher: "پێزانینێن مامۆستایان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، ژمارە)",
        btn_save: "پاشەکەوتکرن",
        hint_excel: "پێزانینێن قوتابییان ژ ئێکسلێ کۆپی بکە و ل ڤێرێ پەیست بکە. (ناڤ، پۆل، هۆبە، ژمارە)",
        btn_save_bulk: "پاشەکەوتکرنا کۆمەڵێ",
        title_saved_students: "قوتابیێن پاشەکەوتکری:",
        th_name: "ناڤ",
        th_class: "پۆل",
        th_section: "هۆبە",
        th_number: "ژمارە",
        th_action: "کردار",
        modal_bulk_title: "دیارکرنا کۆمەلا قوتابییان",
        modal_reason_title: "ئەگەرێ ئاگەهداریێ هەلبژێرە",
        ph_search: "ل قوتابی بگەڕە...",
        btn_confirm: "پەسەندکرن",
        modal_queue_title: "فرێکرنا ب کۆمەل",
        btn_delete_all: "سڕینا هەمیان",
        btn_delete_selected: "سڕینا یێن دیارکری",
        msg_confirm_delete_all: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت هەمی قوتابییان ژێ ببەی؟",
        msg_confirm_delete_selected: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤان {count} قوتابییان ژێ ببەی؟",
        msg_confirm_delete_single: "ئەرێ تۆ یێ پشتڕاستی کو دڤێت ڤی قوتابیی ژێ ببەی؟",

        preview_title: "<i class='fa-regular fa-eye'></i> پێشخاندنا نامەیێ",
        wa_name: "سمیانێ قوتابی",
        wa_teacher_name: "مامۆستا",
        wa_status: "ئۆنلاینە",
        preview_placeholder: "هیڤیدارین پێزانینێن قوتابیی بنڤیسە دا کو نامەیێ ل ڤێرێ ببینی...",
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
            msg = `سلاڤ،\nکارگێڕیا قوتابخانێ دڤێت ب رێیا ڤێ نامەیێ پەیوەندیێ ب هەوە بکەت.\n`;
            msg += `ئەم حەز دکەین ڤی بابەتی دگەل مامۆستا: ${tName} بەحس بکەین.\n`;
            msg += `بابەتێ وانەیێ: ${tSubject}\n\n`;
            
            switch (reason) {
                case 't_absence': msg += `📌 *بابەت: ئاگەهدارییا نەهاتنێ بۆ دەواما فەرمی*\nهیڤیدارین هوین د باشترین رەوش دا بن. کارگێڕیا قوتابخانێ دڤێت هەوە ئاگەهدار بکەت کو د تۆمارێن فەرمی یێن قوتابخانێ دا هاتیە دیارکرن کو هوین ل دەوامێ ئامادەنەبووینە. ژبەر کو رۆلێ هەوە گەلەک یێ گرنگە د بەردەوامی و جێگیربوونا پرۆسێسا پەروەردەیی دا، نەهاتنا هەوە ب شێوەیەکێ راستەوخۆ کارتێکرنێ ل پلانێن وانەگۆتنێ و ئاستێ فێربوونا قوتابییان دکەت. لەورا، هیڤیدارین ب زووترین دەم پەیوەندیێ ب کارگێڕیێ بکەن بۆ روونکردنا ئەگەرێن ڤێ نەهاتنێ، و پێشکێشکرنا هەر بەهانەیەکا نۆشداری یان فەرمی ئەگەر هەبیت، دا کو ئەم بشێین تۆماران نوی بکەین و رێکارێن کارگێڕی یێن پێدڤی بگرینە بەر.`; break;
                case 't_late': msg += `📌 *بابەت: ئاگەهدارییا درەنگ کەفتنێ بۆ دەوامێ*\nکارگێڕیا قوتابخانێ باشترین سڵاڤان ئاراستەی هەوە دکەت. ئەم دڤێت بالێ هەوە رابکێشین کو تێبینی هاتیە کرن هوین درەنگ هاتینە سەر کاری ل دەمێ دیارکری یێ فەرمی. پابەندبوون ب دەمی یا پێدڤی و گرنگە بۆ رێڤەچوونا وانەیان ب شێوەیەکێ رێکخستی و دابینکرنا ژینگەهەکا پەروەردەیی یا سەقامگیر بۆ قوتابییان. هیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ روونکردنا ئەگەرێن ڤێ درەنگ کەفتنێ، و ئەم باوەریێ ب هەڤکارییا هەوە دکەین بۆ پاراستنا دەمێ فەرمی و رێگریکردن ل هەر کارتێکرنەکا نەرێنی لسەر خشتەیێ خواندنێ.`; break;
                case 't_meeting': msg += `🤝 *بابەت: داخازکر بۆ کۆمبوونەکا کارگێڕی یا گرنگ*\nکارگێڕیا قوتابخانێ ب رێزڤە هەوە داخاز دکەت بۆ ئامادەبوون د کۆمبوونەکا کارگێڕی دا کو دێ ل دۆر چەند بابەتێن پەروەردەیی، ئاستێ قوتابییان و پێشخستنا ژینگەها خواندنێ هێتە ئەنجامدان. کۆمبوون دێ ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} هێتەکرن. ئامادەبوونا هەوە و پشکداریکرنا هەوە ب دیتن و بۆچوونێن هەوە یێن ب نرخ، گەلەک یا گرنگە بۆ سەرکەفتنا ڤێ کۆمبوونێ و گەهشتن ب بڕیارێن دروست.`; break;
                case 't_duty': msg += `📋 *بابەت: بیرئانین ب ئەرکێ چاڤدێریێ و نۆبەداریێ*\nئەم دڤێت ب رێزڤە هەوە بیربینین ب ئەرکێ هەوە یێ نۆبەداریێ و چاڤدێریێ یێ دیارکری د خشتەیێ فەرمی دا. هیڤیدارین ل جهێن دیارکری یێن حەوشێ یان کۆریدۆران ئامادەبن و ب وردی دیڤچوونا رەفتارێن قوتابییان بکەن بۆ پاراستنا سەلامەتییا وان، رێگریکردن ل هەر کێشەیەکێ، و دابینکرنا ژینگەهەکا ئارام و پاراستی د دەمێ بێهنڤەدانان دا. هەڤکارییا هەوە د ڤی بیاڤی دا جهێ رێزێ یە.`; break;
                case 't_thanks': msg += `🌟 *بابەت: نامەیا سوپاس و پێزانینێ بۆ خەمخۆرییا هەوە*\nکارگێڕیا قوتابخانێ ب باشترین شێوە سوپاسییا هەوە دکەت بۆ بزاڤ و ماندووبوونا هەوە یا بێ پایان و خەمخۆرییا هەوە یا بەردەوام دگەل قوتابییان دا. رێکار و شێوازێن هەوە یێن پەروەردەیی کاریگەرییەکا مەزن لسەر پێشخستنا ئاستێ قوتابییان هەیە. ئەم گەلەک شانازییێ ب هەبوونا مامۆستایێن دلسۆز و خەمخۆر یێن وەک هەوە دکەین د ناڤ ستافێ مە یێ پەروەردەیی دا و داخوازا سەرکەفتنێ بۆ هەوە دکەین.`; break;
                case 't_violation': msg += `⚠️ *بابەت: ئاگەهداری ل دۆر پێشێلکرنا رێنمایێن کارگێڕی*\nتێبینی هاتیە کرن کو لادانەک یان پێشێلکاریەک لسەر هندەک ژ رێنمایێن فەرمی یان سیاسەتێن قوتابخانێ هاتیە تۆمارکرن کو پێدڤی ب پێداچوونێ یە. ژبەر کو پاراستنا سیستەمی ئەرکێ هەمییانە، هیڤیدارین ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} سەرەدانا کارگێڕیێ بکەن بۆ گفتوگۆکرنەکا کراوە ل دۆر ڤی بابەتی و دیتنا رێکێن چارەسەریێ بۆ هندێ کو دووبارە نەبیتەڤە و کارێ مە یێ هەڤپشک ب دروستی برێڤە بچیت.`; break;
                case 't_grades': msg += `📝 *بابەت: بیرئانینەکا گرنگ بۆ رادەستکرنا نمرەیێن ئەزموونان*\nئەم داخوازێ ژ هەوە دکەین کو ب زووترین دەم نمرەیێن قوتابییان یێن هەلسەنگاندنا دووماهییێ رادەست بکەن و د سیستەمێ تۆمارکرنێ دا بنڤیسن. ژبەر کو دەمێ دیارکری بۆ دەرخستنا ئەنجامان خەریکە ب دوماهی دهێت، ئەم پێدڤی ب ئەنجامێن وانن بۆ تمامکرنا کارێن کارگێڕی یێن تایبەت ب باوەرنامەیان ڤە. سوپاس بۆ هەڤکاری و بزاڤێن هەوە د ڤێ پرۆسێسێ دا.`; break;
                case 't_notice': msg += `🔔 *بابەت: ئاگەهداریەکا کارگێڕی یا گرنگ و ب لەز*\nکارگێڕیا قوتابخانێ ئاگەهدارییا هەوە دکەت کو بابەتەکێ گرنگ یێ پەروەردەیی یان پیشەیی هەیە کو پێدڤی ب دانوستاندنەکا راستەوخۆ و بلەز هەیە دگەل هەوە. هیڤیدارین ب زووترین دەم پەیوەندیێ ب کارگێڕیێ بکەن یان د دەمێ بەتاڵییا خۆ دا سەرەدانا ئۆفیسێ بکەن بۆ بەحسکرنا ڤی بابەتی و وەرگرتنا پێزانینێن پێدڤی.`; break;
                case 't_exam_questions': msg += `📝 *بابەت: داخوازکرنا پرسیارێن ئەزموونێن داهاتی*\nهیڤیدارین بلەز پرسیارێن ئەزموونێن داهاتی ب شێوەیەکێ رێکخستی و دگەل بەرسڤێن نموونەیی بۆ کارگێڕیێ بهێنە رادەستکرن، بۆ وێ چەندێ ئەم بشێین کاری بۆ پێداچوون، چاپکرن و ئامادەکرنا وان ب نهێنی و ب دروستی بکەین بەریا دەمێ ئەزموونێ بگەهیت. پابەندبوونا هەوە ب دەمێ دیارکری هاریکاریا مە دکەت بۆ رێڤەچوونا ئەزموونان ب سەرکەفتیانە.`; break;
                case 't_lesson_plan': msg += `📖 *بابەت: بیرئانین بۆ ئامادەکرن و رادەستکرنا پلانا وانەیێ*\nئەم دڤێت هەوە بیربینین ب گرنگییا ئامادەکرن و رادەستکرنا پلانا وانەیێ (رۆژانە و سالانە) بۆ رێڤەبەریێ. پلانا وانەیێ نە تنێ بەلگەیەکا کارگێڕی یە، بەلکو ئامرازەکێ گرنگە بۆ رێکخستنا کارێ هەوە یێ پەروەردەیی و دابینکرنا باشترین شێوازێن فێرکرنێ بۆ قوتابییان. هیڤیدارین ب زووترین دەم ڤێ پلانێ رادەستی بگەڕێ پەیوەندیدار بکەن.`; break;
                case 't_class_management': msg += `🗣️ *بابەت: تێبینی ل دۆر رێڤەبرن و کۆنترۆلکرنا پۆلێ*\nچەند تێبینیەک هاتینە تۆمارکرن ل دۆر رەوشا کۆنترۆلکرن و رێڤەبرنا پۆلێ د دەمێ وانەیێن هەوە دا کو کارتێکرنێ ل بێدەنگی و ئارامییا قوتابخانێ دکەن. هیڤیدارین رێکارێن پەروەردەیی یێن توندتر و گونجایتر بگرنە بەر بۆ رەخساندنا ژینگەهەکا ئارام یا فێربوونێ، کو تێدا هەمی قوتابی بشێین مفا وەربگرن بێی ئالۆزی. بۆ هەر پشتەڤانیەکێ کارگێڕی ل خزمەتا هەوە دایە.`; break;
                case 't_parent_meeting': msg += `🤝 *بابەت: ژڤانێ کۆمبوونەکێ دگەل سمیانێ قوتابی*\nکارگێڕیێ ژڤانەک هاتیە دانان بۆ کۆمبوونەکێ دگەل سمیانێ ئێک ژ قوتابیێن هەوە بۆ دانوستاندنێ ل دۆر رەوشا ئەکادیمی، ئاستێ پشکداریکرنێ، و رەفتارێن وی یێن رۆژانە. هیڤیدارین ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} ئامادەبن دا کو تێبینیێن خۆ یێن راستەوخۆ پێشکێش بکەن، چونکو رۆلێ هەوە د ڤێ کۆمبوونێ دا گەلەک یێ ئەکتیڤ و چارەسەرکەرە.`; break;
                case 't_training': msg += `🎓 *بابەت: دەستنیشانکرن بۆ پشکداریکرن د خولەکا راهێنانێ دا*\nئەم گەلەک کەیفخۆشین کو هەوە ئاگەهدار بکەین کو هوین هاتینە دەستنیشانکرن بۆ پشکداریکرن د خولەکا راهێنانێ دا کو مەرەم پێ پێشخستنا پیشەیی و وەرگرتنا شارەزاییێن نوی یێن سەردەمیانە یە د بواری پەروەردەیێ دا. هیڤیدارین ئامادەبوونا هەوە ل جهـ و دەمێ دیارکری یێ خولێ ب دروستی بیت، چونکو ئەڤە دێ بیتە ئەگەرێ پێشڤەچوونا هەوە و قوتابخانێ.`; break;
                case 't_activity_supervision': msg += `🎭 *بابەت: راسپاردن ب سەرپەرشتیکرنا چالاکیێن قوتابخانێ*\nکارگێڕیا قوتابخانێ ئەرکێ سەرپەرشتیکرنا ئێک ژ چالاکیێن مەزن و داهاتی یێن قوتابخانێ ب هەوە سپارتیە. ئەم باوەریەکا تەمام ب شیانێن هەوە و رۆلێ هەوە یێ سەرکردایەتیێ دکەین د رێکخستنا ڤان جۆرە چالاکیان دا. هیڤیدارین ب باشترین شێوە و ب رێکخستنەکا جوان ڤێ چالاکیێ برێڤە ببەن بۆ هندێ کو ببیتە جهێ مفا و دلخۆشییا قوتابییان.`; break;
                case 't_student_issue': msg += `⚠️ *بابەت: گازیکرن بۆ بەحسکرنا کێشەیەکا تایبەت ب قوتابییەکێ ڤە*\nهیڤیدارین د ئێکەمین دەرفەت دا سەرەدانا کارگێڕیێ بکەن بۆ بەحسکرنا چەند تێبینی و کێشەیێن تایبەت کو گرێدایی ئێک ژ قوتابیێن پۆلا هەوە نە (چ ژ روویێ رەفتارێ یان ئاستێ زانستی ڤە). مەبەست ژ ڤێ دیتنێ ئەوە کو ئەم دگەل هەوە هاریکار بین بۆ دیتنا چارەسەریەکا گونجای کو د بەرژەوەندییا قوتابیێ ناڤبری دا بیت و ئارامیێ بۆ پۆلێ ڤەگەڕینیت.`; break;
                case 't_excellent_performance': msg += `🌟 *بابەت: سوپاسنامە بۆ ئاستێ نایاب و داهێنان د وانەگۆتنێ دا*\nرێڤەبەرییا قوتابخانێ ب شانازی ڤە سوپاسییا هەوە یا بێ پایان دکەت بۆ خەمخۆری و ئاستێ هەوە یێ نایاب، و بکارئینانا رێکێن نوی و داهێنەرانە د پێشکێشکرنا وانەیان دا. ئەڤ بزاڤێن هەوە گەلەک ب نرخن بۆ مە و ب شێوەیەکێ مەزن کاریگەری کریە لسەر حەز و ئاستێ قوتابییان بۆ خواندنێ. هیڤییا بەردەوامی و سەرکەفتنێن پتر بۆ هەوە دخوازین.`; break;
                case 't_leave_early': msg += `🚪 *بابەت: ئاگەهداری ل دۆر دەرکەفتنا زوو ژ دەوامێ بەریا دەمێ فەرمی*\nتێبینی هاتیە کرن کو هوین بەری دەمێ دیارکری یێ دەواما فەرمی ژ قوتابخانێ دەرکەفتینە بێی ئاگەهداریەکا پێشوەخت. هیڤیدارین ب تەمامی پابەندبن ب خشتەیێ دەوامێ یێ فەرمی دا کو پرۆسێسا خواندنێ و رێکخستنا قوتابخانێ ب رێکوپێکی برێڤە بچیت و تووشی چ ئالۆزیان نەبیت. هیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ روونکردنا ئەگەرێ ڤێ دەرکەفتنا زوو.`; break;
                case 't_schedule_change': msg += `📅 *بابەت: ئاگەهداری ب گوهۆڕینێن پێدڤی د خشتەیێ وانەیان دا*\nمە دڤێت هەوە ئاگەهدار بکەین کو ژبەر پێدڤیێن کاری و رێکخستنا پۆلان، هندەک گوهۆڕینێن پێدڤی د خشتەیێ وانەیێن هەوە یێن حەفتیانە دا هاتینە کرن. هیڤیدارین د دەمەکێ نێزیک دا سەرەدانا کارگێڕیێ یان تابلۆیێ ئاگەهداریان بکەن بۆ وەرگرتنا خشتەیێ نوی یێ راستڤەکری بۆ هندێ کو کارێ هەوە یێ داهاتی لسەر وی بنەمایی برێڤە بچیت.`; break;
                case 't_supplies': msg += `📦 *بابەت: بەرسڤا کارگێڕیێ ل دۆر داخوازیا پێداویستیێن پۆلێ*\nداخوازیا هەوە یا فەرمی بۆ دابینکرنا پێداویستیێن فێرکرنێ و کەرەستەیێن پۆلێ گەهشتیە دەستێ مە. کارگێڕی خەریکە ب هویربینی کار لسەر دکەت دا کو پێداویستیێن داخوازکری ب زووترین دەم و ب باشترین کوالێتی بۆ هەوە دابین بکەت، دا کو پرۆسێسا وانەگۆتنێ بێ کێماسی برێڤە بچیت. سوپاس بۆ هەڤکاری و چاڤەڕێکرنا هەوە.`; break;
                case 't_technology': msg += `💻 *بابەت: هاندان بۆ مفا وەرگرتن ژ تەکنەلۆژیا و ئامرازێن فێرکرنێ*\nب مەبەستا زێدەکرنا تێگەهشتن و کارلێکرنا قوتابییان دگەل بابەتێن خواندنێ، هیڤیدارین پتر مفا ژ ئامرازێن فێرکرنێ یێن تەکنەلۆژی یێن بەردەست ل قوتابخانێ بهێتە وەرگرتن (وەک شاشەیێن زیرەک، پرۆژێکتەر، و تاقیگەهان) د دەمێ پێشکێشکرنا وانەیان دا. ئەڤە دێ هاریکار بیت بۆ گەهاندنا پێزانینان ب شێوازەکێ سەردەمیانە و سەرنجراکێشتر.`; break;
                case 't_cooperation': msg += `🤝 *بابەت: سوپاس بۆ گیانێ هەڤکاریێ و تیمبوونا هەوە دگەل هەڤالان*\nرێڤەبەری سوپاسیا گیانێ هەڤکاریێ یێ پۆزەتیڤ و هەڤکاریکرنا هەوە دگەل مامۆستایێن دی و ستافێ قوتابخانێ دکەت. ئەڤ جۆرە هەماهەنگی و هەڤکارییە د ناڤبەرا مامۆستایان دا دبیتە ئەگەرێ دروستکرنا ژینگەهەکا کارکرنێ یا سەرکەفتی، سەقامگیر، و گەلەک مفای دگەهینتە قوتابییان و ئاستێ پەروەردەیی یێ گشتی یێ قوتابخانێ بلندتر دکەت.`; break;
                case 't_committee': msg += `👥 *بابەت: داخازنامە بۆ ئامادەبوون د کۆمبوونا کۆمیتەیێ دا*\nوەک ئەندامەکێ کارا و گرنگ د ئێک ژ کۆمیتەیێن چالاک یێن قوتابخانێ دا، هوین ب رێزڤە دهێنە داخازکرن بۆ ئامادەبوون د کۆمبوونا داهاتی دا ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}. مەرەم ژ ڤێ کۆمبوونێ بەحسکرنا بەرنامەیێ کارێ کۆمیتەیێ و دانانا پلانێن داهاتی یە، و پشکداریا هەوە دێ کارتێکرنەکا باش هەبیت.`; break;
                case 't_celebration': msg += `🎉 *بابەت: داخوازکرن بۆ پشکداریێ د رێکخستنا ئاهەنگا قوتابخانێ دا*\nقوتابخانە خەریکە ئامادەکاریێن بەرفرەهـ دکەت بۆ گێڕانا ئاهەنگەکا داهاتی یا مەزن. ژبەر کو مە باوەری ب شارەزایی و رێکخستنا هەوە هەیە، مە دڤێت مفا ژ هاریکاری و هەڤکارییا هەوە ببینین د ئامادەکاریێن ڤێ روودانا گرنگ دا. هیڤیدارین وەکو ئەندامەکێ سەرەکی یێ رێکخستنێ رۆلێ خۆ یێ بەرچاڤ ببینن بۆ سەرخستنا ڤێ چالاکیێ.`; break;
                case 't_vacation_approval': msg += `✅ *بابەت: ئاگەهداری ب پەسەندکرنا داخوازیا دەستویریێ (مۆلەتێ)*\nئەم دڤێت ب کەیفخۆشی هەوە ئاگەهدار بکەین کو داخوازیا هەوە بۆ دەستویریێ (مۆلەتێ) ژ لایێ کارگێڕیێ ڤە ب فەرمی هاتیە پەسەندکرن. ئەم هیڤییا دەمەکێ خۆش و ئارام بۆ هەوە دخوازین بۆ بجهئینانا کارێن خۆ، و چاڤەڕێی ڤەگەڕیانا هەوە ب سەلامەتی دکەین بۆ ناڤ خێزانا قوتابخانێ بۆ بەردەوامیدان ب کارێ هەوە یێ پیرۆز.`; break;
                case 't_vacation_rejection': msg += `❌ *بابەت: لێبۆرین ژ رەتکرنا داخوازیا دەستویریێ (مۆلەتێ)*\nب مخابنی ڤە، ئەم دڤێت هەوە ئاگەهدار بکەین کو ژبەر پێدڤیا مەزن یا کاری د ڤی دەمی یێ هەستیار دا، و هەروەسا قەرەبالغیا خشتەیێن خواندنێ و کەمییا ستافێ یەدەک، نەکر داخوازیا هەوە بۆ مۆلەتێ بهێتە پەسەندکرن د ڤی کاتی دا. ئەم باوەریێ ب تێگەهشتن و دلسۆزییا هەوە دکەین بۆ بەرژەوەندییا گشتی یا قوتابخانێ.`; break;
                case 't_evaluation': msg += `📊 *بابەت: ئاگەهداری ل دۆر ئەنجامێ هەلسەنگاندنا سالانە یا مامۆستایان*\nراپۆرتا هەلسەنگاندنا ئاستێ هەوە یێ سالانە و پیشەیی ب تەمامی هاتیە ئامادەکرن ژ لایێ لیژنەیا هەلسەنگاندنێ ڤە. هیڤیدارین د دەمەکێ گونجای دا سەرەدانا ئۆفیسا کارگێڕیێ بکەن بۆ دیتن و بەحسکرنا ئەنجامان. ئەڤ راپۆرتە هاریکارە بۆ دیتنا خالێن بهێز یێن هەوە و هەروەسا دیتنا رێکێن پێشخستن و باشترکرنێ بۆ پاشەرۆژێ.`; break;
                case 't_warning': msg += `⚠️ *بابەت: هۆشداریەکا کارگێڕی یا فەرمی و ئاگەهداریەکا گرنگ*\nئەڤ نامەیە وەک هۆشداری و تێبینیەکا کارگێڕی یا فەرمی یە لسەر بابەتەکێ تایبەت ب کارێ هەوە یان لادان ژ رێنمایێن قوتابخانێ ڤە. هیڤیدارین ئەڤێ تێبینیێ ب رژدی و ب گرنگیەکا مەزن وەربگرن، و ب زووترین دەم کار بکەن بۆ راستڤەکرنا بابەتێ دیارکری دا کو دووبارە نەبیتەڤە و پێدڤی ب رێکارێن کارگێڕی یێن دژوارتر نەکەت.`; break;
                case 't_emergency': msg += `🚨 *بابەت: رەوشا طارئ، گەلەک گرنگ و ب لەز*\nهیڤیدارین د زووترین دەم دا و ب بێ هیچ پاشخستنەکێ پەیوەندیێ ب کارگێڕیێ بکەن یان ب لەز ئامادەبن د ئۆفیسێ دا. رەوشەکا ژنیشکێڤە، طارئ و گەلەک هەستیار پەیدا بوویە کو پێدڤی ب دەستێوەردان، ئاگەهداری و بڕیارێن هەوە یێن راستەوخۆ هەیە بۆ کۆنترۆلکرن و چارەسەرکرنا روودانێ ب سەلامەتی.`; break;
            }
        } else if (isEn) {
            msg = `Greetings,\nThe school administration would like to communicate with you through this message.\n`;
            msg += `We would like to discuss this matter with Teacher: ${tName}.\n`;
            msg += `Subject: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *Subject: Official Notice Regarding Absence from Duty*\nWe hope this message finds you well. The school administration would like to formally notify you that your absence from official school duties today has been recorded. Because your consistent presence is absolutely vital to the stability and success of the educational process, any absence directly impacts the delivery of lessons and student progress. Therefore, we kindly request that you contact the administration at your earliest convenience to provide a clear explanation for this absence, along with any relevant medical or official documentation, so that we may update our records accordingly and proceed with the necessary administrative steps.`; break;
                case 't_late': msg += `📌 *Subject: Official Notice Regarding Late Arrival*\nThe school administration extends its best regards. It has been brought to our attention that you arrived late for your scheduled duties today. Strict adherence to the official timetable is a fundamental requirement to ensure that classes begin promptly and that a structured, disciplined environment is maintained for all students. We kindly ask you to visit the administration office to clarify the circumstances surrounding your delay. We count on your continued cooperation to prioritize punctuality and prevent any negative impact on the academic schedule.`; break;
                case 't_meeting': msg += `🤝 *Subject: Formal Invitation to an Important Administrative Meeting*\nThe school administration cordially invites you to attend a highly important administrative meeting. During this session, we will be discussing critical educational strategies, student performance metrics, and ways to enhance the overall learning environment. The meeting is scheduled to take place on ${tFormattedDate} exactly at ${tFormattedTime}. Your attendance, insights, and active participation are extremely important to the success of this meeting and to our collective decision-making process.`; break;
                case 't_duty': msg += `📋 *Subject: Important Reminder Regarding Supervision and Break Duty*\nWe would like to respectfully remind you of your assigned supervision and break-time duties as outlined in the official schedule. It is imperative that you are physically present at your designated posts (e.g., corridors, courtyard) to closely monitor student behavior. Your active supervision is critical to maintaining a secure school environment, preventing potential conflicts or accidents, and ensuring the absolute safety of all students during their breaks. We highly appreciate your dedication to this responsibility.`; break;
                case 't_thanks': msg += `🌟 *Subject: Letter of Deep Thanks and Appreciation for Your Dedication*\nThe school administration wishes to extend its most profound gratitude and appreciation for your unwavering dedication, tireless efforts, and exceptional commitment to our students. Your innovative teaching methods and genuine care have a tremendously positive impact on raising the educational standards of our institution. We are incredibly proud and honored to have such inspiring and devoted educators like you as part of our teaching faculty, and we wish you continued success.`; break;
                case 't_violation': msg += `⚠️ *Subject: Notice Regarding a Violation of School Guidelines*\nWe regret to inform you that a recent observation has noted a deviation from or violation of the school's official policies and guidelines. Maintaining order and adhering to established rules is a shared responsibility essential for our institution's integrity. We kindly request your presence at the administration office on ${tFormattedDate} at ${tFormattedTime} for an open and constructive discussion regarding this matter, to understand what happened, and to ensure full compliance moving forward.`; break;
                case 't_grades': msg += `📝 *Subject: Urgent Reminder for the Submission of Final Grades*\nThis is an urgent and important reminder to kindly finalize, record, and submit the students' grades for the recent assessments into the school's system as soon as possible. As the strict deadline for issuing report cards and finalizing academic records is rapidly approaching, any delay in grade submission holds up the entire administrative process. We greatly appreciate your prompt attention and cooperation in completing this essential task immediately.`; break;
                case 't_notice': msg += `🔔 *Subject: Urgent and Important Administrative Notification*\nThe school administration wishes to alert you that there is a highly important professional or educational matter that requires your immediate and direct attention. We kindly request that you contact the administration without delay or visit the office during your next available free period so that we may discuss this issue thoroughly and provide you with all the necessary details and context.`; break;
                case 't_exam_questions': msg += `📝 *Subject: Urgent Request for Submission of Upcoming Exam Questions*\nPlease be reminded to prepare and submit the questions for the upcoming scheduled examinations, complete with their respective official answer keys, to the administration as soon as possible. Timely submission is absolutely crucial to allow us adequate time for secure review, formatting, and printing before the exam dates arrive. Your strict adherence to this deadline ensures a smooth, stress-free testing period for everyone involved.`; break;
                case 't_lesson_plan': msg += `📖 *Subject: Crucial Reminder Regarding Preparation and Submission of Lesson Plans*\nWe would like to strongly remind you of the essential requirement to prepare and submit your comprehensive daily and annual lesson plans to the administration. A well-structured lesson plan is not merely an administrative formality, but a vital tool that guarantees the high quality of your instruction and the systematic delivery of the curriculum. Please ensure these documents are submitted promptly to the relevant academic supervisor.`; break;
                case 't_class_management': msg += `🗣️ *Subject: Administrative Observations Regarding Classroom Management*\nDuring recent administrative walkthroughs, several observations were recorded concerning classroom control, noise levels, and overall management during your teaching sessions. A chaotic environment significantly hinders the learning potential of students. We strongly urge you to adopt firmer and more effective classroom management strategies to foster a calm, focused, and respectful educational atmosphere. The administration is fully available to support you in implementing these improvements.`; break;
                case 't_parent_meeting': msg += `🤝 *Subject: Scheduled Formal Meeting with a Student's Parent*\nA formal meeting has been scheduled by the administration with the parent/guardian of one of the students in your class. The purpose of this meeting is to thoroughly discuss the student's academic progress, daily participation, and behavioral status. We require your attendance on ${tFormattedDate} at ${tFormattedTime} so that you may provide your direct, professional feedback and insights, which are invaluable for collaborating on a successful action plan for the student.`; break;
                case 't_training': msg += `🎓 *Subject: Official Nomination for Professional Development Training*\nWe are delighted to inform you that you have been officially selected and nominated by the school to participate in an upcoming, high-level professional development training course. This program is designed to introduce modern pedagogical skills and enhance your teaching expertise. It is mandatory that you attend punctually at the designated time and location, as this investment in your professional growth will significantly benefit both you and the school community.`; break;
                case 't_activity_supervision': msg += `🎭 *Subject: Assignment to Supervise an Upcoming Major School Activity*\nThe school administration is pleased to assign you the critical responsibility of leading and supervising an upcoming major school activity or event. We place immense trust in your organizational abilities, your leadership skills, and your rapport with the students. We kindly ask you to manage and coordinate this event with the utmost care and professionalism, ensuring it is executed flawlessly and serves as a memorable and beneficial experience for the students.`; break;
                case 't_student_issue': msg += `⚠️ *Subject: Urgent Summons to Discuss a Specific Student-Related Issue*\nPlease make it a priority to visit the administration office at your earliest possible convenience. We need to have a serious discussion regarding specific behavioral, academic, or personal issues concerning a student currently enrolled in your class. The goal of this meeting is to collaborate closely with you to find a swift, appropriate, and constructive solution that serves the student's best interests while maintaining the integrity of your classroom.`; break;
                case 't_excellent_performance': msg += `🌟 *Subject: Formal Commendation for Outstanding Teaching Excellence*\nThe school administration takes great pride in extending its deepest thanks and formal commendation for your outstanding teaching performance. Your remarkable dedication, your innovative approach to instruction, and your genuine care for the students' well-being have been clearly noticed and highly valued. Your continuous efforts elevate the standard of education at our institution, and we wish you ongoing success and brilliance in your esteemed career.`; break;
                case 't_leave_early': msg += `🚪 *Subject: Official Notice Regarding Unauthorized Early Departure*\nIt has been officially noted that you departed from the school premises before the formal conclusion of the working day, without prior authorization or notification. We must emphasize that strict adherence to the official working hours is mandatory for all staff to ensure the school operates safely and efficiently without disruption. We require you to visit the administration office promptly to provide a valid explanation for this early departure.`; break;
                case 't_schedule_change': msg += `📅 *Subject: Important Notification Regarding Modifications to Your Class Schedule*\nPlease be advised that, due to operational necessities and the reorganization of classes, some mandatory adjustments have been made to your weekly teaching schedule. We kindly ask you to visit the administration office or consult the official staff noticeboard as soon as possible to receive your newly updated timetable. It is crucial that you align your upcoming lessons and preparations with this new schedule immediately.`; break;
                case 't_supplies': msg += `📦 *Subject: Administrative Update on Your Request for Classroom Supplies*\nWe acknowledge the receipt of your formal request for the provision of specific educational materials and classroom supplies. Please be assured that the administration is currently processing your request with high priority. We are actively working to procure and deliver these items to you as swiftly as possible, ensuring they meet the required quality standards to support your instructional needs without any delay.`; break;
                case 't_technology': msg += `💻 *Subject: Encouragement to Maximize the Use of Educational Technologies*\nIn our continuous effort to boost student engagement and facilitate deeper comprehension of complex subjects, the administration strongly encourages you to maximize the integration of the educational technologies available on campus (such as smart interactive screens, projectors, and laboratory equipment) into your daily lessons. Utilizing these modern tools creates a more dynamic, interactive, and effective learning experience for all students.`; break;
                case 't_cooperation': msg += `🤝 *Subject: Deep Appreciation for Your Outstanding Collaborative Spirit*\nThe administration wishes to highlight and deeply appreciate the exceptionally positive and collaborative spirit you consistently demonstrate toward your colleagues and the wider school staff. This kind of mutual cooperation and teamwork is the cornerstone of a successful, stable, and harmonious work environment. Your attitude not only uplifts the staff but also directly translates into a more supportive and enriching educational atmosphere for our students.`; break;
                case 't_committee': msg += `👥 *Subject: Formal Invitation to Attend the Upcoming Committee Meeting*\nAs an active and highly valued member of the school's working committee, you are formally invited to attend our upcoming scheduled meeting. The meeting will be held on ${tFormattedDate} strictly at ${tFormattedTime}. The primary objective is to discuss the committee's strategic agenda, review ongoing projects, and plan future initiatives. Your input and active participation are highly anticipated and essential to our progress.`; break;
                case 't_celebration': msg += `🎉 *Subject: Request for Your Participation in Organizing the School Celebration*\nOur school is currently in the process of making extensive preparations for an upcoming, large-scale celebratory event. Recognizing your outstanding organizational skills and creativity, we would be honored to have your active assistance in the planning and execution phases. We invite you to join the organizing committee, where your contributions will undoubtedly help make this important occasion a resounding success for the entire school community.`; break;
                case 't_vacation_approval': msg += `✅ *Subject: Official Notification of Vacation/Leave Request Approval*\nWe are very pleased to formally notify you that your recent request for a leave of absence/vacation has been thoroughly reviewed and officially approved by the school administration. We hope you have a restful, enjoyable, and productive time away from work. We look forward to welcoming you back safely to the school family to continue your excellent and vital work with our students.`; break;
                case 't_vacation_rejection': msg += `❌ *Subject: Notice of Denial Regarding Your Vacation/Leave Request*\nWe sincerely regret to inform you that we are unable to approve your request for a leave of absence at this time. This difficult decision was made due to the current intense workload, the critical nature of the academic schedule, and the limited availability of substitute staff. We deeply appreciate your dedication and count on your understanding that this decision was made strictly in the best interest of the school's operational stability.`; break;
                case 't_evaluation': msg += `📊 *Subject: Notification Regarding Your Annual Performance Evaluation Report*\nWe would like to inform you that the comprehensive report detailing your annual professional performance evaluation has been finalized by the evaluation committee. We kindly request that you schedule a time to visit the administration office to review the detailed results, discuss the feedback provided, and identify your strengths as well as potential areas for future professional growth and development.`; break;
                case 't_warning': msg += `⚠️ *Subject: Formal Administrative Warning and Notice of Corrective Action*\nThis message constitutes a formal administrative warning regarding a specific issue related to your professional conduct, performance, or adherence to school guidelines. It is imperative that you take this notice with the utmost seriousness. We expect you to take immediate and effective corrective actions to resolve the highlighted issue, ensuring that it does not recur and that no further, more severe administrative measures become necessary.`; break;
                case 't_emergency': msg += `🚨 *Subject: CRITICAL EMERGENCY: Immediate Action Required*\nPlease contact the administration via phone immediately or report to the main office without a single moment of delay. An abrupt, critical, and highly sensitive emergency situation has developed that requires your immediate direct intervention, awareness, or decision-making. Your rapid response is absolutely vital to safely managing and resolving this urgent incident.`; break;
            }
        } else {
            msg = `تحية طيبة،\nترغب إدارة المدرسة بالتواصل معكم من خلال هذه الرسالة.\n`;
            msg += `نود مناقشة هذا الموضوع مع المعلم/ة: ${tName}.\n`;
            msg += `المادة: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *الموضوع: إشعار رسمي بغياب عن الدوام المدرسي*\nنأمل أن تكونوا بأتم الصحة والعافية. تود إدارة المدرسة إعلامكم بأنه قد تم تسجيل غيابكم عن الدوام المدرسي في السجلات الرسمية لهذا اليوم. نظراً للدور الحيوي الذي تقومون به في ضمان استمرارية واستقرار العملية التعليمية، فإن غيابكم يؤثر بشكل مباشر على خطة سير الدروس ومستوى تحصيل الطلاب. بناءً على ذلك، نرجو منكم التكرم بالتواصل مع الإدارة في أقرب وقت ممكن لتوضيح أسباب هذا الغياب، وتزويدنا بأي أعذار طبية أو رسمية مبررة إن وجدت، حتى يتسنى لنا تحديث السجلات واتخاذ الإجراءات الإدارية اللازمة.`; break;
                case 't_late': msg += `📌 *الموضوع: إشعار رسمي بالتأخر عن الحضور للدوام*\nتهديكم إدارة المدرسة أطيب التحيات. نلفت انتباهكم الكريم إلى أنه قد لوحظ تأخركم عن الحضور في الوقت الرسمي المحدد لبدء الدوام المدرسي. إن الالتزام الدقيق بالمواعيد يعتبر ركيزة أساسية لضمان سير الحصص الدراسية بانتظام وتوفير بيئة تعليمية منضبطة ومستقرة لطلابنا. نرجو منكم مراجعة قسم الإدارة لتوضيح أسباب هذا التأخير، ونأمل تعاونكم المستمر في الحفاظ على أوقات الدوام الرسمي لتجنب أي تأثير سلبي أو تأخير على الجدول الدراسي المعتمد.`; break;
                case 't_meeting': msg += `🤝 *الموضوع: دعوة رسمية لحضور اجتماع إداري هام*\nتدعوكم إدارة المدرسة بكل تقدير لحضور اجتماع إداري بالغ الأهمية، حيث سيتم خلاله مناقشة مجموعة من القضايا التربوية، الاستراتيجيات التعليمية، وسبل تطوير البيئة المدرسية. تقرر عقد الاجتماع بتاريخ ${tFormattedDate} في تمام الساعة ${tFormattedTime} بضبط. إن حضوركم ومشاركتكم الفعالة بآرائكم ومقترحاتكم القيمة يمثلان عنصراً حاسماً في إنجاح هذا الاجتماع والخروج بقرارات بناءة تخدم المصلحة العامة.`; break;
                case 't_duty': msg += `📋 *الموضوع: تذكير هام وضروري بمهام الإشراف والمناوبة*\nنود أن نذكركم بكل احترام بمهام الإشراف والمناوبة الموكلة إليكم بحسب الجدول الرسمي. من الضروري جداً التواجد الفعلي في الأماكن المخصصة لكم (كالساحات والممرات) لمراقبة سلوك الطلاب عن كثب. إن دوركم الإشرافي أساسي لضمان بيئة مدرسية آمنة، ومنع أي احتكاكات أو حوادث بين الطلاب، وتوفير جو من الطمأنينة والانضباط خلال أوقات الفسحة والاستراحة. نشكر التزامكم وحرصكم المستمر.`; break;
                case 't_thanks': msg += `🌟 *الموضوع: رسالة شكر وعرفان عميق على جهودكم المتميزة*\nتتقدم إدارة المدرسة بخالص الشكر وعظيم الامتنان لجهودكم المتواصلة، وتفانيكم اللامحدود، وحرصكم الأبوي والتربوي على مصلحة الطلاب. إن أساليبكم المبتكرة في التدريس وعطائكم الدائم يتركان أثراً إيجابياً وعميقاً في رفع المستوى العلمي والأخلاقي لطلابنا. نحن نشعر بفخر واعتزاز كبيرين لوجود كفاءات تعليمية مخلصة وملهمة مثلكم ضمن كادرنا، ونتمنى لكم دوام التوفيق والتألق.`; break;
                case 't_violation': msg += `⚠️ *الموضوع: إشعار بخصوص رصد مخالفة للوائح والأنظمة المدرسية*\nنأسف لإبلاغكم بأنه قد تم رصد ملاحظة أو تجاوز يتعلق ببعض اللوائح والسياسات المدرسية الرسمية المعتمدة. إن الحفاظ على النظام والالتزام بالتعليمات هو مسؤولية تضامنية لضمان بيئة عمل مهنية ومنضبطة. بناءً عليه، نرجو منكم التكرم بمراجعة مكتب الإدارة بتاريخ ${tFormattedDate} في الساعة ${tFormattedTime} لعقد جلسة نقاش شفافة حول هذا الموضوع، وفهم الحيثيات، والعمل معاً على ضمان عدم تكراره مستقبلاً.`; break;
                case 't_grades': msg += `📝 *الموضوع: تذكير عاجل بضرورة إدخال وتسليم درجات الطلاب*\nهذا تذكير عاجل وهام بضرورة الإسراع في رصد درجات الطلاب للتقييمات والامتحانات الأخيرة وتسليمها للإدارة أو إدخالها في النظام المعتمد في أسرع وقت. نظراً لاقتراب الموعد النهائي الصارم لإصدار النتائج والشهادات، فإن أي تأخير قد يعرقل سير العملية الإدارية بأكملها. نثمن عالياً سرعة استجابتكم وتعاونكم لإنجاز هذه المهمة الأساسية في الوقت المحدد.`; break;
                case 't_notice': msg += `🔔 *الموضوع: تنبيه إداري عاجل وهام يتطلب المراجعة*\nتود إدارة المدرسة إشعاركم بوجود موضوع مهني أو تربوي غاية في الأهمية يستدعي النقاش المباشر والسريع معكم. يرجى التكرم بالاتصال بالإدارة فور تلقيكم هذه الرسالة، أو مراجعة المكتب شخصياً في أقرب وقت فراغ متاح لكم، وذلك لاطلاعكم على التفاصيل الدقيقة ومناقشة الإجراءات الواجب اتخاذها لضمان سير العمل بالشكل الصحيح.`; break;
                case 't_exam_questions': msg += `📝 *الموضوع: طلب عاجل لتسليم أسئلة الامتحانات القادمة*\nنذكركم بضرورة الانتهاء من إعداد أسئلة الامتحانات المجدولة القادمة وتسليمها، مرفقة بنماذج الإجابة النموذجية المعتمدة، إلى الإدارة في أسرع وقت ممكن. إن التزامكم بالموعد المحدد أمر بالغ الأهمية ليتيح لنا الوقت الكافي للمراجعة، التنسيق، والطباعة بسرية تامة وتجهيز كافة المتطلبات قبل بدء فترة الامتحانات بوقت كافٍ لتجنب أي إرباك.`; break;
                case 't_lesson_plan': msg += `📖 *الموضوع: تذكير محوري حول إعداد وتسليم خطط الدروس*\nنود التأكيد بشدة على أهمية وضرورة إعداد خطط الدروس (اليومية والسنوية) الشاملة وتسليمها بانتظام للإدارة. إن خطة الدرس ليست مجرد متطلب إداري، بل هي أداة منهجية أساسية تضمن جودة الأداء التعليمي، وتسلسل الأفكار، وتقديم المادة العلمية بأفضل صورة للطلاب. نرجو العمل على إعدادها وتسليمها للمشرف المختص دون أي تأخير لضمان استمرار الجودة التعليمية.`; break;
                case 't_class_management': msg += `🗣️ *Subject / الموضوع: ملاحظات إدارية حول الإدارة والضبط الصفي*\nمن خلال جولات المتابعة الإدارية، تم تدوين بعض الملاحظات المتعلقة بمستوى الضبط والسيطرة على الصف، وحجم الضوضاء أثناء حصصكم الدراسية. إن البيئة الصفية المزعجة تؤثر سلباً على تركيز الطلاب وقدرتهم على الاستيعاب. نحثكم بقوة على تبني أساليب إدارة صفية أكثر حزماً وفعالية لخلق جو دراسي هادئ ومنظم، ونحن في الإدارة على أتم الاستعداد لتقديم أي دعم متاح لكم في هذا الصدد.`; break;
                case 't_parent_meeting': msg += `🤝 *الموضوع: تحديد موعد رسمي للقاء ولي أمر طالب*\nقامت الإدارة بتحديد موعد رسمي لعقد لقاء مع ولي أمر أحد الطلاب المسجلين في فصولكم، وذلك بهدف مناقشة التطور الأكاديمي للطالب، ومستوى تفاعله اليومي، وملاحظة أي سلوكيات تحتاج للتقويم. حضوركم ومشاركتكم في هذا اللقاء بتاريخ ${tFormattedDate} الساعة ${tFormattedTime} يعتبر أمراً إلزامياً، حيث أن ملاحظاتكم المهنية المباشرة هي حجر الزاوية في بناء خطة مشتركة وناجحة لدعم الطالب.`; break;
                case 't_training': msg += `🎓 *الموضوع: ترشيح رسمي للمشاركة في برنامج تدريبي للتطوير المهني*\nيسعدنا جداً أن نعلمكم بأنه قد تم اختياركم وترشيحكم رسمياً من قبل إدارة المدرسة للمشاركة في دورة تدريبية هامة مخصصة للتطوير المهني وتحديث المهارات التربوية. يعتبر هذا البرنامج فرصة ممتازة لاكتساب طرق تدريس حديثة ومبتكرة. الالتزام بالحضور في الزمان والمكان المحددين هو أمر إلزامي، حيث أن هذا الاستثمار في كفاءاتكم سينعكس إيجابياً عليكم وعلى مستوى المدرسة ككل.`; break;
                case 't_activity_supervision': msg += `🎭 *الموضوع: تكليف رسمي بالإشراف على نشاط مدرسي رئيسي*\nتتشرف إدارة المدرسة بتكليفكم بمهمة الإشراف المباشر والقيادة لأحد الأنشطة والفعاليات المدرسية الكبرى القادمة. نحن نضع ثقة كبيرة في قدراتكم التنظيمية، وروحكم القيادية، وحسن تواصلكم مع الطلاب. نرجو منكم أخذ زمام المبادرة وإدارة هذا النشاط بأعلى درجات العناية والاحترافية لضمان تنفيذه بشكل مثالي يترك أثراً ممتعاً ومفيداً في نفوس أبنائنا الطلاب.`; break;
                case 't_student_issue': msg += `⚠️ *الموضوع: استدعاء عاجل لمناقشة قضية حساسة تخص أحد الطلاب*\nنرجو منكم التفضل بزيارة مكتب الإدارة في أقرب وقت متاح لكم أو خلال فترة الفراغ القادمة مباشرة. توجد ضرورة ملحة لمناقشة قضية حساسة تتعلق بالجانب السلوكي، الأكاديمي، أو الشخصي لأحد الطلاب في صفكم. نهدف من هذا اللقاء إلى العمل معكم جنباً إلى جنب للوصول إلى حلول سريعة وجذرية وبناءة تصب في مصلحة الطالب وتحافظ على استقرار سير الدروس.`; break;
                case 't_excellent_performance': msg += `🌟 *الموضوع: إشادة رسمية وتقدير عالٍ للتميز في الأداء التدريسي*\nتعرب إدارة المدرسة عن فخرها واعتزازها الكبيرين لتقديم هذه الإشادة الرسمية بأدائكم التدريسي المتميز والراقي. إن تفانيكم الملحوظ، وتطبيقكم لاستراتيجيات تعليمية حديثة، واهتمامكم الصادق بمستوى الطلاب، هي أمور مقدرة جداً وتم رصدها بوضوح. جهودكم الجبارة تساهم بشكل مباشر في رفع اسم المدرسة عالياً، ونتمنى لكم استمرار هذا الإبداع والنجاح الباهر في مسيرتكم المهنية.`; break;
                case 't_leave_early': msg += `🚪 *الموضوع: إشعار رسمي بخصوص المغادرة المبكرة غير المصرح بها*\nلقد تم تسجيل ملاحظة رسمية تفيد بمغادرتكم لحرم المدرسة قبل انتهاء الوقت المخصص للدوام الرسمي وبدون الحصول على إذن أو تصريح مسبق. نؤكد لكم أن الالتزام التام بساعات العمل المحددة هو أمر إلزامي وحتمي لضمان استقرار العمل وعدم حدوث أي إرباك في سير اليوم الدراسي. نرجو منكم مراجعة الإدارة فوراً لتقديم توضيح ومبرر مقنع لسبب هذه المغادرة المبكرة.`; break;
                case 't_schedule_change': msg += `📅 *الموضوع: إشعار هام بخصوص إجراء تعديلات على جدول الحصص الخاص بكم*\nيرجى العلم بأنه، وبناءً على مقتضيات المصلحة العامة وإعادة تنظيم سير العمل وحصص المعلمين، فقد تم إجراء تعديلات ضرورية وحتمية على جدول حصصكم الأسبوعي. نرجو منكم التكرم بالتوجه إلى الإدارة أو الاطلاع على لوحة إعلانات المعلمين في أسرع وقت لاستلام الجدول المعدل الجديد، والبدء بالعمل بموجبه فوراً لتجنب أي تعارض في مواعيد الحصص.`; break;
                case 't_supplies': msg += `📦 *الموضوع: تحديث إداري بخصوص طلبكم للمستلزمات والأدوات الصفية*\nنحيطكم علماً بأننا استلمنا طلبكم الرسمي المتعلق بتوفير مجموعة من المستلزمات التعليمية والأدوات الخاصة بالصف. نود طمأنتكم بأن الإدارة تولي هذا الطلب أهمية قصوى وتعمل حالياً على تجهيزه وتوفير المواد المطلوبة بأ أعلى جودة ممكنة. سيتم تسليمكم هذه المستلزمات في أقرب وقت متاح لضمان عدم حدوث أي نقص يؤثر على جودة أدائكم للدروس.`; break;
                case 't_technology': msg += `💻 *الموضوع: توجيه وحث على تفعيل استخدام التقنيات والوسائل التعليمية الحديثة*\nفي إطار سعينا الدائم لتطوير العملية التعليمية وزيادة قدرة الطلاب على الاستيعاب والتفاعل، تحثكم الإدارة بقوة على توظيف التقنيات والوسائل الحديثة المتوفرة في المدرسة (كالشاشات التفاعلية الذكية، أجهزة العرض، ومعامل الحاسوب والعلوم) بأقصى حد ممكن ضمن دروسكم اليومية. إن دمج هذه التقنيات يساهم في خلق بيئة تعليمية جاذبة، متطورة، وأكثر فاعلية للطلاب.`; break;
                case 't_cooperation': msg += `🤝 *الموضوع: تقدير عميق لروح الفريق والتعاون البناء مع الزملاء*\nتود الإدارة أن تسلط الضوء وتقدم شكرها الجزيل على روح التعاون الإيجابية، والمبادرة، والعمل بروح الفريق الواحد التي تظهرونها دائماً مع زملائكم من المعلمين وكادر المدرسة. إن هذا التعاضد والانسجام الوظيفي هو حجر الأساس لبناء بيئة عمل صحية، محفزة، وناجحة، وهو ما ينعكس بشكل إيجابي ومباشر على استقرار المدرسة وتفوق أبنائنا الطلاب.`; break;
                case 't_committee': msg += `👥 *الموضوع: دعوة رسمية لحضور الاجتماع المقرر للجنة المدرسية*\nبصفتكم عضواً فاعلاً ومؤثراً في إحدى اللجان المدرسية الأساسية، نوجه لكم دعوة رسمية لحضور الاجتماع الدوري القادم للجنة، والذي سينعقد بإذن الله بتاريخ ${tFormattedDate} في تمام الساعة ${tFormattedTime} بدقة. سيتم خلال الاجتماع استعراض جدول الأعمال، تقييم المشاريع الحالية، ووضع الخطط المستقبلية. نؤكد على أهمية حضوركم ومشاركتكم بأفكاركم التي نعول عليها الكثير.`; break;
                case 't_celebration': msg += `🎉 *الموضوع: طلب الانضمام والمشاركة في تنظيم الاحتفالية المدرسية الكبرى*\nبدأت المدرسة تحضيراتها المكثفة لإقامة احتفالية كبرى ومناسبة هامة قريباً. ونظراً لما نعهده فيكم من كفاءة، إبداع، وقدرة متميزة على التنظيم، يسعدنا أن ندعوكم لتكونوا جزءاً من اللجنة التحضيرية والتنظيمية لهذه الفعالية. مشاركتكم وإشرافكم سيمثلان إضافة نوعية قوية ستساهم بالتأكيد في إخراج هذا الحفل بأبهى صوره ليكون ذكرى جميلة للجميع.`; break;
                case 't_vacation_approval': msg += `✅ *الموضوع: إشعار رسمي بالموافقة على طلب الإجازة المقدم*\nيسرنا جداً إبلاغكم بأنه بعد دراسة طلب الإجازة الذي تقدمتم به مؤخراً، فقد تمت الموافقة عليه رسمياً من قبل الإدارة المدرسية. نأمل أن تقضوا وقتاً ممتعاً، مريحاً، ومفيداً في قضاء حوائجكم خلال فترة إجازتكم. نحن في انتظار عودتكم بالسلامة لاستئناف عملكم الجليل ورسالتكم التربوية السامية التي نعتز بها ضمن أسرة المدرسة.`; break;
                case 't_vacation_rejection': msg += `❌ *الموضوع: اعتذار رسمي عن عدم إمكانية الموافقة على طلب الإجازة حالياً*\nنأسف بشدة لإعلامكم بأنه تعذر على الإدارة الموافقة على طلب الإجازة الخاص بكم في الوقت الراهن. لقد تم اتخاذ هذا القرار الصعب نظراً للضغط الهائل في العمل خلال هذه الفترة الحساسة من العام الدراسي، وعدم توفر العدد الكافي من الكوادر البديلة لتغطية حصصكم. نحن نقدر عالياً تفهمكم وتغليبكم لمصلحة الطلاب والمدرسة فوق كل اعتبار.`; break;
                case 't_evaluation': msg += `📊 *الموضوع: إشعار بصدور واستكمال تقرير تقييم الأداء المهني السنوي*\nنود إعلامكم بأن لجنة التقييم قد انتهت من إعداد التقرير الشامل الخاص بتقييم أدائكم المهني والتربوي لهذا العام. يرجى منكم التكرم بتحديد موعد لمراجعة الإدارة في أقرب وقت مناسب للاطلاع على النتائج المفصلة، مناقشة الملاحظات الإيجابية والتوجيهية، وبحث سبل تعزيز نقاط القوة لديكم والارتقاء بالمستوى المهني نحو الأفضل في المستقبل.`; break;
                case 't_warning': msg += `⚠️ *الموضوع: توجيه إنذار إداري تنبيهي رسمي يتطلب إجراءً تصحيحياً*\nتمثل هذه الرسالة إنذاراً وتوجيهاً إدارياً رسمياً يتعلق بوقوع خلل أو ملاحظة هامة تخص أدائكم المهني أو التزامكم بالضوابط واللوائح المدرسية. نؤكد على ضرورة التعامل مع هذا التنبيه بأقصى درجات الجدية والاهتمام، ونطالبكم بالعمل الفوري على اتخاذ إجراءات تصحيحية سريعة لتفادي تكرار هذا الخلل، وتجنباً للجوء الإدارة إلى اتخاذ تدابير إدارية أو قانونية أكثر صرامة مستقبلاً.`; break;
                case 't_emergency': msg += `🚨 *الموضوع: حالة طوارئ قصوى وعاجلة جداً - مطلوب التدخل الفوري*\nيرجى القيام بالاتصال الفوري والسريع بالإدارة أو التوجه ركضاً إلى المكتب دون تأخير ولو لدقيقة واحدة. لقد طرأت حالة طوارئ بالغة الخطورة أو موقف حرج جداً وغير متوقع يتطلب حضوركم الشخصي، انتباهكم الفوري، وتدخلكم المباشر والسريع للمساعدة في السيطرة على الموقف وحله بشكل آمن وسليم لتجنب أي تداعيات خطيرة.`; break;
            }
        }
        if (isKu) {
            msg += `\n\nدگەل رێز و سڵاڤان،\n*کارگێڕیا قوتابخانێ*`;
        } else if (isEn) {
            msg += `\n\nWith respect and regards,\n*School Administration*`;
        } else {
            msg += `\n\nمع الاحترام والتقدير،\n*إدارة المدرسة*`;
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
        msg = `سلاڤ و رێز،\nکارگێڕیا قوتابخانێ دڤێت پەیوەندیێ ب هەوە بکەت وەک هەڤپشکێن مە د رێکا پەروەردەیی دا.\n`;
        msg += `مە دڤێت هەوە ئاگەهدار بکەین ل دۆر قوتابی: ${name}\n`;
        msg += `قۆناغا خواندنێ: پۆلا ${sClass} - هۆبەیا (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *بابەت: ئاگەهدارییا نەهاتنێ*\nمە د تۆمارێن ئامادەبوونێ دا تێبینی کرییە کو قوتابیێ ناڤبری بێی ئەگەرەکێ پەسەندکری یان نوژداری گەلەک نەهاتییە دەوامێ.\nژبەر گرنگییا پێگیرییێ ب ئامادەبوونێ و کارتێکرنا وێ لسەر ئاستێ زانستی، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا ڤی بابەتی.`;
                break;
            case 'badBehavior':
                msg += `📌 *بابەت: ئاگەهدارییا رەفتارا خراب*\nرەفتارەکا نەگونجای ژ لایێ قوتابیێ ناڤبری ڤە هاتییە تۆمارکرن.\nئەم ل کارگێڕیا قوتابخانێ گرنگییەکا مەزن ددەینە سەر راستڤەکرنا رەفتارێن قوتابییان دگەل فێرکرنا وان.\nلەوما، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا رێکارێن پەروەردەیی یێن پێدڤی.`;
                break;
            case 'lowGrades':
                msg += `📌 *بابەت: ئاگەهدارییا نزمبوونا ئاستێ زانستی*\nب رێکا دیڤچوونا هەلسەنگاندنان، مە تێبینی کرییە کو ئاستێ خواندنا قوتابی د ڤی دەمێ دووماهییێ دا داکەفتییە.\nژبەر خەمخۆرییا مە بۆ پاشەرۆژا قوتابی، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنێ ل دۆر باشترکرنا ئاستێ وی یێ زانستی.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *بابەت: دەستخۆشی ل سەر رەفتارا باش*\nکارگێڕیا قوتابخانێ گەلەک یا کەیفخۆشە کو شانازییێ ب قوتابیێ ناڤبری دکەت، ژبەر کو خودان رەفتارەکا باش و رەوشتەکێ بەرزە و پێگیرە ب یاسایێن قوتابخانێ.\nئەڤ پێگیرییە ب روونی پەروەردا هەوە یا باش ددەتە دیارکرن. سوپاس بۆ بزاڤێن هەوە و ئەم هیڤییا سەرکەفتنێ بۆ قوتابیی دخوازین.`;
                break;
            case 'highGrades':
                msg += `🎓 *بابەت: پیرۆزباهی بۆ سەرکەفتنا زانستی*\nجوانترین پیرۆزباهییان ئاراستەی هەوە دکەین ب هەلکەفتا سەرکەفتنا زانستی و نمرەیێن بلند یێن کو قوتابیێ ناڤبری ب دەستڤە ئیناین.\nئەڤ پێشکەفتنە بەرهەمێ بزاڤ و ماندیبوونا وی یا شەڤ و رۆژە، و بەرهەمێ پالپشتییا هەوە یە. کارگێڕیا قوتابخانێ گەلەک شانازییێ پێ دکەت و هیڤییا سەرکەفتنێن پتر بۆ دخوازین.`;
                break;
            case 'fight':
                msg += `⚠️ *بابەت: گازیکرن ب ئەگەرێ شەڕکرنێ*\nگەلەک ب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری تووشی شەڕی بوویە دگەل هەڤالێن خۆ د ناڤ قوتابخانێ دا.\nل دویڤ رێنمایێن قوتابخانێ، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ زانینا ئەگەرێن ئاریشێ و بەحسکرنا رێکارێن پێدڤی.`;
                break;
            case 'reward':
                msg += `🏆 *بابەت: ئاگەهدارییا خەلاتکرنێ*\nب شانازی ڤە، ئەم گەلەک کەیفخۆشین کو هەوە ئاگەهدار بکەین ب بڕیارا خەلاتکرنا قوتابیێ ناڤبری وەک رێزگرتن ل بزاڤ، پێشکەفتن، و پشکدارییا وی یا چالاک.\nئەم شانازییێ ب هەبوونا قوتابیێن ڤی ئاستی د قوتابخانا خۆ دا دکەین، و ئەم هیڤیدارین ئەڤ خەلاتە ببیتە هاندەرەک بۆ پێشکەفتنێن پتر.`;
                break;
            case 'meeting':
                msg += `🤝 *بابەت: داخوازیا کۆمبوونێ*\nژبەر بەرژەوەندییا قوتابیێ ناڤبری و پەیداکرنا باشترین ژینگەها هاریکار بۆ وی، هیڤیدارین سەرەدانا قوتابخانێ بکەن بۆ کۆمبوونەکا تایبەت ل دۆر چەند بابەتێن گرنگ یێن پەروەردەیی.\nدەمێ پێشنیارکری بۆ کۆمبوونێ: ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.\nهیڤییە ئامادەبوونا خۆ پەسەند بکەن یان پەیوەندیێ ب مە بکەن بۆ دەستنیشانکرنا دەمەکێ دی یێ گونجای. سوپاس بۆ هەڤکارییا هەوە.`;
                break;
            case 'late':
                msg += `📌 *بابەت: ئاگەهدارییا درەنگ هاتنێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری چەندین جاران درەنگ هاتییە دەوامێ بێی ئەگەرەکێ پەسەندکری.\nژبەر گرنگییا ئامادەبوونا وانەیێ ژ دەستپێکێڤە، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ چارەسەرکرنا ڤێ کێشەیێ.`;
                break;
            case 'homework':
                msg += `📌 *بابەت: ئەنجام نەدانا ئەرکێن مال*\nمە تێبینی کرییە کو قوتابیێ ناڤبری د ڤی دەمێ دووماهییێ دا ئەرکێن خۆ یێن مال چێنەکرینە.\nپێگیرینەکرن ب ئەرکێن مال کاریگەرییا راستەوخۆ لسەر ئاستێ زانستی یێ قوتابی هەیە، هیڤیدارین دیڤچوونێ بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'phone':
                msg += `⚠️ *بابەت: ئینانا مۆبایلێ بۆ قوتابخانێ*\nوەک هوین دزانن، ئینانا مۆبایلا زیرەک بۆ ناڤ قوتابخانێ قەدەغە یە د رێنمایێن پەروەردەیی دا.\nمە مۆبایلێن قوتابیێ ناڤبری ژێ وەرگرتییە. هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ وەرگرتنا مۆبایلێ و بەحسکرنا ڤی بابەتی.`;
                break;
            case 'uniform':
                msg += `📌 *بابەت: نەپێگیری ب جلوبەرگێن پێدڤی*\nقوتابیێ ناڤبری پێگیری ب جلوبەرگێن فەرمی یێن قوتابخانێ نەکرییە.\nپێگیریکرن ب جلوبەرگان بەشەکە ژ یاسایێن پەروەردێ و قوتابخانێ، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ دیڤچوونا ڤی بابەتی.`;
                break;
            case 'cheating':
                msg += `⚠️ *بابەت: ئاگەهدارییا کۆپیکرن (غشکرن)*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری د دەمێ ئەنجامدانا ئەزموونێ دا کۆپیکرن (غش) کرییە.\nئەڤ رەفتارە دژی رێنمایێن پەروەردێ و قوتابخانێ یە، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا رێکارێن هاتینە وەرگرتن.`;
                break;
            case 'vandalism':
                msg += `⚠️ *بابەت: تێکدانا کەلوپەلێن قوتابخانێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری هندەک ژ کەلوپەلێن قوتابخانێ خراپکرینە.\nپاراستنا سامانێ گشتی ئەرکێ هەمووانە، هیڤیدارین هوین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ چارەسەرکرنا ڤی بابەتی و قەرەبووکرنا زیانان.`;
                break;
            case 'truancy':
                msg += `⚠️ *بابەت: رەڤین ژ قوتابخانێ*\nئاگەهدارییا هەوە دکەین کو قوتابیێ ناڤبری ژ قوتابخانێ یان ژ وانەیان رەڤییە.\nئەڤ رەفتارە مەترسییێ لسەر پاراستن و ئاستێ زانستی یێ قوتابی دروست دکەت، هیڤیدارین ب زووترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'books':
                msg += `📌 *بابەت: نەئینانا پەرتووکێن خواندنێ*\nقوتابیێ ناڤبری چەندین جاران پەرتووک و دەفتەرێن خۆ یێن پێدڤی بۆ قوتابخانێ نەئیناینە.\nئەڤ چەندە دبیتە رێگر ل پێشییا تێگەهشتنا وی بۆ وانەیان، هیڤیدارین دیڤچوونێ بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'bullying':
                msg += `⚠️ *بابەت: زۆرداری کرن*\nئاگەهدارییا هەوە دکەین کو قوتابیێ ناڤبری زۆرداری ل هەڤالێن خۆ کرییە.\nئەم ل قوتابخانێ ب چ رەنگان ڤان رەفتاران پەسەند ناکەین، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا ڤی بابەتی ب رژدی.`;
                break;
            case 'sleeping':
                msg += `📌 *بابەت: نڤستن و بێ ئاگەهی ل پۆلێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری د دەمێ وانەیان دا دنڤیت یان گەلەک یێ بێ ئاگەهە.\nئەڤ چەندە کارتێکرنێ ل تێگەهشتنا وی دکەت، هیڤیدارین دیڤچوونا دەمێ خەوا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'hygiene':
                msg += `📌 *بابەت: تێبینی لسەر پاقژییا قوتابی*\nب رێزڤە مە دڤێت سەرنجا هەوە رابکێشین کو پێدڤییە قوتابیێ ناڤبری پتر گرنگییێ ب پاقژییا خۆ یا کەسی و جلوبەرگێن خۆ بدەت.\nپاقژی بەشەکێ گرنگە ژ ساخلەمی و ژینگەها قوتابخانێ، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} ژ بۆ پتر دیڤچوونا بابەتی. سوپاس بۆ هەڤکارییا هەوە.`;
                break;
            case 'profanity':
                msg += `⚠️ *بابەت: بکارئینانا ئاخفتنێن نەجوان و کرێت*\nئاگەهدارییا هەوە دکەین کو قوتابیێ ناڤبری ئاخفتنێن نەجوان و کرێت و نەگونجای دگەل رەوشتی بکارئیناینە.\nئەڤ رەفتارە ب تەمامی نەیا پەسەندکرییە، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ راستڤەکرنا ڤێ رەفتارێ.`;
                break;
            case 'smoking':
                msg += `⚠️ *بابەت: جگارە کێشان ل قوتابخانێ*\nب مخابنی ڤە هەوە ئاگەهدار دکەین کو قوتابیێ ناڤبری هاتییە دیتن ل دەمێ کێشانا جگارێ ل ناڤ قوتابخانێ.\nئەڤ رەفتارە مەترسییەکە لسەر ساخلەمییا وی و دژی رێنمایێن پەروەردێ و قوتابخانێ نە. هیڤیدارین ب زووترین دەم سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'leave_early':
                msg += `⚠️ *بابەت: دەرکەفتن بەری ب دووماهی هاتنا خواندنێ*\nقوتابیێ ناڤبری بێی دەستویرییا کارگێڕیێ قوتابخانە بجهـ هێلتییە بەری کو خواندن ب دووماهی بهێت.\nئەڤ چەندە مەترسییێ لسەر پاراستنا وی دروست دکەت، هیڤیدارین سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'participation':
                msg += `📌 *بابەت: لاوازیا پشکداریکرنێ د وانەیێ دا*\nمامۆستایێن قوتابیێ ناڤبری تێبینی کرینە کو پشکدارییا وی د وانەیان دا گەلەک یا لاوازە.\nئەڤە کارتێکرنێ ل ئاستێ وی یێ زانستی دکەت، هیڤیدارین پالپشتییا وی بکەن و سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'forbidden':
                msg += `⚠️ *بابەت: ئینانا تشتێن قەدەغەکری*\nئاگەهدارییا هەوە دکەین کو ئینانا تشتێن قەدەغەکری یێن کو نابیت بهێنە د ناڤ قوتابخانێ دا ل دەف قوتابیێ ناڤبری هاتینە دیتن.\nئەڤە دژی یاسایێن پەروەردێ و قوتابخانێ یە، هیڤیدارین ب لەز سەرەدانا قوتابخانێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'health':
                msg += `🏥 *بابەت: تێکچوونا ساخلەمییێ*\nمە دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری تووشی نەخۆشییەکێ یان تێکچوونەکا ساخلەمییێ بوویە د ناڤ قوتابخانێ دا.\nهیڤیدارین ب زووترین دەم سەرەدانا مە بکەن یان پەیوەندیێ پێڤە بکەن بۆ پشتڕاستبوون ژ رەوشا وی.`;
                break;
            case 'trip':
                msg += `🚌 *بابەت: گەشتا زانستی*\nقوتابخانە دێ رابیت ب رێکخستنا گەشتەکا زانستی و گەشتیاری.\nداخوازا پەسەندکرنا هەوە دکەین بۆ پشکداریکرنا قوتابیێ ناڤبری د ڤێ گەشتێ دا. ئەڤ گەشتە دێ هێتە ئەنجامدان ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}. هیڤیدارین پەیوەندیێ ب کارگێڕیێ بکەن.`;
                break;
            case 'fees':
                msg += `💰 *بابەت: پارەیێ قوتابخانێ*\nمە دڤێت هەوە ئاگەهدار بکەین ل سەر درەنگ کەفتنا دانا پارەیێ قوتابخانێ یێن پێدڤی لسەر قوتابیێ ناڤبری.\nهیڤیدارین ب زووترین دەم سەرەدانا بەشێ ژمێریارییێ بکەن.`;
                break;
            case 'parent_council':
                msg += `👥 *بابەت: جڤاتا سمیانان*\nمە دڤێت هەوە داخاز بکەین بۆ ئامادەبوون د کۆمبوونا جڤاتا سمیانان دا.\nپشکدارییا هەوە د بەحسکرنا رەوشا قوتابییان دا گەلەک گرنگە، هیڤیدارین ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} ئامادە بن.`;
                break;
            case 'exam_schedule':
                msg += `📅 *بابەت: خشتەیێ ئەزموونان*\nمە دڤێت هەوە ئاگەهدار بکەین کو خشتەیێ ئەزموونێن داهاتی هاتیە بەلاڤکرن.\nهیڤیدارین پالپشتییا قوتابیێ ناڤبری بکەن بۆ خوەئامادەکرنەکا باش.`;
                break;
            case 'document_missing':
                msg += `📄 *بابەت: کێماسی د بەلگەنامەیان دا*\nهندەک کێماسی د بەلگەنامەیێن پێدڤی یێن قوتابیێ ناڤبری دا هەنە (وەک وێنە یان ناسنامە).\nهیڤیدارین ب زووترین دەم ڤان بەلگەنامەیان بۆ کارگێڕیا قوتابخانێ دابین بکەن.`;
                break;
            case 'excellent_project':
                msg += `💡 *بابەت: پرۆژەیێ نایاب*\nئەم سوپاسییا هەوە و قوتابیێ ناڤبری دکەین بۆ ئەنجامدانا پرۆژەیەکێ زانستی یان هونەری یێ گەلەک نایاب.\nئەڤ بەرهەمە نیشانا ژێهاتیبوونێ یە، دەستخۆشیێ لێ دکەین.`;
                break;
            case 'activity':
                msg += `🎭 *بابەت: پشکداریکرن د چالاکیەکێ دا*\nمە دڤێت هەوە ئاگەهدار بکەین کو قوتابیێ ناڤبری هاتیە دەستنیشانکرن بۆ پشکداریکرن د چالاکیەکا قوتابخانێ دا.\nپالپشتییا هەوە دێ بیتە هاندەرەک مەزن بۆ وی.`;
                break;
            case 'late_pickup':
                msg += `🚗 *بابەت: درەنگ وەرگرتنا قوتابی*\nتێبینی هاتیە کرن کو هوین گەلەک جاران درەنگ دهێن بۆ وەرگرتنا قوتابیێ ناڤبری پشتی دووماهی هاتنا خواندنێ.\nهیڤیدارین پێگیرییێ ب دەمێ دووماهی هاتنا خواندنێ بکەن ل پێخەمەت پاراستنا وی.`;
                break;
            case 'bus_issue':
                msg += `🚐 *بابەت: کێشە د ڤەگوهاستنێ دا*\nئاگەهدارییا هەوە دکەین کو تێبینی یان کێشەیەک ل دۆر ڤەگوهاستنا قوتابیێ ناڤبری هەیە.\nهیڤیدارین پەیوەندیێ ب شوفێرێ هێلێ یان کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'forgot_id':
                msg += `📌 *بابەت: نەپێڤەکرنا ناسنامەیا قوتابخانێ*\nمە تێبینی کرییە کو قوتابیێ ناڤبری بێی ناسنامەیا قوتابخانێ هاتییە دەوامێ.\nپێڤەکرنا ناسنامەیێ پێدڤییە بۆ نیاسین و پاراستنا قوتابییان، هیڤیدارین دیڤچوونێ بکەن.`;
                break;
            case 'disrespect_teacher':
                msg += `⚠️ *بابەت: رێزنەگرتنا مامۆستای*\nب مخابنی ڤە، قوتابیێ ناڤبری رەفتارەکا نەگونجای دگەل مامۆستایێ خۆ کرییە.\nرێزگرتن ژ مامۆستایان لایەنەکێ گرنگێ پەروەردەیێ یە، هیڤیدارین سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            case 'lack_focus':
                msg += `📌 *بابەت: کێم تەرکیزی د وانەیان دا*\nمامۆستایێن قوتابیێ ناڤبری تێبینی کرینە کو تەرکیزا وی د پۆلێ دا یا کێمە و مژوولی تشتێن دی یە.\nهیڤیدارین دیڤچوونا رەوشا وی یا خواندنێ بکەن دا کو ئاستێ وی باشتر ببیت.`;
                break;
            case 'eating_in_class':
                msg += `📌 *بابەت: خوارن د ناڤ پۆلێ دا*\nقوتابیێ ناڤبری د دەمێ وانەیێ دا خوارن یان ڤەخوارن خوارینە کو ئەڤە قەدەغە یە.\nهیڤیدارین شیرەتان لێ بکەن کو رێزێ ل دەمێ وانەیێ بگریت.`;
                break;
            case 'chewing_gum':
                msg += `📌 *بابەت: جووینا بنیشتی*\nتێبینی هاتییە کرن کو قوتابیێ ناڤبری د ناڤ پۆلێ دا بنیشت جوویە، کو پێچەوانەیی یاسایێن پۆلێ یە.\nهیڤیدارین پالپشتییا وی بکەن بۆ پێگیریکرن ب رێنمایان.`;
                break;
            case 'failing_exam':
                msg += `⚠️ *بابەت: دەرنەچوون د ئەزموونێ دا*\nب مخابنی ڤە ئەنجامێن ئەزموونا قوتابیێ ناڤبری د ئاستێ پێدڤی دا نەبوون و دەرنەچوویە.\nهیڤیدارین سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} بۆ بەحسکرنا رەوشا وی یا زانستی.`;
                break;
            case 'damaging_books':
                msg += `⚠️ *بابەت: تێکدانا پەرتووکان*\nقوتابیێ ناڤبری پەرتووکێن قوتابخانێ یێن پێ هاتینە دان تێکداینە یان دڕاندینە.\nهیڤیدارین هوشیاریێ بدەنە وی ل سەر پاراستنا کەلوپەلێن خواندنێ.`;
                break;
            case 'makeup_accessories':
                msg += `📌 *بابەت: بکارئینانا تشتێن نەگونجای*\nقوتابیێ ناڤبری بکارئینانا مکیاجی یان تشتێن جوانکارییێ کرییە کو دژی یاسایێن جلوبەرگان و پەروەردەیی نە د ناڤ قوتابخانێ دا.\nهیڤیدارین دیڤچوونێ بکەن.`;
                break;
            case 'hallway_noise':
                msg += `📌 *بابەت: دروستکرنا دەنگەدەنگێ د مەمەڕان دا*\nقوتابیێ ناڤبری د دەمێ وانەیان دا یان ل بێهنڤەدانێ دەنگەدەنگەکا زێدە د مەمەڕان دا دروست کرییە کو بوویە ئەگەرێ بێزارکرنا پۆلێن دی.\nهیڤیدارین پێگیریێ ب ئارامییێ بکەت.`;
                break;
            case 'leave_class_no_permission':
                msg += `⚠️ *بابەت: دەرکەفتن ژ پۆلێ بێی دەستویریێ*\nقوتابیێ ناڤبری د دەمێ وانەیێ دا بێی دەستویرییا مامۆستای ژ پۆلێ دەرکەفتییە.\nئەڤ رەفتارە نەیا پەسەندکرییە، هیڤیدارین سەرەدانا مە بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
                break;
            default:
                msg += `نامەیەک ژ قوتابخانێ ل دۆر قوتابی.`;
        }

        msg += `\n\nدگەل رێز و سڵاڤان،\n*کارگێڕیا قوتابخانێ*`;
    } else if (isEn) {
        msg = `Greetings and respect,\nThe school administration wishes to contact you as our partners in the educational process.\n`;
        msg += `We would like to inform you regarding the student: ${name}\n`;
        msg += `Educational Level: Grade ${sClass} - Section (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *Subject: Notice of Absence*\nWe have noticed in the attendance records that the aforementioned student has been absent frequently without an acceptable or medical excuse.\nGiven the importance of committing to attendance and its direct impact on their academic level, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss this matter and find a suitable solution.`;
                break;
            case 'badBehavior':
                msg += `📌 *Subject: Notice of Bad Behavior*\nInappropriate behavior has been recorded by the aforementioned student.\nWe at the school administration attach great importance to correcting students' behaviors alongside their education, as good manners are the foundation of learning.\nTherefore, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss the necessary educational measures to guide them properly.`;
                break;
            case 'lowGrades':
                msg += `📌 *Subject: Notice of Academic Decline*\nThrough the continuous follow-up of evaluations and exams, we have noticed that the student's academic level has declined recently.\nOut of our deep concern for the student's future and educational journey, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss ways of improving their academic performance.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *Subject: Commendation for Good Behavior*\nThe school administration is very pleased and proud of the aforementioned student, as they exhibit excellent behavior, high morals, and strict adherence to the school rules.\nThis remarkable commitment clearly reflects your good upbringing and continuous support. Thank you for your efforts, and we wish the student continued success and brilliance.`;
                break;
            case 'highGrades':
                msg += `🎓 *Subject: Congratulations on Academic Excellence*\nWe send our warmest congratulations to you on the occasion of the outstanding academic success and high grades achieved by the aforementioned student.\nThis remarkable progress is the fruit of their continuous efforts and hard work, as well as the fruit of your unwavering support. The school administration is very proud of them and wishes them even more success.`;
                break;
            case 'fight':
                msg += `⚠️ *Subject: Summons Due to an Altercation*\nWe regret to inform you that the aforementioned student got into an altercation with their peers inside the school premises.\nAccording to the school's strict guidelines regarding student safety and discipline, we request that you visit the school on ${formattedDate} at ${formattedTime} to understand the causes of this issue and discuss the necessary disciplinary measures.`;
                break;
            case 'reward':
                msg += `🏆 *Subject: Reward Notification*\nWith great pride, we are very pleased to inform you of the decision to reward the aforementioned student in appreciation of their continuous efforts, academic progress, and active participation.\nWe are proud to have students of this high caliber in our school, and we hope this reward will serve as a strong incentive for even more progress and excellence.`;
                break;
            case 'meeting':
                msg += `🤝 *Subject: Request for a Parent-Teacher Meeting*\nFor the benefit of the aforementioned student and to ensure we provide the best supportive educational environment for them, we invite you to visit the school for a special meeting regarding some important educational matters.\nThe proposed time for this meeting is on ${formattedDate} at ${formattedTime}.\nPlease confirm your attendance or contact us to arrange another suitable time. Thank you for your continued cooperation.`;
                break;
            case 'late':
                msg += `📌 *Subject: Notice of Frequent Late Arrivals*\nWe have noticed that the aforementioned student has arrived late to school several times recently without an acceptable excuse.\nGiven the utmost importance of attending classes from the very beginning to ensure full comprehension, we hope you visit the school on ${formattedDate} at ${formattedTime} to address and resolve this issue.`;
                break;
            case 'homework':
                msg += `📌 *Subject: Neglect of Homework Assignments*\nWe have noticed that the aforementioned student has repeatedly failed to complete their homework assignments recently.\nConsistently completing homework has a direct and significant impact on the student's academic understanding and level. Therefore, we hope you follow up on this matter and visit the school on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'phone':
                msg += `⚠️ *Subject: Bringing a Mobile Phone to School*\nAs you are aware, bringing a smartphone into the school premises is strictly prohibited according to our educational guidelines.\nWe have confiscated the aforementioned student's phone. We request that you visit the school on ${formattedDate} at ${formattedTime} to receive the phone and discuss this matter further.`;
                break;
            case 'uniform':
                msg += `📌 *Subject: Non-compliance with School Uniform*\nThe aforementioned student has not complied with the official and required school uniform.\nAdhering to the school uniform is an essential part of our disciplinary rules and educational environment. We hope you visit the school on ${formattedDate} at ${formattedTime} to follow up on this matter.`;
                break;
            case 'cheating':
                msg += `⚠️ *Subject: Notice of Academic Dishonesty (Cheating)*\nWe regret to inform you that the aforementioned student was caught cheating during an exam.\nThis behavior strongly violates the school's educational guidelines and academic integrity. We request that you visit the school on ${formattedDate} at ${formattedTime} to discuss the disciplinary measures that will be taken.`;
                break;
            case 'vandalism':
                msg += `⚠️ *Subject: Damaging School Property*\nWe have noticed that the aforementioned student has caused damage to some of the school's property and facilities.\nProtecting public school property is everyone's duty and responsibility. We hope you visit the school on ${formattedDate} at ${formattedTime} to resolve this matter and arrange compensation for the damages.`;
                break;
            case 'truancy':
                msg += `⚠️ *Subject: Truancy / Skipping Classes*\nWe regret to inform you that the aforementioned student has skipped classes or fled from the school premises during school hours.\nThis behavior poses a serious risk to the student's safety and negatively affects their academic level. We urge you to visit the school as soon as possible on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'books':
                msg += `📌 *Subject: Failure to Bring Textbooks and Materials*\nThe aforementioned student has repeatedly failed to bring their required textbooks and notebooks to school.\nThis continuous neglect becomes a major obstacle to their understanding of the lessons and classroom participation. We hope you follow up on this and visit the school on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'bullying':
                msg += `⚠️ *Subject: Incident of Bullying*\nWe inform you that the aforementioned student has engaged in bullying behavior towards their peers.\nWe do not tolerate such behaviors in any form within our school environment, as we strive for a safe space for everyone. We request that you visit the school on ${formattedDate} at ${formattedTime} to seriously discuss this matter.`;
                break;
            case 'sleeping':
                msg += `📌 *Subject: Sleeping and Lack of Attention in Class*\nTeachers have noticed that the aforementioned student frequently sleeps or is highly inattentive during classes.\nThis lack of focus severely affects their academic comprehension. We hope you monitor their sleeping schedule at home and visit the school on ${formattedDate} at ${formattedTime} to discuss this.`;
                break;
            case 'hygiene':
                msg += `📌 *Subject: Notice Regarding Personal Hygiene*\nWith all due respect, we would like to draw your attention to the fact that the aforementioned student needs to pay closer attention to their personal hygiene and the cleanliness of their clothes.\nPersonal hygiene is an important aspect of a student's health and contributes to a healthy school environment. We appreciate your understanding and cooperation.`;
                break;
            case 'profanity':
                msg += `⚠️ *Subject: Use of Inappropriate Language*\nWe regret to inform you that the aforementioned student has used bad, offensive, and inappropriate language that contradicts our moral standards.\nThis behavior is completely unacceptable in our educational institution. We hope you visit the school on ${formattedDate} at ${formattedTime} to help correct this behavior.`;
                break;
            case 'smoking':
                msg += `⚠️ *Subject: Smoking on School Premises*\nWe deeply regret to inform you that the aforementioned student was caught smoking inside the school premises.\nThis behavior poses a severe risk to their health and is a strict violation of school guidelines. We urge you to visit the school immediately on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'leave_early':
                msg += `⚠️ *Subject: Leaving School Before Dismissal*\nThe aforementioned student left the school premises before classes ended, without obtaining permission from the administration.\nThis unapproved departure creates a significant risk to their safety and well-being. We request that you visit the school on ${formattedDate} at ${formattedTime} to address this serious issue.`;
                break;
            case 'participation':
                msg += `📌 *Subject: Weak Classroom Participation*\nThe teachers of the aforementioned student have noticed that their participation and engagement during classes are very weak.\nActive participation is crucial for academic growth and understanding. We hope you encourage and support them, and visit the school on ${formattedDate} at ${formattedTime} to discuss how we can help.`;
                break;
            case 'forbidden':
                msg += `⚠️ *Subject: Bringing Prohibited Items*\nWe inform you that prohibited items, which are strictly forbidden on school grounds, were found in the possession of the aforementioned student.\nThis is a direct violation of our safety and security rules. We request that you visit the school urgently on ${formattedDate} at ${formattedTime} to resolve this matter.`;
                break;
            case 'health':
                msg += `🏥 *Subject: Health Emergency / Illness*\nWe would like to inform you that the aforementioned student has suffered an illness or a health-related issue while at school.\nTheir well-being is our priority. We hope you visit us as soon as possible or contact the administration immediately to check on their condition and take necessary actions.`;
                break;
            case 'trip':
                msg += `🚌 *Subject: Upcoming Scientific/Leisure Trip*\nThe school is organizing an upcoming scientific and leisure trip to enhance the students' learning experience.\nWe kindly ask for your official approval for the aforementioned student to participate in this educational trip. Please contact the administration for more details and to provide your consent.`;
                break;
            case 'fees':
                msg += `💰 *Subject: Overdue School Fees*\nWe would like to kindly remind you of the delay in paying the required school tuition fees for the aforementioned student.\nTo ensure the smooth continuation of our educational services, we hope you visit the accounting department as soon as possible to settle the outstanding balance.`;
                break;
            case 'parent_council':
                msg += `👥 *Subject: Invitation to Parents' Council Meeting*\nWe are honored to invite you to attend the upcoming Parents' Council meeting.\nYour active participation and insights in discussing the students' educational environment are highly valued. We hope you can attend on ${formattedDate} at ${formattedTime}.`;
                break;
            case 'exam_schedule':
                msg += `📅 *Subject: Upcoming Exam Schedule*\nWe would like to inform you that the schedule for the upcoming examinations has been officially distributed to the students.\nWe hope you provide the necessary support and a quiet environment for the aforementioned student to ensure good preparation and excellent results.`;
                break;
            case 'document_missing':
                msg += `📄 *Subject: Missing Required Documents*\nUpon reviewing our files, we noticed that there are some missing required documents for the aforementioned student (such as personal photos or ID copies).\nWe kindly request that you provide these missing documents to the school administration as soon as possible to complete their official file.`;
                break;
            case 'excellent_project':
                msg += `💡 *Subject: Commendation for an Excellent Project*\nWe extend our deepest thanks to you and the aforementioned student for submitting a highly creative and excellent scientific or artistic project.\nThis outstanding work is a clear sign of proficiency and dedication. We highly commend their efforts and encourage them to keep up the great work.`;
                break;
            case 'activity':
                msg += `🎭 *Subject: Selection for a School Activity*\nWe are delighted to inform you that the aforementioned student has been specially selected to participate in an upcoming school activity/event.\nYour encouragement and support will serve as a great incentive for them to excel and showcase their talents. We look forward to their participation.`;
                break;
            case 'late_pickup':
                msg += `🚗 *Subject: Notice Regarding Late Pickup*\nIt has been repeatedly noticed that you arrive late to pick up the aforementioned student after the official school dismissal time.\nFor the sake of the student's safety and to allow our staff to conclude their duties, we kindly hope you adhere strictly to the class end times.`;
                break;
            case 'bus_issue':
                msg += `🚐 *Subject: Transportation / Bus Issue*\nWe are reaching out to inform you that there is an observation or a specific issue regarding the daily transportation and bus routine of the aforementioned student.\nWe kindly request that you contact the line driver or the school administration on ${formattedDate} at ${formattedTime} to clarify and resolve this matter.`;
                break;
            case 'forgot_id':
                msg += `📌 *Subject: Failure to Wear School ID*\nWe have noticed that the aforementioned student has been coming to school without wearing their official school ID badge.\nWearing the ID is a mandatory security measure necessary for identifying and protecting all students. We hope you follow up on this to ensure their compliance.`;
                break;
            case 'disrespect_teacher':
                msg += `⚠️ *Subject: Disrespectful Behavior Towards a Teacher*\nRegrettably, we must inform you that the aforementioned student has behaved inappropriately and disrespectfully towards their teacher.\nRespecting teachers and staff is a fundamental aspect of our educational values. We hope you visit the school on ${formattedDate} at ${formattedTime} to address this behavior.`;
                break;
            case 'lack_focus':
                msg += `📌 *Subject: Lack of Focus and Distraction in Class*\nThe teachers of the aforementioned student have reported that their focus during lessons is noticeably low, and they are frequently distracted by other things.\nWe hope you follow up on their study habits and daily routine at home so their academic level and concentration can improve.`;
                break;
            case 'eating_in_class':
                msg += `📌 *Subject: Eating or Drinking During Class*\nThe aforementioned student was found eating food or consuming drinks during class time, which is strictly prohibited by school rules.\nWe hope you advise and guide them to respect class time and adhere to the classroom regulations to maintain a proper learning environment.`;
                break;
            case 'chewing_gum':
                msg += `📌 *Subject: Chewing Gum in the Classroom*\nIt has been noticed that the aforementioned student was chewing gum in class, which goes against the established classroom etiquette and rules.\nWe hope you support our efforts by advising the student to abide by the school's guidelines regarding classroom behavior.`;
                break;
            case 'failing_exam':
                msg += `⚠️ *Subject: Failing Grades in Recent Exams*\nWe regret to inform you that the results of the aforementioned student's recent exams were below the required passing level, resulting in a failing grade.\nWe hope you visit the school on ${formattedDate} at ${formattedTime} to thoroughly discuss their academic situation and find ways to support their improvement.`;
                break;
            case 'damaging_books':
                msg += `⚠️ *Subject: Damaging or Tearing Textbooks*\nIt has come to our attention that the aforementioned student has severely damaged, written on, or torn the school textbooks provided to them.\nWe hope you issue a firm warning to them about the importance of protecting and preserving educational materials and public property.`;
                break;
            case 'makeup_accessories':
                msg += `📌 *Subject: Use of Cosmetics or Inappropriate Accessories*\nThe aforementioned student was found using makeup, cosmetics, or accessories that violate the school's strict uniform and educational rules.\nWe kindly ask you to follow up on this matter and ensure the student adheres to the appropriate and approved dress code before leaving for school.`;
                break;
            case 'hallway_noise':
                msg += `📌 *Subject: Creating Excessive Noise in Hallways*\nThe aforementioned student has been causing excessive noise and disturbance in the school hallways during classes or break times, annoying other classes.\nWe hope you speak to them about the importance of maintaining calmness and respecting the learning environment of their peers.`;
                break;
            case 'leave_class_no_permission':
                msg += `⚠️ *Subject: Leaving the Classroom Without Permission*\nThe aforementioned student left the classroom during a lesson without seeking or obtaining the teacher's permission.\nThis defiant behavior is completely unacceptable and disrupts the educational process. We hope you visit us on ${formattedDate} at ${formattedTime} to discuss this incident.`;
                break;
            default:
                msg += `A general message from the school administration regarding the student.`;
        }

        msg += `\n\nWith respect and regards,\n*School Administration*`;
    } else {
        msg = `تحية واحترام،\nترغب إدارة المدرسة بالتواصل معكم كشركاء لنا في العملية التربوية.\n`;
        msg += `نود إعلامكم بخصوص الطالب: ${name}\n`;
        msg += `المرحلة الدراسية: الصف ${sClass} - الشعبة (${sSection})\n\n`;

        switch (reason) {
            case 'absence':
                msg += `📌 *الموضوع: إشعار بكثرة الغياب*\nلقد لاحظنا من خلال سجلات الحضور والغياب المدرسية أن الطالب المذكور قد تغيب مراراً عن الدوام الرسمي بدون تقديم عذر طبي أو مبرر مقبول للإدارة.\nنظراً لأهمية الالتزام بالحضور وتأثير الغياب المباشر والسلبي على المستوى العلمي للطالب، نأمل منكم التكرم بزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الأمر والتعاون لإيجاد حل مناسب.`;
                break;
            case 'badBehavior':
                msg += `📌 *الموضوع: إشعار بتسجيل سلوك غير لائق*\nلقد تم رصد وتسجيل بعض التصرفات والسلوكيات غير اللائقة من قبل الطالب المذكور داخل الحرم المدرسي.\nنحن في إدارة المدرسة نولي أهمية قصوى لتقويم وتعديل سلوكيات أبنائنا الطلاب جنباً إلى جنب مع مسيرتهم التعليمية، فالأخلاق هي أساس العلم.\nلذا، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للتباحث حول الإجراءات التربوية اللازمة لتقويم هذا السلوك.`;
                break;
            case 'lowGrades':
                msg += `📌 *الموضوع: إشعار بتراجع المستوى الدراسي*\nمن خلال المتابعة المستمرة لنتائج التقييمات والامتحانات الدورية، لاحظنا للأسف أن المستوى الدراسي للطالب قد تراجع بشكل ملحوظ في الفترة الأخيرة.\nوحرصاً منا على مستقبل الطالب الأكاديمي، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة أسباب هذا التراجع والعمل سوياً على تحسين مستواه العلمي.`;
                break;
            case 'goodBehavior':
                msg += `🌟 *الموضوع: إشادة وتميز في السلوك والأخلاق*\nيسعدنا جداً في إدارة المدرسة أن نعبر عن فخرنا واعتزازنا بالطالب المذكور، حيث يتمتع بسلوكيات إيجابية، وأخلاق عالية، والتزام تام بقوانين وتعليمات المدرسة.\nإن هذا الانضباط والالتزام يعكس بوضوح تام حسن تربيتكم ومتابعتكم المستمرة. نشكر لكم جهودكم الكبيرة ونتمنى للطالب دوام التوفيق والتألق.`;
                break;
            case 'highGrades':
                msg += `🎓 *الموضوع: تهنئة وتبريك بالتفوق العلمي والنجاح*\nيسرنا أن نبعث لكم بأجمل التهاني والتبريكات بمناسبة التفوق العلمي المتميز والدرجات العالية التي حققها الطالب المذكور في التقييمات الأخيرة.\nهذا التقدم الرائع هو ثمرة حقيقية لجهده وسهره المستمر، وكذلك ثمرة لدعمكم وتشجيعكم الدائم. إدارة المدرسة فخورة جداً به ونتمنى له المزيد من النجاحات الباهرة.`;
                break;
            case 'fight':
                msg += `⚠️ *الموضوع: استدعاء عاجل بسبب مشاجرة*\nنبلغكم ببالغ الأسف أن الطالب المذكور قد تورط في مشاجرة أو خلاف حاد مع زملائه داخل الحرم المدرسي.\nوبناءً على تعليمات المدرسة الصارمة بشأن الحفاظ على سلامة الطلاب وانضباطهم، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للوقوف على أسباب المشكلة ومناقشة الإجراءات الانضباطية اللازمة.`;
                break;
            case 'reward':
                msg += `🏆 *الموضوع: إشعار بمنح مكافأة تقديرية*\nبكل فخر واعتزاز، يسعدنا أن نعلمكم بقرار الإدارة بمنح مكافأة تقديرية للطالب المذكور تقديراً لجهوده المتواصلة، وتقدمه الملحوظ، ومشاركته الفعالة في الأنشطة والدروس.\nنحن فخورون بوجود طلاب بهذا المستوى الراقي في مدرستنا، ونأمل أن تكون هذه المكافأة حافزاً قوياً له لتحقيق المزيد من التقدم والنجاح.`;
                break;
            case 'meeting':
                msg += `🤝 *الموضوع: دعوة لحضور اجتماع تربوي خاص*\nحرصاً منا على مصلحة الطالب المذكور ولضمان توفير أفضل بيئة تعليمية وداعمة له، نأمل منكم التفضل بزيارة المدرسة لعقد اجتماع خاص لمناقشة بعض المواضيع التربوية والأكاديمية الهامة.\nالوقت المقترح لهذا الاجتماع هو: ${formattedDate} الساعة ${formattedTime}.\nيرجى التكرم بتأكيد الحضور أو التواصل معنا لتحديد وقت آخر يتناسب مع ظروفكم. شكراً لتعاونكم المثمر.`;
                break;
            case 'late':
                msg += `📌 *الموضوع: إشعار بتكرار التأخر الصباحي عن الدوام*\nلقد لاحظنا من خلال المتابعة اليومية أن الطالب المذكور قد تأخر عن الحضور للدوام المدرسي في الوقت المحدد عدة مرات مؤخراً بدون عذر مقبول.\nنظراً لأهمية حضور الحصة الأولى من بدايتها لضمان الاستيعاب الكامل، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة مشكلة التأخير المتكرر.`;
                break;
            case 'homework':
                msg += `📌 *الموضوع: إشعار بعدم الالتزام بالواجبات المدرسية*\nلقد أبلغنا المعلمون بأن الطالب المذكور لم يقم بأداء وإكمال واجباته المدرسية المطلوبة منه عدة مرات في الآونة الأخيرة.\nالالتزام بحل الواجبات المنزلية له تأثير إيجابي ومباشر على المستوى العلمي واستيعاب الدروس، لذا نأمل منكم المتابعة الحثيثة وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للوقوف على الأسباب.`;
                break;
            case 'phone':
                msg += `⚠️ *الموضوع: مخالفة إحضار الهاتف المحمول للمدرسة*\nكما تعلمون وتنص عليه اللوائح المدرسية، فإن إحضار الهواتف الذكية أو الأجهزة الإلكترونية إلى المدرسة يعتبر أمراً ممنوعاً ومخالفاً للتعليمات التربوية.\nلقد اضطررنا لمصادرة الهاتف المحمول الخاص بالطالب المذكور. نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لاستلام الهاتف ومناقشة هذه المخالفة لضمان عدم تكرارها.`;
                break;
            case 'uniform':
                msg += `📌 *الموضوع: إشعار بعدم الالتزام بالزي المدرسي الرسمي*\nلوحظ أن الطالب المذكور لم يلتزم بارتداء الزي المدرسي الرسمي والمطلوب حسب تعليمات المدرسة.\nإن الالتزام بالزي المدرسي هو جزء أساسي من الانضباط الطلابي وقوانين المدرسة، لذا نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمتابعة هذا الموضوع وتأكيد الالتزام.`;
                break;
            case 'cheating':
                msg += `⚠️ *الموضوع: إشعار بمخالفة الغش في الامتحان*\nنبلغكم ببالغ الأسف والإحباط أن الطالب المذكور قد ضُبط وهو يقوم بمحاولة الغش أثناء أداء أحد الامتحانات التقييمية.\nهذا السلوك يتنافى تماماً مع القيم التربوية ويخالف تعليمات المدرسة بشكل صارم، لذا نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات العقابية والتربوية المتخذة بحقه.`;
                break;
            case 'vandalism':
                msg += `⚠️ *الموضوع: إشعار بإتلاف وتخريب ممتلكات المدرسة*\nلقد تبين لنا للأسف أن الطالب المذكور قد تعمد أو تسبب في تخريب وإتلاف بعض الممتلكات أو المرافق الخاصة بالمدرسة.\nإن الحفاظ على الممتلكات العامة هو واجب ومسؤولية الجميع، لذا نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة هذا الموضوع والالاتفاق على آلية التعويض عن الأضرار المادية.`;
                break;
            case 'truancy':
                msg += `⚠️ *الموضوع: إشعار بالهروب من المدرسة أو الحصص*\nنعلمكم ببالغ الأهمية والخطورة بأن الطالب المذكور قد أقدم على الهروب من ساحة المدرسة أو تعمد الغياب عن بعض الحصص الدراسية أثناء الدوام.\nهذا السلوك الخاطئ يشكل خطراً حقيقياً على سلامة الطالب ومستواه العلمي، لذا نأمل منكم زيارة المدرسة بأسرع وقت ممكن في تاريخ ${formattedDate} الساعة ${formattedTime} لاتخاذ الإجراءات الرادعة.`;
                break;
            case 'books':
                msg += `📌 *الموضوع: إشعار بعدم إحضار الكتب والدفاتر المدرسية*\nلقد تكرر من الطالب المذكور عدم إحضار الكتب المدرسية والدفاتر المطلوبة للمشاركة في الحصص بشكل يومي.\nهذا الإهمال المتكرر يصبح عائقاً رئيسياً أمام فهمه للدروس ومواكبته لزملائه في الفصل، لذا نأمل منكم متابعة حقيبته المدرسية يومياً وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة الأمر.`;
                break;
            case 'bullying':
                msg += `⚠️ *الموضوع: استدعاء بسبب التنمر على الزملاء*\nنعلمكم بكل أسف بأن الطالب المذكور قد قام بتصرفات مسيئة وتنمر لفظي أو جسدي تجاه بعض زملائه في المدرسة.\nنحن في إدارة المدرسة نرفض هذه السلوكيات رفضاً قاطعاً ولا نتهاون فيها أبداً، لذا نأمل منكم الحضور شخصياً للمدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الموضوع بجدية تامة.`;
                break;
            case 'sleeping':
                msg += `📌 *الموضوع: إشعار بالنوم وضعف الانتباه المتكرر في الفصل*\nلقد اشتكى المعلمون من أن الطالب المذكور يميل إلى النوم أو يكون شارد الذهن وغير منتبه بشكل ملحوظ ومستمر خلال شرح الحصص.\nهذا الوضع يؤثر سلباً وبشكل كبير على قدرته على الاستيعاب والتعلم، لذا نأمل منكم متابعة ساعات نومه في المنزل وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة كيفية مساعدته.`;
                break;
            case 'hygiene':
                msg += `📌 *الموضوع: ملاحظة هامة حول النظافة الشخصية والترتيب*\nبكل احترام وتقدير، نود أن نلفت انتباهكم الكريم إلى أن الطالب المذكور يحتاج للاهتمام بشكل أكبر بنظافته الشخصية ونظافة وترتيب ملابسه المدرسية.\nالنظافة هي جزء مهم من الصحة العامة وتؤثر على البيئة المدرسية وثقة الطالب بنفسه، نشكر لكم حسن تعاونكم واهتمامكم بهذا الجانب.`;
                break;
            case 'profanity':
                msg += `⚠️ *الموضوع: إشعار باستخدام ألفاظ بذيئة وغير لائقة*\nنعلمكم ببالغ الاستياء بأن الطالب المذكور قد تلفظ بكلمات سيئة وبذيئة وعبارات غير لائقة وتتنافى مع القيم والأخلاق الحميدة داخل المدرسة.\nهذا السلوك يعتبر غير مقبول إطلاقاً ويعاقب عليه نظام المدرسة، لذا نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للتعاون في تقويم هذا السلوك المشين.`;
                break;
            case 'smoking':
                msg += `⚠️ *الموضوع: استدعاء طارئ بسبب التدخين في المدرسة*\nنبلغكم بأسف شديد أنه قد تم ضبط الطالب المذكور وهو يدخن داخل مرافق المدرسة.\nهذا السلوك يشكل خطراً كبيراً على صحته وصحة زملائه ويعد مخالفة من الدرجة الأولى لتعليمات الانضباط المدرسي. نأمل منكم الحضور العاجل للمدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لاتخاذ اللازم.`;
                break;
            case 'leave_early':
                msg += `⚠️ *الموضوع: إشعار بالخروج من المدرسة قبل انتهاء الدوام*\nلقد أقدم الطالب المذكور على مغادرة الحرم المدرسي دون الحصول على إذن رسمي من الإدارة وقبل انتهاء جميع الحصص الدراسية المقررة.\nهذا التصرف اللامسؤول يشكل خطراً كبيراً على سلامته ويعتبر مخالفة صريحة، لذا نأمل منكم الحضور شخصياً للمدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} للوقوف على ملابسات الأمر.`;
                break;
            case 'participation':
                msg += `📌 *الموضوع: إشعار بضعف المشاركة والتفاعل في الفصل*\nمن خلال تقارير المعلمين، لاحظنا أن مشاركة الطالب المذكور وتفاعله في الحصص الدراسية وأثناء المناقشات ضعيفة جداً وتكاد تكون معدومة.\nهذا التراجع يؤثر على درجات المشاركة ومستواه العلمي العام، لذا نأمل منكم تشجيعه ودعمه معنوياً في المنزل وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لبحث سبل تحفيزه.`;
                break;
            case 'forbidden':
                msg += `⚠️ *الموضوع: إشعار بإحضار مواد وأشياء ممنوعة للمدرسة*\nنعلمكم بأنه أثناء التفتيش تم العثور بحوزة الطالب المذكور على أشياء ومواد يمنع منعاً باتاً إحضارها إلى البيئة المدرسية.\nهذا التجاوز يخالف قواعد السلامة والانضباط المدرسي بشكل صريح، لذا نأمل منكم زيارة المدرسة بأسرع وقت ممكن بتاريخ ${formattedDate} الساعة ${formattedTime} لاستلامها ومعالجة الأمر.`;
                break;
            case 'health':
                msg += `🏥 *الموضوع: إشعار بظرف صحي طارئ للطالب*\nنود إعلامكم وبشكل عاجل بأن الطالب المذكور قد شعر بتوعك أو أصيب بظرف صحي مفاجئ أثناء تواجده داخل المدرسة.\nصحة أبنائنا هي أولويتنا، لذا نأمل منكم الحضور للمدرسة بأسرع وقت ممكن أو الاتصال بنا فوراً للاطمئنان على حالته الصحية واستلامه إذا لزم الأمر.`;
                break;
            case 'trip':
                msg += `🚌 *الموضوع: دعوة للمشاركة في رحلة علمية/ترفيهية*\nضمن خطط المدرسة لتطوير مهارات الطلاب، ستقوم المدرسة قريباً بتنظيم رحلة علمية وترفيهية هادفة للطلاب.\nنطلب موافقتكم الكريمة لمشاركة الطالب المذكور في هذه الرحلة المفيدة. نأمل منكم التواصل مع الإدارة للاطلاع على التفاصيل والتوقيع على نموذج الموافقة.`;
                break;
            case 'fees':
                msg += `💰 *الموضوع: تذكير متأخرات الأقساط المدرسية*\nتحية طيبة، نود تذكيركم بوجود تأخر في سداد الدفعات أو الأقساط المدرسية المطلوبة والمستحقة على الطالب المذكور حتى تاريخه.\nلضمان استمرار تقديم الخدمات التعليمية بالشكل الأمثل، نأمل منكم مراجعة قسم الحسابات والمالية في المدرسة بأسرع وقت ممكن لتسوية المستحقات.`;
                break;
            case 'parent_council':
                msg += `👥 *الموضوع: دعوة هامة لحضور اجتماع مجلس الآباء والأمهات*\nانطلاقاً من مبدأ الشراكة المجتمعية والتربوية، نود دعوتكم لحضور الاجتماع الدوري لمجلس الآباء والأمهات.\nمشاركتكم الفعالة في مناقشة أوضاع الطلاب واقتراحاتكم لتطوير البيئة المدرسية مهمة جداً لنا، نأمل تشريفكم بالحضور بتاريخ ${formattedDate} الساعة ${formattedTime}.`;
                break;
            case 'exam_schedule':
                msg += `📅 *الموضوع: إشعار بتوزيع جدول الامتحانات القادمة*\nنود إعلامكم وتنبيهكم بأنه قد تم رسمياً توزيع جدول الامتحانات والتقييمات القادمة على جميع الطلاب للإعداد المبكر.\nنأمل منكم توفير البيئة المناسبة ودعم ومتابعة الطالب المذكور من أجل التحضير الجيد والاستعداد الأمثل لتحقيق أفضل النتائج الدراسية.`;
                break;
            case 'document_missing':
                msg += `📄 *الموضوع: إشعار بوجود نواقص في المستمسكات والوثائق الرسمية*\nبعد مراجعة ملف الطالب المذكور، تبين لنا وجود بعض النواقص في المستمسكات والوثائق الرسمية المطلوبة (مثل الصور الشخصية، الهوية، أو شهادة التخرج).\nلذا نأمل منكم الإسراع في توفير هذه المستمسكات وتسليمها لإدارة المدرسة في أقرب وقت ممكن لاستكمال ملف الطالب القانوني.`;
                break;
            case 'excellent_project':
                msg += `💡 *الموضوع: إشادة بمشروع علمي أو فني ممتاز ومبتكر*\nتتقدم إدارة المدرسة ومعلمو المادة بجزيل الشكر والتقدير لكم وللطالب المذكور على إنجاز وتقديم مشروع علمي أو فني متميز جداً ومبتكر.\nهذا العمل الرائع ينم عن موهبة وكفاءة عالية واهتمام ملحوظ بالتحصيل العلمي، نهنئكم ونهنئ الطالب على هذا الإبداع ونتمنى له الاستمرار في التميز.`;
                break;
            case 'activity':
                msg += `🎭 *الموضوع: اختيار الطالب للمشاركة في نشاط مدرسي مميز*\nنود إعلامكم بكل سرور بأنه قد وقع الاختيار على الطالب المذكور نظراً لتميزه للمشاركة في نشاط أو فعالية مدرسية هامة ستقام قريباً.\nدعمكم المعنوي وتشجيعكم المستمر له سيكون حافزاً ودافعاً كبيراً لنجاحه وتألقه في هذا النشاط وإبراز مواهبه أمام زملائه والمدرسة.`;
                break;
            case 'late_pickup':
                msg += `🚗 *الموضوع: تنبيه بخصوص التأخر المتكرر في استلام الطالب عند الانصراف*\nلقد لوحظ بشكل متكرر تأخركم لفترات طويلة في القدوم لاستلام الطالب المذكور بعد انتهاء الدوام الرسمي وانصراف الطلاب.\nمن أجل ضمان سلامة الطالب ولعدم إرهاق الكادر المناوب، نأمل منكم الالتزام التام بالوقت المحدد لانتهاء الحصص والمبادرة باستلامه في الوقت المناسب.`;
                break;
            case 'bus_issue':
                msg += `🚐 *الموضوع: إشعار بوجود مشكلة تتعلق بخط النقل المدرسي*\nنعلمكم بوجود ملاحظة هامة أو مشكلة تتعلق بنقل الطالب المذكور في حافلة المدرسة أو تأخره في التواجد عند نقاط التجمع.\nحرصاً على انتظام وصوله وانصرافه، نأمل منكم المبادرة بالتواصل مع سائق الخط المسؤول أو مراجعة إدارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الأمر.`;
                break;
            case 'forgot_id':
                msg += `📌 *الموضوع: إشعار بعدم ارتداء هوية المدرسة (الباج) المدرسية*\nلقد لاحظنا تكرار حضور الطالب المذكور للدوام المدرسي بدون ارتداء أو إبراز هوية المدرسة (الباج) المخصصة له.\nنود تذكيركم بأن ارتداء الهوية ضروري ومهم جداً لتسهيل عملية التعرف على الطلاب وضمان حمايتهم داخل الحرم المدرسي، نأمل منكم المتابعة والتأكيد عليه.`;
                break;
            case 'disrespect_teacher':
                msg += `⚠️ *الموضوع: استدعاء عاجل بسبب عدم احترام المعلم*\nنبلغكم ببالغ الأسف والاستياء أن الطالب المذكور قد تجاوز حدوده وقام بتصرف غير لائق وأظهر قلة احترام لأحد معلميه أثناء أداء واجبه.\nاحترام المعلم وتقديره هو من أهم ركائز التربية والأخلاق في مدرستنا، لذا نأمل منكم زيارتنا بصورة عاجلة بتاريخ ${formattedDate} الساعة ${formattedTime} لاتخاذ الموقف الحازم.`;
                break;
            case 'lack_focus':
                msg += `📌 *الموضوع: إشعار بقلة التركيز وكثرة التشتت أثناء الحصص*\nلقد أفاد عدد من المعلمين بأن الطالب المذكور يعاني من قلة التركيز بشكل واضح وكثرة التشتت والانشغال بأشياء أخرى وتحدثه مع زملائه أثناء الشرح.\nهذا التشتت يضعف من قدرته على الفهم والمتابعة، لذا نأمل منكم الجلوس معه ومتابعة وضعه الدراسي والأسري لكي يتحسن تركيزه ومستواه.`;
                break;
            case 'eating_in_class':
                msg += `📌 *الموضوع: إشعار بمخالفة تناول الأطعمة داخل الفصل المدرسي*\nقام الطالب المذكور بتناول الأطعمة أو المشروبات داخل الفصل وأثناء سير الحصة الدراسية، وهو تصرف يتنافى مع قوانين الانضباط الصفي المعتمدة.\nنأمل منكم توجيهه ونصحه بضرورة احترام وقت الحصة والالتزام بتناول الوجبات فقط خلال أوقات الفسحة والاستراحة المخصصة لذلك.`;
                break;
            case 'chewing_gum':
                msg += `📌 *الموضوع: إشعار بمخالفة مضغ العلكة أثناء الدروس*\nلقد لوحظ مراراً أن الطالب المذكور يقوم بمضغ العلكة داخل الفصل وأثناء شرح المعلم، وهو تصرف يعكس عدم الجدية ومخالف لقوانين المدرسة.\nنأمل منكم التحدث معه ودعمه للالتزام بالتعليمات المدرسية التي تهدف إلى توفير بيئة صفية يسودها الانضباط والاحترام المتبادل.`;
                break;
            case 'failing_exam':
                msg += `⚠️ *الموضوع: إشعار بالرسوب وضعف الأداء في الامتحان الأخير*\nمع الأسف الشديد، نعلمكم بأن نتائج الامتحان الأخير للطالب المذكور لم تكن في المستوى الأكاديمي المطلوب مما أدى إلى رسوبه في المادة.\nلمعرفة مكامن الضعف ووضع خطة علاجية لرفع مستواه، نأمل منكم زيارتنا في المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة وضعه العلمي بتفصيل.`;
                break;
            case 'damaging_books':
                msg += `⚠️ *الموضوع: إشعار بإهمال وتخريب أو تمزيق الكتب المدرسية*\nلقد لاحظنا أن الطالب المذكور لا يعتني بكتبه المدرسية المعطاة له، بل قام بتخريبها، الكتابة عليها، أو تمزيق صفحات منها بشكل متعمد أو نتيجة الإهمال.\nنأمل منكم توجيه إنذار له وتحذيره حول أهمية احترام وحماية مواد الدراسة والكتب المدرسية التي توفرها الدولة كعهد في ذمته.`;
                break;
            case 'makeup_accessories':
                msg += `📌 *الموضوع: إشعار باستخدام مستحضرات تجميل أو إكسسوارات غير لائقة*\nقام الطالب/الطالبة المذكور(ة) بإحضار أو استخدام المكياج ومواد التجميل أو ارتداء إكسسوارات تخالف بشكل صريح قوانين الزي الرسمي والتربية داخل الحرم المدرسي.\nنأمل منكم المتابعة الدقيقة والتأكد من خروجه(ا) من المنزل بمظهر يتوافق تماماً مع التعليمات المدرسية الصارمة بهذا الخصوص.`;
                break;
            case 'hallway_noise':
                msg += `📌 *الموضوع: إشعار بإحداث ضوضاء وإزعاج في الممرات المدرسية*\nتسبب الطالب المذكور في إحداث ضوضاء وأصوات مزعجة عالية والركض في الممرات المدرسية أثناء الحصص أو فترة الاستراحة مما أدى إلى إرباك وإزعاج الفصول الأخرى.\nنأمل منكم التحدث معه بجدية لحثه على الالتزام بالهدوء واحترام حق زملائه في بيئة تعليمية هادئة ومنضبطة.`;
                break;
            case 'leave_class_no_permission':
                msg += `⚠️ *الموضوع: إشعار بمغادرة الفصل الدراسي بدون إذن المعلم*\nفي تصرف يدل على التمرد، غادر الطالب المذكور الفصل الدراسي أثناء سير الحصة وبدون طلب أو الحصول على إذن مسبق من المعلم المسؤول.\nهذا السلوك الاستفزازي غير مقبول إطلاقاً ويعيق سير الدرس، لذا نأمل منكم زيارتنا بصورة عاجلة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة هذه المخالفة الانضباطية.`;
                break;
            default:
                msg += `رسالة وإشعار عام من إدارة المدرسة يخص الطالب المذكور أعلاه للمتابعة.`;
        }

        msg += `\n\nمع الاحترام والتقدير،\n*إدارة المدرسة*`;
    }
    return msg;
};
