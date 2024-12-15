const toggleInput = document.querySelector('.toggle-input');

toggleInput.addEventListener('change', function() {
  console.log('Pet friendly is now:', this.checked ? 'On' : 'Off');
});
