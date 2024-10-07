document.addEventListener('DOMContentLoaded', function() {
  const saveButton = document.querySelector('.save-continue-button');
  const nameField = document.querySelector('.div');
  const titleField = document.querySelector('.journal-title-field');
  const abstractField = document.querySelector('.journal-text-field');
  const dateField = document.querySelector('#date-picker');
  const termsCheckbox = document.querySelector('.checkbox');

  saveButton.addEventListener('click', function() {
      // Cek apakah semua field telah diisi
      if (nameField.value === '' || titleField.value === '' || abstractField.value === '' || dateField.value === '' || !termsCheckbox.checked) {
          alert('Please fill out all fields and agree to the terms.');
          return;
      }

      // Tampilkan notifikasi jika semua field telah diisi
      alert('Input has been saved.');

      // Arahkan pengguna ke halaman /landing
      window.location.href = '/landing';
  });
});
