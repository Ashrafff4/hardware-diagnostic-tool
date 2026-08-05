function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    const bgClass = type === 'error' ? 'bg-rose-600/80' : type === 'success' ? 'bg-emerald-600/80' : 'bg-indigo-600/80';
    
    toast.className = `${bgClass} backdrop-blur-md text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-2xl border border-white/20 transition-all transform translate-y-2 opacity-0 flex items-center gap-2`;
    toast.innerText = message;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}


const keyboardStructure = [
    [
        { code: 'Escape', label: 'Esc', w: 1 },
        { code: 'F1', label: 'F1', w: 1 }, { code: 'F2', label: 'F2', w: 1 }, { code: 'F3', label: 'F3', w: 1 }, { code: 'F4', label: 'F4', w: 1 },
        { code: 'F5', label: 'F5', w: 1 }, { code: 'F6', label: 'F6', w: 1 }, { code: 'F7', label: 'F7', w: 1 }, { code: 'F8', label: 'F8', w: 1 },
        { code: 'F9', label: 'F9', w: 1 }, { code: 'F10', label: 'F10', w: 1 }, { code: 'F11', label: 'F11', w: 1 }, { code: 'F12', label: 'F12', w: 1 },
        { code: 'Delete', label: 'Del', w: 1 }
    ],
    [
        { code: 'Backquote', label: '`', w: 1 }, { code: 'Digit1', label: '1', w: 1 }, { code: 'Digit2', label: '2', w: 1 },
        { code: 'Digit3', label: '3', w: 1 }, { code: 'Digit4', label: '4', w: 1 }, { code: 'Digit5', label: '5', w: 1 },
        { code: 'Digit6', label: '6', w: 1 }, { code: 'Digit7', label: '7', w: 1 }, { code: 'Digit8', label: '8', w: 1 },
        { code: 'Digit9', label: '9', w: 1 }, { code: 'Digit0', label: '0', w: 1 }, { code: 'Minus', label: '-', w: 1 },
        { code: 'Equal', label: '=', w: 1 }, { code: 'Backspace', label: 'Backspace', w: 2 }
    ],
    [
        { code: 'Tab', label: 'Tab', w: 1.5 }, { code: 'KeyQ', label: 'Q', w: 1 }, { code: 'KeyW', label: 'W', w: 1 },
        { code: 'KeyE', label: 'E', w: 1 }, { code: 'KeyR', label: 'R', w: 1 }, { code: 'KeyT', label: 'T', w: 1 },
        { code: 'KeyY', label: 'Y', w: 1 }, { code: 'KeyU', label: 'U', w: 1 }, { code: 'KeyI', label: 'I', w: 1 },
        { code: 'KeyO', label: 'O', w: 1 }, { code: 'KeyP', label: 'P', w: 1 }, { code: 'BracketLeft', label: '[', w: 1 },
        { code: 'BracketRight', label: ']', w: 1 }, { code: 'Backslash', label: '\\', w: 1.5 }
    ],
    [
        { code: 'CapsLock', label: 'Caps Lock', w: 1.8 }, { code: 'KeyA', label: 'A', w: 1 }, { code: 'KeyS', label: 'S', w: 1 },
        { code: 'KeyD', label: 'D', w: 1 }, { code: 'KeyF', label: 'F', w: 1 }, { code: 'KeyG', label: 'G', w: 1 },
        { code: 'KeyH', label: 'H', w: 1 }, { code: 'KeyJ', label: 'J', w: 1 }, { code: 'KeyK', label: 'K', w: 1 },
        { code: 'KeyL', label: 'L', w: 1 }, { code: 'Semicolon', label: ';', w: 1 }, { code: 'Quote', label: "'", w: 1 },
        { code: 'Enter', label: 'Enter', w: 2.2 }
    ],
    [
        { code: 'ShiftLeft', label: 'Shift', w: 2.3 }, { code: 'KeyZ', label: 'Z', w: 1 }, { code: 'KeyX', label: 'X', w: 1 },
        { code: 'KeyC', label: 'C', w: 1 }, { code: 'KeyV', label: 'V', w: 1 }, { code: 'KeyB', label: 'B', w: 1 },
        { code: 'KeyN', label: 'N', w: 1 }, { code: 'KeyM', label: 'M', w: 1 }, { code: 'Comma', label: ',', w: 1 },
        { code: 'Period', label: '.', w: 1 }, { code: 'Slash', label: '/', w: 1 }, { code: 'ShiftRight', label: 'Shift', w: 2.7 }
    ],
    [
        { code: 'ControlLeft', label: 'Ctrl', w: 1.25 }, { code: 'MetaLeft', label: 'Win', w: 1.25 }, { code: 'AltLeft', label: 'Alt', w: 1.25 },
        { code: 'Space', label: 'Space', w: 6.25 }, { code: 'AltRight', label: 'Alt', w: 1.25 }, { code: 'MetaRight', label: 'Win', w: 1.25 },
        { code: 'ControlRight', label: 'Ctrl', w: 1.25 }, { code: 'ArrowLeft', label: '◄', w: 1 },
        { code: 'ArrowUp', label: '▲', w: 1 }, { code: 'ArrowDown', label: '▼', w: 1 }, { code: 'ArrowRight', label: '►', w: 1 }
    ]
];

const keyPressTimestamps = {};
const keyStates = {}; 

function renderKeyboard() {
    const container = document.getElementById('keyboardLayout');
    container.innerHTML = '';

    keyboardStructure.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'flex gap-1.5 justify-between';

        row.forEach(key => {
            const keyBtn = document.createElement('div');
            keyBtn.id = `key-${key.code}`;
            keyBtn.className = `key flex items-center justify-center h-10 rounded-lg text-gray-300 font-semibold text-xs`;
            keyBtn.style.flex = `${key.w} 1 0%`;
            keyBtn.innerText = key.label;

            if (keyStates[key.code]) {
                keyBtn.classList.add(keyStates[key.code]);
            }

            rowDiv.appendChild(keyBtn);
        });
        container.appendChild(rowDiv);
    });
}

function handleKeyDown(e) {
    if (['Tab', 'AltLeft', 'AltRight', 'MetaLeft', 'MetaRight'].includes(e.code)) {
        e.preventDefault();
    }

    const code = e.code;
    const now = Date.now();
    const keyEl = document.getElementById(`key-${code}`);

    document.getElementById('keyLastPressed').innerText = `Last Key: ${e.key} (${code})`;

    if (keyEl) {
        keyEl.classList.add('active');

        if (keyPressTimestamps[code] && (now - keyPressTimestamps[code] < 150)) {
            keyStates[code] = 'double-pressed';
            keyEl.classList.remove('tested');
            keyEl.classList.add('double-pressed');
        } else if (keyStates[code] !== 'double-pressed') {
            keyStates[code] = 'tested';
            keyEl.classList.add('tested');
        }

        keyPressTimestamps[code] = now;
    }
}

function handleKeyUp(e) {
    const keyEl = document.getElementById(`key-${e.code}`);
    if (keyEl) {
        keyEl.classList.remove('active');
    }
}

function resetKeyboard() {
    for (let code in keyStates) delete keyStates[code];
    for (let code in keyPressTimestamps) delete keyPressTimestamps[code];
    document.getElementById('keyLastPressed').innerText = 'Last Key: None';
    renderKeyboard();
    showToast('Keyboard state reset.');
}

window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

// --- CMD Launcher Function ---
async function launchCmd(type) {
    try {
        const res = await fetch(`/api/open-cmd/${type}`);
        const data = await res.json();
        showToast(data.message || "CMD Launch triggered.", 'success');
    } catch (err) {
        showToast("Backend API not connected (Standalone mode)", 'error');
    }
}


function copyCommand(text) {
    navigator.clipboard.writeText(text);
    showToast(`Copied: "${text}"`, 'success');
}


let camStreamInstance = null;
async function toggleCamera(start) {
    const video = document.getElementById('camStream');
    const placeholder = document.getElementById('camPlaceholder');

    if (start) {
        try {
            camStreamInstance = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = camStreamInstance;
            video.classList.remove('hidden');
            placeholder.classList.add('hidden');
            showToast('Camera feed started', 'success');
        } catch(e) {
            showToast('Camera access denied or device not found', 'error');
        }
    } else {
        if (camStreamInstance) {
            camStreamInstance.getTracks().forEach(track => track.stop());
            camStreamInstance = null;
        }
        video.classList.add('hidden');
        placeholder.classList.remove('hidden');
        showToast('Camera feed stopped');
    }
}


async function loadStorage() {
    try {
        const res = await fetch('/api/storage');
        const data = await res.json();
        const container = document.getElementById('storageData');
        container.innerHTML = data.map(disk => `
            <div class="pro-glass-nested p-3 rounded-xl">
                <div class="flex justify-between text-sm font-semibold mb-1">
                    <span>${disk.device} (${disk.mountpoint})</span>
                    <span class="${disk.percent > 90 ? 'text-rose-400' : 'text-emerald-400'}">${disk.status}</span>
                </div>
                <div class="w-full bg-black/40 rounded-full h-2 mb-2 overflow-hidden border border-white/5">
                    <div class="bg-emerald-500 h-2 rounded-full" style="width: ${disk.percent}%"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400">
                    <span>Used: ${disk.used_gb} GB (${disk.percent}%)</span>
                    <span>Free: ${disk.free_gb} GB / ${disk.total_gb} GB</span>
                </div>
            </div>
        `).join('');
    } catch(e) {
        document.getElementById('storageData').innerHTML = `<p class="text-xs text-gray-400">Backend API offline. Running in standalone frontend mode.</p>`;
    }
}

async function loadBattery() {
    try {
        const res = await fetch('/api/battery');
        const data = await res.json();
        const container = document.getElementById('batteryData');
        if(!data.has_battery) {
            container.innerHTML = `<p class="text-gray-400 text-xs">${data.message}</p>`;
            return;
        }
        container.innerHTML = `
            <div class="flex justify-between items-center pro-glass-nested p-3 rounded-xl">
                <div>
                    <p class="text-2xl font-bold text-amber-400">${data.percent}%</p>
                    <p class="text-xs text-gray-400">Power Source: ${data.plugged ? 'Plugged In 🔌' : 'On Battery 🔋'}</p>
                </div>
                <div class="text-right text-xs text-gray-400">
                    <p>Est. Remaining: ${data.secsleft} mins</p>
                </div>
            </div>
        `;
    } catch(e) {
        document.getElementById('batteryData').innerHTML = `
            <div class="flex justify-between items-center pro-glass-nested p-3 rounded-xl">
                <div>
                    <p class="text-xs text-gray-400">Live Battery API</p>
                    <p class="text-xs font-semibold text-amber-400">Upload battery-report.html below to analyze</p>
                </div>
            </div>
        `;
    }
}

function fetchAllData() {
    loadStorage();
    loadBattery();
    showToast("Dashboard refreshed");
}

// --- BATTERY REPORT HTML FILE PARSER ---
function processBatteryReport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const htmlContent = e.target.result;
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');

        let designCap = null, fullCap = null, cycleCount = 'N/A';

        const tableRows = doc.querySelectorAll('tr');
        tableRows.forEach(row => {
            const text = row.innerText.replace(/\s+/g, ' ');
            if (text.includes('DESIGN CAPACITY')) {
                const match = text.match(/[\d,]+\s*mWh/i);
                if (match) designCap = parseInt(match[0].replace(/[^\d]/g, ''));
            }
            if (text.includes('FULL CHARGE CAPACITY')) {
                const match = text.match(/[\d,]+\s*mWh/i);
                if (match) fullCap = parseInt(match[0].replace(/[^\d]/g, ''));
            }
            if (text.includes('CYCLE COUNT')) {
                const match = text.match(/CYCLE COUNT\s*([\d-]+)/i);
                if (match && match[1] !== '-') cycleCount = match[1];
            }
        });

        if (designCap && fullCap) {
            const healthPercent = ((fullCap / designCap) * 100).toFixed(1);
            
            document.getElementById('reportHealthPercent').innerText = `${healthPercent}%`;
            document.getElementById('reportDesignCap').innerText = `${designCap.toLocaleString()} mWh`;
            document.getElementById('reportFullCap').innerText = `${fullCap.toLocaleString()} mWh`;
            document.getElementById('reportCycleCount').innerText = cycleCount;

            const badge = document.getElementById('reportHealthBadge');
            const statusText = document.getElementById('reportStatusText');

            if (healthPercent >= 80) {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-emerald-950/80 text-emerald-400 border border-emerald-500/40";
                badge.innerText = "Good Condition (Healthy)";
                statusText.className = "text-emerald-400 font-bold";
                statusText.innerText = "Battery Healthy";
            } else if (healthPercent >= 60) {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-amber-950/80 text-amber-400 border border-amber-500/40";
                badge.innerText = "Slightly Degraded";
                statusText.className = "text-amber-400 font-bold";
                statusText.innerText = "Moderate Degradation";
            } else {
                badge.className = "px-3 py-1 rounded-full text-xs font-bold bg-rose-950/80 text-rose-400 border border-rose-500/40";
                badge.innerText = "Faulty / Replacement Needed";
                statusText.className = "text-rose-400 font-bold";
                statusText.innerText = "Poor / High Degradation";
            }

            document.getElementById('batteryHealthResults').classList.remove('hidden');
            showToast('Battery Report Analyzed Successfully!', 'success');
        } else {
            showToast("Could not parse Design or Full Charge capacity.", 'error');
        }
    };
    reader.readAsText(file);
}

// --- Display Test Logic ---
const colors = ['#0000FF', '#00FF00', '#FF0000', '#FFFFFF', '#000000'];
let colorIdx = 0;

function startDisplayTest() {
    const overlay = document.getElementById('displayOverlay');
    colorIdx = 0;
    overlay.style.backgroundColor = colors[colorIdx];
    overlay.style.display = 'flex';
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
}

function setDisplayColor(index) {
    colorIdx = index;
    document.getElementById('displayOverlay').style.backgroundColor = colors[colorIdx];
}

function cycleDisplayColor() {
    colorIdx = (colorIdx + 1) % colors.length;
    document.getElementById('displayOverlay').style.backgroundColor = colors[colorIdx];
}

function exitDisplayTest() {
    document.getElementById('displayOverlay').style.display = 'none';
    if (document.fullscreenElement) document.exitFullscreen();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        exitDisplayTest();
    }
});

// --- Audio Test Logic ---
function playTone(channel) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const panner = audioCtx.createStereoPanner();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, audioCtx.currentTime);
    
    if (channel === 'left') panner.pan.setValueAtTime(-1, audioCtx.currentTime);
    else if (channel === 'right') panner.pan.setValueAtTime(1, audioCtx.currentTime);
    else panner.pan.setValueAtTime(0, audioCtx.currentTime);

    osc.connect(panner);
    panner.connect(audioCtx.destination);
    
    osc.start();
    setTimeout(() => {
        osc.stop();
        audioCtx.close();
    }, 500);
}

// Init App
renderKeyboard();
fetchAllData();
