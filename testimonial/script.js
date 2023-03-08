

 const a = document.querySelectorAll('.btn');
 const slider = document.getElementById('slider');

 a.forEach((button,index) => {
     button.addEventListener("click",() => {
         slider.style.transform = `translateX(-${index * 800}px)`;
         a.forEach((btn) => btn.classList.remove('active'));
         button.classList.add("active")
     });
 });

