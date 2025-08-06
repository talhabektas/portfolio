const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
let latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let nums = '0123456789';
let go = 'GO言語';

let alphabet = katakana + latin + nums + go;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

const drawMatrix = () => {
    ctx.fillStyle = 'rgba(29, 32, 33, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#689d6a';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(drawMatrix, 35);

document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.getElementById('terminal-body');
    const user = 'mehmettalha';
    const server = 'portfolio';
    let commandHistory = [];
    let historyIndex = -1;

    const commandData = {
        'help': `
            <p>Available commands:</p>
            <ul class="help-list">
                <li><span class="command">thatsme</span>      - Displays my information.</li>
                <li><span class="command">summary</span>     - Shows a brief summary about me.</li>
                <li><span class="command">experience</span>  - Lists my work experience.</li>
                <li><span class="command">projects</span>    - Displays my projects.</li>
                <li><span class="command">skills</span>      - Lists my technical skills.</li>
                <li><span class="command">competitions</span>- My competition history.</li>
                <li><span class="command">awards</span>      - Shows my awards.</li>
                <li><span class="command">education</span>   - My educational background.</li>
                <li><span class="command">contact</span>     - Shows my contact information.</li>
                <li><span class="command">trabzonspor</span> - :)</li>
                <li><span class="command">clear</span>       - Clears the terminal screen.</li>
                <li><span class="command">history</span>     - Shows command history.</li>
            </ul>
        `,
        'thatsme': `
            <h3>Mehmet Talha BEKTAŞ</h3>
            <p>Software Engineer</p>
            <p>Bursa/Sakarya, Türkiye</p>
        `,
        'summary': `
            <p>Aspiring software engineer with a strong foundation in full-stack web development, big data technologies and cloud services. Committed to continuous learning and building impactful, production-grade applications.</p>
        `,
        'experience': `
            <p><span class="title">Intern Full Stack Developer</span> @ Elsa Yazılım</p>
            <p class="meta">06/2024 - 09/2024 | Bursa, Türkiye</p>
            <ul>
                <li>- Redesigned and developed hezgasolar.com, enhancing backend and frontend services.</li>
                <li>- Integrated databases and APIs for a seamless and responsive user experience.</li>
            </ul>
        `,
        'projects': `
            <ul>
                <li><a href="https://github.com/talhabektas/greenlegacy" target="_blank"><span class="title">YesilMiras <i class="fas fa-link"></i></span></a>: IoT, Blockchain, Go, Typescript, MySQL. Fractional real estate investment platform.</li>
                <li><a href="https://github.com/talhabektas/EarthquakeRiskAnalyzerMachine" target="_blank"><span class="title">AI-Based Resilience Analysis for Buildings <i class="fas fa-link"></i></span></a>: Tubitak 2209. ML-based earthquake damage prediction.</li>
                <li><a href="https://github.com/talhabektas/toyotaproject" target="_blank"><span class="title">Real-Time Financial Data Project <i class="fas fa-link"></i></span></a>: Java, Kafka, PostgreSQL, Redis. Real-time financial data processing and alerting.</li>
                <li><a href="https://github.com/talhabektas/brain-tumour-training-model" target="_blank"><span class="title">Brain Tumor Classification <i class="fas fa-link"></i></span></a>: Python, Tensorflow, Numpy. CNN vs VGG16 for MRI classification.</li>
                <li><a href="https://github.com/talhabektas/expenseTrack" target="_blank"><span class="title">Real-Time Expense Tracking System <i class="fas fa-link"></i></span></a>: Java, Spring Boot, Kafka, Spark, AWS. Scalable expense tracking.</li>
                <li><a href="https://www.linkedin.com/pulse/aws-iot-based-warehouse-monitoring-system-mehmet-talha-bekta%C5%9F-gidrf/" target="_blank"><span class="title">AWS IoT Warehouse Monitoring <i class="fas fa-link"></i></span></a>: AWS S3, Lambda, IoT. Real-time warehouse condition monitoring.</li>
                <li><a href="https://github.com/talhabektas/newgoblog" target="_blank"><span class="title">FootRap <i class="fas fa-link"></i></span></a>: Go, React, MySQL. Multi-user football blog with Spotify/Twitter integrations.</li>
                <li><a href="https://github.com/talhabektas/DropShowing" target="_blank"><span class="title">Music Drop Analyzer <i class="fas fa-link"></i></span></a>: Python, Librosa. Real-time music drop detection.</li>
                <li><a href="https://github.com/berkaycekmez/DormitoryManagementSystem" target="_blank"><span class="title">Dormitory Management System <i class="fas fa-link"></i></span></a>: ASP.NET Core, MSSQL. Award-winning hackathon project.</li>
                <li><a href="https://github.com/talhabektas/event" target="_blank"><span class="title">Event Management System <i class="fas fa-link"></i></span></a>: Modern, tam-zamanlı etkinlik yönetim platformu. Gerçek zamanlı sohbet, arkadaşlık sistemi ve akıllı öneriler ile donatılmış.</li>
                <li><a href="https://github.com/talhabektas/smartdesk" target="_blank"><span class="title">SmartDesk <i class="fas fa-link"></i></span></a>: Şirketler ve departmanlar için gelişmiş ticket yönetimi, rol tabanlı erişim, Spring Boot ve React tabanlı modern destek platformu.</li>
            </ul>
        `,
        'skills': `
            <p><span class="title">Languages:</span> C#, Python, Java, Golang, React.js</p>
            <p><span class="title">Platforms:</span> AWS (S3, Lambda, IoT, EC2), Git, Jira, Confluence, Docker, MySQL, MSSQL, PostgreSQL, Kubernetes, Jenkins</p>
            <p><span class="title">Frameworks:</span> ASP.NET Core, Spring Boot, JavaFX, React.js</p>
            <p><span class="title">Big Data:</span> Kafka, Spark, Cassandra, Hadoop, Hive, HBase</p>
        `,
        'competitions': `
            <h3>RESEARCH & ENTREPRENEURSHIP COMPETITIONS</h3>
            <ul>
                <li><span class="title">TÜBİTAK 2209-A Research Project Grant Recipient</span> <a href="https://github.com/talhabektas/EarthquakeRiskAnalyzerMachine" target="_blank"><i class="fas fa-link"></i></a></li>
                <li><span class="title">G-Fast Entrepreneurship Competition (Semi-Final)</span> <a href="https://github.com/talhabektas/greenlegacy" target="_blank"><i class="fas fa-link"></i></a></li>
            </ul>
        `,
        'awards': `
            <h3>AWARDS</h3>
            <ul>
               <li><span class="title">1st Place, Ford Hackathon</span> <a href="https://www.linkedin.com/posts/mehmettalhabektas6116_ford-ile-hackathon-etkinli%C4%9Finde-birinciyiz-activity-7277760878186233856-xMLb/" target="_blank"><i class="fas fa-link"></i></a></li>
            </ul>
        `,
        'education': `
            <p><span class="title">BSc in Software Engineering</span> - Sakarya University (09/2021 - Present)</p>
            <p><span class="title">High School</span> - Nilüfer IMKB Science High School (2017 - 2020)</p>
        `,
        'contact': `
            <p>
                <a href="mailto:mehmettalha.bektas@gmail.com" target="_blank"><i class="fas fa-envelope"></i> Email</a> | 
                <a href="https://github.com/talhabektas" target="_blank"><i class="fab fa-github"></i> GitHub</a> | 
                <a href="https://www.linkedin.com/in/mehmettalhabektas6116/" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a> |
                <a href="https://www.instagram.com/talha.bekts/" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
            </p>
        `,
        'trabzonspor': `<p>:)</p><img src="trabzonspor.jpg" alt="A true fan" class="output-image">`,
        'history': () => {
            return commandHistory.map((cmd, i) => `<p>${i}: ${cmd}</p>`).join('');
        }
    };

    const createPrompt = (command = '') => {
        const line = document.createElement('div');
        line.classList.add('line');

        const prompt = document.createElement('span');
        prompt.classList.add('prompt');
        prompt.innerHTML = `<span class="user">${user}@${server}</span><span class="path">:~$</span>`;

        const commandSpan = document.createElement('span');
        commandSpan.classList.add('command');
        commandSpan.setAttribute('contenteditable', 'true');
        commandSpan.setAttribute('spellcheck', 'false');
        commandSpan.textContent = command;

        line.appendChild(prompt);
        line.appendChild(commandSpan);
        terminalBody.appendChild(line);

        commandSpan.focus();
        // Move cursor to the end
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(commandSpan);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
    };

    const executeCommand = (cmdStr) => {
        const parts = cmdStr.toLowerCase().trim().split(' ');
        const cmd = parts[0];
        const output = document.createElement('div');
        output.classList.add('output');

        if (cmd === 'clear') {
            terminalBody.innerHTML = '';
            initTerminal();
            return;
        }

        if (cmd && cmd !== '') {
            commandHistory.push(cmdStr);
        }
        historyIndex = commandHistory.length;

        if (cmd in commandData) {
            const data = commandData[cmd];
            output.innerHTML = typeof data === 'function' ? data() : data;
        } else if (cmd !== '') {
            output.innerHTML = `<p>Command not found: ${cmd}. Type 'help' to see available commands.</p>`;
        }

        if (output.innerHTML) {
            terminalBody.appendChild(output);
        }

        terminalBody.scrollTop = terminalBody.scrollHeight;
        createPrompt();
    };

    const initTerminal = () => {
        terminalBody.innerHTML = `
            <div class="output">
                <p>Welcome to my interactive portfolio.</p>
                <p>Type <span class="command">'help'</span> to see the list of available commands.</p>
            </div>
        `;
        createPrompt();
    };

    terminalBody.addEventListener('keydown', (e) => {
        const currentCommandEl = terminalBody.querySelector('.line:last-child .command');
        if (!currentCommandEl || currentCommandEl.getAttribute('contenteditable') !== 'true') return;

        if (e.key === 'Enter') {
            e.preventDefault();
            currentCommandEl.setAttribute('contenteditable', 'false');
            executeCommand(currentCommandEl.textContent);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                currentCommandEl.textContent = commandHistory[historyIndex];
                currentCommandEl.focus();
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                currentCommandEl.textContent = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                currentCommandEl.textContent = '';
            }
        }
    });

    terminalBody.addEventListener('click', () => {
        const commandSpan = terminalBody.querySelector('.line:last-child .command');
        if (commandSpan) {
            commandSpan.focus();
        }
    });

    initTerminal();
}); 