// Spotlight Effect
const spotlight = document.getElementById('spotlight');
document.addEventListener('mousemove', (e) => {
    spotlight.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(197, 160, 89, 0.08), transparent 80%)`;
});

// Language Toggle (Simple Version)
let isArabic = false;
function toggleLanguage() {
    isArabic = !isArabic;
    const elements = {
        title: document.getElementById('main-title'),
        desc: document.getElementById('description'),
        formTitle: document.getElementById('form-title'),
        badge: document.getElementById('badge-text'),
        btn: document.querySelector('.lang-btn')
    };

    if (isArabic) {
        document.body.dir = "rtl";
        elements.title.innerHTML = `نصيغ أبعاد <br><span class="gold-text">القمة.</span>`;
        elements.desc.innerText = "نتجاوز التعقيد لنمنحكم الوضوح. نحن نبني الحقبة القادمة من السيادة الاستراتيجية.";
        elements.formTitle.innerText = "طلب وصول مبكر";
        elements.badge.innerText = "الإطلاق قريباً في ٢٠٢٦";
        elements.btn.innerText = "English";
    } else {
        document.body.dir = "ltr";
        elements.title.innerHTML = `BEYOND THE <br><span class="gold-text">HORIZON.</span>`;
        elements.desc.innerText = "Mastering complexity. Delivering clarity. We are architecting the next era of strategic dominance.";
        elements.formTitle.innerText = "Priority Registration";
        elements.badge.innerText = "LAUNCHING EARLY 2026";
        elements.btn.innerText = "العربية";
    }
}