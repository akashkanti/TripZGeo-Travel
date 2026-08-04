


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



if(navbarBookBtn){


    navbarBookBtn.addEventListener("click",()=>{



        const phoneNumber = "918398941172";
        // yaha apna WhatsApp number add karna


const message = `Hello TripZGeo Travel!

I am interested in booking a tour package.

Please share the best available packages, pricing, itinerary, and current offers.

Looking forward to hearing from your team.

Thank you!`; 

const whatsappURL = 
`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(
    whatsappURL,
    "_blank"
);
    });


}


/*========================================
 HERO BUTTONS + INQUIRY FORM
========================================*/


// =======================================
// SMOOTH SCROLL BUTTONS
// =======================================


const exploreBtn = document.querySelector(".tripz-explore-btn");

const contactBtn = document.querySelector(".tripz-contact-btn");



if(exploreBtn){


    exploreBtn.addEventListener("click",(e)=>{


        e.preventDefault();


        document.querySelector("#packages")
        .scrollIntoView({

            behavior:"smooth"

        });


    });


}



if(contactBtn){


    contactBtn.addEventListener("click",(e)=>{


        e.preventDefault();


        document.querySelector("#contact")
        .scrollIntoView({

            behavior:"smooth"

        });


    });


}





// =======================================
// HERO INQUIRY FORM
// =======================================

const scriptURL = "https://script.google.com/macros/s/AKfycbwJMtTqVu582pq11WtY2GGWLNfdLYiILWGN3kjCldLyIkyLe-DlBOKKYCkzcYbXPbx1/exec";

const tripzForm = document.getElementById("tripzTravelForm");

const tripzSuccess = document.getElementById("tripzFormSuccess");

if (tripzForm) {

    tripzForm.addEventListener("submit", (e) => {

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


        // VALIDATION

        if (
            destination === "" ||
            travellers === "" ||
            date === "" ||
            name === "" ||
            mobile === ""
        ) {

            alert("Please fill all details.");
            return;

        }

        if (!/^[0-9]{10}$/.test(mobile)) {

            alert("Please enter valid 10 digit mobile number.");
            return;

        }


        // SEND DATA TO GOOGLE SHEETS

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

            if (tripzSuccess) {

                tripzSuccess.style.display = "block";

            }

            tripzForm.reset();

            setTimeout(() => {

                if (tripzSuccess) {

                    tripzSuccess.style.display = "none";

                }

            }, 5000);

        })

        .catch((error) => {

            console.error(error);

            alert("Something went wrong. Please try again.");

        });

    });

}

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