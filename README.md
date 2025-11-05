# yasser-airobotics<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>Yasser AIRobotics</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>شركة Yasser AIRobotics</h1>
    <nav>
      <ul>
        <li><a href="#about">من نحن</a></li>
        <li><a href="#products">المنتجات الذي صنعها المهندس ياسر</a></li>
        <li><a href="#upload">رفع الفيديو</a></li>
        <li><a href="#download">تحميل</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h2>من نحن</h2>
    <p> نحن شركة متخصصة في الإلكترونيات والذكاء الاصطناعي، نقدم حلولًا ذكية ومبتكرة للمشاريع التقنية يقدمها المهندس ياسر احمد.</p>
  </section>

  <section id="products">
    <h2>المنتجات</h2>
    <ul>
      <li>روبوت ذكي مزود بشاشة وجه</li>
      <li>باور سبلاي متعدد الوظائف</li>
      <li>أنظمة تحكم Arduino متقدمة</li>
    </ul>
  </section>

  <section id="upload">
    <h2>شارك فيديوهاتك معنا </h2>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <label>اختر الفيديو لرفعه:</label>
      <input type="file" name="video" required>
      <button type="submit">رفع</button>
    </form>
  </section>

  <section id="download">
    <h2>تحميل</h2>
    <p>يمكنك تحميل كتيب المنتجات أو دليل الاستخدام من هنا:</p>
    <a href="products-guide.pdf" download>تحميل الكتيب</a>
  </section>

  <section id="contact">
    <h2>تواصل معنا</h2>
    <form>
      <label>الاسم:</label>
      <input type="text" name="name" required>
      <label>البريد الإلكتروني:</label>
      <input type="email" name="email" required>
      <label>رسالتك:</label>
      <textarea name="message" required></textarea>
      <button type="submit">إرسال</button>
    </form>
  </section>
 
  <footer>
    <p>© 2025 Yasser AIRobotics – جميع الحقوق محفوظة</p>
  </footer>
</body> 
</html> 
/* تحسين الخط العام */
body {
  font-family: 'Cairo', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

/* رأس الصفحة */
header {
  background-color: #d40000;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

/* قائمة التنقل */
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 10px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #a00000;
}

/* الأقسام */
section {
  padding: 30px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* النماذج */
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: auto;
}

input, textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

button {
  background-color: #d40000;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #a00000;
}

/* التذييل */
footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 15px;
  font-size: 14px;
}

/* دعم الموبايل */
@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  section {
    padding: 20px;
  }

  form {
    width: 100%;
    padding: 10px;
  }
}
<section id="about" class="fade-in">
  <h2>من نحن</h2>
  <p>نحن شركة متخصصة في الإلكترونيات والذكاء الاصطناعي...</p>
</section>

<section id="products" class="slide-in-right">
  <h2>المنتجات</h2>
  <ul>
    <li>روبوت ذكي مزود بشاشة وجه</li>
    <li>باور سبلاي متعدد الوظائف</li>
  </ul>
</section>

<section id="upload" class="slide-in-left">
  <h2>رفع الفيديو</h2>
  <form>...</form>
</section>
