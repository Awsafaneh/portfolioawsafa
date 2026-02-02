
document.addEventListener('DOMContentLoaded', () => {
    // 1. LIVE LINUX TERMINAL SIMULATION
    const terminalBody = document.getElementById('terminal-display');
    if (terminalBody) {
        const bootSequence = [
            "> Initializing secure connection...",
            "> Auth: AWS_AFANEH_AUTHORIZED",
            "> Loading kernel modules: [FullStack, SOC, Forensics]",
            "> System Check: [OK] Port 443 active",
            "> System Check: [OK] SOC Pipeline operational",
            "> Welcome to Elite Core v4.0",
            "> Type 'help' for tactical options...",
            "",
            "root@afaneh-box:~$ whoami",
            "Aws Afaneh: Full-Stack Engineer / SOC Analyst",
            "root@afaneh-box:~$ stats --global",
            "Rank: #36 BlackHat MEA",
            "CTFs: 50+ Completed",
            "Status: Legendary",
            "root@afaneh-box:~$ _"
        ];

        let i = 0;
        function typeLine() {
            if (i < bootSequence.length) {
                const line = document.createElement('div');
                line.style.marginBottom = "5px";
                terminalBody.appendChild(line);

                let charIdx = 0;
                const text = bootSequence[i];

                const interval = setInterval(() => {
                    line.textContent += text[charIdx];
                    charIdx++;
                    if (charIdx >= text.length) {
                        clearInterval(interval);
                        i++;
                        setTimeout(typeLine, 200);
                        terminalBody.scrollTop = terminalBody.scrollHeight;
                    }
                }, 20);
            }
        }
        typeLine();
    }

    // 2. ACTIVE NAV HIGHLIGHT
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // 3. SMOOTH SCROLL FOR FORMAL FEEL
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
