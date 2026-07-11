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
        reason_meeting: "بانگهێشتکرن بۆ کۆمبوونێ",
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
        reason_t_meeting: "بانگهێشتکرن بۆ کۆمبوونێ",
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
                case 't_absence': msg += `📌 *بابەت: ئاگەهدارییا نەهاتنێ*\nمە تێبینی کرییە کو هوین نەهاتینە سەر کاری. هیڤیدارین ئەگەرێ نەهاتنێ دیار بکەن و پەیوەندیێ ب کارگێڕیێ بکەن.`; break;
                case 't_late': msg += `📌 *بابەت: درەنگ کەفتن*\nتێبینی هاتیە کرن کو هوین درەنگ هاتینە سەر کاری. پابەندبوون ب دەمی گەلەک گرنگە، هیڤیدارین سەرەدانا کارگێڕیێ بکەن.`; break;
                case 't_meeting': msg += `🤝 *بابەت: بانگهێشتکرن بۆ کۆمبوونێ*\nکارگێڕیا قوتابخانێ هەوە داوەت دکەت بۆ کۆمبوونەکا کارگێڕی ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}. ئامادەبوونا هەوە پێدڤیە.`; break;
                case 't_duty': msg += `📋 *بابەت: ئەرکێ چاڤدێریێ*\nمە دڤێت هەوە بیربینین ب ئەرکێ هەوە یێ چاڤدێریێ. هیڤیدارین ب باشترین شێوە کارێ خۆ ئەنجام بدەن.`; break;
                case 't_thanks': msg += `🌟 *بابەت: سوپاس و پێزانین*\nکارگێڕیا قوتابخانێ سوپاسییا هەوە دکەت بۆ بزاڤ و ماندووبوونا هەوە دگەل قوتابییان دا. ئەم شانازییێ ب هەوە دکەین.`; break;
                case 't_violation': msg += `⚠️ *بابەت: پێشێلکرنا رێنمایان*\nتێبینی هاتیە کرن کو پێشێلکاریەک د رێنمایێن قوتابخانێ دا هاتیە کرن. هیڤیدارین سەرەدانا کارگێڕیێ بکەن ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *بابەت: رادەستکرنا نمرەیان*\nئەم داخوازێ ژ هەوە دکەین کو بلەز نمرەیێن قوتابییان رادەست بکەن، ژبەر کو دەمێ دیارکری خەریکە ب دوماهی دهێت.`; break;
                case 't_notice': msg += `🔔 *بابەت: ئاگەهداریەکا گرنگ*\nهیڤیدارین پەیوەندیێ ب کارگێڕیێ بکەن ژبەر بابەتەکێ گرنگ یێ پەروەردەیی.`; break;
                case 't_exam_questions': msg += `📝 *بابەت: رادەستکرنا پرسیارێن ئەزموونان*\nهیڤیدارین بلەز پرسیارێن ئەزموونان رادەست بکەن بەریا دەمێ دیارکری ب دوماهی بهێت.`; break;
                case 't_lesson_plan': msg += `📖 *بابەت: پلانا وانەیێ*\nهیڤیدارین پلانا وانەیێ (رۆژانە/سالانە) بۆ رێڤەبەریێ بهێتە رادەستکرن.`; break;
                case 't_class_management': msg += `🗣️ *بابەت: رێڤەبرنا پۆلێ*\nتێبینی لسەر کۆنترۆلکرنا پۆلێ هەنە. هیڤیدارین رێکارێن پێدڤی بگرنە بەر بۆ رێڤەبرنەکا باشتر.`; break;
                case 't_parent_meeting': msg += `🤝 *بابەت: دیدار دگەل سمیانان*\nهیڤیدارین ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime} ئامادەبن بۆ دیدارەکێ دگەل سمیانێ قوتابی.`; break;
                case 't_training': msg += `🎓 *بابەت: خولا راهێنانێ*\nهوین هاتینە دەستنیشانکرن بۆ پشکداریکرن د خولەکا راهێنانێ دا. هیڤیدارین ئامادەبوونا هەوە ل جهـ و دەمێ دیارکری بیت.`; break;
                case 't_activity_supervision': msg += `🎭 *بابەت: سەرپەرشتیا چالاکیەکێ*\nکارگێڕیا قوتابخانێ ئەڤ چالاکیە ب هەوە سپارتیە. هیڤیدارین ب باشترین شێوە سەرپەرشتیا وێ بکەن.`; break;
                case 't_student_issue': msg += `⚠️ *بابەت: کێشەیا قوتابییەکێ*\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ بەحسکرنا کێشەیەکا تایبەت ب قوتابیەکێ هەوە ڤە.`; break;
                case 't_excellent_performance': msg += `🌟 *بابەت: ئاستێ نایاب د وانەگۆتنێ دا*\nسوپاس بۆ خەمخۆری و ئاستێ هەوە یێ نایاب د گۆتنا وانەیان دا. ماندووبوونا هەوە جهێ رێزێ یە.`; break;
                case 't_leave_early': msg += `🚪 *بابەت: دەرکەفتنا زوو*\nتێبینی هاتیە کرن کو هوین بەری دەمێ دیارکری دەرکەفتینە. پابەندبوون ب دەمی گەلەک گرنگە.`; break;
                case 't_schedule_change': msg += `📅 *بابەت: گوهۆڕین د خشتەیێ وانەیان دا*\nمە دڤێت هەوە ئاگەهدار بکەین کو گوهۆڕینەک د خشتەیێ وانەیێن هەوە دا هاتیە کرن. هیڤیدارین خشتەیێ نوی وەرگرن.`; break;
                case 't_supplies': msg += `📦 *بابەت: کێماسی د پێداویستیان دا*\nداخوازیا هەوە بۆ پێداویستیان گەهشتیە مە و ئەم دێ ب زووترین دەم چارەسەر کەین.`; break;
                case 't_technology': msg += `💻 *بابەت: بکارئینانا ئامرازێن فێرکرنێ*\nهیڤیدارین پتر مفا ژ ئامرازێن فێرکرنێ (وەک تاقیگەهـ یان شاشە) بهێتە وەرگرتن بۆ باشترکرنا پرۆسێسا فێربوونێ.`; break;
                case 't_cooperation': msg += `🤝 *بابەت: هەڤکاریکرن دگەل هەڤالان*\nرێڤەبەری سوپاسیا گیانێ هەڤکاریێ یێ هەوە دگەل مامۆستایێن دی دکەت. ئەڤە دبيتە ئەگەرێ سەرکەفتنا کارێ مە هەمییان.`; break;
                case 't_committee': msg += `👥 *بابەت: کۆمبوونا کۆمیتەیێ*\nهوین وەک ئەندامێ کۆمیتەیێ دهێنە بانگهێشتکرن بۆ کۆمبوونەکێ ل رێکەفتی ${tFormattedDate} دەمژمێر ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *بابەت: ئاهەنگا قوتابخانێ*\nئەم داخوازێ ژ هەوە دکەین کو پشکداریێ د ئامادەکاریێن ئاهەنگا قوتابخانێ دا بکەن.`; break;
                case 't_vacation_approval': msg += `✅ *بابەت: پەسەندکرنا دەستویریێ*\nمە دڤێت هەوە ئاگەهدار بکەین کو داخوازیا هەوە بۆ دەستویریێ هاتیە پەسەندکرن.`; break;
                case 't_vacation_rejection': msg += `❌ *بابەت: رەتکرنا دەستویریێ*\nب مخابنی ڤە، ژبەر پێدڤیا کاری ل ڤی دەمی، داخوازیا هەوە بۆ مۆلەتێ نەهاتیە پەسەندکرن.`; break;
                case 't_evaluation': msg += `📊 *بابەت: هەلسەنگاندنا ئاستی*\nهیڤیدارین سەرەدانا کارگێڕیێ بکەن بۆ دیتن و بەحسکرنا ئەنجامێن هەلسەنگاندنا ئاستێ هەوە یێ سالانە.`; break;
                case 't_warning': msg += `⚠️ *بابەت: تێبینی و هۆشداری*\nئەڤە وەک تێبینیەکا کارگێڕیێ یە لسەر بابەتەکێ تایبەت ب کاری ڤە. هیڤیدارین دووبارە نەبیت.`; break;
                case 't_emergency': msg += `🚨 *بابەت: رەوشا ژنیشکێڤە*\nهیڤیدارین ب زووترین دەم پەیوەندیێ ب کارگێڕیێ بکەن ژبەر رەوشەکا ژنیشکێڤە و گرنگ.`; break;
            }
        } else if (isEn) {
            msg = `Greetings,\nThe school administration would like to communicate with you through this message.\n`;
            msg += `We would like to discuss this matter with Teacher: ${tName}.\n`;
            msg += `Subject: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *Subject: Notice of Absence*\nWe have noticed your absence from work. Please clarify the reason for your absence and contact the administration.`; break;
                case 't_late': msg += `📌 *Subject: Late Arrival*\nIt has been noted that you arrived late to work. Punctuality is very important, we hope you visit the administration.`; break;
                case 't_meeting': msg += `🤝 *Subject: Meeting Invitation*\nThe school administration invites you to an administrative meeting on ${tFormattedDate} at ${tFormattedTime}. Your attendance is required.`; break;
                case 't_duty': msg += `📋 *Subject: Supervision Duty*\nWe would like to remind you of your supervision duty. We hope you perform your work in the best manner.`; break;
                case 't_thanks': msg += `🌟 *Subject: Thanks and Appreciation*\nThe school administration thanks you for your efforts and hard work with the students. We are proud of you.`; break;
                case 't_violation': msg += `⚠️ *Subject: Violation of Guidelines*\nIt has been noted that a violation of school guidelines has occurred. We hope you visit the administration on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *Subject: Submission of Grades*\nWe request you to promptly submit the students' grades, as the specified deadline is about to end.`; break;
                case 't_notice': msg += `🔔 *Subject: Important Notice*\nPlease contact the administration regarding an important educational matter.`; break;
                case 't_exam_questions': msg += `📝 *Subject: Submission of Exam Questions*\nWe request you to promptly submit the exam questions before the specified deadline ends.`; break;
                case 't_lesson_plan': msg += `📖 *Subject: Lesson Plan*\nPlease submit the lesson plan (daily/annual) to the administration.`; break;
                case 't_class_management': msg += `🗣️ *Subject: Classroom Management*\nThere are observations regarding classroom control. Please take the necessary measures for better management.`; break;
                case 't_parent_meeting': msg += `🤝 *Subject: Meeting with Parents*\nPlease be present on ${tFormattedDate} at ${tFormattedTime} for a meeting with the student's parent.`; break;
                case 't_training': msg += `🎓 *Subject: Training Course*\nYou have been selected to participate in a training course. We hope you will be present at the specified place and time.`; break;
                case 't_activity_supervision': msg += `🎭 *Subject: Activity Supervision*\nThe school administration has assigned this activity to you. We hope you supervise it in the best manner.`; break;
                case 't_student_issue': msg += `⚠️ *Subject: Student Issue*\nPlease visit the administration to discuss an issue specific to one of your students.`; break;
                case 't_excellent_performance': msg += `🌟 *Subject: Excellent Teaching Performance*\nThank you for your care and excellent performance in teaching classes. Your hard work is highly appreciated.`; break;
                case 't_leave_early': msg += `🚪 *Subject: Early Departure*\nIt has been noted that you left before the specified time. Punctuality is very important.`; break;
                case 't_schedule_change': msg += `📅 *Subject: Change in Class Schedule*\nWe would like to inform you that a change has been made to your class schedule. Please receive the new schedule.`; break;
                case 't_supplies': msg += `📦 *Subject: Shortage of Supplies*\nYour request for supplies has reached us and we will resolve it as soon as possible.`; break;
                case 't_technology': msg += `💻 *Subject: Use of Educational Tools*\nWe hope you make more use of educational tools (such as laboratories or screens) to improve the learning process.`; break;
                case 't_cooperation': msg += `🤝 *Subject: Cooperation with Colleagues*\nThe administration thanks you for your spirit of cooperation with other teachers. This contributes to the success of all our work.`; break;
                case 't_committee': msg += `👥 *Subject: Committee Meeting*\nYou are invited as a committee member to a meeting on ${tFormattedDate} at ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *Subject: School Celebration*\nWe ask you to participate in the preparations for the school celebration.`; break;
                case 't_vacation_approval': msg += `✅ *Subject: Vacation Approval*\nWe would like to inform you that your vacation request has been approved.`; break;
                case 't_vacation_rejection': msg += `❌ *Subject: Vacation Rejection*\nUnfortunately, due to work requirements at this time, your vacation request has not been approved.`; break;
                case 't_evaluation': msg += `📊 *Subject: Performance Evaluation*\nPlease visit the administration to see and discuss the results of your annual performance evaluation.`; break;
                case 't_warning': msg += `⚠️ *Subject: Notice and Warning*\nThis is an administrative notice regarding a specific work-related matter. We hope it will not be repeated.`; break;
                case 't_emergency': msg += `🚨 *Subject: Emergency Situation*\nPlease contact the administration as soon as possible due to an urgent and important situation.`; break;
            }
        } else {
            msg = `تحية طيبة،\nترغب إدارة المدرسة بالتواصل معكم من خلال هذه الرسالة.\n`;
            msg += `نود مناقشة هذا الموضوع مع المعلم/ة: ${tName}.\n`;
            msg += `المادة: ${tSubject}\n\n`;
            switch (reason) {
                case 't_absence': msg += `📌 *الموضوع: إشعار غياب*\nلقد لاحظنا غيابكم عن العمل. نرجو توضيح سبب الغياب والتواصل مع الإدارة.`; break;
                case 't_late': msg += `📌 *الموضوع: تأخر عن الدوام*\nلوحظ تأخركم عن الدوام. الالتزام بالوقت مهم جداً، نرجو مراجعة الإدارة.`; break;
                case 't_meeting': msg += `🤝 *الموضوع: دعوة لاجتماع*\nتدعوكم إدارة المدرسة لاجتماع إداري بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}. حضوركم ضروري.`; break;
                case 't_duty': msg += `📋 *الموضوع: مهمة الإشراف*\nنود تذكيركم بمهمة الإشراف الخاصة بكم. نأمل أن تؤدوا عملكم بأفضل صورة.`; break;
                case 't_thanks': msg += `🌟 *الموضوع: شكر وتقدير*\nتشكركم إدارة المدرسة على جهودكم وتعبكم مع الطلاب. نحن فخورون بكم.`; break;
                case 't_violation': msg += `⚠️ *الموضوع: مخالفة التعليمات*\nلوحظ حدوث مخالفة لتعليمات المدرسة. نرجو مراجعة الإدارة بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}.`; break;
                case 't_grades': msg += `📝 *الموضوع: تسليم الدرجات*\nنطلب منكم الإسراع في تسليم درجات الطلاب، حيث أن الموعد المحدد يوشك على الانتهاء.`; break;
                case 't_notice': msg += `🔔 *الموضوع: إشعار هام*\nنرجو التواصل مع الإدارة بخصوص موضوع تربوي هام.`; break;
                case 't_exam_questions': msg += `📝 *الموضوع: تسليم أسئلة الامتحانات*\nنرجو الإسراع في تسليم أسئلة الامتحانات قبل انتهاء الموعد المحدد.`; break;
                case 't_lesson_plan': msg += `📖 *الموضوع: خطة الدرس*\nنرجو تسليم خطة الدرس (اليومية/السنوية) للإدارة.`; break;
                case 't_class_management': msg += `🗣️ *الموضوع: إدارة الفصل*\nهناك ملاحظات حول السيطرة على الفصل. نرجو اتخاذ الإجراءات اللازمة لإدارة أفضل.`; break;
                case 't_parent_meeting': msg += `🤝 *الموضوع: لقاء مع أولياء الأمور*\nنرجو التواجد بتاريخ ${tFormattedDate} الساعة ${tFormattedTime} للقاء ولي أمر الطالب.`; break;
                case 't_training': msg += `🎓 *الموضوع: دورة تدريبية*\nلقد تم ترشيحكم للمشاركة في دورة تدريبية. نأمل حضوركم في المكان والزمان المحددين.`; break;
                case 't_activity_supervision': msg += `🎭 *الموضوع: الإشراف على نشاط*\nلقد أوكلت إليكم إدارة المدرسة هذا النشاط. نأمل أن تشرفوا عليه بأفضل شكل ممكن.`; break;
                case 't_student_issue': msg += `⚠️ *الموضوع: مشكلة طالب*\nنرجو مراجعة الإدارة لمناقشة مشكلة خاصة بأحد طلابكم.`; break;
                case 't_excellent_performance': msg += `🌟 *الموضوع: أداء ممتاز في التدريس*\nشكراً لاهتمامكم وأدائكم الممتاز في إعطاء الدروس. تعبكم وجهدكم محل تقدير.`; break;
                case 't_leave_early': msg += `🚪 *الموضوع: مغادرة مبكرة*\nلوحظ خروجكم قبل الوقت المحدد. الالتزام بالوقت مهم جداً.`; break;
                case 't_schedule_change': msg += `📅 *الموضوع: تغيير في جدول الدروس*\nنود إعلامكم بوجود تغيير في جدول دروسكم. نرجو استلام الجدول الجديد.`; break;
                case 't_supplies': msg += `📦 *الموضوع: نقص في المستلزمات*\nلقد وصلنا طلبكم بخصوص المستلزمات وسنقوم بتوفيرها في أقرب وقت.`; break;
                case 't_technology': msg += `💻 *الموضوع: استخدام وسائل التعليم*\nنأمل الاستفادة بشكل أكبر من وسائل التعليم (كالمختبر أو الشاشة) لتحسين عملية التعلم.`; break;
                case 't_cooperation': msg += `🤝 *الموضوع: التعاون مع الزملاء*\nتشكركم الإدارة على روح التعاون التي تبدونها مع بقية المعلمين. هذا يساهم في نجاح عملنا جميعاً.`; break;
                case 't_committee': msg += `👥 *الموضوع: اجتماع اللجنة*\nأنتم مدعوون كعضو في اللجنة لحضور اجتماع بتاريخ ${tFormattedDate} الساعة ${tFormattedTime}.`; break;
                case 't_celebration': msg += `🎉 *الموضوع: احتفال المدرسة*\nنطلب منكم المشاركة في التحضيرات الخاصة باحتفال المدرسة.`; break;
                case 't_vacation_approval': msg += `✅ *الموضوع: الموافقة على الإجازة*\nنود إعلامكم بأنه تمت الموافقة على طلب إجازتكم.`; break;
                case 't_vacation_rejection': msg += `❌ *الموضوع: رفض الإجازة*\nبكل أسف، وبسبب حاجة العمل في هذا الوقت، لم تتم الموافقة على طلب إجازتكم.`; break;
                case 't_evaluation': msg += `📊 *الموضوع: تقييم الأداء*\nنرجو مراجعة الإدارة للاطلاع ومناقشة نتائج تقييم الأداء السنوي الخاص بكم.`; break;
                case 't_warning': msg += `⚠️ *الموضوع: تنبيه وإنذار*\nهذا تنبيه إداري بخصوص موضوع معين يتعلق بالعمل. نأمل ألا يتكرر.`; break;
                case 't_emergency': msg += `🚨 *الموضوع: حالة طارئة*\nنرجو التواصل مع الإدارة بأسرع وقت ممكن لوجود حالة طارئة وهامة.`; break;
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
                msg += `👥 *بابەت: جڤاتا سمیانان*\nمە دڤێت هەوە داوەت بکەین بۆ ئامادەبوون د کۆمبوونا جڤاتا سمیانان دا.\nپشکدارییا هەوە د بەحسکرنا رەوشا قوتابییان دا گەلەک گرنگە، هیڤیدارین ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime} ئامادە بن.`;
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
                msg += `🚐 *بابەت: کێشە د ڤەگوهاستنێ دا*\nئاگەهدارییا هەوە دکەین کو تێبینی یان کێشەیەک ل دۆر ڤەگوهاستنا قوتابیێ ناڤبری هەیە.\nهیڤیدارین پەیوەندیێ ب سمیانێ هێلێ یان کارگێڕیێ بکەن ل رێکەفتی ${formattedDate} دەمژمێر ${formattedTime}.`;
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
            case 'absence': msg += `📌 *Subject: Notice of Absence*\nWe have noticed in the attendance records that the aforementioned student has been absent frequently without an acceptable or medical excuse.\nGiven the importance of committing to attendance and its impact on the academic level, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss this matter.`; break;
            case 'badBehavior': msg += `📌 *Subject: Notice of Bad Behavior*\nInappropriate behavior has been recorded by the aforementioned student.\nWe at the school administration attach great importance to correcting students' behaviors alongside their education.\nTherefore, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss the necessary educational measures.`; break;
            case 'lowGrades': msg += `📌 *Subject: Notice of Academic Decline*\nThrough the follow-up of evaluations, we have noticed that the student's academic level has declined recently.\nOut of concern for the student's future, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss improving their academic level.`; break;
            case 'goodBehavior': msg += `🌟 *Subject: Commendation for Good Behavior*\nThe school administration is very pleased to be proud of the aforementioned student, as they have good behavior, high morals, and abide by the school rules.\nThis commitment clearly reflects your good upbringing. Thank you for your efforts, and we wish the student success.`; break;
            case 'highGrades': msg += `🎓 *Subject: Congratulations on Academic Success*\nWe direct the most beautiful congratulations to you on the occasion of the academic success and high grades achieved by the aforementioned student.\nThis progress is the fruit of their efforts and day-and-night work, and the fruit of your support. The school administration is very proud of them and wishes them more successes.`; break;
            case 'fight': msg += `⚠️ *Subject: Summons Due to Fighting*\nWe regret to inform you that the aforementioned student got into a fight with their peers inside the school.\nAccording to the school guidelines, we hope you visit the school on ${formattedDate} at ${formattedTime} to know the reasons for the problem and discuss the necessary measures.`; break;
            case 'reward': msg += `🏆 *Subject: Reward Notice*\nWith pride, we are very pleased to inform you of the decision to reward the aforementioned student in appreciation of their efforts, progress, and active participation.\nWe are proud to have students of this level in our school, and we hope this reward will be an incentive for more progress.`; break;
            case 'meeting': msg += `🤝 *Subject: Meeting Request*\nFor the benefit of the aforementioned student and to provide the best supportive environment for them, we hope you visit the school for a special meeting regarding some important educational matters.\nThe proposed time for the meeting: ${formattedDate} at ${formattedTime}.\nPlease confirm your attendance or contact us to set another suitable time. Thank you for your cooperation.`; break;
            case 'late': msg += `📌 *Subject: Notice of Late Arrival*\nWe have noticed that the aforementioned student has arrived late to school several times without an acceptable excuse.\nGiven the importance of attending the class from the beginning, we hope you visit the school on ${formattedDate} at ${formattedTime} to resolve this issue.`; break;
            case 'homework': msg += `📌 *Subject: Neglect of Homework*\nWe have noticed that the aforementioned student has not done their homework recently.\nCommitting to homework has a direct impact on the student's academic level, we hope you follow up and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'phone': msg += `⚠️ *Subject: Bringing a Phone to School*\nAs you know, bringing a smartphone into the school is prohibited in the educational guidelines.\nWe have confiscated the aforementioned student's phone. We hope you visit the school on ${formattedDate} at ${formattedTime} to receive the phone and discuss this matter.`; break;
            case 'uniform': msg += `📌 *Subject: Non-compliance with Uniform*\nThe aforementioned student has not complied with the required school uniform.\nCommitting to the uniform is part of our rules, we hope you visit the school on ${formattedDate} at ${formattedTime} to follow up on this matter.`; break;
            case 'cheating': msg += `⚠️ *Subject: Notice of Cheating*\nWe regret to inform you that the aforementioned student cheated while taking the exam.\nThis behavior is against the school guidelines, we hope you visit the school on ${formattedDate} at ${formattedTime} to discuss the taken measures.`; break;
            case 'vandalism': msg += `⚠️ *Subject: Damaging School Property*\nWe have noticed that the aforementioned student has damaged some of the school's property.\nProtecting public property is everyone's duty, we hope you visit the school on ${formattedDate} at ${formattedTime} to resolve this matter and compensate for the damages.`; break;
            case 'truancy': msg += `⚠️ *Subject: Truancy from School*\nWe inform you that the aforementioned student has fled from school or from classes.\nThis behavior poses a risk to the protection and academic level of the student, we hope you visit the school as soon as possible on ${formattedDate} at ${formattedTime}.`; break;
            case 'books': msg += `📌 *Subject: Not Bringing Textbooks*\nThe aforementioned student has repeatedly not brought their required books and notebooks to school.\nThis becomes an obstacle to their understanding of the lessons, we hope you follow up and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *Subject: Bullying*\nWe inform you that the aforementioned student has bullied their peers.\nWe do not approve of these behaviors in any way at the school, we hope you visit the school on ${formattedDate} at ${formattedTime} to seriously discuss this matter.`; break;
            case 'sleeping': msg += `📌 *Subject: Sleeping and Inattention in Class*\nWe have noticed that the aforementioned student sleeps or is very inattentive during classes.\nThis affects their understanding, we hope you follow up on their sleeping time and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *Subject: Notice on Personal Hygiene*\nWith respect, we would like to draw your attention that the aforementioned student needs to pay more attention to their personal hygiene and clothes.\nHygiene is an important part of health and the school environment, thank you for your cooperation.`; break;
            case 'profanity': msg += `⚠️ *Subject: Using Bad and Ugly Words*\nWe inform you that the aforementioned student has used bad, ugly, and inappropriate words contrary to morals.\nThis behavior is completely unapproved, we hope you visit the school on ${formattedDate} at ${formattedTime} to correct this behavior.`; break;
            case 'smoking': msg += `⚠️ *Subject: Smoking in School*\nWe regret to inform you that the aforementioned student was seen smoking inside the school.\nThis behavior is a danger to their health and against the guidelines. We hope you visit the school as soon as possible on ${formattedDate} at ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *Subject: Leaving Before School Ends*\nThe aforementioned student left the school without the administration's permission before classes ended.\nThis creates a risk to their safety, we hope you visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'participation': msg += `📌 *Subject: Weak Participation in Class*\nThe aforementioned student's teachers have noticed that their participation in classes is very weak.\nThis affects their academic level, we hope you support them and visit the school on ${formattedDate} at ${formattedTime}.`; break;
            case 'forbidden': msg += `⚠️ *Subject: Bringing Prohibited Items*\nWe inform you that prohibited items that should not be brought into the school were found with the aforementioned student.\nThis is against the safety rules, we hope you visit the school quickly on ${formattedDate} at ${formattedTime}.`; break;
            case 'health': msg += `🏥 *Subject: Health Issue*\nWe would like to inform you that the aforementioned student suffered an illness or health issue inside the school.\nWe hope you visit us as soon as possible or contact us to be assured of their condition.`; break;
            case 'trip': msg += `🚌 *Subject: Scientific Trip*\nThe school will organize a scientific/leisure trip.\nWe ask for your approval for the aforementioned student to participate in this trip. We hope you contact the administration.`; break;
            case 'fees': msg += `💰 *Subject: School Fees*\nWe would like to remind you of the delay in paying the required school fees for the aforementioned student.\nWe hope you visit the accounting department as soon as possible.`; break;
            case 'parent_council': msg += `👥 *Subject: Parents Council*\nWe would like to invite you to attend the parents council meeting.\nYour participation in discussing the students' situation is very important, we hope you attend on ${formattedDate} at ${formattedTime}.`; break;
            case 'exam_schedule': msg += `📅 *Subject: Exam Schedule*\nWe would like to inform you that the upcoming exam schedule has been distributed.\nWe hope you support the aforementioned student for good preparation.`; break;
            case 'document_missing': msg += `📄 *Subject: Missing Documents*\nThere are some missing required documents for the aforementioned student (such as photos or ID).\nWe hope you provide these documents to the school administration as soon as possible.`; break;
            case 'excellent_project': msg += `💡 *Subject: Excellent Project*\nWe thank you and the aforementioned student for doing a very excellent scientific or artistic project.\nThis work is a sign of proficiency, we commend them.`; break;
            case 'activity': msg += `🎭 *Subject: Participation in an Activity*\nWe would like to inform you that the aforementioned student has been selected to participate in a school activity.\nYour support will be a great incentive for them.`; break;
            case 'late_pickup': msg += `🚗 *Subject: Late Pickup of Student*\nIt has been noticed that you often come late to pick up the aforementioned student after classes end.\nWe hope you adhere to the end time of classes for the sake of their safety.`; break;
            case 'bus_issue': msg += `🚐 *Subject: Transportation Issue*\nWe inform you that there is an observation or issue regarding the transportation of the aforementioned student.\nWe hope you contact the line supervisor or the administration on ${formattedDate} at ${formattedTime}.`; break;
            case 'forgot_id': msg += `📌 *Subject: Not Wearing School ID*\nWe have noticed that the aforementioned student came to school without wearing the school ID.\nWearing the ID is necessary for identifying and protecting students, we hope you follow up.`; break;
            case 'disrespect_teacher': msg += `⚠️ *Subject: Disrespecting a Teacher*\nRegrettably, the aforementioned student behaved inappropriately with their teacher.\nRespecting teachers is an important aspect of education, we hope you visit us on ${formattedDate} at ${formattedTime}.`; break;
            case 'lack_focus': msg += `📌 *Subject: Lack of Focus in Classes*\nThe aforementioned student's teachers have noticed that their focus in class is low and they are busy with other things.\nWe hope you follow up on their study situation so their level improves.`; break;
            case 'eating_in_class': msg += `📌 *Subject: Eating in Class*\nThe aforementioned student ate food or drinks during the class, which is prohibited.\nWe hope you advise them to respect class time.`; break;
            case 'chewing_gum': msg += `📌 *Subject: Chewing Gum*\nIt has been noticed that the aforementioned student chewed gum in class, which is against the class rules.\nWe hope you support them to abide by the guidelines.`; break;
            case 'failing_exam': msg += `⚠️ *Subject: Failing an Exam*\nRegrettably, the results of the aforementioned student's exam were not at the required level and they failed.\nWe hope you visit us on ${formattedDate} at ${formattedTime} to discuss their academic situation.`; break;
            case 'damaging_books': msg += `⚠️ *Subject: Damaging Books*\nThe aforementioned student has damaged or torn the provided school books.\nWe hope you warn them about protecting the study materials.`; break;
            case 'makeup_accessories': msg += `📌 *Subject: Using Inappropriate Items*\nThe aforementioned student used makeup or cosmetic items which are against the uniform and educational rules inside the school.\nWe hope you follow up.`; break;
            case 'hallway_noise': msg += `📌 *Subject: Making Noise in Hallways*\nThe aforementioned student made excessive noise in the hallways during classes or break time, which caused annoyance to other classes.\nWe hope they abide by calmness.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *Subject: Leaving Class Without Permission*\nThe aforementioned student left the class without the teacher's permission during the lesson.\nThis behavior is not approved, we hope you visit us on ${formattedDate} at ${formattedTime}.`; break;
            default: msg += `A message from the school regarding a student.`;
        }

        msg += `\n\nWith respect and regards,\n*School Administration*`;
    } else {
        msg = `تحية واحترام،\nترغب إدارة المدرسة بالتواصل معكم كشركاء لنا في العملية التربوية.\n`;
        msg += `نود إعلامكم بخصوص الطالب: ${name}\n`;
        msg += `المرحلة الدراسية: الصف ${sClass} - الشعبة (${sSection})\n\n`;

        switch (reason) {
            case 'absence': msg += `📌 *الموضوع: إشعار غياب*\nلقد لاحظنا في سجلات الحضور أن الطالب المذكور قد تغيب كثيراً عن الدوام بدون عذر مقبول أو طبي.\nنظراً لأهمية الالتزام بالحضور وتأثيره على المستوى العلمي، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الموضوع.`; break;
            case 'badBehavior': msg += `📌 *الموضوع: إشعار بسلوك سيء*\nتم تسجيل سلوك غير لائق من قبل الطالب المذكور.\nنحن في إدارة المدرسة نولي أهمية كبيرة لتقويم سلوكيات الطلاب جنباً إلى جنب مع تعليمهم.\nلذلك، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات التربوية اللازمة.`; break;
            case 'lowGrades': msg += `📌 *الموضوع: إشعار بانخفاض المستوى العلمي*\nمن خلال متابعة التقييمات، لاحظنا أن المستوى الدراسي للطالب قد تراجع في الفترة الأخيرة.\nحرصاً منا على مستقبل الطالب، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة تحسين مستواه العلمي.`; break;
            case 'goodBehavior': msg += `🌟 *الموضوع: إشادة بالسلوك الجيد*\nيسعدنا جداً في إدارة المدرسة أن نفتخر بالطالب المذكور، حيث يتمتع بسلوك جيد وأخلاق عالية ويلتزم بقوانين المدرسة.\nهذا الالتزام يعكس بوضوح تربيتكم الحسنة. شكراً لجهودكم ونتمنى للطالب التوفيق.`; break;
            case 'highGrades': msg += `🎓 *الموضوع: تهنئة بالتفوق العلمي*\nنوجه لكم أجمل التهاني بمناسبة التفوق العلمي والدرجات العالية التي حققها الطالب المذكور.\nهذا التقدم هو ثمرة لجهده وسهره، وثمرة لدعمكم. إدارة المدرسة فخورة جداً به ونتمنى له المزيد من النجاح.`; break;
            case 'fight': msg += `⚠️ *الموضوع: استدعاء بسبب شجار*\nنبلغكم بأسف شديد أن الطالب المذكور قد تورط في شجار مع زملائه داخل المدرسة.\nوفقاً لتعليمات المدرسة، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعرفة أسباب المشكلة ومناقشة الإجراءات اللازمة.`; break;
            case 'reward': msg += `🏆 *الموضوع: إشعار مكافأة*\nبكل فخر، يسعدنا أن نعلمكم بقرار مكافأة الطالب المذكور تقديراً لجهوده، وتقدمه، ومشاركته الفعالة.\nنحن فخورون بوجود طلاب بهذا المستوى في مدرستنا، ونأمل أن تكون هذه المكافأة حافزاً لمزيد من التقدم.`; break;
            case 'meeting': msg += `🤝 *الموضوع: طلب اجتماع*\nمن أجل مصلحة الطالب المذكور وتوفير أفضل بيئة داعمة له، نأمل منكم زيارة المدرسة لاجتماع خاص حول بعض المواضيع التربوية الهامة.\nالوقت المقترح للاجتماع هو: ${formattedDate} الساعة ${formattedTime}.\nيرجى تأكيد الحضور أو التواصل معنا لتحديد وقت آخر مناسب. شكراً لتعاونكم.`; break;
            case 'late': msg += `📌 *الموضوع: إشعار بالتأخر*\nلقد لاحظنا أن الطالب المذكور قد تأخر عن الدوام عدة مرات بدون عذر مقبول.\nنظراً لأهمية حضور الدرس من البداية، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة هذه المشكلة.`; break;
            case 'homework': msg += `📌 *الموضوع: إهمال الواجبات المدرسية*\nلقد لاحظنا أن الطالب المذكور لم يقم بأداء واجباته المدرسية مؤخراً.\nالالتزام بالواجبات المدرسية له تأثير مباشر على المستوى العلمي للطالب، نأمل منكم المتابعة وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'phone': msg += `⚠️ *الموضوع: جلب هاتف للمدرسة*\nكما تعلمون، فإن جلب الهاتف الذكي إلى المدرسة ممنوع في التعليمات التربوية.\nلقد قمنا بمصادرة هاتف الطالب المذكور. نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لاستلام الهاتف ومناقشة هذا الموضوع.`; break;
            case 'uniform': msg += `📌 *الموضوع: عدم الالتزام بالزي المدرسي*\nلم يلتزم الطالب المذكور بالزي المدرسي المطلوب.\nالالتزام بالزي هو جزء من قوانيننا، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمتابعة هذا الموضوع.`; break;
            case 'cheating': msg += `⚠️ *الموضوع: إشعار بالغش*\nنبلغكم بأسف أن الطالب المذكور قد قام بالغش أثناء أداء الامتحان.\nهذا السلوك يخالف تعليمات المدرسة، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة الإجراءات المتخذة.`; break;
            case 'vandalism': msg += `⚠️ *الموضوع: تخريب ممتلكات المدرسة*\nلقد لاحظنا أن الطالب المذكور قد قام بتخريب بعض ممتلكات المدرسة.\nحماية الممتلكات العامة واجب على الجميع، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمعالجة هذا الموضوع والتعويض عن الأضرار.`; break;
            case 'truancy': msg += `⚠️ *الموضوع: الهروب من المدرسة*\nنعلمكم بأن الطالب المذكور قد هرب من المدرسة أو من الحصص.\nهذا السلوك يشكل خطراً على حماية ومستوى الطالب العلمي، نأمل منكم زيارة المدرسة بأسرع وقت في تاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'books': msg += `📌 *الموضوع: عدم إحضار الكتب المدرسية*\nلم يقم الطالب المذكور بإحضار كتبه ودفاتره المطلوبة للمدرسة عدة مرات.\nهذا الأمر يصبح عائقاً أمام فهمه للدروس، نأمل منكم المتابعة وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'bullying': msg += `⚠️ *الموضوع: التنمر*\nنعلمكم بأن الطالب المذكور قد تنمر على زملائه.\nنحن لا نقبل هذه السلوكيات بأي شكل في المدرسة، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة هذا الموضوع بجدية.`; break;
            case 'sleeping': msg += `📌 *الموضوع: النوم وعدم الانتباه في الفصل*\nلقد لاحظنا أن الطالب المذكور ينام أو يكون غير منتبه كثيراً خلال الحصص.\nهذا يؤثر على استيعابه، نأمل منكم متابعة وقت نومه وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'hygiene': msg += `📌 *الموضوع: ملاحظة حول النظافة الشخصية*\nباحترام نود أن نلفت انتباهكم إلى أن الطالب المذكور يحتاج للاهتمام أكثر بنظافته الشخصية وملابسه.\nالنظافة جزء مهم من الصحة والبيئة المدرسية، شكراً لتعاونكم.`; break;
            case 'profanity': msg += `⚠️ *الموضوع: استخدام ألفاظ بذيئة*\nنعلمكم بأن الطالب المذكور قد استخدم ألفاظاً سيئة وبذيئة وغير لائقة بالأخلاق.\nهذا السلوك غير مقبول تماماً، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime} لتقويم هذا السلوك.`; break;
            case 'smoking': msg += `⚠️ *الموضوع: التدخين في المدرسة*\nنبلغكم بأسف أن الطالب المذكور قد شوهد يدخن داخل المدرسة.\nهذا السلوك يشكل خطراً على صحته ويخالف التعليمات. نأمل منكم زيارة المدرسة بأسرع وقت بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'leave_early': msg += `⚠️ *الموضوع: الخروج قبل انتهاء الدوام*\nلقد غادر الطالب المذكور المدرسة بدون إذن الإدارة قبل انتهاء الحصص.\nهذا الأمر يشكل خطراً على سلامته، نأمل منكم زيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'participation': msg += `📌 *الموضوع: ضعف المشاركة في الفصل*\nلاحظ معلمو الطالب المذكور أن مشاركته في الحصص ضعيفة جداً.\nهذا يؤثر على مستواه العلمي، نأمل منكم دعمه وزيارة المدرسة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'forbidden': msg += `⚠️ *الموضوع: إحضار أشياء ممنوعة*\nنعلمكم بأنه تم العثور على أشياء ممنوعة لا ينبغي إحضارها إلى المدرسة بحوزة الطالب المذكور.\nهذا يخالف قواعد السلامة، نأمل منكم زيارة المدرسة بسرعة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'health': msg += `🏥 *الموضوع: مشكلة صحية*\nنود إعلامكم بأن الطالب المذكور قد أصيب بمرض أو مشكلة صحية داخل المدرسة.\nنأمل منكم زيارتنا بأسرع وقت أو الاتصال بنا للاطمئنان على حالته.`; break;
            case 'trip': msg += `🚌 *الموضوع: رحلة علمية*\nستقوم المدرسة بتنظيم رحلة علمية/ترفيهية.\nنطلب موافقتكم لمشاركة الطالب المذكور في هذه الرحلة. نأمل منكم التواصل مع الإدارة.`; break;
            case 'fees': msg += `💰 *الموضوع: الأقساط المدرسية*\nنود تذكيركم بتأخر دفع الأقساط المدرسية المطلوبة للطالب المذكور.\nنأمل منكم زيارة قسم الحسابات بأسرع وقت ممكن.`; break;
            case 'parent_council': msg += `👥 *الموضوع: مجلس الآباء*\nنود دعوتكم لحضور اجتماع مجلس الآباء.\nمشاركتكم في مناقشة وضع الطلاب مهمة جداً، نأمل حضوركم بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'exam_schedule': msg += `📅 *الموضوع: جدول الامتحانات*\nنود إعلامكم بأنه قد تم توزيع جدول الامتحانات القادمة.\nنأمل منكم دعم الطالب المذكور للتحضير الجيد.`; break;
            case 'document_missing': msg += `📄 *الموضوع: نواقص في المستمسكات*\nهناك بعض النواقص في المستمسكات المطلوبة للطالب المذكور (مثل الصور أو الهوية).\nنأمل منكم توفير هذه المستمسكات لإدارة المدرسة بأسرع وقت ممكن.`; break;
            case 'excellent_project': msg += `💡 *الموضوع: مشروع ممتاز*\nنشكركم ونشكر الطالب المذكور على القيام بمشروع علمي أو فني ممتاز جداً.\nهذا العمل علامة على الكفاءة، نهنئهم على ذلك.`; break;
            case 'activity': msg += `🎭 *الموضوع: المشاركة في نشاط*\nنود إعلامكم بأنه قد تم اختيار الطالب المذكور للمشاركة في نشاط مدرسي.\nدعمكم سيكون دافعاً كبيراً له.`; break;
            case 'late_pickup': msg += `🚗 *الموضوع: التأخر في استلام الطالب*\nلوحظ أنكم تتأخرون غالباً في القدوم لاستلام الطالب المذكور بعد انتهاء الحصص.\nنأمل منكم الالتزام بوقت انتهاء الحصص من أجل سلامته.`; break;
            case 'bus_issue': msg += `🚐 *الموضوع: مشكلة في النقل*\nنعلمكم بوجود ملاحظة أو مشكلة حول نقل الطالب المذكور.\nنأمل منكم التواصل مع مشرف الخط أو الإدارة بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'forgot_id': msg += `📌 *الموضوع: عدم ارتداء هوية المدرسة*\nلقد لاحظنا أن الطالب المذكور جاء للدوام بدون ارتداء هوية المدرسة.\nارتداء الهوية ضروري لمعرفة الطلاب وحمايتهم، نأمل منكم المتابعة.`; break;
            case 'disrespect_teacher': msg += `⚠️ *الموضوع: عدم احترام المعلم*\nمع الأسف، قام الطالب المذكور بتصرف غير لائق مع معلمه.\nاحترام المعلمين جانب مهم من التربية، نأمل منكم زيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            case 'lack_focus': msg += `📌 *الموضوع: قلة التركيز في الدروس*\nلاحظ معلمو الطالب المذكور أن تركيزه في الفصل قليل ومنشغل بأشياء أخرى.\nنأمل منكم متابعة وضعه الدراسي لكي يتحسن مستواه.`; break;
            case 'eating_in_class': msg += `📌 *الموضوع: الأكل داخل الفصل*\nقام الطالب المذكور بتناول طعام أو شراب أثناء الحصة وهذا ممنوع.\nنأمل منكم نصيحته باحترام وقت الحصة.`; break;
            case 'chewing_gum': msg += `📌 *الموضوع: مضغ العلكة*\nلوحظ أن الطالب المذكور قام بمضغ العلكة في الفصل، وهو مخالف لقوانين الفصل.\nنأمل منكم دعمه للالتزام بالتعليمات.`; break;
            case 'failing_exam': msg += `⚠️ *الموضوع: الرسوب في الامتحان*\nمع الأسف، لم تكن نتائج امتحان الطالب المذكور في المستوى المطلوب ورسب.\nنأمل منكم زيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime} لمناقشة وضعه العلمي.`; break;
            case 'damaging_books': msg += `⚠️ *الموضوع: تخريب الكتب*\nلقد قام الطالب المذكور بتخريب أو تمزيق كتب المدرسة المعطاة له.\nنأمل منكم تحذيره حول حماية مواد الدراسة.`; break;
            case 'makeup_accessories': msg += `📌 *الموضوع: استخدام أشياء غير لائقة*\nقام الطالب المذكور باستخدام المكياج أو مواد التجميل وهي ضد قوانين الزي والتربية داخل المدرسة.\nنأمل منكم المتابعة.`; break;
            case 'hallway_noise': msg += `📌 *الموضوع: إحداث ضوضاء في الممرات*\nقام الطالب المذكور بإحداث ضوضاء زائدة في الممرات أثناء الحصص أو في الاستراحة مما أدى إلى إزعاج الفصول الأخرى.\nنأمل منه الالتزام بالهدوء.`; break;
            case 'leave_class_no_permission': msg += `⚠️ *الموضوع: الخروج من الفصل بدون إذن*\nغادر الطالب المذكور الفصل أثناء الحصة بدون إذن المعلم.\nهذا السلوك غير مقبول، نأمل منكم زيارتنا بتاريخ ${formattedDate} الساعة ${formattedTime}.`; break;
            default: msg += `رسالة من المدرسة حول طالب.`;
        }

        msg += `\n\nمع الاحترام والتقدير،\n*إدارة المدرسة*`;
    }
    return msg;
};
