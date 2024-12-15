    document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos .custom-select
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(customSelect => {
        const selectBox = customSelect.querySelector('.select-box');
        const selectOptions = customSelect.querySelector('.select-options');
        const selectedOption = customSelect.querySelector('.selected-option');
        const selectedIcon = customSelect.querySelector('.selected-icon');
        const options = customSelect.querySelectorAll('.option');

        // Toggle o dropdown (abre/fecha)
        selectBox.addEventListener('click', function () {
            selectOptions.classList.toggle('active');
            selectBox.parentElement.classList.toggle('active');
            selectBox.querySelector('.arrow').classList.toggle('rotate');
        });

        // Quando uma opção for selecionada
        options.forEach(option => {
            option.addEventListener('click', function () {
                const optionText = this.textContent.trim();

                // Atualiza o texto da opção selecionada
                selectedOption.textContent = optionText.substring(optionText.indexOf(' ') + 1); // Remove o ícone e exibe o nome

                // Atualiza o ícone da opção selecionada
                const icon = this.querySelector('.material-symbols-rounded');
                selectedIcon.textContent = icon.textContent;

                // Fecha o dropdown
                selectOptions.classList.remove('active');
                selectBox.parentElement.classList.remove('active');
                selectBox.querySelector('.arrow').classList.remove('rotate');
            });
        });

        // Fecha o dropdown se clicar fora do seletor
        document.addEventListener('click', function (event) {
            if (!customSelect.contains(event.target)) {
                selectOptions.classList.remove('active');
                selectBox.parentElement.classList.remove('active');
                selectBox.querySelector('.arrow').classList.remove('rotate');
            }
        });
    });
});
