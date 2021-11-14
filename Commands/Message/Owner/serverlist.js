// ─────────────────────────────────── || MODULE || ─────────────────────────────────── //


const Discord = require("discord.js");


// ─────────────────────────────────── || EXPORT || ─────────────────────────────────── //


module.exports = {
    name: 'serverlist',
    category: 'owner',
    aliases: [],
    description: 'Restart bot',
    args: false,
    usage: [],
    examples: ['restart'],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: true,


// ─────────────────────────────────── || SYSTEM || ─────────────────────────────────── //


    async execute(client, message, args, color) {


        let i0 = 0;
        let i1 = 10;
        let page = 1;

        let description = `Total Servers - ${client.guilds.cache.size}\n\n` + 
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `\`\`\`hs\n${i + 1} : ${r.name}\n  : ID ${r.id} - ${r.memberCount} Members\`\`\``)
          .slice(0, 10)
          //.join("\n\n");

        let embed = new Discord.MessageEmbed()
          .setAuthor(`SERVER LIST`)
          .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
          .setColor(color)
          .setTimestamp()
          .setDescription(description);

        let msg = await message.channel.send({ embeds: [embed] });

    
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
    
    
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("❌");

        let collector = msg.createReactionCollector((reaction, user) => user.id === message.author.id);

        collector.on("collect", async (reaction, user) => {
          
          
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
          
          
        if (reaction._emoji.name === "⬅") {
          i0 = i0 - 10;
          i1 = i1 - 10;
          page = page - 1;

        if (i0 + 1 < 0) {
            return msg.delete(); }
          
        //if (!i0 || !i1) {
        //    return msg.delete(); }

        description = `Total Servers - ${client.guilds.cache.size}\n\n` +
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `\`\`\`hs\n${i + 1} : ${r.name}\n  : ID ${r.id} - ${r.memberCount} Members\`\`\``)
          .slice(i0, i1)
          .join("\n");

        embed.setDescription(description);

        msg.edit({ embeds: [embed] });}

          
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
          
          
        if (reaction._emoji.name === "➡") {
          
          i0 = i0 + 10;
          i1 = i1 + 10;
          page = page + 1;

        if (i1 > client.guilds.cache.size + 10) {
            return msg.delete(); }
        if (!i0 || !i1) {
            return msg.delete(); }

        description = `Total Servers - ${client.guilds.cache.size}\n\n` + 
        client.guilds.cache
          .sort((a, b) => b.memberCount - a.memberCount)
          .map(r => r)
          .map((r, i) => `\`\`\`hs\n${i + 1} : ${r.name}\n  : ID ${r.id} - ${r.memberCount} Members\`\`\``)
          .slice(i0, i1);
          //.join("\n\n");


        embed.setDescription(description);

        msg.edit({ embeds: [embed] });
        }

          
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
          
          
        if (reaction._emoji.name === "❌") {
          return msg.delete();
        }

          
//* ----------------------------- ~ AXAN $ ZICC ~ ----------------------------- *//
          
          
        await reaction.users.remove(message.author.id);
      });
    }
  }