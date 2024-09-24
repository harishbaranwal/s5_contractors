let currentIndex = 0;
let currentCategory = 'bedroom'; // Default category

const images = {
    bedroom: [
        "./assets/bedroom_1.jpg",
        "./assets/bedroom_2.jpg",
        "./assets/bedroom_3.jpg",
        "./assets/bedroom_4.jpg",
        "./assets/bedroom_5.jpg",
        "./assets/bedroom_6.jpg",
        "./assets/bedroom_7.jpg",
        "./assets/bedroom_8.jpg",
        "./assets/bedroom_9.jpg",
        "./assets/bedroom_10.jpg",
        "./assets/bedroom_11.jpg",
        "./assets/bedroom_12.jpg",
        "./assets/bedroom_13.jpg",
        
    ],
    bathroom: [
        "./assets/bathroom_1.jpg",
        "./assets/bathroom_2.jpg",
        "./assets/bathroom_3.jpg",
        "./assets/bathroom_4.jpg",
        "./assets/bathroom_5.jpg",
        "./assets/bathroom_6.jpg",
        "./assets/bathroom_7.jpg",
        "./assets/bathroom_8.jpg",
        "./assets/bathroom_9.jpg",
        "./assets/bathroom_10.jpg",
        "./assets/bathroom_11.jpg",
        "./assets/bathroom_12.jpg",
        "./assets/bathroom_13.jpg",
        './assets/bathroom_15.jpg',
        './assets/bathroom_16.jpg',
        './assets/bathroom_17.jpg',
        './assets/bathroom_18.jpg',
    
    ],
    kitchen: [
        "./assets/kitchen_1.jpg",
        "./assets/kitchen_2.jpg",
        "./assets/kitchen_3.jpg",
        "./assets/kitchen_4.jpg",
        "./assets/kitchen_5.jpg",
        "./assets/kitchen_6.jpg",
        "./assets/kitchen_7.jpg",
        "./assets/kitchen_8.jpg",
        "./assets/kitchen_9.jpg",
        "./assets/kitchen_10.jpg",
        "./assets/kitchen_11.jpg",
        "./assets/kitchen_12.jpg",
        "./assets/kitchen_13.jpg",
    ],
    livingRoom: [
        "./assets/living_room_1.jpg",
        "./assets/living_room_2.jpg",
        "./assets/living_room_3.jpg",
        "./assets/living_room_4.jpg",
        "./assets/living_room_5.jpg",
        "./assets/living_room_6.jpg",
        "./assets/living_room_7.jpg",
        "./assets/living_room_8.jpg",
        "./assets/living_room_9.jpg",
        "./assets/living_room_10.jpg",
        "./assets/living_room_11.jpg",
        "./assets/living_room_12.jpg",
        "./assets/living_room_13.jpg",
        './assets/living_room_15.jpg',
        './assets/living_room_16.jpg',
        './assets/living_room_17.jpg',
        './assets/living_room_18.jpg',
        './assets/living_room_19.jpg',
        './assets/living_room_20.jpg',
        './assets/living_room_21.jpg',
        './assets/living_room_22.jpg',
    ],
    commercial: [
        "./assets/commercial_room_1.jpg",
        "./assets/commercial_room_2.jpg",
        "./assets/commercial_room_3.jpg",
        "./assets/commercial_room_4.jpg",
        "./assets/commercial_room_5.jpg",
        "./assets/commercial_room_6.jpg",
        "./assets/commercial_room_7.jpg",
        "./assets/commercial_room_8.jpg",
        "./assets/commercial_room_9.jpg",
        "./assets/commercial_room_10.jpg",
        "./assets/commercial_room_11.jpg",
        "./assets/commercial_room_12.jpg",
    ],
    others: [
        "./assets/other_1.jpg",
        "./assets/other_2.jpg",
        "./assets/other_3.jpg",
        "./assets/other_4.jpg",
        "./assets/other_5.jpg",
        "./assets/other_6.jpg",
        "./assets/other_7.jpg",
        "./assets/other_8.jpg",
    ]
};

function changeCategory(category) {
    currentCategory = category;
    currentIndex = 0; // Reset the slide index when the category changes

    // Remove active class from all categories
    const navItems = document.querySelectorAll('.navbar ul li');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the clicked category
    const clickedCategory = event.target.closest('li');
    clickedCategory.classList.add('active');

    // Update the slider to reflect the new category
    updateSlider();
}

function updateSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.innerHTML = ''; 

    images[currentCategory].forEach((image) => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = `Image for ${currentCategory}`;
        sliderWrapper.appendChild(imgElement);
    });


    moveSlide(0);
}







function moveSlide(direction) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider-wrapper img');
    const totalImages = images.length;
    const imagesPerSlide = 3; // Number of images to show per slide
    const imageWidth = images.length ? images[0].clientWidth : 0; // Ensure images exist
    const gap = 15; // Gap between images
    
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalImages - imagesPerSlide;
    } else if (currentIndex >= totalImages - imagesPerSlide + 1) {
        currentIndex = 0;
    }

    const translateXValue = (currentIndex * (imageWidth + gap));
    sliderWrapper.style.transform = `translateX(-${translateXValue}px)`;
}

// Initial load
updateSlider();

function moveSlide_2(direction) {
    const sliderWrapper = document.querySelector('.personal_project_slider-wrapper');
    const images = document.querySelectorAll('.personal_project_slider img');
    const totalImages = images.length;
    let currentIndex = parseInt(sliderWrapper.dataset.currentIndex) || 0; // Initialize or get current index
  
    currentIndex += direction;
  
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
  
    const imageWidth = images[0].clientWidth;
    const gap = parseInt(getComputedStyle(sliderWrapper).gap); // Get the gap value
    const translateXValue = (currentIndex * (imageWidth + gap)) - gap; // Calculate the correct translateX value
    sliderWrapper.style.transform = `translateX(-${translateXValue}px)`;
    sliderWrapper.dataset.currentIndex = currentIndex; // Update the current index
  }



document.querySelectorAll('.image-list > li').forEach(item => {
    item.addEventListener('click', function () {
        const profileImg = this.getAttribute('data-profile-img');
        const name = this.getAttribute('data-name');
        const intro = this.getAttribute('data-intro');
        const projects = JSON.parse(this.getAttribute('data-projects'));
        const designIntroItems = JSON.parse(this.getAttribute('data-design-intro'));

        // Update profile section
        document.querySelector('.profile-img').src = profileImg;
        document.querySelector('.name-heading').textContent = name;
        document.querySelector('.intro').textContent = intro;

        // Update project slider
        const sliderWrapper = document.querySelector('.personal_project_slider-wrapper');
        sliderWrapper.innerHTML = ''; // Clear existing images
        projects.forEach(project => {
            const img = document.createElement('img');
            img.src = project;
            img.alt = 'Project Image';
            sliderWrapper.appendChild(img);
        });

        // Update design intro
        const designIntro = document.querySelector('.design_intro');
        designIntro.innerHTML = ''; // Clear existing content
        designIntroItems.forEach(introItem => {
            const div = document.createElement('div');
            div.textContent = introItem;
            designIntro.appendChild(div);
        });

        // Optionally reset the currentIndex for the slider
        currentIndex = 0; 
        moveSlide_2(0); // Reset slider position
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const numbers = document.querySelectorAll('.number');

    const animateNumbers = () => {
        numbers.forEach((num) => {
            const target = +num.innerText.replace('+', ''); // Convert to number, remove '+'
            const increment = Math.ceil(target / 100); // Increment step
            let count = 0;

            const updateNumber = () => {
                if (count < target) {
                    num.innerText = count + increment > target ? target + '+' : count + increment + '+';
                    count += increment;
                    setTimeout(updateNumber, 25); // Adjust speed here
                } else {
                    num.innerText = target + '+'; // Ensure it ends at the target
                }
            };

            updateNumber();
        });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const handleScroll = () => {
        if (isInViewport(numbers[0])) {
            animateNumbers();
            window.removeEventListener('scroll', handleScroll); // Remove event after animation
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately in case already in view
});