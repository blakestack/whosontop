import { client, getTeams } from 'cfbd';

// Set up the client with your API key
client.setConfig({
    headers: {
        'Authorization': `${Bearer}`,
    }
});

// Call the getGames endpoint
const games = await getGames({
    query: {
        year: 2023,
        classification: 'fbs',
    },
});

for (const game of games.data ?? []) {
    // Do something with the game data
    // For example:
    console.log(`${game.awayTeam} vs ${game.homeTeam} - ${game.excitementIndex}`);