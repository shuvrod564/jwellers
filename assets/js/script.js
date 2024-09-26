 

/*============================= Back To Top Button Script ========================*/
var mybutton = document.getElementById("backTop");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


(function ($) {
 

  
  
  
  
  
});
var mainslider = new Swiper('.heroBannerCarousel', {
  observer: true,  
  observeParents: true,
  loop: false,
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1, 
  observer: true,  
  observeParents: true, 
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




var swiperInstance; // To hold the Swiper instance

// Function to initialize or reinitialize Swiper
function initSwiper() {
  // Determine whether the slider should be vertical or horizontal based on screen width
  var isVertical = window.innerWidth > 992;
  
  // If a Swiper instance already exists, destroy it first
  if (swiperInstance) {
    swiperInstance.destroy(true, true); // Destroy and clean up
  }

  // Initialize a new Swiper instance with the appropriate direction
  swiperInstance = new Swiper('.categoryCarousel', {
    observer: true,
    observeParents: true,
    loop: false,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: isVertical ? 'auto' : auto,
    direction: isVertical ? 'vertical' : 'horizontal', // Set direction based on screen width
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

// Initialize Swiper on page load
initSwiper();

// Add event listener to detect window resize and reinitialize Swiper
window.addEventListener('resize', function () {
  // Reinitialize Swiper only if the direction should change
  initSwiper();
});

  

var mainslider = new Swiper('.threeItmeCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 12,
  slidesPerView: 3, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1,
      spaceBetween: 12
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 12
    }
  },
});

 

  
   
   