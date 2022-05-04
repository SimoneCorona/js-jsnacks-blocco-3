// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

let serieAteams = [
    {
        nome : 'Juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Roma',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        nome : 'Atalanta',
        puntiFatti : 0,
        falliSubiti : 0
    }
];


serieAteams = serieAteams.map(function(team) {
    return {
        nome: team.nome,
        puntiFatti: Math.floor((Math.random() * 100) + 1),
        falliSubiti: Math.floor((Math.random() * 100) + 1),
    }
});

console.log(serieAteams);


