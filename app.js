const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client()

client.on("ready", () => {
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	client.user.setGame(`on the pitch`);
})

client.on("message", async message => {
	if (message.content.toLowerCase().indexOf("ayy lmao") < 0 )
		return
    message.sendmessage
	let random = Math.floor(Math.random() * 3)

	switch (dong) {
		case "ayy lmao": 
      message.sendMessage({ to: channelID, message:'ヽ༼ ຈل͜ຈ༽ ﾉ Raise ur dongers!'});
		break;

	}
})

console.log(config.token)

client.login(config.token);
