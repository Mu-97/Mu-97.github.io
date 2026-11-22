// ============================================================
// إعدادات موقع د. محمد شادي — عدّل بياناتك وروابطك هنا بسهولة
// Dr. Mohamed Shady Website Configuration (Edit everything here)
// ============================================================

window.SITE_CONFIG = {
  // 1. البيانات الأساسية والهوية
  doctor: {
    nameAr: "د. محمد شادي",
    nameEn: "Dr. Mohamed Shady",
    brandTaglineAr: "مساحة آمنة للتعافي والنمو",
    brandTaglineEn: "A Safe Space for Healing & Growth",
    titleAr: "طبيب نفسي — الطب النفسي والعلاج النفسي",
    titleEn: "Psychiatrist — Clinical Psychiatry & Psychotherapy",
    shortBioAr:
      "أقدم تقييماً نفسياً إكلينيكياً دقيقاً وخططاً علاجية قائمة على الدليل العلمي في بيئة تحترم خصوصيتك وتدعم تعافيك خطوة بخطوة.",
    shortBioEn:
      "Providing evidence-based psychiatric assessment and compassionate, confidential treatment plans tailored to each individual.",
    // لاستبدال الصورة بصورتك الشخصية: ضع صورتك في مجلد assets باسم doctor-photo.jpg وعدّل السطر التالي
    photoUrl: "assets/doctor-photo.jpg",
  },

  // 2. بيانات العيادة والمواعيد (مرتبطة تلقائياً بجدول Google Calendar الخاص بك)
  clinic: {
    hospitalAr: "مستشفى دار الإسكندرية للاستشفاء للطب النفسي – العيادات الخارجية",
    hospitalEn: "Dar El Alexandria Psychiatry Hospital – Outpatient Clinic",
    cityAr: "الإسكندرية، مصر",
    cityEn: "Alexandria, Egypt",
    hoursAr: "يومياً عدا الثلاثاء والأربعاء | ٤:٠٠ م – ٩:٠٠ م (بتوقيت القاهرة)",
    hoursEn: "Daily except Tuesday & Wednesday | 4:00 PM – 9:00 PM (Cairo Time)",
    durationsAr: "مدة الكشف: ٦٠ دقيقة • مدة الاستشارة (المتابعة): ٣٠ دقيقة",
    durationsEn: "Initial Visit: 60 min • Follow-up Consultation: 30 min",
    advanceNoticeAr: "الحجز قبل الموعد بـ ٢٤ ساعة على الأقل",
    advanceNoticeEn: "Minimum 24 hours advance notice",
    onlineNoteAr: "يُرسل رابط Google Meet الخاص على الواتساب قبل الجلسة بـ ٣٠ دقيقة تقريباً",
    onlineNoteEn: "Private Google Meet link sent via WhatsApp ~30 minutes before your session",

    // روابط حجز Google Calendar الحقيقية الخاصة بك
    bookingShortUrl: "https://calendar.app.google/BsQ7FNe6WHo86dit5",
    bookingEmbedUrl:
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0u-6b7IzG0xr_D8f3-HzFHrQhs11335qrdpa1mSbkfvwmz7lnuBzQOqV5-b6M0vwJbnW6WFoc8?gv=true",

    // واتساب مكتب المساعدة والطوارئ
    whatsappNumberDisplay: "01211621614",
    whatsappInternational: "201211621614",
    whatsappUrl: "https://wa.me/201211621614",
    emergencyPhone: "035454103",
    email: "", // اختياري: أضف بريدك المهني هنا إن رغبت في عرضه (مثل dr.mohamedshady@...)
    googleMapsUrl: "", // اختياري: أضف رابط خرائط جوجل لمستشفى دار الإسكندرية للاستشفاء
  },

  // 3. روابط السوشيال ميديا (تظهر تلقائياً في صفحة الروابط Linktree وفي الموقع)
  // ضع روابطك الحقيقية مكان "#" وسيظهر كل رابط مفعّلاً؛ أي رابط تتركه فارغاً "" يختفي تلقائياً
  socials: [
    {
      id: "linkedin",
      nameAr: "لينكدإن (LinkedIn)",
      nameEn: "LinkedIn",
      handleAr: "linkedin.com/in/mhmdshady",
      handleEn: "linkedin.com/in/mhmdshady",
      url: "https://www.linkedin.com/in/mhmdshady/",
      icon: "linkedin",
      accent: "#0A66C2",
      featuredInLinktree: true,
    },
    {
      id: "instagram",
      nameAr: "إنستغرام (Instagram)",
      nameEn: "Instagram",
      handleAr: "توعية نفسية يومية وريلز قصيرة",
      handleEn: "Daily Mental Health Reels & Tips",
      url: "https://www.instagram.com/",
      icon: "instagram",
      accent: "#C13584",
      featuredInLinktree: true,
    },
    {
      id: "facebook",
      nameAr: "فيسبوك (Facebook)",
      nameEn: "Facebook",
      handleAr: "مقالات وتوعية للمرضى والأسر",
      handleEn: "Articles & Family Psychoeducation",
      url: "https://www.facebook.com/",
      icon: "facebook",
      accent: "#1877F2",
      featuredInLinktree: true,
    },
    {
      id: "tiktok",
      nameAr: "تيك توك (TikTok)",
      nameEn: "TikTok",
      handleAr: "فيديوهات قصيرة مبسّطة عن الصحة النفسية",
      handleEn: "Short Evidence-Based Mental Health Clips",
      url: "https://www.tiktok.com/",
      icon: "tiktok",
      accent: "#111111",
      featuredInLinktree: true,
    },
    {
      id: "youtube",
      nameAr: "يوتيوب (YouTube)",
      nameEn: "YouTube",
      handleAr: "شرح متعمّق للاضطرابات والعلاج النفسي",
      handleEn: "In-Depth Mental Health Talks",
      url: "https://www.youtube.com/",
      icon: "youtube",
      accent: "#FF0000",
      featuredInLinktree: true,
    },
  ],

  // 4. المؤهلات والمنهج العلاجي (محدّثة من السيرة الذاتية — يمكنك إضافة أي درجات أحدث في أي وقت)
  credentials: {
    qualificationsAr: [
      "بكالوريوس الطب والجراحة (MBBCh) — كلية الطب، جامعة الإسكندرية (٢٠٢٣)",
      "طبيب نفسي بالعيادات الخارجية — مستشفى دار الإسكندرية للاستشفاء للطب النفسي",
      "دورة تشخيص الاضطرابات النفسية والنمائية وفقاً لـ ICD-11 — مركز كولومبيا ومنظمة الصحة العالمية (Columbia-WHO)",
      "برنامج مبادئ وممارسات البحث الإكلينيكي — المعاهد الوطنية الأمريكية للصحة (NIH)",
      "تدريب في عيادات الطب النفسي والأعصاب والطب النفسي للأطفال والمراهقين — مستشفى الحضرة الجامعي",
      "عضو الجمعية الأمريكية للطب النفسي (APA) والشبكة العالمية للممارسة الإكلينيكية (WHO-GCPN)",
    ],
    qualificationsEn: [
      "MBBCh — Faculty of Medicine, Alexandria University (2023)",
      "Outpatient Psychiatrist — Dar El Alexandria Psychiatry Hospital",
      "ICD-11 Diagnostic Requirements Training — Columbia-WHO Center for Global Mental Health",
      "Principles & Practice of Clinical Research (IPPCR) — National Institutes of Health (NIH)",
      "Clinical Observership in Neuropsychiatry & Child/Adolescent Psychiatry — Hadra University Hospital",
      "Member: American Psychiatric Association (APA) & WHO Global Clinical Practice Network (GCPN)",
    ],
    approachAr: [
      "الطب النفسي المبني على الدليل العلمي الحديث (DSM-5 / ICD-11) بعيداً عن الاجتهادات غير الموثّقة",
      "اهتمام إكلينيكي باضطرابات القلق، الاكتئاب، اضطرابات النوم، واضطراب فرط الحركة وتشتت الانتباه (ADHD)",
      "ورش تدريبية معتمدة في العلاج النفسي التفاعلي (IPT) ومهارات دعم الأسر ومقدمي الرعاية (CST)",
      "تقديم جلسات حضورية في الإسكندرية واستشارات أونلاين سرية باللغتين العربية والإنجليزية (C2)",
      "عضوية جمعيات دولية متخصصة: طب النوم (AASM)، طب الإدمان (ASAM)، والطب النفسي العصبي (ANPA)",
    ],
    approachEn: [
      "Strictly evidence-based psychiatric care aligned with modern DSM-5 & ICD-11 clinical standards",
      "Clinical focus on anxiety, mood disorders, sleep medicine, and adult/youth ADHD",
      "Workshop training in Interpersonal Psychotherapy (IPT) and Caregiver Skill Training (CST)",
      "Bilingual consultations in fluent Arabic and English (C2) — in-person in Alexandria & online via Google Meet",
      "International memberships: AASM (Sleep Medicine), ASAM (Addiction Medicine), ANPA & AACAP",
    ],
  },

  // 5. الخدمات العلاجية
  services: [
    {
      icon: "clipboard",
      badgeAr: "٦٠ دقيقة",
      badgeEn: "60 min",
      titleAr: "الكشف النفسي الشامل",
      titleEn: "Comprehensive Psychiatric Assessment",
      descAr:
        "تقييم إكلينيكي متكامل للأعراض والتاريخ المرضي مع وضع خطة علاجية واضحة تناسب حالتك واحتياجاتك.",
      descEn:
        "Thorough clinical evaluation of symptoms and history with a clear, individualized treatment plan.",
    },
    {
      icon: "refresh",
      badgeAr: "٣٠ دقيقة",
      badgeEn: "30 min",
      titleAr: "جلسات الاستشارة والمتابعة",
      titleEn: "Follow-up Consultations",
      descAr:
        "متابعة منتظمة لتقييم التحسن، الإجابة عن تساؤلاتك، وضبط الخطة العلاجية بدقة وأمان.",
      descEn:
        "Structured follow-up to track progress, answer questions, and fine-tune your treatment safely.",
    },
    {
      icon: "clinic",
      badgeAr: "حضوري",
      badgeEn: "In-Person",
      titleAr: "العيادة الخارجية بالإسكندرية",
      titleEn: "Outpatient Clinic (Alexandria)",
      descAr:
        "مستشفى دار الإسكندرية للاستشفاء للطب النفسي – العيادات الخارجية، في بيئة مهنية هادئة تحفظ خصوصيتك.",
      descEn:
        "Dar El Alexandria Psychiatry Hospital – Outpatient Clinic, in a calm, private clinical setting.",
    },
    {
      icon: "video",
      badgeAr: "أونلاين",
      badgeEn: "Online",
      titleAr: "الاستشارات الأونلاين السرية",
      titleEn: "Private Online Consultations",
      descAr:
        "جلسات عبر Google Meet برابط خاص يُرسل على الواتساب قبل الموعد بـ ٣٠ دقيقة، للمرضى داخل وخارج مصر.",
      descEn:
        "Confidential Google Meet sessions with a private link delivered via WhatsApp 30 minutes prior.",
    },
  ],

  // 6. مقالات التوعية النفسية (تُفتح في وضع "قراءة هادئة" داخل الموقع)
  articles: [
    {
      id: "when-to-see-psychiatrist",
      categoryAr: "التوعية النفسية",
      categoryEn: "Psychoeducation",
      readTimeAr: "٣ دقائق قراءة",
      readTimeEn: "3 min read",
      titleAr: "متى تحتاج فعلاً لزيارة طبيب نفسي؟",
      titleEn: "When Should You Consider Seeing a Psychiatrist?",
      excerptAr:
        "الفرق بين الضغوط اليومية الطبيعية والأعراض التي تستحق تقييماً طبياً متخصصاً دون تأجيل أو خوف.",
      excerptEn:
        "Understanding the difference between everyday stress and symptoms that benefit from clinical support.",
      bodyAr: [
        "يمر كل إنسان بفترات من الحزن أو التوتر أو الإرهاق، وهذا جزء طبيعي من الحياة. لكن عندما تستمر الأعراض لأسابيع وتبدأ في التأثير على نومك، عملك، دراستك، أو علاقاتك اليومية، يصبح التقييم الطبي المتخصص خطوة حكيمة وليست علامة ضعف.",
        "من أبرز العلامات التي تستدعي استشارة طبيب نفسي: تغيّر مستمر في النوم أو الشهية، قلق مفرط يصعب السيطرة عليه، فقدان الشغف بالأشياء التي كانت تسعدك، نوبات هلع مفاجئة، أو صعوبة ملحوظة في التركيز واتخاذ القرارات.",
        "زيارة الطبيب النفسي لا تعني بالضرورة وصف أدوية؛ أحياناً تبدأ الخطوة الأولى بالتقييم الدقيق، الفهم الصحيح لما تمر به، وتحديد أنسب مسار سواء كان علاجاً نفسياً، تعديلاً لنمط الحياة، أو علاجاً دوائياً عند الحاجة الطبية.",
      ],
      bodyEn: [
        "Everyone experiences stress, sadness, or fatigue from time to time. However, when symptoms persist for weeks and begin interfering with sleep, work, studies, or relationships, a professional psychiatric assessment is a practical step toward recovery.",
        "Common signs include persistent changes in sleep or appetite, overwhelming anxiety, loss of interest in daily activities, panic episodes, or ongoing difficulty concentrating.",
        "Seeing a psychiatrist does not automatically mean medication—it starts with an accurate clinical understanding and choosing the right evidence-based plan together.",
      ],
    },
    {
      id: "first-visit-guide",
      categoryAr: "دليل المريض",
      categoryEn: "Patient Guide",
      readTimeAr: "٣ دقائق قراءة",
      readTimeEn: "3 min read",
      titleAr: "كيف تستعد لأول جلسة نفسية بدون توتر؟",
      titleEn: "How to Prepare for Your First Psychiatric Visit",
      excerptAr:
        "خطوات بسيطة تساعدك على الاستفادة الكاملة من الـ ٦٠ دقيقة الأولى، سواء كان الكشف حضورياً أو أونلاين.",
      excerptEn:
        "Simple tips to help you feel comfortable and get the most out of your initial 60-minute consultation.",
      bodyAr: [
        "الشعور ببعض التوتر قبل أول زيارة للعيادة النفسية أمر طبيعي تماماً. دورنا في الجلسة الأولى هو الاستماع إليك بهدوء وبناء صورة واضحة لما تمر به دون استعجال أو أحكام.",
        "لتسهيل الجلسة الأولى، يُنصح بإحضار (أو تجهيز صورة من) أي روشتات سابقة، تحاليل طبية حديثة، أو قائمة بالأدوية التي تتناولها حالياً، مع تدوين أهم نقطتين أو ثلاث تود مناقشتها.",
        "إذا كانت جلستك أونلاين عبر Google Meet، اختر غرفة هادئة تمنحك الخصوصية، واستخدم سماعة أذن إن أمكن، وتأكد من استقرار الإنترنت قبل وصول الرابط الخاص على واتساب بـ ٣٠ دقيقة.",
      ],
      bodyEn: [
        "Feeling nervous before your first appointment is completely normal. The initial 60-minute visit is designed to listen calmly and understand your story without judgment.",
        "If available, bring previous prescriptions, recent lab results, or a list of current medications, along with 2–3 main questions you would like answered.",
        "For online Google Meet sessions, choose a quiet private room, use headphones if possible, and keep WhatsApp nearby to receive your private link ~30 minutes before the session.",
      ],
    },
    {
      id: "normal-anxiety-vs-disorder",
      categoryAr: "فهم المشاعر",
      categoryEn: "Understanding Anxiety",
      readTimeAr: "٤ دقائق قراءة",
      readTimeEn: "4 min read",
      titleAr: "الفرق بين القلق الطبيعي واضطرابات القلق",
      titleEn: "Normal Anxiety vs. Anxiety Disorders",
      excerptAr:
        "متى يكون القلق إشارة حماية طبيعية من العقل، ومتى يتحول إلى عبء يحتاج خطة علاجية؟",
      excerptEn:
        "When anxiety acts as a helpful signal, and when it becomes a treatable clinical condition.",
      bodyAr: [
        "القلق في أصله استجابة طبيعية تساعدنا على الانتباه والاستعداد للمواقف المهمة كالامتحانات أو المقابلات. هذا النوع من القلق يكون مؤقتاً ومتناسباً مع الموقف ويزول بانتهائه.",
        "أما اضطرابات القلق فتحدث عندما يظل جهاز الإنذار الداخلي في حالة استنفار مستمرة حتى في غياب خطر حقيقي، مصحوباً أحياناً بأعراض جسدية مثل تسارع ضربات القلب، ضيق التنفس، شد عضلي، أو اضطراب النوم.",
        "الخبر المطمئن أن اضطرابات القلق من أكثر الحالات استجابة للعلاج العلمي المنظم، وكلما بدأ التدخل مبكراً كانت العودة لحياة هادئة ومتوازنة أسرع وأسهل.",
      ],
      bodyEn: [
        "Anxiety is originally a normal protective response that helps us prepare for important moments. Normal anxiety is proportionate to the situation and fades once the stressor passes.",
        "An anxiety disorder occurs when this internal alarm stays switched on persistently—often accompanied by physical symptoms such as palpitations, muscle tension, shortness of breath, or poor sleep.",
        "Encouragingly, anxiety disorders are among the most treatable mental health conditions with structured, evidence-based care.",
      ],
    },
  ],
};
