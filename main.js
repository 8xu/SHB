const Steam = require('steam-user');
const config = require('./config.json'); // Imports required information from config.json
const client = new Steam();

process.title = `SHB | Boost Steam hours!`
client.logOn({
    "accountName": config.username,
    "password": config.password
}); // Logs in to Steam with username and password

client.on("loggedOn", () => {
    console.log(`Logged in as ${config.username}.`);
    process.title = `SHB | Currently boosting!`
	client.setPersona(Steam.EPersonaState.Online);
	client.gamesPlayed(config.games);
});

client.on('error', (error) => {
    console.log(error);
}); // For error catching