const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () =>{
    console.log('Bot is ready!');

});


client.on('message', message => {
    console.log(message.content+'=='+message.mentions);
    //message.reply('Pelaito marik vete de aqui');
    if(message.content === 'mamando gallo'){

        message.reply('https://twitter.com/AmarantaHank');
    }
    // message.channel.send("Jugando bdo mani, no ves?");
});

client.login('NjA0NTU5NTkzMDMyNTE1NTk0.Xjq6Wg.bdvdUguMweaESVB6CnnNmX_hI0o');