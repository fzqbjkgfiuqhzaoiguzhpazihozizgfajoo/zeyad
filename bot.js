const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['310494229791113219','527028584787869696'];

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('Zwt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Zls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Zst')) {
  client.user.setGame(argresult, "https://www.twitch.tv/ii7m0dy");
  client.user.setStatus("dnd")
   message.channel.send(` ** Done. :white_check_mark: ** `)
} else 
if (message.content.startsWith('Zpl')) {
client.user.setActivity(argresult , {type:'PLAYING'});
  client.user.setStatus("dnd")
    message.channel.send(` ** Done. :white_check_mark: ** `)

}
  client.on('message', message => {//iiHouSSaM#9494
        if (!developers.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === 'Me') {//iiHouSSaM#9494

  let channel = client.channels.get('527028584787869696');//iiHouSSaM#9494


  channel.join()//iiHouSSaM#9494
  .then(connection => console.log(`????`))//iiHouSSaM#9494
  .catch(console.error);//iiHouSSaM#9494
  }
});
          
});


client.login(process.env.BOT_TOKEN);
