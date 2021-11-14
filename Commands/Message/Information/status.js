// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const { MessageEmbed, version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require('os')
const si = require('systeminformation');


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: "status",
    category: "Information",
    aliases: [ "stats" ],
    description: "Show status bot",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,


// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //


    async execute(client, message, args, color) {


        const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const cpu = await si.cpu();

        const embed = new MessageEmbed()
            .setColor(color)
            .setThumbnail(message.client.user.displayAvatarURL())
            .setFooter(`Request by ${message.author.tag}`, message.author.displayAvatarURL())
   
            .addField('Info', `\`\`\`yaml\n- Owner      : zicc#1101 & ahsan#3464\n- Version    : v1.0\n- Server     : ${message.client.guilds.cache.size.toLocaleString()}\n- Channels   : ${message.client.channels.cache.size.toLocaleString()}\n- User       : ${message.client.users.cache.size.toLocaleString()}\`\`\`\n`)
            .addField('Bot Status', `\`\`\`yaml\n- Processor  : ${os.cpus()[0].model}\n- Cores    : ${cpu.cores}\n- Speed    : ${os.cpus()[0].speed} MHz\n- Platform   : ${os.type}\n- Node.js    : ${process.version}\n- Discord.js : v${version}\`\`\`\n`)
            .addField('System Info', `\`\`\`yaml\n- Memory     : ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS - ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\n- Node       : ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)} %\n- System     : ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)} %\n- Ping       : ${client.ws.ping} ms\n- Uptime     : ${duration1}\`\`\`\n`)
      
        message.channel.send({ embeds: [embed] });


    }


}


// **・ Distube** : v${message.client.distube.version}