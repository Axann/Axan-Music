// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "queue",
    category: "Music",
    aliases: [ "q" ],
    description: "Queue Music",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
  
  
// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //
  
  
    async execute(client, message, args, color) {
      
      
// ─────────────────────────────────── || EROR || ─────────────────────────────────── //
      
      
        const embedgagal = new Discord.MessageEmbed()
             .setColor('RED')
      
        
        // queue
      
        const queue = message.client.distube.getQueue(message);
        if (!queue){
            embedgagal.setDescription(`${message.client.noMUSIC}`);
            return message.channel.send({ embeds: [embedgagal] });
        };


        let arrays = queue.songs.map((song, id) => `**${id + 1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``);

      
        let embed = new Discord.MessageEmbed()
            .setColor(color)
            .setAuthor(`Queue: [${arrays.length} Songs]`)
            .setFooter(`Request by ${message.author.tag} • ${message.client.footer.status(queue)}`, message.author.displayAvatarURL());

        message.client.pagination.button(message, arrays, embed)
      
      
    }
  
  
}