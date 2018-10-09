const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur des Weeping Cats' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});


bot.on('message', msg => {
    if (msg.content === "bonjour" or "slt" or "Hello" or "hello" or "coucou" or "Coucou" or "salut" or "Salut"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
});

bot.login(token); //a garder en version heroku
