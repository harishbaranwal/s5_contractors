

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



const dropdownParents = document.querySelectorAll('.dropdown-parent');

dropdownParents.forEach(parent => {
  parent.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdown = this.querySelector('.dropdown');
    
    // Toggle active class to show or hide the dropdown
    dropdown.classList.toggle('show');

    dropdownParents.forEach(otherParent => {
      if (otherParent !== parent) {
        otherParent.querySelector('.dropdown').classList.remove('show');
      }
    });
  });
});

