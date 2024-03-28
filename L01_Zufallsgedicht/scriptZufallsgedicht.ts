const subjekte = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
const preadikate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
const objekte = ["Zaubertränke","den Grimm","Lupin","Hogwarts","die Karte des Rumtreibers","Dementoren"];

//console.log(subjekte, preadikate, objekte);

function versGenerator() {
    const subjektePick = Math.floor(Math.random() * subjekte.length);
    const preadikatePick = Math.floor(Math.random() * preadikate.length);
    const objektePick = Math.floor((Math.random()*objekte.length));

    const vers = `${subjekte[subjektePick]} ${preadikate[preadikatePick]} ${objekte[objektePick]}.`;
    console.log(vers);
}

    for (let j = 0; j < 5; j++) {
        versGenerator();
    }



    //Wie ich es ohne Recherche gemacht hab
/*     for (let j = 0; j < 5; j++) {
        const vers = []
        subjektePick = Math.floor(Math.random() * subjekte.length);
        //console.log(subjektePick);
        vers.push(subjekte[subjektePick]);

        preadikatePick = Math.floor(Math.random() * preadikate.length);
        //console.log(preadikatePick);
        vers.push(preadikate[preadikatePick])

        objektePick = Math.floor((Math.random()*objekte.length));
        //console.log(objektePick)
        vers.push(objekte[objektePick]);

        //console.log(subjekte[subjektePick]);
        
        console.log(vers)        
    } */