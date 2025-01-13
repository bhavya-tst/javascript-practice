const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
    },
    };

    for(const [i, player] of game.scored.entries()) {
        console.log(`Goal ${i + 1}: ${player}`);
    }
    let sum=0;
    game['x']="draw";
    for(const [i,odd] of Object.entries(game.odds)) {
        sum+=odd;
        console.log(`Odd of victory ${game[i]}: ${odd}`);  
    }
    console.log(`Average odd: ${sum/Object.keys(game.odds).length}`);

    const scores={};
    for(const player of game.scored) {
        scores[player] = (scores[player] || 0) + 1;
    }
    console.log(scores);
