document.getElementById("btn_send").addEventListener("click", calc)

function calc() {
    let varScrew = document.getElementById("screw").value;
    let varScrewwnut = document.getElementById("screwnut").value;
    let varGrommet = document.getElementById("grommet").value;

    if (!isvalidnumber(varScrew)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Schrauben angeben.";
    if (!isvalidnumber(varScrewwnut)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Mutter angeben.";
    if (!isvalidnumber(varGrommet)) document.getElementById("error_screw").innerText = "Bitte Zahl bei Unterlagenscheiben angeben.";

    let res = (varScrew * 0.2 + varScrewwnut * 0.1 + varGrommet * 0.05).toFixed(2);
    let output = "➸ " + res.toString();

    document.getElementById("result").innerText = output;
}

function isvalidnumber(number) {
    return /^\d+$/.test(number)
}