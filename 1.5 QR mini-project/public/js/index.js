
// ================================
// Get HTML Elements
// ================================

const qrInput = document.getElementById("qrInput");

const generateBtn = document.getElementById("generateBtn");

const placeholderText = document.getElementById("placeholderText");

const qrImage = document.getElementById("qrImage");

const downloadBtn = document.getElementById("downloadBtn");

const copyBtn = document.getElementById("copyBtn");

const clearBtn = document.getElementById("clearBtn");

const counter = document.querySelector(".counter");

// Store generated QR image
let currentQr = "";

// ================================
// Character Counter
// ================================

qrInput.addEventListener("input", () => {

  counter.textContent =
    `${qrInput.value.length}/500`;

});

// ================================
// Generate QR Code
// ================================

generateBtn.addEventListener("click", async () => {

  const text = qrInput.value.trim();

  if (!text) {

    alert("Please enter text or URL");

    return;
  }

  try {

    const response = await fetch("/generate", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        text: text
      })

    });

    const data = await response.json();

    currentQr = data.qr;

    qrImage.src = currentQr;

    qrImage.style.display = "block";

    placeholderText.style.display = "none";

  }

  catch (error) {

    console.error(error);

    alert("Failed to generate QR");

  }

});

// ================================
// Download QR
// ================================

downloadBtn.addEventListener("click", () => {

  if (!currentQr) {

    alert("Generate a QR first");

    return;
  }

  const link = document.createElement("a");

  link.href = currentQr;

  link.download = "qr-code.png";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

});

// ================================
// Copy QR
// ================================

copyBtn.addEventListener("click", async () => {

  if (!currentQr) {

    alert("Generate a QR first");

    return;
  }

  try {

    const response = await fetch(currentQr);

    const blob = await response.blob();

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob
      })
    ]);

    alert("QR image copied");

  }

  catch (error) {

    console.error(error);

    alert("Image copy not supported on this browser");

  }

});

// ================================
// Clear Everything
// ================================

clearBtn.addEventListener("click", () => {

  qrInput.value = "";

  qrImage.src = "";

  qrImage.style.display = "none";

  placeholderText.style.display = "block";

  currentQr = "";

  counter.textContent = "0/500";

});