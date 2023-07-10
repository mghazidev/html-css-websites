function func1() {
    var toggleElement = document.getElementById("toggle");
  
    if (toggleElement.style.display === "block") {
      toggleElement.style.display = "none";
    } else {
      toggleElement.style.display = "block";
    }
  };

  var checkbox = document.getElementById("checkbox");
   checkbox.addEventListener("click", func1);


  function showProducts(id) {
    var section = document.getElementById(id);
    if(section.style.display === "block") {
        section.style.display = "none";
      } else {
        section.style.display = "block";
      }
    }

    document.getElementById("act1").onclick = function() {
        showProducts(1);
    };

    document.getElementById("act2").onclick = function() {
        showProducts(2);
    };
    document.getElementById("act3").onclick = function() {
        showProducts(3);
    };
    document.getElementById("act4").onclick = function() {
        showProducts(4);
    };
    document.getElementById("act5").onclick = function() {
        showProducts(5);
    };
    document.getElementById("act6").onclick = function() {
        showProducts(6);
    };

  
  
//   let sections = ["1", "2", "3", "4", "5", "6"];

//             function showSection(section) {
//               section.classList.add("show");
//               section.classList.remove("hidden");
//             }

//             function hideSection(section) {
//               section.classList.remove("show");
//               section.classList.add("hidden");
//             }

//             document.getElementById("act").addEventListener("click", function() {
//               showSection(document.getElementById(sections[3]));
//               hideSection(document.getElementById(sections[0]));
//               hideSection(document.getElementById(sections[2]));
//               hideSection(document.getElementById(sections[1]));
//               hideSection(document.getElementById(sections[4]));
//               hideSection(document.getElementById(sections[5]));
//             });