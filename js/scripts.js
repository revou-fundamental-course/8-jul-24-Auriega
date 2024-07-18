// Fungsi untuk memperbarui hasil BMI
function updateResult() {
    var beratBadan = document.getElementById("input-berat-badan").value;
    var tinggiBadan = document.getElementById("input-tinggi-badan").value;

    // Memeriksa apakah berat badan dan tinggi badan diisi
    if (beratBadan && tinggiBadan) {
        var tinggiBadanMeter = tinggiBadan / 100; // Mengubah tinggi badan ke meter
        var bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter); // Menghitung BMI

        // Menentukan deskripsi berdasarkan nilai BMI
        var resultText;
        if (bmi < 18.5) {
            resultText = "Anda memiliki berat badan kurang";
        } else if (bmi < 24.9) {
            resultText = "Anda memiliki berat badan normal";
        } else if (bmi < 29.9) {
            resultText = "Anda memiliki berat badan berlebih";
        } else {
            resultText = "Anda memiliki obesitas";
        }

        // Menampilkan hasil BMI dan deskripsinya
        document.getElementById("bmi-result").innerText = bmi.toFixed(1);
        document.getElementById("bmi-description").innerText = resultText;
        document.querySelector(".result-content").style.display = "block"; // Menampilkan bagian hasil
    } else {
        alert("Silakan masukkan berat badan dan tinggi badan Anda."); // Peringatan jika input kosong
    }
}

// Event listener untuk tombol reset, menghapus input dan menyembunyikan hasil
document.querySelector(".reset").addEventListener("click", function() {
    document.getElementById("input-berat-badan").value = '';
    document.getElementById("input-tinggi-badan").value = '';
    document.querySelector(".result-content").style.display = "none"; // Menyembunyikan bagian hasil
});
