document.addEventListener('DOMContentLoaded', () => {
    // 1. Atualizar Ano no Footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Gerenciamento de Tema (Dark/Light)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    } else {
        updateThemeIcon('dark');
    }

    themeToggle.addEventListener('click', () => {
        let theme = body.getAttribute('data-theme');
        if (theme === 'light') {
            body.removeAttribute('data-theme'); 
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });

    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'light' ? '🌑' : '⚡'; 
    }

    // 3. J.A.R.V.I.S. Easter Egg Simples
    const jarvisCard = document.querySelector('.jarvis-card');
    if (jarvisCard) {
        jarvisCard.addEventListener('mouseover', () => {
            console.log("J.A.R.V.I.S.: Sistemas online. Interface Uelkenobi estabilizada.");
        });
    }

    // 4. KONAMI CODE EASTER EGG!
    // Sequência: Cima, Cima, Baixo, Baixo, Esquerda, Direita, Esquerda, Direita, B, A
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 
        'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 
        'ArrowLeft', 'ArrowRight', 
        'b', 'a'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        // Ignora letras maiusculas/minusculas para o 'b' e 'a'
        if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase() || e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateCheat();
                konamiIndex = 0; // Reseta para poder fazer de novo
            }
        } else {
            konamiIndex = 0; // Errou a sequência, zera tudo
        }
    });

    function activateCheat() {
        alert("🎮 CHEAT CODE ACTIVATED! 99 vidas adicionadas e café infinito desbloqueado no inventário do Uelkenobi!");
        // Faz a tela piscar na cor verde do Matrix
        document.body.style.transition = "background-color 0.1s";
        document.body.style.backgroundColor = "#00ff41";
        setTimeout(() => {
            document.body.style.backgroundColor = ""; // Volta ao normal
        }, 200);
    }
});