// إظهار العناصر تدريجياً أثناء التمرير
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .feature, .post, .member, .plan, .gallery-grid img, .video-container, .btn, .hero-frame, .hero-wrap')
  .forEach(el => observer.observe(el));

// تفاعل الأزرار (ضغط سريع)
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.add('pressed');
    setTimeout(() => btn.classList.remove('pressed'), 200);
  });
});

// رسائل بسيطة لنماذج إنشاء حساب وتسجيل الدخول
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

if (signupForm) {
  const statusEl = signupForm.querySelector('.form-status');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'تم إنشاء الحساب بنجاح! أهلاً بيك في Abo El yoser robotics.';
    statusEl.style.color = '#1f8f4b';
    signupForm.reset();
  });
}

if (loginForm) {
  const statusEl = loginForm.querySelector('.form-status');
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    statusEl.textContent = 'تم تسجيل الدخول بنجاح! أهلاً بعودتك.';
    statusEl.style.color = '#1f8f4b';
    loginForm.reset();
  });
}

