export function initializeHeroSection() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const slides = document.querySelector(".slides");
  
    if (slides && navButtons.length > 0) {
      let currentSlideIndex = 0;
      let slideInterval;
      let isDragging = false;
      let startX = 0;
  
      function moveSlidesTo(index) {
        currentSlideIndex = index;
        slides.style.transition = "transform 0.5s ease-in-out";
        slides.style.transform = `translateX(-${index * 100}%)`;
        updateActiveButton(index);
      }
  
      function updateActiveButton(index) {
        navButtons.forEach((btn) => btn.classList.remove("active"));
        navButtons[index].classList.add("active");
      }
  
      function goToNextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % navButtons.length;
        moveSlidesTo(currentSlideIndex);
      }
  
      function startAutoSlide() {
        slideInterval = setInterval(goToNextSlide, 4000);
      }
  
      function stopAutoSlide() {
        clearInterval(slideInterval);
      }
  
      navButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
          stopAutoSlide();
          moveSlidesTo(index);
          startAutoSlide();
        });
      });
  
      slides.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        stopAutoSlide();
      });
  
      slides.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
  
        const deltaX = e.touches[0].clientX - startX;
        if (Math.abs(deltaX) > 50) {
          if (deltaX < 0 && currentSlideIndex < navButtons.length - 1) {
            moveSlidesTo(currentSlideIndex + 1);
          } else if (deltaX > 0 && currentSlideIndex > 0) {
            moveSlidesTo(currentSlideIndex - 1);
          }
          isDragging = false;
        }
      });
  
      slides.addEventListener("touchend", () => {
        isDragging = false;
        startAutoSlide();
      });
  
      moveSlidesTo(0);
      startAutoSlide();
    }
  }
  
  
  export function initializeShopNowSection() {
    const shopNowSection = document.querySelector(".shop-now-section");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const items = Array.from(document.querySelectorAll(".shop-now-section a"));
  
    if (shopNowSection && leftBtn && rightBtn && items.length > 0) {
      const totalItems = items.length;
      let currentIndex = 0;
      const mediaQuery = window.matchMedia("(max-width: 1050px)");
      let cloned = false;
  
      function cloneItemsForSmallScreens() {
        if (mediaQuery.matches && !cloned) {
          const firstClone = items[0].cloneNode(true);
          const lastClone = items[totalItems - 1].cloneNode(true);
  
          shopNowSection.appendChild(firstClone);
          shopNowSection.insertBefore(lastClone, items[0]);
          cloned = true;
        }
      }
  
      function resetItemsForLargeScreens() {
        if (!mediaQuery.matches && cloned) {
          shopNowSection.removeChild(shopNowSection.lastChild);
          shopNowSection.removeChild(shopNowSection.firstChild);
          cloned = false;
  
          shopNowSection.style.transition = "none";
          shopNowSection.style.transform = "translateX(0)";
          setTimeout(() => {
            shopNowSection.style.transition = "transform 0.3s ease";
          }, 50);
        }
      }
  
      function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 20;
        const offset = -currentIndex * itemWidth;
        shopNowSection.style.transition = "transform 0.3s ease";
        shopNowSection.style.transform = `translateX(${offset}px)`;
      }
  
      function showNextItem() {
        currentIndex++;
        updateCarousel();
  
        if (currentIndex === totalItems) {
          setTimeout(() => {
            shopNowSection.style.transition = "none";
            currentIndex = 1;
            shopNowSection.style.transform = `translateX(${-items[0].offsetWidth}px)`;
            setTimeout(() => {
              shopNowSection.style.transition = "transform 0.3s ease";
            }, 50);
          }, 300);
        }
      }
  
      function showPrevItem() {
        currentIndex--;
        updateCarousel();
  
        if (currentIndex === -1) {
          setTimeout(() => {
            shopNowSection.style.transition = "none";
            currentIndex = totalItems - 2;
            shopNowSection.style.transform = `translateX(${-items[0].offsetWidth * currentIndex}px)`;
            setTimeout(() => {
              shopNowSection.style.transition = "transform 0.3s ease";
            }, 50);
          }, 300);
        }
      }
  
      leftBtn.addEventListener("click", showPrevItem);
      rightBtn.addEventListener("click", showNextItem);
  
      setInterval(() => {
        if (mediaQuery.matches) {
          showNextItem();
        }
      }, 3000);
  
      function handleResize() {
        cloneItemsForSmallScreens();
        resetItemsForLargeScreens();
      }
  
      window.addEventListener("resize", handleResize);
  
      cloneItemsForSmallScreens();
      handleResize();
    }
  }
// Function to add event listeners for the menu
export function addMenuEventListeners() {
    const menuButton = document.querySelector(".toggle-menu-btn");
    const navPages = document.querySelector(".nav-pages");
  
    if (menuButton && navPages) {
      // Remove any existing event listeners to avoid duplicates
      menuButton.replaceWith(menuButton.cloneNode(true));
      const newMenuButton = document.querySelector(".toggle-menu-btn");
      // Toggle the menu on button click
      newMenuButton.addEventListener("click", (event) => {
        navPages.classList.toggle("open");
        event.stopPropagation();
      });
      // Close the menu when clicking outside of it
      document.addEventListener("click", (event) => {
        if (
          !navPages.contains(event.target) &&
          !newMenuButton.contains(event.target)
        ) {
          navPages.classList.remove("open");
        }
      });
    }
  }
// Function to add event listeners for the search button
export function addSearchEventListeners() {
    const searchButton = document.querySelector(".toggle-btn.search-button");
    const searchOverlay = document.querySelector(".search-overlay");
    const searchCloseButton = document.getElementById("search-close-btn");
    const searchInput = document.getElementById("search-input");
  
    if (searchButton && searchOverlay && searchInput) {
      // Open search modal on search button click
      searchButton.addEventListener("click", () => {
        searchOverlay.style.display = "flex";
        searchInput.focus(); // Focus on the input when modal opens
      });
  
      // Close search modal on close button click
      if (searchCloseButton) {
        searchCloseButton.addEventListener("click", () => {
          searchOverlay.style.display = "none";
          searchInput.value = ""; // Clear input when closing
        });
      }
  
      // Close the modal if 'Enter' is pressed
      searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          // Simulate form submission (no backend yet)
          alert(`Searching for: ${searchInput.value}`);
          searchOverlay.style.display = "none";
          searchInput.value = ""; // Clear input
        }
      });
  
      // Close the modal when clicking outside the search modal area
      window.addEventListener("click", (e) => {
        if (e.target === searchOverlay) {
          searchOverlay.style.display = "none";
        }
      });
    }
}
//js for cart overlay
export function addCartEventListeners() {
    const cartIcon = document.querySelector(".cart-container");
    const cartOverlay = document.getElementById("cart-overlay");
    const closeCart = document.getElementById("close-cart");
  
    // Check if the elements exist before adding event listeners
    if (cartIcon && cartOverlay && closeCart) {
      cartIcon.addEventListener("click", () => {
        cartOverlay.classList.add("active");
      });
  
      closeCart.addEventListener("click", () => {
        cartOverlay.classList.remove("active");
      });
  
      // Close the cart overlay if clicking outside of it
      document.addEventListener("click", (e) => {
        if (!cartOverlay.contains(e.target) && !cartIcon.contains(e.target)) {
          cartOverlay.classList.remove("active");
        }
      });
    }
  }
  