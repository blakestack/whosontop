import { client, getGames } from 'cfbd';

// Set up the client with your API key
client.setConfig({
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
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