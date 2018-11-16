const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "494110836198211584"; // ايدي السررفر
var channel = "511984158940069888";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Universe Town  , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town , Universe Town ')
    },305);
})


client.login(process.env.BOT_TOKEN);
