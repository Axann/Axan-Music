// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, message) => {

  
    let embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`<:N_:848429469688397854> ・ !`);
    message.channel.send({ embeds: [embed] });
}