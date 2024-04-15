const bici = [
    { nome: "bici1",
      peso: 5
    },
    { nome: "bici2",
      peso: 6
    },
    { nome: "bici3",
      peso: 8
    },
    { nome: "bici4",
      peso: 13
    },
    { nome: "bici5",
      peso: 4
    },
];


// ciclo forEach per trovare bici più leggera

let biciLeggera = bici[0];

bici.forEach(bicicletta => {
if (bicicletta.peso < biciLeggera.peso) {
    biciLeggera = bicicletta;
    console.log(`${bicicletta.nome}, ${bicicletta.peso}`)
}

})

// stampare in html 
const risultatoDiv = document.getElementById('risultato');
risultatoDiv.innerHTML = `La più leggera: ${biciLeggera.nome}, kg: ${biciLeggera.peso}`