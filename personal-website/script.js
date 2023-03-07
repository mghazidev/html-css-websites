$(document).ready(function () {
    const popupShown = localStorage.getItem("popupShown");
    console.log("popupShown:", popupShown)
    function showletter() {
        $('#popup-letter').show();
    }

    function hideletter() {
        $('#popup-letter').hide();
    }

    if (!popupShown) {
        setTimeout(showletter, 3000);
      }

    const z = document.getElementById("cancel")
    z.addEventListener("click", function () {
        document.getElementById("popup-letter").style.display = 'none';
        
        localStorage.setItem("popupShown", true);
    });
});

const x = document.getElementById("pop")
x.addEventListener("click", function () {
    const y = document.getElementById("popup-letter")
    y.style.display = 'block';
    if (y.style.display === 'block') {
        const z = document.getElementById("cancel")
        z.addEventListener("click", function () {
            document.getElementById("popup-letter").style.display = 'none';
        })
    } else {
        y.style.display = 'block';
    }
})


const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isvalidemail(email.value)) {
        showError("Enter a valid email Address")
        return;
    }

    if (!isvalidpass(password.value)) {
        showError("Password must be 8 characters or longer")
        return;
    }

    form.submit();
});

function isvalidemail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.com$/;
    return regex.test(email);
}

function isvalidpass(password) {
    return password.length >= 8;
}

function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.innerHTML = message;
}




const resp = document.getElementById("menu");
resp.addEventListener('click', function () {
    const items = document.getElementById("items")
    if (items.style.display === 'block') {
        items.style.display = 'none';
    }
    else {
        items.style.display = 'block';
    }
})

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

function myFunction() {

    document.getElementById("div1").style.display = "block";

    document.getElementById("div2").style.display = "block";

    document.getElementById("div3").style.display = "block";

    document.getElementById("div4").style.display = "block";
    document.getElementById("div5").style.display = "block";

}

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

