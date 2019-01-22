const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const prefix = "r#";
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} !`);
          client.user.setActivity("νι¢тσяу ¢ℓαη By !ν¢ |Bako gaming 🎓#1033 , r#help .",{type: 'WATCHING'});
 
  });
 

 
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها :ok_hand:```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
  
//Best Rainbow Bot .
client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'set')) {//to create the rainbow role
      let role = message.guild.roles.find('name', 'Rainbow')
    if(role) return message.channel.send(`**يوجد بلفعل رتبه Rainbow !**`)//if the role already created return with this msg
  //start of create role
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})
 
}
message.channel.send('**تم رتبه Rinbow تعمل الان**')//if the step completed
}});
 
client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 2000);//the rainbow time
});client.on("message", message => {
  if (message.content === "r#help") {
      message.react('🌈')
message.author.send(`**
r#set
 - لإنشاء رتبة الرينبو وبدا الرينبو
- To create the role of the Rainbow & Start The Rainbow
r#inv
- لدعوة البوت
- To Invite the bot
خطوات لو الرتبة م أشتغلت .!!
1- ضع رتبة الرينبو فوق الالوان أو الرتب الملونه لو فيه
2- ضع رتبة البوت فوق رتبة الرينبو
The steps of the role did not worked .!!
1- Place the role of the Rainbow above the colors or colored ranks if it
2- Put the bot role above the role of the Rainbow 
رآبط البوت - Bot Invite link
- http://cutt.us/RainbowBott
**`)
  }})
   client.on('message', message => {
       if(message.content.startsWith(`r#inv`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
                 message.react('🌈')
           var embed = new Discord.RichEmbed()
           .setTitle(">> ClickHere To Add" + `${client.user.username}` + " <<")
           .setURL("https://discordapp.com/oauth2/authorize?client_id=" + `${client.user.id}` + "&scope=bot&permissions=2080374975")
           .setTimestamp()
           .setFooter(`Requested By | ${message.author.username}`) 
           .setColor("RANDOM")
           message.author.send({embed}) 
       }// 
   });

client.on('message', message => {
if(message.content == (prefix + "owner")) {
         if(!message.author.id === '529756005786058755') return;
var gimg;
var gname;
var gmemb;
var gbots;
var groles;
var servers = client.guilds;
servers.forEach((g)=>{
gname = g.name;
gimg = g.iconURL;
gmemb = g.members.size;
gbots = g.members.filter(m=>m.bot).size;
groles = g.roles.map(r=> {return r.name});
let serv = new Discord.RichEmbed()
.setAuthor(gname,gimg)
.setThumbnail(gimg)
.addField('Server bots',gbots)
.addField('Server Member Count',gmemb = g.members.size)
.setColor('RANDOM')
message.channel.send(`
Server Name : **${gname}**
Server MemberCount : **${gmemb} **
        `);
      message.channel.sendEmbed(serv);
}) 
}
});

client.on('message', message => {
             if (!message.channel.guild) return;
      if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  
  if (command === 'invites') {
    message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    return message.reply(`**${inviteCount}: عدد الاشخاص الذي دعوتهم هو**`)

});
}});

client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == 'r#bc') {
         message.react("??")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('** »المرسل  :**', `***  ${message.author.username}#${message.author.discriminator}***`)
            .addField('*** »السيرفر  :***', `*** ? ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('»الرسالة', args)
            m.send(``,{embed: bc});
        });
    }
})

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`** شكراً لك لإضافه البوت الى سيرفرك ممكن تدخل سيرفر الدعم الفنى  :https://discord.gg/H5DvcrN**`)
      guild.owner.send(embed)
});

client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + "ping")) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
 });

client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
