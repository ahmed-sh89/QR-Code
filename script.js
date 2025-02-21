function generateQRCode() {
  const qrContainer = document.getElementById("qrcode");
  const qrInput = document.getElementById("qr-input").value;
  qrContainer.innerHTML = "";
  if (qrInput.trim() !== "") {
    new QRCode(qrContainer, {
      text: qrInput,
      width: 250,
      height: 250,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    alert("❗ الرجاء إدخال نص أو رابط صحيح.");
  }
}