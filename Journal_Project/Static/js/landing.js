document.addEventListener('DOMContentLoaded', function() {
  const joinButton = document.querySelector('.rectangle');

  joinButton.addEventListener('click', function() {
      // Arahkan ke halaman /signup saat tombol "Join" diklik
      window.location.href = '/signup';
  });
});
