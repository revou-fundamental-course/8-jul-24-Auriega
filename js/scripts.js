/* scripts.js */
function updateResult() {
    var beratBadan = document.getElementById("input-berat-badan").value;
    var tinggiBadan = document.getElementById("input-tinggi-badan").value;

    if (beratBadan && tinggiBadan) {
        var tinggiBadanMeter = tinggiBadan / 100;
        var bmi = beratBadan / (tinggiBadanMeter * tinggiBadanMeter);

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

        document.getElementById("bmi-result").innerText = bmi.toFixed(1);
        document.getElementById("bmi-description").innerText = resultText;
        document.querySelector(".result-content").style.display = "block";
    } else {
        alert("Silakan masukkan berat badan dan tinggi badan Anda.");
    }
}

document.querySelector(".reset").addEventListener("click", function() {
    document.getElementById("input-berat-badan").value = '';
    document.getElementById("input-tinggi-badan").value = '';
    document.querySelector(".result-content").style.display = "none";
});
