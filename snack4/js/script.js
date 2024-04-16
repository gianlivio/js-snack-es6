const persone = [
    { nome: "Mario", cognome: "Rossi", età: 22 },
    { nome: "Luca", cognome: "Bianchi", età: 17 },
    { nome: "Sara", cognome: "Verdi", età: 24 },
    { nome: "Gina", cognome: "Neri", età: 16 },
    { nome: "Rino", cognome: "Gialli", età: 30 }
  ];

  const permessoGuida = persone.map(persona => {
    let scrivi;
    if (persona.età >= 18) {
      scrivi = 'può guidare.';
    } else {
      scrivi = 'non può guidare.';
    }
    return `${persona.nome} ${persona.cognome} ${messaggio}`;
  });
  
  console.log(permessoGuida);