


// ===================================
// TRIPZGEO WEBSITE JAVASCRIPT
// ===================================




// =======================================
// MOBILE NAVBAR + BOOK NOW
// =======================================



const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navIcon = document.querySelector(".menu-toggle i");

const navItems = document.querySelectorAll(".nav-links a");

const navbarBookBtn = document.getElementById("navbarBookBtn");




// =======================================
// MOBILE MENU
// =======================================


if(menuToggle && navLinks){



    // OPEN / CLOSE MENU

    menuToggle.addEventListener("click",(e)=>{


        e.stopPropagation();


        navLinks.classList.toggle("active");



        if(navLinks.classList.contains("active")){


            navIcon.classList.remove("fa-bars");

            navIcon.classList.add("fa-xmark");


            menuToggle.setAttribute(
                "aria-label",
                "Close Navigation"
            );


        }

        else{


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


            menuToggle.setAttribute(
                "aria-label",
                "Open Navigation"
            );


        }


    });






    // CLOSE MENU AFTER CLICK LINK


    navItems.forEach((item)=>{


        item.addEventListener("click",()=>{


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        });


    });







    // CLICK OUTSIDE CLOSE


    document.addEventListener("click",(e)=>{


        if(

            !navLinks.contains(e.target) &&

            !menuToggle.contains(e.target)

        ){


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        }


    });







    // ESC KEY CLOSE


    document.addEventListener("keydown",(e)=>{


        if(e.key === "Escape"){


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        }


    });








    // RESET DESKTOP


    window.addEventListener("resize",()=>{


        if(window.innerWidth > 768){


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        }


    });



}








// =======================================
// NAVBAR BOOK NOW WHATSAPP
// =======================================

if (navbarBookBtn) {

    navbarBookBtn.addEventListener("click", () => {

        if (typeof gtag === "function") {
            gtag("event", "book_now_click", {
                button_location: "navbar",
                button_name: "Book Now"
            });
        }

        const phoneNumber = "918398941172";

        const message = `Hello TripZGeo Travel!

I am interested in booking a tour package.

Please share the best available packages, pricing, itinerary, and current offers.

Looking forward to hearing from your team.

Thank you!`;

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

    });

}


/*========================================*
* HERO BUTTONS + INQUIRY FORM
*========================================*/

// =======================================
// SMOOTH SCROLL BUTTONS
// =======================================

const exploreBtn = document.querySelector(".tripz-explore-btn");
const contactBtn = document.querySelector(".tripz-contact-btn");


// =======================================
// EXPLORE TOURS BUTTON
// =======================================

if (exploreBtn) {

    exploreBtn.addEventListener("click", (e) => {

        e.preventDefault();

        // GA4 EVENT
        if (typeof gtag === "function") {
            gtag("event", "explore_tours_click", {
                button_name: "Explore Tours",
                button_location: "hero"
            });
        }

        document.querySelector("#packages")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// =======================================
// CONTACT US BUTTON
// =======================================

if (contactBtn) {

    contactBtn.addEventListener("click", (e) => {

        e.preventDefault();

        // GA4 EVENT
        if (typeof gtag === "function") {
            gtag("event", "contact_us_click", {
                button_name: "Contact Us",
                button_location: "hero"
            });
        }

        document.querySelector("#contact")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// =======================================
// HERO INQUIRY FORM
// =======================================

const scriptURL = "https://script.google.com/macros/s/AKfycbwJMtTqVu582pq11WtY2GGWLNfdLYiILWGN3kjCldLyIkyLe-DlBOKKYCkzcYbXPbx1/exec";

const tripzForm = document.getElementById("tripzTravelForm");


if (tripzForm) {

    const submitBtn =
        tripzForm.querySelector(".tripz-inquiry-btn");


    tripzForm.addEventListener("submit", (e) => {

        e.preventDefault();


        const destination =
            tripzForm.querySelector(
                "select[name='destination']"
            ).value;


        const travellers =
            tripzForm.querySelector(
                "select[name='travellers']"
            ).value;


        const date =
            tripzForm.querySelector(
                "input[name='date']"
            ).value;


        const name =
            tripzForm.querySelector(
                "input[name='name']"
            ).value.trim();


        const mobile =
            tripzForm.querySelector(
                "input[name='mobile']"
            ).value.trim();


        // ===================================
        // VALIDATION
        // ===================================

        if (
            destination === "" ||
            travellers === "" ||
            date === "" ||
            name === "" ||
            mobile === ""
        ) {

            Swal.fire({
                icon: "warning",
                title: "Incomplete Form",
                text: "Please fill all details."
            });

            return;
        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            Swal.fire({
                icon: "warning",
                title: "Invalid Mobile Number",
                text: "Please enter a valid 10-digit mobile number."
            });

            return;
        }


        // ===================================
        // BUTTON LOADING
        // ===================================

        submitBtn.disabled = true;

        submitBtn.innerHTML = "Sending Inquiry...";


        // ===================================
        // SEND DATA TO GOOGLE SHEETS
        // ===================================

        fetch(scriptURL, {

            method: "POST",

            body: JSON.stringify({

                name: name,

                contact: mobile,

                travellers: travellers,

                travelDate: date,

                destination: destination

            })

        })


        .then((response) => response.json())


        .then((data) => {


            // ===================================
            // GA4 - SUCCESSFUL INQUIRY
            // ===================================

            if (typeof gtag === "function") {

                gtag("event", "inquiry_submit", {

                    form_name: "Hero Travel Inquiry",

                    destination: destination,

                    travellers: travellers

                });

            }


            // ===================================
            // RESET FORM
            // ===================================

            tripzForm.reset();


            submitBtn.disabled = false;

            submitBtn.innerHTML = "Send Inquiry";


            // ===================================
            // SUCCESS MESSAGE
            // ===================================

            Swal.fire({

                icon: "success",

                title: "Inquiry Sent!",

                text: "Our travel expert will contact you shortly.",

                width: "280px",

                padding: "1rem",

                timer: 2200,

                showConfirmButton: false,

                timerProgressBar: true

            });


        })


        .catch((error) => {


            console.error(error);


            submitBtn.disabled = false;

            submitBtn.innerHTML = "Send Inquiry";


            Swal.fire({

                icon: "error",

                title: "Oops!",

                text: "Something went wrong. Please try again.",

                confirmButtonText: "OK"

            });


        });

    });

}


/* ==========================================
DOMESTIC PACKAGE JAVASCRIPT
========================================== */


/* ==========================================
BOOK NOW WHATSAPP
========================================== */

const bookButtons =
document.querySelectorAll(".book-btn-package");


bookButtons.forEach(button => {

    button.addEventListener("click", () => {


        const packageName =
            button.dataset.package;


        // =====================================
        // GA4 - PACKAGE BOOK NOW
        // =====================================

        if (typeof gtag === "function") {

            gtag("event", "package_book_now", {

                package_name: packageName,

                button_location: "package_card"

            });

        }


        const message =
`Hello TripZGeo Travel,

I am interested in booking the ${packageName} package.
Please share the complete details, pricing, availability, and inclusions.

Thank you.`;


        const encodedMessage =
            encodeURIComponent(message);


        const whatsappNumber =
            "918398941172";


        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        window.open(
            whatsappURL,
            "_blank"
        );


    });

});



/* ==========================================
VIEW DETAILS POPUP
========================================== */

const detailsButtons =
document.querySelectorAll(".details-btn");


const modal =
document.getElementById("packageModal");


const modalTitle =
document.getElementById("modalTitle");


const modalClose =
document.getElementById("modalClose");


const modalOk =
document.getElementById("modalOk");



detailsButtons.forEach(button => {

    button.addEventListener("click", () => {


        const packageName =
            button.dataset.package;


        // =====================================
        // GA4 - VIEW PACKAGE DETAILS
        // =====================================

        if (typeof gtag === "function") {

            gtag("event", "package_details_view", {

                package_name: packageName,

                button_location: "package_card"

            });

        }


        modalTitle.innerText =
            packageName;


        modal.classList.add("active");


    });

});



function closeModal() {

    modal.classList.remove("active");

}



modalClose.addEventListener(
    "click",
    closeModal
);



modalOk.addEventListener(
    "click",
    closeModal
);



modal.addEventListener(
    "click",
    (e) => {

        if (e.target === modal) {

            closeModal();

        }

    }
);



/* ==========================================
SCROLL REVEAL ANIMATION
========================================== */

const cards =
document.querySelectorAll(".reveal-card");



if (cards.length) {

    const observer =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");


                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.2
            }

        );


    cards.forEach(card => {

        observer.observe(card);

    });

}

/*=========================================*
* INTERNATIONAL PACKAGES JS
*=========================================*/


// =========================================
// INTERNATIONAL PACKAGE REVEAL ANIMATION
// =========================================

const internationalCards = document.querySelectorAll(
    ".international-packages .reveal-card"
);


const internationalObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                internationalObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


internationalCards.forEach((card) => {

    internationalObserver.observe(card);

});



// =========================================
// PACKAGE EXPLORE BUTTON
// =========================================

const internationalButtons = document.querySelectorAll(
    ".international-packages .explore-btn"
);


internationalButtons.forEach((button) => {

    button.addEventListener("click", () => {


        const packageName =
            button.dataset.package;



        // =====================================
        // GA4 - INTERNATIONAL PACKAGE EXPLORE
        // =====================================

        if (typeof gtag === "function") {

            gtag("event", "international_package_explore", {

                package_name: packageName,

                button_location: "international_package"

            });

        }



        const message =
`Hello TripZGeo Travel,

I want details about ${packageName} package.

Please share complete itinerary, price and availability.`;



        const whatsappNumber =
            "918398941172";



        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



        window.open(
            whatsappURL,
            "_blank"
        );


    });

});



// =========================================
// EXPLORE ALL TOURS BUTTON
// =========================================

const allToursButton = document.querySelector(
    ".international-packages .explore-world-btn"
);


if (allToursButton) {

    allToursButton.addEventListener("click", () => {


        // =====================================
        // GA4 - EXPLORE ALL INTERNATIONAL TOURS
        // =====================================

        if (typeof gtag === "function") {

            gtag("event", "international_all_tours_click", {

                button_location: "international_packages"

            });

        }



        const message =
`Hello TripZGeo Travel,

I want details about all international tour packages.`;



        const whatsappNumber =
            "918398941172";



        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



        window.open(
            whatsappURL,
            "_blank"
        );


    });

}
/*=========================================
WHY CHOOSE TRIPZGEO SCROLL REVEAL
=========================================*/


const revealCards = document.querySelectorAll(".reveal-card");


const revealObserver = new IntersectionObserver(
    
    (entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                revealObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.15
    }

);





revealCards.forEach((card)=>{

    revealObserver.observe(card);

});

/*=========================================
OUR SERVICES SCROLL REVEAL
=========================================*/


const serviceCards = document.querySelectorAll(".service-card");


const serviceObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                serviceObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.15
    }

);




serviceCards.forEach((card)=>{

    serviceObserver.observe(card);

});

/*=========================================
CUSTOMER REVIEWS SCROLL REVEAL
=========================================*/


const testimonialCards = document.querySelectorAll(".testimonial-card");


const testimonialObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                testimonialObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.15
    }

);





testimonialCards.forEach((card)=>{

    testimonialObserver.observe(card);

});

/*=========================================
FAQ SCROLL REVEAL
=========================================*/


const faqItems = document.querySelectorAll(".faq-container details");


const faqObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                faqObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.15
    }

);





faqItems.forEach((item)=>{

    faqObserver.observe(item);

});

/*=========================================
CTA SCROLL REVEAL
=========================================*/


const ctaContent = document.querySelectorAll(".cta .reveal-card");


const ctaObserver = new IntersectionObserver(

    (entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                ctaObserver.unobserve(entry.target);


            }


        });


    },

    {
        threshold:0.15
    }

);





ctaContent.forEach((item)=>{

    ctaObserver.observe(item);

});
/*=========================================*
* CONTACT FORM WHATSAPP MESSAGE
*=========================================*/


const contactForm =
    document.getElementById("contactForm");


const contactSubmitBtn =
    document.getElementById("contactSubmitBtn");



if (contactForm) {


    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const phone =
            document.getElementById("phone").value.trim();


        const destination =
            document.getElementById("destination").value.trim();


        const message =
            document.getElementById("message").value.trim();



        // =====================================
        // MOBILE VALIDATION
        // =====================================

        if (!/^[0-9]{10}$/.test(phone)) {

            Swal.fire({
                icon: "warning",
                title: "Invalid Mobile Number",
                text: "Please enter a valid 10-digit mobile number.",
                timer: 2200,
                showConfirmButton: false
            });

            return;

        }



        // =====================================
        // GA4 - CONTACT FORM SUBMIT
        // =====================================

        if (typeof gtag === "function") {

            gtag("event", "contact_form_submit", {

                destination: destination,

                form_location: "contact_section"

            });

        }



        // =====================================
        // BUTTON LOADING
        // =====================================

        contactSubmitBtn.disabled = true;

        contactSubmitBtn.innerHTML =
            "Sending...";



        const whatsappNumber =
            "918398941172";



        const whatsappMessage =
`New Travel Inquiry - TripZGeo Travel
Name: ${name}
Phone: ${phone}
Email: ${email}
Destination: ${destination}
Message: ${message}`;



        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;



        // =====================================
        // OPEN WHATSAPP
        // =====================================

        window.open(
            whatsappURL,
            "_blank"
        );



        // =====================================
        // RESET FORM
        // =====================================

        contactForm.reset();



        // =====================================
        // BUTTON NORMAL
        // =====================================

        contactSubmitBtn.disabled = false;

        contactSubmitBtn.innerHTML =
            "Send Message";


    });

}
 
/*=========================================
FOOTER SCROLL REVEAL
=========================================*/


const footer = document.querySelector(".footer");


if(footer){


    const footerObserver = new IntersectionObserver((entries)=>{


        entries.forEach((entry)=>{


            if(entry.isIntersecting){


                entry.target.classList.add("active");


                footerObserver.unobserve(entry.target);


            }


        });


    },{


        threshold:0.15


    });



    footerObserver.observe(footer);


}