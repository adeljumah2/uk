const root = document.documentElement;
const header = document.querySelector(".site-header");
const form = document.querySelector("#formation-form");
const languageButtons = document.querySelectorAll("[data-lang]");

const translations = {
  en: {
    nav_services: "Services",
    nav_entry: "Market Entry",
    nav_process: "Process",
    nav_contact: "Contact",
    hero_kicker: "Saudi market entry desk",
    hero_title: "Launch your Saudi entity with precision.",
    hero_body:
      "RED SEA ADVISORS gives international businesses a structured, government-ready path through MISA licensing, Commercial Registration, ZATCA registration, portals, and setup requirements.",
    hero_cta: "Start the Formation Request",
    hero_secondary: "See the Setup Flow",
    panel_kicker: "Formation Command Desk",
    panel_country: "Saudi Arabia",
    panel_primary_label: "Primary Focus",
    panel_primary_value: "Foreign Company Formation",
    panel_core_label: "Core Support",
    panel_core_value: "Licensing, registrations, government relations",
    panel_outcome_label: "Outcome",
    panel_outcome_value: "A compliant Saudi market presence",
    ticker_misa: "MISA Licensing",
    ticker_cr: "Commercial Registration",
    ticker_zatca: "ZATCA Registration",
    ticker_gov: "Government Relations",
    ticker_setup: "Foreign Company Setup",
    ticker_entry: "Saudi Market Entry",
    signal_1_title: "License",
    signal_1_body: "MISA and activity-specific requirements.",
    signal_2_title: "Register",
    signal_2_body: "Commercial, tax, and portal setup steps.",
    signal_3_title: "Coordinate",
    signal_3_body: "Government-facing follow-ups and documentation.",
    signal_4_title: "Establish",
    signal_4_body: "A practical path from decision to presence.",
    intro_kicker: "Introducing RED SEA ADVISORS",
    intro_title: "For companies that want the Saudi setup process to feel controlled, not confusing.",
    intro_body_1:
      "Establishing in Saudi Arabia involves authorities, portals, document requirements, timing dependencies, and compliance-facing details. We turn the process into a clear sequence of actions.",
    intro_body_2:
      "Our work is focused: prepare, coordinate, and support the government setup requirements that allow foreign businesses to establish a structured presence in the Kingdom.",
    services_kicker: "Formation Services",
    services_title: "High-impact support across the official establishment path.",
    service_1_title: "Foreign Investment Licensing",
    service_1_body:
      "Activity review, document coordination, and licensing preparation for foreign investors entering Saudi Arabia.",
    service_2_title: "Commercial Registration",
    service_2_body:
      "Support with Commercial Registration requirements and the setup steps needed to create a recognized Saudi entity.",
    service_3_title: "Tax Authority Registration",
    service_3_body:
      "Coordination for ZATCA registration and the early tax compliance setup expected from newly established companies.",
    service_4_title: "Government Relations",
    service_4_body:
      "Structured handling of government portals, authority requirements, follow-ups, and formation-related administrative steps.",
    service_5_title: "Entity Setup Requirements",
    service_5_body:
      "Guidance on the formation sequence, company documents, local requirements, and the practical order of establishment tasks.",
    service_6_title: "Saudi Market Entry",
    service_6_body:
      "Advisory support for companies planning their first presence in Saudi Arabia and the wider GCC business environment.",
    entry_kicker: "Why Saudi Arabia",
    entry_title: "A market with serious opportunity and serious setup requirements.",
    entry_body:
      "Saudi Arabia continues to attract international companies across professional services, technology, industry, trade, logistics, and investment-led sectors. The opportunity is significant, but the foundation matters: the right license, registrations, and government setup must come first.",
    checklist_title: "What must be mapped early",
    checklist_1: "Business activity and license category",
    checklist_2: "Foreign ownership and shareholder documents",
    checklist_3: "Commercial Registration and entity details",
    checklist_4: "Tax registration and early compliance steps",
    checklist_5: "Government portal access and authority records",
    checklist_6: "Sequencing requirements before operations begin",
    process_kicker: "Our Process",
    process_title: "From market-entry decision to government setup execution.",
    process_1_title: "Assess",
    process_1_body: "Understand the activity, ownership structure, and establishment goal.",
    process_2_title: "Map",
    process_2_body: "Define the licensing path, registrations, documents, and order of actions.",
    process_3_title: "Prepare",
    process_3_body: "Organize required information and documentation for official procedures.",
    process_4_title: "Coordinate",
    process_4_body: "Support submissions, portal steps, and government-facing follow-ups.",
    process_5_title: "Establish",
    process_5_body: "Help complete the setup foundation needed for Saudi market presence.",
    proof_founded: "Founded",
    proof_industry_label: "Industry",
    proof_industry_value: "Strategic Management Services",
    proof_size_label: "Company Size",
    proof_size_value: "2-10 Employees",
    proof_specialty_label: "Specialty",
    proof_specialty_value: "Foreign Company Registration",
    contact_kicker: "Start with the right structure",
    contact_title: "Tell us what you want to establish in Saudi Arabia.",
    contact_body:
      "Share your company activity, target timeline, and setup needs. RED SEA ADVISORS will use the details to understand the formation path and the government steps ahead.",
    contact_point_misa: "MISA licensing",
    contact_point_cr: "Commercial Registration",
    contact_point_zatca: "ZATCA setup",
    form_name: "Full name",
    form_email: "Work email",
    form_company: "Company",
    form_country: "Country",
    form_service: "Service interest",
    form_timeline: "Target timeline",
    form_notes: "Setup notes",
    form_submit: "Submit Formation Request",
    form_submitting: "Submitting your formation request...",
    form_success: "Thank you. Your formation request has been sent to RED SEA ADVISORS.",
    form_error: "The form could not be sent. Please try again or contact RED SEA ADVISORS directly.",
    placeholder_name: "Your name",
    placeholder_email: "name@company.com",
    placeholder_company: "Company name",
    placeholder_country: "Current country",
    placeholder_message:
      "Tell us about the business activity, ownership structure, and what you need support with.",
    option_service: "Select a service",
    option_misa: "MISA Licensing",
    option_cr: "Commercial Registration",
    option_zatca: "ZATCA Registration",
    option_gov: "Government Relations",
    option_full: "Full Company Formation",
    option_timeline: "Select timeline",
    option_now: "Immediately",
    option_30: "Within 30 days",
    option_90: "1-3 months",
    option_explore: "Exploring options",
    footer_services: "Company Formation | MISA Licensing | Government Relations | ZATCA Registration",
    footer_rights: "© 2026 RED SEA ADVISORS. All rights reserved."
  },
  ar: {
    nav_services: "الخدمات",
    nav_entry: "دخول السوق",
    nav_process: "الخطوات",
    nav_contact: "تواصل",
    hero_kicker: "مكتب دخول السوق السعودي",
    hero_title: "أسّس كيانك في السعودية بدقة.",
    hero_body:
      "تدعم RED SEA ADVISORS الشركات الدولية عبر مسار حكومي منظم يشمل ترخيص MISA، السجل التجاري، تسجيل ZATCA، البوابات الحكومية، ومتطلبات التأسيس.",
    hero_cta: "ابدأ طلب التأسيس",
    hero_secondary: "شاهد مسار العمل",
    panel_kicker: "مركز إدارة التأسيس",
    panel_country: "المملكة العربية السعودية",
    panel_primary_label: "التركيز الرئيسي",
    panel_primary_value: "تأسيس الشركات الأجنبية",
    panel_core_label: "الدعم الأساسي",
    panel_core_value: "التراخيص، التسجيلات، والعلاقات الحكومية",
    panel_outcome_label: "النتيجة",
    panel_outcome_value: "حضور نظامي ومنظم في السوق السعودي",
    ticker_misa: "ترخيص MISA",
    ticker_cr: "السجل التجاري",
    ticker_zatca: "تسجيل ZATCA",
    ticker_gov: "العلاقات الحكومية",
    ticker_setup: "تأسيس الشركات الأجنبية",
    ticker_entry: "دخول السوق السعودي",
    signal_1_title: "الترخيص",
    signal_1_body: "متطلبات MISA ومتطلبات النشاط التجاري.",
    signal_2_title: "التسجيل",
    signal_2_body: "السجل التجاري، الضريبة، وخطوات البوابات الحكومية.",
    signal_3_title: "التنسيق",
    signal_3_body: "متابعة الإجراءات الحكومية وتنظيم المستندات.",
    signal_4_title: "التأسيس",
    signal_4_body: "مسار عملي من قرار الدخول إلى بدء الحضور.",
    intro_kicker: "تعريف RED SEA ADVISORS",
    intro_title: "للشركات التي تريد أن يكون تأسيسها في السعودية واضحًا ومنظمًا.",
    intro_body_1:
      "الدخول إلى السعودية يتطلب التعامل مع جهات وبوابات ومستندات وتسلسل إجراءات. نحن نحول هذا التعقيد إلى خطوات واضحة قابلة للتنفيذ.",
    intro_body_2:
      "يركز عملنا على تجهيز وتنسيق ودعم متطلبات التأسيس الحكومية التي تساعد الشركات الأجنبية على بناء حضور منظم في المملكة.",
    services_kicker: "خدمات التأسيس",
    services_title: "دعم مؤثر عبر مسار التأسيس الرسمي.",
    service_1_title: "ترخيص الاستثمار الأجنبي",
    service_1_body: "مراجعة النشاط، تنسيق المستندات، وتجهيز متطلبات الترخيص للمستثمرين الأجانب في السعودية.",
    service_2_title: "السجل التجاري",
    service_2_body: "دعم متطلبات السجل التجاري وخطوات إنشاء كيان سعودي معترف به رسميًا.",
    service_3_title: "تسجيل هيئة الزكاة والضريبة والجمارك",
    service_3_body: "تنسيق تسجيل ZATCA ومتطلبات الامتثال الضريبي الأولى للشركات الجديدة.",
    service_4_title: "العلاقات الحكومية",
    service_4_body: "إدارة منظمة للبوابات والمتطلبات الحكومية والمتابعات المرتبطة بإجراءات التأسيس.",
    service_5_title: "متطلبات إعداد الكيان",
    service_5_body: "توجيه حول تسلسل التأسيس، مستندات الشركة، المتطلبات المحلية، والترتيب العملي للمهام.",
    service_6_title: "دخول السوق السعودي",
    service_6_body: "دعم استشاري للشركات التي تخطط لأول حضور لها في السعودية وبيئة الأعمال الخليجية.",
    entry_kicker: "لماذا السعودية",
    entry_title: "سوق كبير بفرص جدية ومتطلبات تأسيس واضحة.",
    entry_body:
      "تستمر السعودية في جذب الشركات الدولية في الخدمات المهنية، التقنية، الصناعة، التجارة، اللوجستيات، والقطاعات الاستثمارية. الفرصة كبيرة، لكن الأساس مهم: الترخيص الصحيح والتسجيلات والإعداد الحكومي أولًا.",
    checklist_title: "ما يجب تحديده مبكرًا",
    checklist_1: "النشاط التجاري وفئة الترخيص",
    checklist_2: "الملكية الأجنبية ومستندات الشركاء",
    checklist_3: "السجل التجاري وبيانات الكيان",
    checklist_4: "التسجيل الضريبي وخطوات الامتثال الأولى",
    checklist_5: "الوصول للبوابات الحكومية وسجلات الجهات",
    checklist_6: "تسلسل المتطلبات قبل بدء العمليات",
    process_kicker: "آلية العمل",
    process_title: "من قرار دخول السوق إلى تنفيذ الإعداد الحكومي.",
    process_1_title: "التقييم",
    process_1_body: "فهم النشاط، هيكل الملكية، وهدف التأسيس.",
    process_2_title: "رسم المسار",
    process_2_body: "تحديد مسار الترخيص والتسجيلات والمستندات وترتيب الإجراءات.",
    process_3_title: "التحضير",
    process_3_body: "تنظيم المعلومات والمستندات المطلوبة للإجراءات الرسمية.",
    process_4_title: "التنسيق",
    process_4_body: "دعم التقديم، خطوات البوابات، والمتابعات الحكومية.",
    process_5_title: "التأسيس",
    process_5_body: "استكمال الأساس المطلوب لحضور منظم في السوق السعودي.",
    proof_founded: "تأسست",
    proof_industry_label: "القطاع",
    proof_industry_value: "خدمات الإدارة الاستراتيجية",
    proof_size_label: "حجم الشركة",
    proof_size_value: "2-10 موظفين",
    proof_specialty_label: "التخصص",
    proof_specialty_value: "تسجيل الشركات الأجنبية",
    contact_kicker: "ابدأ بالهيكل الصحيح",
    contact_title: "أخبرنا ماذا تريد أن تؤسس في السعودية.",
    contact_body:
      "شاركنا نشاط الشركة، الجدول الزمني، واحتياجات التأسيس. ستستخدم RED SEA ADVISORS هذه التفاصيل لفهم مسار التأسيس والخطوات الحكومية المطلوبة.",
    contact_point_misa: "ترخيص MISA",
    contact_point_cr: "السجل التجاري",
    contact_point_zatca: "تسجيل ZATCA",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني للعمل",
    form_company: "الشركة",
    form_country: "الدولة",
    form_service: "الخدمة المطلوبة",
    form_timeline: "الجدول الزمني",
    form_notes: "ملاحظات التأسيس",
    form_submit: "إرسال طلب التأسيس",
    form_submitting: "جاري إرسال طلب التأسيس...",
    form_success: "شكرًا لك. تم إرسال طلب التأسيس إلى RED SEA ADVISORS.",
    form_error: "تعذر إرسال النموذج. يرجى المحاولة مرة أخرى أو التواصل مباشرة مع RED SEA ADVISORS.",
    placeholder_name: "اسمك",
    placeholder_email: "name@company.com",
    placeholder_company: "اسم الشركة",
    placeholder_country: "الدولة الحالية",
    placeholder_message: "اكتب النشاط التجاري، هيكل الملكية، ونوع الدعم المطلوب.",
    option_service: "اختر الخدمة",
    option_misa: "ترخيص MISA",
    option_cr: "السجل التجاري",
    option_zatca: "تسجيل ZATCA",
    option_gov: "العلاقات الحكومية",
    option_full: "تأسيس الشركة بالكامل",
    option_timeline: "اختر الجدول الزمني",
    option_now: "فورًا",
    option_30: "خلال 30 يومًا",
    option_90: "من شهر إلى 3 أشهر",
    option_explore: "استكشاف الخيارات",
    footer_services: "تأسيس الشركات | ترخيص MISA | العلاقات الحكومية | تسجيل ZATCA",
    footer_rights: "© 2026 RED SEA ADVISORS. جميع الحقوق محفوظة."
  }
};

let currentLanguage = localStorage.getItem("rsa-language") || "en";

function translate(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("rsa-language", language);
  root.lang = language;
  root.dir = "ltr";
  document.body.classList.toggle("is-rtl", language === "ar");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", translate(element.dataset.i18nPlaceholder));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  root.style.setProperty("--scroll-progress", Math.min(Math.max(progress, 0), 1));
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
applyLanguage(currentLanguage);
updateScrollProgress();

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = form.querySelector(".form-status");
  const button = form.querySelector(".form-button");
  const formData = new FormData(form);

  if (button) {
    button.disabled = true;
    button.textContent = translate("form_submitting");
  }

  if (status) {
    status.textContent = translate("form_submitting");
  }

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: { Accept: "application/json" }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Form submission failed");
      }
      if (status) {
        status.textContent = translate("form_success");
      }
      form.reset();
    })
    .catch(() => {
      if (status) {
        status.textContent = translate("form_error");
      }
    })
    .finally(() => {
      if (button) {
        button.disabled = false;
        button.textContent = translate("form_submit");
      }
    });
});
