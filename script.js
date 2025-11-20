// **وظيفة التحقق من ظهور العناصر (Intersection Observer API)**

document.addEventListener("DOMContentLoaded", function() {
    // 1. تحديد العناصر التي سيتم تطبيق تأثير الظهور عليها
    const animatedElements = document.querySelectorAll(
        '.card, .feature, .gallery-grid img, .video-container, .member, .social-icon, .testimonial-grid blockquote, table, .sitemap li'
    );

    // 2. إعداد الخيارات للمراقب (Intersection Observer)
    const observerOptions = {
        root: null, // الرؤية بالنسبة لنافذة العرض (viewport)
        rootMargin: '0px',
        threshold: 0.1 // عندما يظهر 10% من العنصر في الشاشة
    };

    // 3. إنشاء وظيفة المراقب
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إذا ظهر العنصر في الشاشة
                entry.target.classList.add('in-view');
                // (اختياري) إيقاف المراقبة بعد ظهور العنصر مرة واحدة
                // observer.unobserve(entry.target); 
            } else {
                // (اختياري) إزالة الفئة عند الخروج من الشاشة (لإعادة تشغيل التأثير عند التمرير لأعلى)
                // entry.target.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // 4. تطبيق المراقب على جميع العناصر
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ---------------------------------------------
    // تحسين زر الموقع التعليمي (لضمان عمله كزر)
    // ---------------------------------------------
    const eduBtn = document.querySelector('.edu-link');
    if (eduBtn) {
        // إذا كان زر التعليمي هو الزر القديم المرفوع، يجب تغيير سلوكه ليتبع الـ <a>
        // بما أننا حولناه في HTML إلى <a>، فهذه الخطوة اختيارية لكنها جيدة للسلامة
        eduBtn.addEventListener('click', function() {
            window.open('https://ya8796202-dotcom.github.io/Abo-Elyosr-Arduino-/', '_blank');
        });
    }

});
