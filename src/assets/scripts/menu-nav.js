document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navList = document.querySelector('.nav__list');
    
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');
    const dashboardBtn = document.querySelector('.dashboard');
    const profileDropdown = document.getElementById('profile-dropdown');
    const profilePicture = document.getElementById('profile-picture');
    
    let isLoggedIn = false;

    // Função para simular o login
    function toggleLogin() {
        isLoggedIn = !isLoggedIn;
        
        // Alterna entre exibir o dropdown e os botões de login/signup
        if (isLoggedIn) {
            loginBtn.classList.add('hide');
            signupBtn.classList.add('hide');
            dashboardBtn.classList.remove('hide');
            profilePicture.classList.remove('hide'); // Exibe a foto de perfil
        } else {
            loginBtn.classList.remove('hide');
            signupBtn.classList.remove('hide');
            dashboardBtn.classList.add('hide');
            profilePicture.classList.add('hide'); // Esconde a foto de perfil
            profileDropdown.classList.add('hide'); // Esconde o dropdown se deslogado
        }
    }

    // Interação de login
    loginBtn.addEventListener('click', () => {
        toggleLogin(); // Simula o login
    });

    // Função para logout
    function logout() {
        isLoggedIn = false;
        
        // Esconde o dropdown e a foto de perfil
        profileDropdown.classList.add('hide'); // Esconde o dropdown
        profilePicture.classList.add('hide'); // Esconde a foto de perfil
        dashboardBtn.classList.add('hide'); // Esconde o botão de dashboard

        // Mostra os botões de login e signup novamente
        loginBtn.classList.remove('hide');
        signupBtn.classList.remove('hide');
    }

    // Botão de logout
    const logoutBtn = profileDropdown.querySelector('li:last-child a');
    logoutBtn.addEventListener('click', logout);  // Faz o logout ao clicar no botão de logout do dropdown

    // Abrir e fechar o dropdown de perfil ao clicar na foto
    profilePicture.addEventListener('click', () => {
        if (isLoggedIn) {
            // Alterna a visibilidade do dropdown
            profileDropdown.classList.toggle('hide');
        }
    });

    // Botão do hambúrguer (menu responsivo)
    hamburgerBtn.addEventListener('click', () => {
        navList.classList.add('open');
        hamburgerBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        navList.classList.remove('open');
        hamburgerBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
});
