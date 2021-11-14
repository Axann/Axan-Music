// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue, playlist) => {

    let embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle('Add playlist')
        .setDescription(`\`[${playlist.songs.length} songs]\`  ・  \`[${playlist.formattedDuration}]\`  ・  [${playlist.name}](${playlist.url})`)
        //.setThumbnail(playlist.thumbnail.url)
        //.setFooter(`Request by ${playlist.user.tag}`, playlist.user.displayAvatarURL());
    queue.textChannel.send({ embeds: [embed] });

}