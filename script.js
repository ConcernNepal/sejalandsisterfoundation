const sliderHeadings = [
    "Welcome to Our Foundation",
    "Empowering Communities",
    "Join Us in Making a Change"
  ];
  
  let currentHeading = 0;
  
  function updateHeading() {
    document.getElementById('slider-heading').textContent = sliderHeadings[currentHeading];
    currentHeading = (currentHeading + 1) % sliderHeadings.length;
  }
  
  setInterval(updateHeading, 3000); // Change text every 3 seconds


  // Smooth scroll effect on button click (optional)
document.querySelector('.see-all-partners').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.logos-grid').scrollIntoView({ behavior: 'smooth' });
});




document.addEventListener("DOMContentLoaded", function () {
  const workedWithSection = document.querySelector('.worked-with');
  const logoSlider = document.querySelector('.logos');

  function revealOnScroll() {
      const sectionPosition = workedWithSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (sectionPosition < screenPosition) {
          logoSlider.style.animationPlayState = 'running';
      } else {
          logoSlider.style.animationPlayState = 'paused';
      }
  }

  // Set initial state to paused
  logoSlider.style.animationPlayState = 'paused';

  // Event listener for scroll
  window.addEventListener('scroll', revealOnScroll);
});


function updateContent(title, description) {
  document.getElementById('grant-title').textContent = title;
  document.getElementById('grant-description').textContent = description;
}
