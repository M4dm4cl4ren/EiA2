import * as fs from "fs";

const jsonPath = "dataEinkaufsliste.json"
const produkt = document.getElementById("produkt") as HTMLInputElement;
const menge = document.getElementById("menge") as  HTMLInputElement;
const marke = document.getElementById('marke') as HTMLInputElement;


function jsonRead(): any {
    try {
        const data = fs.readFileSync(jsonPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Es gab ein Fehler", error);
        return null;
    }
}

function jsonWrite(data: any): void {
    try {
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4));
        console.log("Daten wurden gespeichert");
    } catch (error) {
        console.log("Es gab einen Fehler");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("Hinzufügen")?.addEventListener('submit', function(event) {
        event.preventDefault();

        const newData = {
            produkt: produkt.value,
            menge: parseInt(menge.value),
            marke: marke.value
        };

        const existingData = jsonRead();
        if (existingData !== null) {
            existingData.push(newData);
            jsonWrite(existingData);

            produkt.value = "";
            menge.value = "";
            marke.value = "";
            alert("Neues Produkt hinzugefügt!");
        } else {
            alert("Es gab ein Problem beim Lesen der Datei.");
        }
    });
});
