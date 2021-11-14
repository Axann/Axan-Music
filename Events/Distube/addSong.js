// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue, song) => {

    let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle('Add song')
        .setDescription(`\`[${song.formattedDuration}]\`  ・  [${song.name}](${song.url})`)
    queue.textChannel.send({ embeds: [embed] });

}