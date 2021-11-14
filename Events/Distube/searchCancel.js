// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, message, query) => {
  
    // If DisTubeOptions.searchSongs = true
  
    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:N_:848429469688397854> ・ Searching canceled!`);
    message.channel.send({ embeds: [embed] });
}