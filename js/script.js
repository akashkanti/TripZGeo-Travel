


// ===================================
// TRIPZGEO WEBSITE JAVASCRIPT
// ===================================




// =======================================
// MOBILE NAVBAR
// =======================================


const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

const navIcon = document.querySelector(".menu-toggle i");

const navItems = document.querySelectorAll(".nav-links a");



// Check elements exist

if(menuToggle && navLinks){



    // OPEN / CLOSE MENU

    menuToggle.addEventListener("click", (e)=>{


        e.stopPropagation();


        navLinks.classList.toggle("active");



        // Icon Change

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




    // CLOSE AFTER CLICK LINK

    navItems.forEach((item)=>{


        item.addEventListener("click",()=>{


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        });



    });




    // CLICK OUTSIDE MENU CLOSE


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




    // RESET ON DESKTOP


    window.addEventListener("resize",()=>{


        if(window.innerWidth > 768){


            navLinks.classList.remove("active");


            navIcon.classList.remove("fa-xmark");

            navIcon.classList.add("fa-bars");


        }


    });



}

/*========================================
 HERO INQUIRY FORM
========================================*/


const tripzForm = document.getElementById("tripzTravelForm");


if(tripzForm){


tripzForm.addEventListener("submit", function(e){


e.preventDefault();



const destination = tripzForm.querySelector(
"select[name='destination']"
).value;


const travellers = tripzForm.querySelector(
"select[name='travellers']"
).value;


const date = tripzForm.querySelector(
"input[name='date']"
).value;


const name = tripzForm.querySelector(
"input[name='name']"
).value.trim();


const mobile = tripzForm.querySelector(
"input[name='mobile']"
).value.trim();





// Validation


if(
destination === "" ||
travellers === "" ||
date === "" ||
name === "" ||
mobile === ""
){

alert("Please fill all details.");

return;

}





if(!/^[0-9]{10}$/.test(mobile)){


alert("Please enter valid 10 digit mobile number.");

return;


}





// Success Message


alert(
`Thank you ${name}! 
Your travel inquiry has been received.
Our team will contact you soon.`
);



tripzForm.reset();



});


}

const destinationSwiper = new Swiper(".destinationSwiper", {

    loop: true,

    spaceBetween: 25,

    grabCursor: true,


    autoplay: {

        delay: 3000,

        disableOnInteraction: false,

    },


    pagination: {

        el: ".swiper-pagination",

        clickable: true,

    },


    navigation: {

        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",

    },


    breakpoints: {


        // Mobile
        0: {

            slidesPerView: 1,

            spaceBetween: 15,

        },


        // Large Mobile
        576: {

            slidesPerView: 1.2,

            spaceBetween: 20,

        },


        // Tablet
        768: {

            slidesPerView: 2,

            spaceBetween: 20,

        },


        // Laptop
        992: {

            slidesPerView: 3,

            spaceBetween: 25,

        },


        // Large Desktop
        1400: {

            slidesPerView: 3,

            spaceBetween: 30,

        }


    }


});

/* ==========================================
DOMESTIC PACKAGE JAVASCRIPT
========================================== */



// ===============================
// BOOK NOW WHATSAPP
// ===============================


const bookButtons = document.querySelectorAll(".book-btn-package");


bookButtons.forEach(button => {


    button.addEventListener("click",()=>{


        let packageName = button.dataset.package;


        let message = 
        `Hello TripZGeo Travel,%0A%0AI want to book ${packageName} package.%0A%0APlease share more details.`;


        let whatsappNumber = "918398941172";


        let whatsappURL = 
        `https://wa.me/${whatsappNumber}?text=${message}`;


        window.open(whatsappURL,"_blank");


    });


});





// ===============================
// VIEW DETAILS POPUP
// ===============================



const detailsButtons = document.querySelectorAll(".details-btn");



detailsButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let packageName = button.dataset.package;


        alert(
        `${packageName}\n\nHotel Included\nMeals Included\nTransport Included\n\nContact TripZGeo Travel for complete itinerary.`
        );


    });


});






// ===============================
// SCROLL REVEAL ANIMATION
// ===============================



const cards = document.querySelectorAll(".reveal-card");



const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.2
});





cards.forEach(card=>{


    observer.observe(card);


});


/*=========================================
INTERNATIONAL PACKAGES JS
=========================================*/



// =========================================
// INTERNATIONAL PACKAGE REVEAL ANIMATION
// =========================================


const internationalCards = document.querySelectorAll(
    ".international-packages .reveal-card"
);



const internationalObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach((entry)=>{


        if(entry.isIntersecting){


            entry.target.classList.add("show");


            internationalObserver.unobserve(entry.target);


        }


    });


},

{

    threshold:0.15

}

);




internationalCards.forEach((card)=>{


    internationalObserver.observe(card);


});







// =========================================
// PACKAGE EXPLORE BUTTON
// =========================================


const internationalButtons = document.querySelectorAll(
    ".international-packages .explore-btn"
);



internationalButtons.forEach((button)=>{


    button.addEventListener("click",()=>{


        const packageName = button.dataset.package;



        const message = 
`Hello TripZGeo Travel,

I want details about ${packageName} package.

Please share complete itinerary, price and availability.`;



        const whatsappNumber = "918398941172";



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



if(allToursButton){


    allToursButton.addEventListener("click",()=>{


        const message =
`Hello TripZGeo Travel,

I want details about all international tour packages.`;



        const whatsappNumber = "918398941172";



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

/*=========================================
CONTACT FORM WHATSAPP MESSAGE
=========================================*/


const contactForm = document.getElementById("contactForm");



contactForm.addEventListener("submit", function(e){


    e.preventDefault();



    // GET FORM DATA


    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const destination = document.getElementById("destination").value;

    const message = document.getElementById("message").value;





    // YOUR WHATSAPP NUMBER

    const whatsappNumber = "918398941172";





    // MESSAGE FORMAT


    const whatsappMessage = 
`New Travel Inquiry - TripZGeo Travel

Name: ${name}

Email: ${email}

Phone: ${phone}

Destination: ${destination}

Message:
${message}`;






    // ENCODE MESSAGE


    const encodedMessage = encodeURIComponent(whatsappMessage);






    // OPEN WHATSAPP


    const whatsappURL = 
    `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;





    window.open(
        whatsappURL,
        "_blank"
    );



});

/*=========================================
FOOTER SCROLL REVEAL
=========================================*/


const footer = document.querySelector(".footer.reveal-card");



if(footer){


    const footerObserver = new IntersectionObserver(

        (entries)=>{


            entries.forEach((entry)=>{


                if(entry.isIntersecting){


                    entry.target.classList.add("active");


                    footerObserver.unobserve(entry.target);


                }


            });


        },

        {
            threshold:0.15
        }

    );



    footerObserver.observe(footer);


}