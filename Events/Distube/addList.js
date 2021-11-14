// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue, playlist) => {

    let embed = new Discord.MessageEmbed()
        //.setColor(client.color)
        .setDescription(`Add playlist \n[${playlist.name}](${playlist.url}) \nTotal : (${playlist.songs.length} songs \`[${playlist.formattedDuration}]\``)
        //.setThumbnail(playlist.thumbnail.url)
        //.setFooter(`Request by ${playlist.user.tag}`, playlist.user.displayAvatarURL());
    queue.textChannel.send({ embeds: [embed] });

}