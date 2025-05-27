// Fungsi konversi Celsius ke Fahrenheit
function convertTemperature(e) {
  e.preventDefault();

  const celsius = parseFloat(document.getElementById("celcius").value.replace(",", "."));
  if (isNaN(celsius)) return;

  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("Fahrenheit").value = fahrenheit.toFixed(1);
  document.getElementById("calculation").value = `(${celsius} × 9/5) + 32 = ${fahrenheit.toFixed(1)}`;
}

// Fungsi reset
function resetForm() {
  document.getElementById("celcius").value = "";
  document.getElementById("reverseInput").value = "";
  document.getElementById("Fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

// Fungsi Reverse: Fahrenheit ke Celsius (pakai input khusus)
function reserveConversion() {
  const fahrenheitValue = parseFloat(document.getElementById("reverseInput").value.replace(",", "."));
  if (isNaN(fahrenheitValue)) {
    alert("Masukkan suhu Fahrenheit yang valid untuk dibalik!");
    return;
  }

  const celsius = (fahrenheitValue - 32) * 5 / 9;
  document.getElementById("celcius").value = celsius.toFixed(1);
  document.getElementById("calculation").value = `(${fahrenheitValue} - 32) × 5/9 = ${celsius.toFixed(1)}`;
}

// Jalankan fungsi saat form disubmit
document.getElementById("temperatureForm").addEventListener("submit", convertTemperature);
