// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, message, query) => {

  
    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:N_:848429469688397854> ・ No result found for ${query}!`);
    message.channel.send({ embeds: [embed] });
}