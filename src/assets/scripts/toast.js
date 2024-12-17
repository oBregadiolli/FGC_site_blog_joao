document.getElementById('showToastBtn').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;
    var toastElement = document.querySelector('.toast');

    var toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 3000
    });

    if (userInput.trim() !== '') {
        document.querySelector('.toast-body').textContent = userInput;
        toast.show();
    } else {
        alert('Por favor, digite algo no input.');
    }
});