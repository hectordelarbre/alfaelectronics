document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const logoutButton = document.getElementById('logoutButton');
    const timerElement = document.getElementById('timer');
    
    // Lógica del formulario de login
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Credenciales codificadas
            const validUsername = '123';
            const validPassword = '123';
            
            if (username === validUsername && password === validPassword) {
                // Redirigir a la página generadora de códigos
                window.location.href = 'generator.html';
            } else {
                errorMessage.textContent = 'Nombre de usuario o contraseña incorrectos.';
            }
        });
    }
    
    // Lógica del botón de salir y temporizador en la página de generación de códigos
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
	console.log("Botón de salir presionado en escrip carpeta");
                window.location.href = '../index.html'; // Redirigir al login cuando se acabe el tiempo
        });
    }

    if (timerElement) {
        let timeRemaining = 10 * 1; // 10 minutos en segundos
        const interval = setInterval(() => {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                window.location.href = '../index.html'; // Redirigir al login cuando se acabe el tiempo
            }

            timeRemaining -= 1;
        }, 1000);
    }
});
