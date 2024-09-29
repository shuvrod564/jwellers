document.addEventListener('DOMContentLoaded', function () {
  var mainslider = new Swiper('.heroBannerCarousel', {
    observer: true,  
    observeParents: true,
    loop: false,
    speed: 400,
    spaceBetween: 0,
    slidesPerView: 1, 
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
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
    slidesPerView: isVertical ? 'auto' : 'auto',
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

 
// Product slider script
var productCarousel = new Swiper('.productCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 4, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
});

 
 
// Video play button script
const video = document.getElementById('video');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.classList.add('d-none');
    }
});

video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.classList.add('hidden');
    } else {
        video.pause();
        playButton.classList.remove('d-none');
    }
});

video.addEventListener('ended', () => {
    playButton.classList.remove('d-none');
});



document.querySelectorAll('.category__item').forEach(item => {
  item.addEventListener('click', function() {
      const category = this.querySelector('h3').textContent.trim().toLowerCase(); // Get the category name (e.g., 'necklaces')
      const tab = document.getElementById(`${category}-tab`); // Find the corresponding tab by id

      document.querySelectorAll('.category__item').forEach(el => {
        el.classList.remove('active');
      });

      // Add 'active' class to the clicked category__item
      this.classList.add('active');
      
      if (tab) {
          var tabTrigger = new bootstrap.Tab(tab); // Bootstrap's tab switching method
          tabTrigger.show(); // Show the relevant tab
      }
  });
});




// gallery slider script
var galleryCarousel = new Swiper('.galleryCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 1.2, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
});


// Product slider script
var productThreeItemCarousel = new Swiper('.productThreeItemCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 3, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
});

// Product slider script
var productCarousel2 = new Swiper('.productCarousel2', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 4, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
  navigation: {
    nextEl: '.proNavBtnNext',
    prevEl: '.proNavBtnPrev',
  },
});
// Product slider script
var productCarousel3 = new Swiper('.productCarousel3', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 4, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
  navigation: {
    nextEl: '.proNavBtnNext',
    prevEl: '.proNavBtnPrev',
  },
});
// Product slider script
var productCarousel4 = new Swiper('.productCarousel4', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 36,
  slidesPerView: 4, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 12,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 12
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 36
    }
  },
  navigation: {
    nextEl: '.proNavBtnNext',
    prevEl: '.proNavBtnPrev',
  },
});


// Product slider script
var creationInnerCarousel = new Swiper('.creationInnerCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1, 
  observer: true,  
  observeParents: true, 
  pagination: {
    el: '.creationInnerCarouselPagination', 
  },
});

// Product slider script
var creationCarousel = new Swiper('.creationCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 1, 
  observer: true,  
  observeParents: true,  
  navigation: {
    nextEl: '.creationCarouselNavBtnNext',
    prevEl: '.creationCarouselNavBtnPrev',
  },
});

$(document).ready(function() {
  $('.select').select2();
});


// Filter Product slider script
var filterProductCarousel = new Swiper('.filterProductCarousel', {
  observer: true,  
  observeParents: true,
  loop: true,
  speed: 400,
  spaceBetween: 24,
  slidesPerView: 3, 
  observer: true,  
  observeParents: true, 
  breakpoints: { 
    576: {
      slidesPerView: 1.4,
      spaceBetween: 24,
      centeredSlides: true
    }, 
    992: {
      slidesPerView: 2,
      spaceBetween: 24
    }, 
    1200: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }, 
});