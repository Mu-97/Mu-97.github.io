// ============================================================
// Interactive logic for Dr. Mohamed Shady Website & Linktree
// ============================================================

(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;

  let currentLang = localStorage.getItem("dr_shady_lang") || "ar";

  const ICONS = {
    check:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    clipboard:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>',
    refresh:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
    clinic:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M12 9v6"/><path d="M9 12h6"/></svg>',
    video:
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="14" height="12" rx="2"/><polygon points="22 8 16 12 22 16 22 8"/></svg>',
    linkedin:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M8.34 17.34V10.67H6.12V17.34H8.34M7.23 9.75A1.29 1.29 0 1 0 7.23 7.17A1.29 1.29 0 1 0 7.23 9.75M18 17.34V13.68C18 11.72 16.95 10.5 15.27 10.5C14.12 10.5 13.43 11.13 13.12 11.73V10.67H10.9C10.93 11.35 10.9 17.34 10.9 17.34H13.12V13.61C13.12 13.41 13.14 13.21 13.2 13.07C13.36 12.67 13.73 12.26 14.35 12.26C15.16 12.26 15.53 12.88 15.53 13.78V17.34H18Z"/></svg>',
    instagram:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
    facebook:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"/></svg>',
    tiktok:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z"/></svg>',
    youtube:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>',
    calendar:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    whatsapp:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.82 11.82 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.28-1.65a11.88 11.88 0 0 0 5.78 1.47h.01c6.57 0 11.92-5.35 11.92-11.92a11.85 11.85 0 0 0-3.47-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.63-.23-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.87-9.9 9.87Zm5.42-7.41c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z"/></svg>',
    globe:
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  };

  const UI_STRINGS = {
    ar: {
      pageTitle: "د. محمد شادي — الطبيب النفسي وحجز المواعيد",
      linksPageTitle: "روابط د. محمد شادي — حجز المواعيد والسوشيال ميديا",
      langToggle: "EN",
      navHome: "الرئيسية",
      navAbout: "عنّي",
      navServices: "الخدمات",
      navBook: "حجز موعد",
      navArticles: "مقالات التوعية",
      navLinks: "روابطي",
      navContact: "تواصل معي",
      ctaBook: "احجز موعدك الآن",
      ctaWhatsapp: "تواصل عبر واتساب",
      aboutBadge: "عن الطبيب",
      aboutHeading: "نبذة عن د. محمد شادي",
      aboutSub: "رعاية نفسية علمية هادئة تحترم إنسانيتك وخصوصيتك الكاملة.",
      qualTitle: "المؤهلات والخبرة الإكلينيكية",
      approachTitle: "المنهج العلاجي ومجالات الاهتمام",
      servicesBadge: "الخدمات العلاجية",
      servicesHeading: "كيف يمكنني مساعدتك؟",
      servicesSub: "خيارات مرنة بين الحضور بالعيادة أو الاستشارة الأونلاين السرية.",
      bookBadge: "نظام الحجز المباشر",
      bookHeading: "احجز موعدك أونلاين بسهولة",
      bookSub: "اختر اليوم والوقت المناسبين بتوقيت القاهرة — جميع المواعيد مؤكدة ومرتبطة مباشرة بجدول العيادة.",
      bookCardHours: "مواعيد العمل",
      bookCardDuration: "مدة الجلسة والحجز",
      bookCardOnline: "الاستشارة الأونلاين",
      calBarTitle: "جدول مواعيد عيادة د. محمد شادي (بتوقيت القاهرة)",
      calOpenNew: "فتح الحجز في صفحة كاملة",
      emergencyNotice:
        "تنويه هام: هذه الصفحة مخصصة للمواعيد المجدولة فقط وليست لحالات الطوارئ. في الحالات الطارئة يُرجى الاتصال فوراً على:",
      articlesBadge: "التوعية النفسية",
      articlesHeading: "مقالات وإرشادات مبسّطة",
      articlesSub: "محتوى علمي هادئ يساعدك على الفهم قبل وأثناء رحلة التعافي.",
      readMore: "اقرأ المقال ←",
      linksBadge: "مركز الروابط — Linktree",
      linksHeading: "تابعني على منصات التواصل",
      linksSub: "محتوى توعوي يومي موثوق عن الصحة النفسية والعلاج النفسي باللغة العربية.",
      linksBannerTitle: "صفحة الروابط السريعة للسوشيال ميديا (Bio Link)",
      linksBannerSub: "مُصممة خصيصاً لوضعها في بايو إنستغرام وتيك توك ولينكدإن وفيسبوك.",
      linksBannerBtn: "افتح صفحة الروابط",
      contactBadge: "تواصل معنا",
      contactHeading: "موقع العيادة ومكتب المساعدة",
      contactSub: "نرحب باستفساراتكم عبر واتساب مكتب المساعدة لحجز المواعيد أو تعديلها.",
      contactClinicLabel: "العيادة الحضورية",
      contactHoursLabel: "أيام وساعات العمل",
      contactWaLabel: "واتساب مكتب المساعدة",
      contactEmergencyLabel: "رقم الطوارئ",
      formTitle: "أرسل استفسارك مباشرة على واتساب العيادة",
      formHint: "املأ الحقول التالية وسيتم فتح رسالة جاهزة ومرتبة على واتساب مكتب المساعدة فوراً.",
      labelName: "الاسم",
      labelType: "نوع الاستفسار",
      optInperson: "استفسار عن كشف حضوري بالعيادة",
      optOnline: "استفسار عن استشارة أونلاين (Google Meet)",
      optFollowup: "تعديل أو إلغاء موعد محجوز",
      optOther: "استفسار عام",
      labelMsg: "رسالتك (بدون ذكر تفاصيل طبية حساسة)",
      phName: "اكتب اسمك هنا",
      phMsg: "مثال: أرغب في الاستفسار عن أقرب موعد متاح...",
      formSubmit: "إرسال عبر واتساب",
      footerQuick: "روابط سريعة",
      footerContact: "معلومات التواصل",
      footerRights: "© 2026 د. محمد شادي — جميع الحقوق محفوظة.",
      footerPrivacy: "جميع بيانات الحجز تُعامل بسرية طبية تامة.",
      modalCalmLabel: "قراءة هادئة",
      modalBookCta: "احجز استشارتك الآن",
      modalClose: "إغلاق",
      ltBack: "← الموقع الرئيسي",
      ltBookSub: "احجز كشف حضوري أو أونلاين مباشرة (بتوقيت القاهرة)",
      ltWaTitle: "واتساب مكتب المساعدة",
      ltWaSub: "مستشفى دار الإسكندرية للاستشفاء — للاستفسار والتعديل",
      ltWebTitle: "الموقع الرسمي ومقالات التوعية",
      ltWebSub: "الخدمات، التعريف بالطبيب، ونظام الحجز المباشر",
      ltSocialDivider: "تابعني على منصات التواصل",
      ltEmergency: "للحالات الطارئة فقط:",
    },
    en: {
      pageTitle: "Dr. Mohamed Shady — Psychiatrist & Appointments",
      linksPageTitle: "Dr. Mohamed Shady — Links & Appointments",
      langToggle: "عربي",
      navHome: "Home",
      navAbout: "About",
      navServices: "Services",
      navBook: "Book Now",
      navArticles: "Articles",
      navLinks: "Links",
      navContact: "Contact",
      ctaBook: "Book an Appointment",
      ctaWhatsapp: "WhatsApp Help Desk",
      aboutBadge: "About",
      aboutHeading: "Meet Dr. Mohamed Shady",
      aboutSub: "Calm, evidence-based psychiatric care centered on dignity and confidentiality.",
      qualTitle: "Qualifications & Clinical Experience",
      approachTitle: "Therapeutic Approach & Focus",
      servicesBadge: "Clinical Services",
      servicesHeading: "How I Can Help",
      servicesSub: "Flexible care options: in-person outpatient visits or confidential online consultations.",
      bookBadge: "Live Scheduling",
      bookHeading: "Book Your Appointment Online",
      bookSub: "Select an available Cairo time slot — synced directly with the clinic calendar.",
      bookCardHours: "Working Hours",
      bookCardDuration: "Session Duration & Notice",
      bookCardOnline: "Online Sessions",
      calBarTitle: "Dr. Mohamed Shady — Clinic Appointments (Cairo Time)",
      calOpenNew: "Open Full-Screen Booking",
      emergencyNotice:
        "Important Notice: This page is for scheduled outpatient visits only, not emergencies. For emergencies, call:",
      articlesBadge: "Psychoeducation",
      articlesHeading: "Patient Guides & Articles",
      articlesSub: "Clear, evidence-based reading to support you before and during your care journey.",
      readMore: "Read article →",
      linksBadge: "Social Hub — Linktree",
      linksHeading: "Connect on Social Media",
      linksSub: "Trustworthy, stigma-free mental health education across platforms.",
      linksBannerTitle: "Dedicated Bio-Link Page (Linktree)",
      linksBannerSub: "Built for your Instagram, TikTok, LinkedIn, and Facebook bios.",
      linksBannerBtn: "Open Links Page",
      contactBadge: "Contact",
      contactHeading: "Clinic Location & Help Desk",
      contactSub: "Reach our clinic WhatsApp desk for booking assistance or rescheduling.",
      contactClinicLabel: "In-Person Clinic",
      contactHoursLabel: "Working Hours",
      contactWaLabel: "Clinic WhatsApp Help Desk",
      contactEmergencyLabel: "Emergency Line",
      formTitle: "Send a Quick WhatsApp Message",
      formHint: "Fill in the form below to open a pre-formatted WhatsApp message directly to our help desk.",
      labelName: "Your Name",
      labelType: "Inquiry Type",
      optInperson: "In-person clinic consultation",
      optOnline: "Online consultation (Google Meet)",
      optFollowup: "Reschedule or cancel an existing booking",
      optOther: "General inquiry",
      labelMsg: "Message (avoid sensitive clinical details)",
      phName: "Enter your name",
      phMsg: "Example: I would like to ask about available appointments...",
      formSubmit: "Continue on WhatsApp",
      footerQuick: "Quick Links",
      footerContact: "Contact Details",
      footerRights: "© 2026 Dr. Mohamed Shady — All rights reserved.",
      footerPrivacy: "All patient booking details are kept strictly confidential.",
      modalCalmLabel: "Calm Reading",
      modalBookCta: "Book a Consultation",
      modalClose: "Close",
      ltBack: "← Main Website",
      ltBookSub: "Book in-person or online slots directly (Cairo time)",
      ltWaTitle: "Clinic WhatsApp Help Desk",
      ltWaSub: "Dar El Alexandria Psychiatry Hospital — Support & Rescheduling",
      ltWebTitle: "Official Website & Articles",
      ltWebSub: "Services, credentials, and live booking calendar",
      ltSocialDivider: "Follow on Social Media",
      ltEmergency: "For psychiatric emergencies:",
    },
  };

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined) el.textContent = value;
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "ar";
    localStorage.setItem("dr_shady_lang", currentLang);
    const isAr = currentLang === "ar";
    const t = UI_STRINGS[currentLang];

    document.documentElement.lang = currentLang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";

    const isLinksPage = document.body.dataset.page === "links";
    document.title = isLinksPage ? t.linksPageTitle : t.pageTitle;

    // Update all static i18n data attributes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key]) el.setAttribute("placeholder", t[key]);
    });

    // Populate doctor & clinic config values
    const docName = isAr ? cfg.doctor.nameAr : cfg.doctor.nameEn;
    document.querySelectorAll(".js-doctor-name").forEach((el) => (el.textContent = docName));
    setText("hero-motto-text", isAr ? cfg.doctor.brandTaglineAr : cfg.doctor.brandTaglineEn);
    setText("hero-title", isAr ? cfg.doctor.titleAr : cfg.doctor.titleEn);
    setText("hero-bio", isAr ? cfg.doctor.shortBioAr : cfg.doctor.shortBioEn);

    setText("meta-clinic", isAr ? cfg.clinic.hospitalAr : cfg.clinic.hospitalEn);
    setText("meta-hours", isAr ? cfg.clinic.hoursAr : cfg.clinic.hoursEn);
    setText("book-hours-text", isAr ? cfg.clinic.hoursAr : cfg.clinic.hoursEn);
    setText(
      "book-duration-text",
      `${isAr ? cfg.clinic.durationsAr : cfg.clinic.durationsEn} • ${
        isAr ? cfg.clinic.advanceNoticeAr : cfg.clinic.advanceNoticeEn
      }`
    );
    setText("book-online-text", isAr ? cfg.clinic.onlineNoteAr : cfg.clinic.onlineNoteEn);

    setText("contact-clinic-text", isAr ? cfg.clinic.hospitalAr : cfg.clinic.hospitalEn);
    setText("contact-hours-text", isAr ? cfg.clinic.hoursAr : cfg.clinic.hoursEn);
    setText("lt-subtitle", isAr ? cfg.doctor.titleAr : cfg.doctor.titleEn);
    setText("lt-clinic-line", isAr ? cfg.clinic.hospitalAr : cfg.clinic.hospitalEn);

    // Dynamic lists & cards
    renderCredentials(isAr);
    renderServices(isAr);
    renderArticles(isAr, t);
    renderSocialCards(isAr);
    renderLinktreeStack(isAr, t);
  }

  function renderCredentials(isAr) {
    const qualList = document.getElementById("qual-list");
    const approachList = document.getElementById("approach-list");
    if (qualList) {
      const items = isAr ? cfg.credentials.qualificationsAr : cfg.credentials.qualificationsEn;
      qualList.innerHTML = items.map((item) => `<li>${ICONS.check}<span>${item}</span></li>`).join("");
    }
    if (approachList) {
      const items = isAr ? cfg.credentials.approachAr : cfg.credentials.approachEn;
      approachList.innerHTML = items.map((item) => `<li>${ICONS.check}<span>${item}</span></li>`).join("");
    }
  }

  function renderServices(isAr) {
    const grid = document.getElementById("services-grid");
    if (!grid) return;
    grid.innerHTML = cfg.services
      .map(
        (s) => `
      <article class="service-card">
        <div class="service-top">
          <div class="icon-badge">${ICONS[s.icon] || ICONS.clipboard}</div>
          <span class="service-pill">${isAr ? s.badgeAr : s.badgeEn}</span>
        </div>
        <h3>${isAr ? s.titleAr : s.titleEn}</h3>
        <p>${isAr ? s.descAr : s.descEn}</p>
      </article>`
      )
      .join("");
  }

  function renderArticles(isAr, t) {
    const grid = document.getElementById("articles-grid");
    if (!grid) return;
    grid.innerHTML = cfg.articles
      .map(
        (a) => `
      <article class="article-card">
        <div class="article-banner">
          <div class="article-meta">
            <span class="article-tag">${isAr ? a.categoryAr : a.categoryEn}</span>
            <span>${isAr ? a.readTimeAr : a.readTimeEn}</span>
          </div>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 21V9"/><path d="M12 13c-3.5-.5-5-3.2-4.2-5.4 2.4.3 4 2.2 4.2 5.4Z"/><path d="M12 11c3.5-.5 5-3.2 4.2-5.4-2.4.3-4 2.2-4.2 5.4Z"/>
          </svg>
        </div>
        <div class="article-body">
          <h3>${isAr ? a.titleAr : a.titleEn}</h3>
          <p>${isAr ? a.excerptAr : a.excerptEn}</p>
          <button type="button" class="article-read-btn" data-article-id="${a.id}">${t.readMore}</button>
        </div>
      </article>`
      )
      .join("");

    grid.querySelectorAll("[data-article-id]").forEach((btn) => {
      btn.addEventListener("click", () => openArticleModal(btn.getAttribute("data-article-id")));
    });
  }

  function renderSocialCards(isAr) {
    const grid = document.getElementById("social-cards-grid");
    if (!grid) return;
    const activeSocials = cfg.socials.filter((s) => s.url && s.url.trim() !== "");
    grid.innerHTML = activeSocials
      .map(
        (s) => `
      <a class="social-link-card" href="${s.url}" target="_blank" rel="noopener noreferrer">
        <span class="social-icon-circle" style="background:${s.accent}">${ICONS[s.icon] || ICONS.globe}</span>
        <span class="social-card-text">
          <strong>${isAr ? s.nameAr : s.nameEn}</strong>
          <span>${isAr ? s.handleAr : s.handleEn}</span>
        </span>
      </a>`
      )
      .join("");
  }

  function renderLinktreeStack(isAr, t) {
    const stack = document.getElementById("lt-stack");
    if (!stack) return;
    const activeSocials = cfg.socials.filter((s) => s.featuredInLinktree && s.url && s.url.trim() !== "");
    stack.innerHTML = `
      <a class="lt-item lt-item-primary" href="${cfg.clinic.bookingShortUrl}" target="_blank" rel="noopener noreferrer">
        <span class="social-icon-circle" style="background:rgba(38,38,34,0.14);color:#262622">${ICONS.calendar}</span>
        <span class="lt-text">
          <strong>${t.ctaBook}</strong>
          <span class="lt-sub">${t.ltBookSub}</span>
        </span>
      </a>
      <a class="lt-item lt-item-whatsapp" href="${cfg.clinic.whatsappUrl}" target="_blank" rel="noopener noreferrer">
        <span class="social-icon-circle" style="background:#199a4b">${ICONS.whatsapp}</span>
        <span class="lt-text">
          <strong>${t.ltWaTitle} (<span class="ltr-num">${cfg.clinic.whatsappNumberDisplay}</span>)</strong>
          <span class="lt-sub">${t.ltWaSub}</span>
        </span>
      </a>
      <a class="lt-item" href="index.html">
        <span class="social-icon-circle" style="background:#8b6e3c">${ICONS.globe}</span>
        <span class="lt-text">
          <strong>${t.ltWebTitle}</strong>
          <span class="lt-sub">${t.ltWebSub}</span>
        </span>
      </a>
      <div class="lt-divider">${t.ltSocialDivider}</div>
      ${activeSocials
        .map(
          (s) => `
        <a class="lt-item" href="${s.url}" target="_blank" rel="noopener noreferrer">
          <span class="social-icon-circle" style="background:${s.accent}">${ICONS[s.icon] || ICONS.globe}</span>
          <span class="lt-text">
            <strong>${isAr ? s.nameAr : s.nameEn}</strong>
            <span class="lt-sub">${isAr ? s.handleAr : s.handleEn}</span>
          </span>
        </a>`
        )
        .join("")}
    `;
  }

  function openArticleModal(articleId) {
    const modal = document.getElementById("article-modal");
    const article = cfg.articles.find((a) => a.id === articleId);
    if (!modal || !article) return;
    const isAr = currentLang === "ar";
    setText("modal-category", isAr ? article.categoryAr : article.categoryEn);
    setText("modal-title", isAr ? article.titleAr : article.titleEn);
    const bodyEl = document.getElementById("modal-body");
    const paragraphs = isAr ? article.bodyAr : article.bodyEn;
    bodyEl.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeArticleModal() {
    const modal = document.getElementById("article-modal");
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function wireStaticLinks() {
    document.querySelectorAll(".js-doctor-photo").forEach((img) => {
      img.src = cfg.doctor.photoUrl;
    });
    document.querySelectorAll(".js-wa-link").forEach((a) => {
      a.href = cfg.clinic.whatsappUrl;
    });
    document.querySelectorAll(".js-wa-number").forEach((el) => {
      el.textContent = cfg.clinic.whatsappNumberDisplay;
    });
    document.querySelectorAll(".js-emergency-number").forEach((el) => {
      el.textContent = cfg.clinic.emergencyPhone;
      if (el.tagName === "A") el.href = `tel:${cfg.clinic.emergencyPhone}`;
    });
    document.querySelectorAll(".js-booking-direct").forEach((a) => {
      a.href = cfg.clinic.bookingShortUrl;
    });
    const iframe = document.getElementById("google-calendar-iframe");
    if (iframe) iframe.src = cfg.clinic.bookingEmbedUrl;
  }

  function wireInteractions() {
    document.querySelectorAll(".js-lang-toggle").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(currentLang === "ar" ? "en" : "ar"));
    });

    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
      navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => navLinks.classList.remove("open"));
      });
    }

    const modal = document.getElementById("article-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeArticleModal();
      });
      document.querySelectorAll(".js-modal-close").forEach((btn) => {
        btn.addEventListener("click", closeArticleModal);
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeArticleModal();
      });
    }

    const waForm = document.getElementById("whatsapp-inquiry-form");
    if (waForm) {
      waForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = (document.getElementById("wa-name").value || "").trim();
        const typeSelect = document.getElementById("wa-type");
        const typeText = typeSelect.options[typeSelect.selectedIndex].text;
        const msg = (document.getElementById("wa-message").value || "").trim();
        const lines = [
          currentLang === "ar" ? "السلام عليكم، عيادة د. محمد شادي" : "Hello, Dr. Mohamed Shady Clinic",
          name ? `${currentLang === "ar" ? "الاسم" : "Name"}: ${name}` : "",
          `${currentLang === "ar" ? "الموضوع" : "Topic"}: ${typeText}`,
          msg ? `${currentLang === "ar" ? "التفاصيل" : "Details"}: ${msg}` : "",
        ].filter(Boolean);
        const url = `https://wa.me/${cfg.clinic.whatsappInternational}?text=${encodeURIComponent(lines.join("\n"))}`;
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireStaticLinks();
    wireInteractions();
    applyLanguage(currentLang);
  });
})();
