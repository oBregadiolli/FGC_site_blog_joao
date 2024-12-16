document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos .custom-select
    const customSelects = document.querySelectorAll('.custom-select');

    customSelects.forEach(customSelect => {
        const selectBox = customSelect.querySelector('.select-box');
        const selectOptions = customSelect.querySelector('.select-options');
        const selectedOption = customSelect.querySelector('.selected-option');
        const selectedIcon = customSelect.querySelector('.selected-icon'); // Ícone fixo
        const options = customSelect.querySelectorAll('.option');

        // Toggle o dropdown (abre/fecha)
        selectBox.addEventListener('click', function () {
            // Abre ou fecha o dropdown
            const isActive = selectOptions.classList.contains('active');
            // Fechar todos os dropdowns, exceto o atual
            document.querySelectorAll('.select-options.active').forEach(optionList => {
                if (optionList !== selectOptions) {
                    optionList.classList.remove('active');
                }
            });
            // Se o dropdown não estiver ativo, ele será aberto
            if (!isActive) {
                selectOptions.classList.add('active');
                selectBox.parentElement.classList.add('active');
                selectBox.querySelector('.arrow').classList.add('rotate');
            } else {
                selectOptions.classList.remove('active');
                selectBox.parentElement.classList.remove('active');
                selectBox.querySelector('.arrow').classList.remove('rotate');
            }
        });

        // Quando uma opção for selecionada
        options.forEach(option => {
            option.addEventListener('click', function () {
                const optionText = this.textContent.trim();

                // Atualiza o texto da opção selecionada (sem alterar o ícone)
                selectedOption.textContent = optionText;

                // Fecha o dropdown imediatamente após a seleção
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
