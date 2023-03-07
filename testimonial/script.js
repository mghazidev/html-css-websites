// const a = document.getElementsByClassName("btn")
// const b = document.getElementById("slider");

// a[0].onclick = function() {
//     b.style.transform = "translateX(0px)";
//     for(i = 0; i < a.length; i++) {
//         //we are using classList to remove the active class then we set the class using for loop to that elements which will click 
//         if(a[i].classList.contains("active")) {
//             a[i].classList.remove('active')
//         }
//     }
//     this.classList.add('active')
// }

// a[1].onclick = function() {
//     b.style.transform = "translateX(-800px)";
//     for(i = 0; i < a.length; i++) {
        
//         //we are using classList to remove the active class then we set the class using for loop to that elements which will click 
//         if(a[i].classList.contains("active")) {
//             a[i].classList.remove('active')
//         }
//     }
//     this.classList.add('active')
// }
// a[2].onclick = function() {
//     b.style.transform = "translateX(-1600px)";
//     for(i = 0; i < a.length; i++) {
//         //we are using classList to remove the active class then we set the class using for loop to that elements which will click 
//         if(a[i].classList.contains("active")) {
//             a[i].classList.remove('active')
//         }
//     }
//     this.classList.add('active')
// }
// a[3].onclick = function() {
//     b.style.transform = "translateX(-2400px)";
//     for(i = 0; i < a.length; i++) {
//         //we are using classList to remove the active class then we set the class using for loop to that elements which will click 
//         if(a[i].classList.contains("active")) {
//             a[i].classList.remove('active')
//         }
//     }
//     this.classList.add('active')
// }

 const a = document.querySelectorAll('.btn');
 const slider = document.getElementById('slider');

 a.forEach((button,index) => {
     button.addEventListener("click",() => {
         slider.style.transform = `translateX(-${index * 800}px)`;
         a.forEach((btn) => btn.classList.remove('active'));
         button.classList.add("active")
     });
 });

