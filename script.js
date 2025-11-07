// Scroll Reveal باستخدام IntersectionObserver
const options = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      // ممكن نوقف المراقبة بعد التفعيل لو عايز الحركة مرة واحدة فقط
      // observer.unobserve(entry.target);
    }
  });
}, options);

// عناصر هنفعل عليها الدخول الناعم
const selectors = [
  '.card',
  '.gallery-grid img',
  '.video-container',
  '.member',
  '.feature',
  'header'
];

document.addEventListener('DOMContentLoaded', () => {
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => observer.observe(el));
  });
});
