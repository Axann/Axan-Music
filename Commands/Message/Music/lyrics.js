// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");
const lyricsFinder = require("lyrics-finder");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "lyrics",
    category: "Music",
    aliases: [ "ly" ],
    description: "Show Lyric a song",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,


// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //


    async execute(client, message, args) {


        const embedgagal = new Discord.MessageEmbed()
            .setColor('RED')

        const queue = message.client.distube.getQueue(message);

        let song = args.join(" ");
        let currentSong = queue.songs[0];

        if (!song && currentSong) song = currentSong.name;

        if (!song && !currentSong) {
            embedgagal.setDescription(`${message.client.errorLYRIC1}`);
            return message.channel.send({ embeds: [embedgagal] });
        }

        try {
            let lyrics = await lyricsFinder(song, "");
          
            if (!lyrics){
                embedgagal.setDescription(`${message.client.errorLYRIC2}`);
            return message.channel.send({ embeds: [embedgagal] });
            }

            let split = await Discord.Util.splitMessage(lyrics, { maxLength: 2048 });


            const embed = new Discord.MessageEmbed()
                .setAuthor(`Lyrics`)
                .setColor(message.client.color)
                .setTitle(`${song}`)
                .setDescription(split.join(""))
                .setFooter(`Request by ${message.author.tag}`, message.author.displayAvatarURL());
            message.channel.send({ embeds: [embed] });
        }
      
        catch (error) {
            console.error(error)
            embedgagal.setDescription(`${message.client.errorLYRIC3}`);
            return message.channel.send({ embeds: [embedgagal] });
        
        }
    }
}