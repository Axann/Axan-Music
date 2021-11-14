// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, message, result, query) => {

    // If DisTubeOptions.searchSongs = true
    let i = 0
    
    let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription(`${client.emoji.search} **Choose an option from below**\n${result.map(song => `**${++i}**. [${song.name}](${song.url}) - \`${song.formattedDuration}\``).join("\n")}`)
        .setFooter(`Enter anything else or wait 60 seconds to cancel`);
    message.channel.send({ embeds: [embed] });

}