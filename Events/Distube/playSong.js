// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = async (client, queue, song) => {
  
  
    let duration = song.duration * 1000;

  
    if (song.playlist) {
        let thing = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**Start playing**\n \`[${song.formattedDuration}]\`  ・  [${song.name}](${song.url})\n\n **Playlist**\n \`[${song.playlist.songs.length} songs]\`  ・  [${song.playlist.name}](${song.playlist.url})`)
        
            //.setDescription(`Start playing playlist \n[${song.playlist.name}](${song.playlist.url}) \`[${song.playlist.songs.length} songs]\`\n\nStart playing \n[${song.name}](${song.url}) - \`[${song.formattedDuration}]\``)
            //.setThumbnail(song.thumbnail)
            //.setFooter(`Request by ${song.user.tag}`, song.user.displayAvatarURL());
        queue.textChannel.send({ embeds: [thing] }).then(message => setTimeout(() => { message.delete() }, duration));

    } 
  
  
    else {
        let thing = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle('Start playing')
            .setDescription(`\`[${song.formattedDuration}]\`  ・  [${song.name}](${song.url})`)
            //.setThumbnail(song.thumbnail)
            //.setFooter(`Request by ${song.user.tag}`, song.user.displayAvatarURL());
        queue.textChannel.send({ embeds: [thing] }).then(message => setTimeout(() => { message.delete() }, duration));
    }


}