// TypeWriter
class TypeWriter {
    constructor(element, toRotate, period) {
        this.toRotate = toRotate;
        this.element = element;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.isDeleting = false;
        this.tick();
    }

    tick() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        this.txt = this.isDeleting ? fullTxt.substring(0, this.txt.length - 1) : fullTxt.substring(0, this.txt.length + 1);
        this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () { that.tick(); }, delta);
    }
}

// TypeWriter 
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TypeWriter(elements[i], JSON.parse(toRotate), period);
        }
    }
});



// testimonial slider
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".slider-dot");

    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i !== index);
            dots[i].classList.toggle("bg-orange-500", i === index);
            dots[i].classList.toggle("bg-gray-200", i !== index);
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});

// academic journey slider
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".academic-slide");
    let dots = document.querySelectorAll(".academic-slider-dot");

    let currentIndex = 0
    function showAcademicSlides(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("hidden", i !== index);
            dots[i].classList.toggle("bg-orange-500", i === index);
            dots[i].classList.toggle("bg-gray-200", i !== index);
        });


    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showAcademicSlides(index);
        });
    });

    // Auto-slide every 10 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showAcademicSlides(currentIndex);
    }, 10000);


});


//contact form Submit

(function () {
    emailjs.init({
        // Replace with your EmailJS user ID
        publicKey: process.env.PUBLIC_KEY,
    }); 
})();

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, this)
        .then(() => {
            alert("Message Sent Successfully!");
            document.getElementById("myForm").reset();
        }, (error) => {
            alert("Failed to Send Message!");
        });
});


let ham = document.getElementById("ham");
let menuList = document.getElementById("menu-list");
let menubtn = document.getElementsByClassName("menu");

function showList() {
    menubtn[1].classList.remove("hidden")
    menubtn[0].classList.add("hidden")
    menuList.classList.remove("hidden")
}

function hideList() {
    menubtn[0].classList.remove("hidden")
    menubtn[1].classList.add("hidden")
    menuList.classList.add("hidden")
}

