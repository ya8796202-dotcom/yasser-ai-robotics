// Scroll Reveal باستخدام IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  const options = { threshold: 0.2 };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // لإظهار الحركة مرة واحدة فقط قم بإلغاء التعليق على السطر التالي
        // observer.unobserve(entry.target);
      }
    });
  }, options);

  const selectors = [
    'header',
    '.card',
    '.gallery-grid img',
    '.video-container',
    '.member',
    '.feature'
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => observer.observe(el));
  });
});
