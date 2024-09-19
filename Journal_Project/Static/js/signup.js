document.addEventListener('DOMContentLoaded', function() {
  const createAccountButton = document.querySelector('.create-account-button');
  const firstNameField = document.querySelector('.first-name');
  const lastNameField = document.querySelector('.last-name');
  const emailField = document.querySelector('.email-field');
  const passwordField = document.querySelector('.password-field');
  const confirmPasswordField = document.querySelector('.confirm-field');
  const termsCheckbox = document.querySelector('.checkbox');

  createAccountButton.addEventListener('click', function(event) {
      // Mencegah pengiriman form default jika belum divalidasi
      event.preventDefault();
      
      // Cek apakah semua field telah diisi dan checkbox telah dicentang
      if (firstNameField.value === '' || 
          lastNameField.value === '' || 
          emailField.value === '' || 
          passwordField.value === '' || 
          confirmPasswordField.value === '' ||
          !termsCheckbox.checked) {
          alert('Please fill out all fields and agree to the terms.');
          return;
      }

      // Cek apakah password dan konfirmasi password cocok
      if (passwordField.value !== confirmPasswordField.value) {
          alert('Passwords do not match.');
          return;
      }

      // Tampilkan notifikasi jika semua field telah diisi dan password cocok
      alert('Account created successfully.');

      // Arahkan pengguna ke halaman /signin
      window.location.href = '/signin';
  });
});
