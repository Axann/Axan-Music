// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
  
    name: "invite",
    category: "Information",
    aliases: [],
    description: "invite me to ur server",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
    
    
// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //
  
  
  async execute(client, message, args, color) {
    
    
// ─────────────────────────────────── || CODE || ─────────────────────────────────── //
    
    
        const invite = new Discord.MessageEmbed()
        
          .setAuthor("invite me?")
          .setDescription("[Click here!](https://discord.com/api/oauth2/authorize?client_id=841386276107583570&permissions=0&scope=bot)")
          .setColor(color)
        
        return message.channel.send({ embeds: [invite] });
      }
    }
