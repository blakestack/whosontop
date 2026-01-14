import { client, getTeams } from 'cfbd';

// Set up the client with your API key
client.setConfig({
    headers: {
        'Authorization': 'Bearer F7w1YTndednOuQmCjJV8/dK2ZXgwR3hxs9meOQYpwoqt7nnCRNbZ60RMouP0P9JS',
    }
});

// Call the getGames endpoint
const teams = await getTeams({
    query: {
        year: 2025,
        classification: 'fbs',
    },
});

for (const team of teams.data ?? []) {
    // Do something with the game data
    // For example:
    console.log(`${teams}`);