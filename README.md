#  Hardware Diagnostic Tool

An all-in-one, browser-based hardware and system diagnostic suite. Designed with a clean glassmorphism UI, this tool helps users perform real-time diagnostic checks on keyboards, displays, speakers, webcams, battery health, without installing any software.

---

##  Preview

![System Diagnostics Suite Preview](https://github.com/user-attachments/assets/23d93554-dfd0-4734-833e-732165ba2877)

---


##  Key Features

* ** Keyboard & Chattering Tester:** Interactive virtual keyboard map that highlights active keys in real-time and detects key chattering/double-press faults (<150ms).
* ** Display Dead-Pixel Test:** Fullscreen display testing mode with selectable color presets (Blue, Green, Red, White, Black) to detect dead or stuck pixels.
* ** Battery Health & Report Parser:** Displays real-time battery status via standard Web APIs and parses uploaded Windows `powercfg /batteryreport` HTML files to calculate capacity health, cycle counts, and degradation.
* ** Speaker & Stereo Channel Test:** Web Audio API frequency tone generator for testing Left, Right, and Stereo speaker outputs.
* ** Webcam Feed Diagnostic:** Instant live webcam stream testing using WebRTC media APIs.
* ** Windows CMD Quick Utilities:** One-click launcher and command copier for Windows terminal diagnostics (`wmic`, `powercfg`, `systeminfo`).

---

##  How to Run

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Ashrafff4/hardware-diagnostic-tool.git](https://github.com/Ashrafff4/hardware-diagnostic-tool.git)
   ```
2. **Open the Project:**
   Open `index.html` in any web browser (Google Chrome or Microsoft Edge recommended for complete Web API support).

---

##  Built With 

* **HTML5 & Vanilla JavaScript** (Web Audio API, WebGL, WebRTC, Battery API)
* **Tailwind CSS** (Glassmorphism styling)

---

##  License

This project is open-source and available under the [MIT License](LICENSE).
