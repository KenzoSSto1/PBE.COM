const validKeys = [
  "Key112iva97jp99",
  "Key98630khp07"
];

function verifyKey() {
  const key = document.getElementById("keyInput").value.trim();
  const resultBox = document.getElementById("resultBox");
  const execBtn = document.getElementById("execBtn");
  const scriptBox = document.getElementById("scriptBox");

  if (validKeys.includes(key)) {
    resultBox.innerText = "[✓] Key Verified!";
    execBtn.disabled = false;
    scriptBox.disabled = false;
  } else {
    resultBox.innerText = "❌ Invalid Key. Join Discord to get a valid key.";
    execBtn.disabled = true;
    scriptBox.disabled = true;
  }
}

function executeScript() {
  const script = document.getElementById("scriptBox").value.trim();
  if (script) {
    alert("[✓] Script Executed (simulated):\n" + script);
  } else {
    alert("⚠️ No script input.");
  }
}
