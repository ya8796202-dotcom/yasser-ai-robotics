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
        <li><a href="#products">المنتجات  الذي صنعها ياسر احمد</a></li>
        <li><a href="#upload">شارك فيديوهاتك معنا</a></li>
        <li><a href="#download">تحميل</a></li>
        <li><a href="#contact">تواصل معنا</a></li>
      </ul>
    </nav>
  </header>

  <section id="about">
    <h2>من نحن</h2>
    <p>نحن شركة متخصصة في الإلكترونيات والذكاء الاصطناعي، نقدم حلولًا ذكية ومبتكرة للمشاريع التقنية.</p>
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
    <h2>رفع الفيديو</h2>
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
body {
  font-family: 'Cairo', sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
}

header {
  background-color: #d40000;
  color: white;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

section {
  padding: 30px;
  border-bottom: 1px solid #ccc;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  background-color: #d40000;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

footer {
  background-color: #222;
  color: white;
  text-align: center;
  padding: 15px;
}

