document.addEventListener('DOMContentLoaded', function() {
  const signInButton = document.querySelector('.sign-in-button');
  const emailField = document.querySelector('.email-field');
  const passwordField = document.querySelector('.password-field');

  signInButton.addEventListener('click', function(event) {
      // Prevent form submission
      event.preventDefault();

      // Validate input fields
      const email = emailField.value.trim();
      const password = passwordField.value.trim();

      if (!email || !password) {
          alert('Please enter both email and password.');
          return;
      }

      // If validation passes, redirect to the specified page
      window.location.href = '/submit'; // Change '/submit' to the desired URL
  });

  // Optional: Handling Enter key press for form submission
  document.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' && document.activeElement === passwordField) {
          signInButton.click();
      }
  });
});
