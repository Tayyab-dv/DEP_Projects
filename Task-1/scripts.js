// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('nav-active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach((error) => (error.style.visibility = 'hidden'));

    // Input fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validation checks
    let valid = true;

    // Validate name
    if (name.value.trim() === '') {
      showError(name, 'Name is required.');
      valid = false;
    }

    // Validate email
    if (email.value.trim() === '') {
      showError(email, 'Email is required.');
      valid = false;
    } else if (!validateEmail(email.value.trim())) {
      showError(email, 'Please enter a valid email address.');
      valid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
      showError(message, 'Message is required.');
      valid = false;
    }

    // If valid, simulate form submission
    if (valid) {
      alert('Form submitted successfully!');
      // Reset form
      document.getElementById('contactForm').reset();
    }
  });

function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
  error.style.visibility = 'visible';
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
