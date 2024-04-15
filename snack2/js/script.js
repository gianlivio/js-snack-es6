const teams = [
    { nome: "Inter",
      puntiFatti: 0,
      falliSubiti: 0
    },
    { nome: "Milan",
      puntiFatti: 0,
      falliSubiti: 0
    },

    { nome: "Juventus",
      puntiFatti: 0,
      falliSubiti: 0
    },

    { nome: "Roma",
      puntiFatti: 0,
      falliSubiti: 0
    },

];

// funzione genera num random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// per ogni team registro num random per puntiFatti e falliSubiti
teams.forEach(team => {
  team.puntiFatti = getRandomNumber(1, 100);
  team.falliSubiti = getRandomNumber(1, 50);
});


// destrutturazione

const teamsInfo = teams.map(({ nome, falliSubiti}) => ({ nome, falliSubiti}));

// stampa in console con ciclo forEach 
teamsInfo.forEach(team => console.log(team));