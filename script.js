// Scroll Reveal
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
},{threshold:0.2});

document.querySelectorAll('.card, .gallery-grid img, .video-container, .btn')
  .forEach(el=>observer.observe(el));
