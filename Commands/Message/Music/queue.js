// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const { MessageEmbed , Discord } = require("discord.js");


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
      
        const queue = message.client.distube.getQueue(message);
      
        if (!queue){
          
          
        } 

      
      
        let arrays = queue.songs.map((song, id) => `**${id + 1}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``);

      
      
        let embed = new MessageEmbed()
            .setColor(message.client.color)
            .setAuthor(`Queue: [${arrays.length} Songs]`)
            .setFooter(`Request by ${message.author.tag} • ${message.client.footer.status(queue)}`, message.author.displayAvatarURL());

        message.client.pagination.button(message, arrays, embed)
    }
}