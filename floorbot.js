require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const channel = process.env.DISCORD_CHANNEL_ID;

//let url = 'https://api.opensea.io/api/v1/collections?asset_owner=0x0bC132f253a93Ca4e2ead86765d45BE5199D869f&offset=0&limit=1';


client.on('message', async message => {
	// ...
	if (message.content.startsWith('floor!')) {
		
	var openSeaResponse = await fetch(
    "https://api.opensea.io/api/v1/collections?" + new URLSearchParams({
      offset: '0',
      limit: '1',
      asset_owner: '0x0bC132f253a93Ca4e2ead86765d45BE5199D869f'
  })).then((resp) => resp.json());

  message.channel.send('Banana floor is: ' + openSeaResponse[0].stats.floor_price + '!'); 

	}
});



client.on('ready', () => {
   console.log('I am ready!'); 
});

client.login(process.env.DISCORD_BOT_TOKEN);
