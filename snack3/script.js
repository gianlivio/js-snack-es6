
const automobili = [
    { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
    { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
    { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
    { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
    { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
    { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
    { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
    { marca: "Audi", modello: "A3", alimentazione: "diesel" },
    { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
    { marca: "Opel", modello: "Corsa", alimentazione: "gpl" }
  ];
  

// creo 3 array

let alimBenzina = [];
let alimDiesel = [];
let alimAlt = [];

// ciclo foreach per iterare e controllare

automobili.forEach(auto => {
    if (auto.alimentazione === "benzina") {
        alimBenzina.push(auto);
    } else if (auto.alimentazione === "diesel") {
        alimDiesel.push(auto);
    } else {
        alimAlt.push(auto);
    }
  
});

// stampa
console.log(alimBenzina);

console.log(alimDiesel);

console.log(alimAlt);

