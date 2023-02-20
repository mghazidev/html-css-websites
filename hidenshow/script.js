
        document.querySelectorAll('.web-1 img').forEach(image => {
            image.onclick = () => {
                document.querySelector('.popup-image').style.display = 'block';
                document.querySelector('.popup-image img').src = image.getAttribute('src');
            }
        });
        document.querySelector('.popup-image span').onclick = () => {
            document.querySelector('.popup-image').style.display = 'none';
        };
        window.addEventListener("scroll", function () {
            var header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        });

        function myFunction1() {

            document.getElementById("div1").style.display = "block";

            document.getElementById("div2").style.display = "none";

            document.getElementById("div3").style.display = "none";

            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "none";

        }

        function myFunction2() {

            document.getElementById("div1").style.display = "none";

            document.getElementById("div2").style.display = "block";

            document.getElementById("div3").style.display = "none";

            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "none";
        }

        function myFunction3() {

            document.getElementById("div1").style.display = "none";

            document.getElementById("div2").style.display = "none";

            document.getElementById("div3").style.display = "block";

            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "none";
        }

        function myFunction4() {

            document.getElementById("div1").style.display = "none";

            document.getElementById("div2").style.display = "none";

            document.getElementById("div3").style.display = "none";

            document.getElementById("div4").style.display = "block";
            document.getElementById("div5").style.display = "none";
        }
        function myFunction5() {

            document.getElementById("div1").style.display = "none";

            document.getElementById("div2").style.display = "none";

            document.getElementById("div3").style.display = "none";

            document.getElementById("div4").style.display = "none";
            document.getElementById("div5").style.display = "block";
        }  