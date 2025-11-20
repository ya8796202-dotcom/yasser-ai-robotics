// **وظيفة التحقق من ظهور العناصر (Intersection Observer API)**

document.addEventListener("DOMContentLoaded", function() {
    // 1. تحديد العناصر التي سيتم تطبيق تأثير الظهور عليها
    // (تم توسيع قائمة العناصر المتحركة لتشمل المزيد)
    const animatedElements = document.querySelectorAll(
        'header, .card, .feature, .gallery-grid img, .video-container, .member, .social-icon, .testimonial-grid blockquote, table, .sitemap li, .edu-link, #contact form > *'
    );

    // 2. إعداد خيارات المراقب
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // عندما يظهر 10% من العنصر في الشاشة
    };

    // 3. إنشاء وظيفة المراقب
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إذا ظهر العنصر، أضف فئة in-view
                entry.target.classList.add('in-view');
                // observer.unobserve(entry.target); // يمكن إزالة التعليق لإظهاره مرة واحدة فقط
            } else {
                // يمكن إزالة فئة in-view عند خروج العنصر من الشاشة (لتكرار الحركة)
                 // entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // 4. تطبيق المراقب على جميع العناصر
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
