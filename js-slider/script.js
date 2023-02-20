var x = 1;
     gallery = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg']
     function next() {
             document.getElementById("album").src = gallery[x];
             x+=1;
            if (x >= gallery.length) {
                  x=0;
          }
     };

     function prev() {
        document.getElementById("album").src = gallery[x]
        if (x <=0 )
            x = gallery.length; 
            x--;
     }



//  function myfunction() {
//       if ( x = 1){
//           document.getElementById("album").src = "images/image1.jpg";
//           x=1;
//       }

//       if (x = 2) {
//           document.getElementById("album").src = "images/image2.jpg";
          
//         }

//        if (x = 3){
//           document.getElementById("album").src = "images/image3.jpg";
          
//         }
//        if (x = 4){
//           document.getElementById("album").src = "images/image4.jpg";
//       }
//     }
// function myfunction() {
//     if (x = 1){
//     document.getElementById("album").style.display = "block";
//     document.getElementById("album1").style.display = "none";
//     document.getElementById("album2").style.display = "none";
//     document.getElementById("album3").style.display = "none";
    
//     }
//     if (x = 2) {
//         document.getElementById("album").style.display = "none";
//         document.getElementById("album1").style.display = "block";
//         document.getElementById("album2").style.display = "none";
//         document.getElementById("album3").style.display = "none";
        
//     }
//     if (x = 3) {
//         document.getElementById("album").style.display = "none";
//         document.getElementById("album1").style.display = "none";
//         document.getElementById("album2").style.display = "block";
//         document.getElementById("album3").style.display = "none";
        
//     }
//     else if (x = 4) {
//         document.getElementById("album").style.display = "none";
//         document.getElementById("album1").style.display = "none";
//         document.getElementById("album2").style.display = "none";
//         document.getElementById("album3").style.display = "block";
//     }
// }