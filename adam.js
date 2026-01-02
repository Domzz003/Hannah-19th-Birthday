const terminal = document.getElementById("terminal");
const btn = document.getElementById("runBtn");
const camera = document.getElementById("camera");

const lines = [
  "System.loading...",
  "Loading special user...",
  "User found: Hannah ❤️",
  "",
  "Initializing birthday protocol...",
  "",
  "const hannah = {",
  "  smile: 'dangerously cute',",
  "  vibe: 'elite',",
  "};",
  "",
  "if (today === hannah.birthday) {",
  "  console.log('Happy Birthday hannah 🎉');",
  "}",
  "",
  "// الكود ده بيشتغل مرة واحدة في السنة 😉"
];

let index = 0;

function typeLine() {
  if (index < lines.length) {
    terminal.innerHTML += lines[index] + "\n";
    index++;
    setTimeout(typeLine, 400);
  } else {
    setTimeout(showFinal, 1200);
  }
}

function showFinal() {
  terminal.innerHTML += "\nمش كل الناس تعدي...\n";
  setTimeout(() => {
    terminal.innerHTML += "بس في ناس وجودها يفرق ❤️\n";
  }, 800);

  setTimeout(openCamera, 2000);
}

function openCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
      camera.srcObject = stream;
      camera.style.display = "block";
      terminal.innerHTML += "\nHappy Birthday Here 🎂\n";
      terminal.innerHTML += "وجودك بيحسّن الـ Performance 💻❤️\n";
    })
    .catch(() => {
      terminal.innerHTML += "\n(الكاميرا مش متاحة بس الإحساس وصل 😉)\n";
    });
}

btn.onclick = () => {
  btn.style.display = "none";
  typeLine();
};
