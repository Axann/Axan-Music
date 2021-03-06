// ─────────────────────────────────── || MODULE KONTOLLLL || ─────────────────────────────────── //


const Discord = require("discord.js")
const { stripIndents } = require("common-tags");


// ─────────────────────────────────── || EXPORT IMPORT || ─────────────────────────────────── //


module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Show all commands, or one specific command",
    args: false,
    usage: [],
    examples: [],
    memberPermissions: [],
    botPermissions: [ "SEND_MESSAGES" ],
    owner: false,
    async execute(client, message, args, color) {
      
      
// ─────────────────────────────────── || EXPORT IMPORT || ─────────────────────────────────── //
      
      
        const embed = new Discord.MessageEmbed()
        .setColor(color)

        if (!args[0]) {
          
            const commands = (category) => {
                return message.client.commands.filter(cmd => cmd.category === category).map(cmd => `\`${cmd.name}\``).join(", ");
            }

            embed.setTitle(`COMMAND LIST`)
            embed.setDescription(`Help on a specific command type \`${message.client.prefix}help <command>\``);
            embed.addField('MUSIC' , '```yaml\nautoplay , filter , join , leave , loop , lyrics , nowplaying , pause , play , previous , queue , resume , search , shuffle , skip , skipto , stop , volume```')
            embed.addField('INFO' , '```yaml\nhelp , ping , status```')
            embed.setFooter('made with lope by ahsan & zicc developer')
            //embed.setTimestamp()
            message.channel.send({ embeds: [embed] });
          
        } else {
            let command = message.client.commands.find(cmd => cmd.name === args[0]) || message.client.commands.find(cmd => cmd.aliases.includes(args[0]))
            if (!command) return;

            let name = command.name;

            let description = command.description;
            if (!description || description.length === 0) description = "No description";

            let aliases = command.aliases.join(", ");
            if (!aliases || aliases.length === 0) aliases = "No alias";

            let usages = command.usage;
            let usage;
            if (!usages || usages.length === 0) {
                usage = `\`${message.client.prefix}${name}\``;
            } else {
                let usagesMap = usages.map(data => `${message.client.prefix}${name} ${data}`)
                usage = usagesMap.join('\n')
            }
            
            let examples = command.examples;
            let example;
            if (!examples || examples.length === 0) {
                example = `\`${message.client.prefix}${name}\``;
            } else {
                let examplesMap = examples.map(data => `${message.client.prefix}${name} ${data}`)
                example = examplesMap.join('\n')
            }

            let memberPermissions = command.memberPermissions.join(", ").replace("_", " ");
            if (!memberPermissions || memberPermissions.length === 0) memberPermissions = "No specific member permission is required to execute this command.";

            let botPermissions = command.botPermissions.join(", ").replace("_", " ");
            if (!botPermissions || botPermissions.length === 0) botPermissions = "No specific bot permission is required to execute this command.";


          
          
            //embed.setTitle(`${message.client.prefix}${name}`)
            embed.setDescription(`\`\`\`yaml\n${description}\`\`\``)
            embed.addField('Usage', `\`\`\`yaml\n${usage}\`\`\``)
            //embed.addField('Examples', `${example}`)
            embed.addField('Aliases', `\`\`\`yaml\n${aliases}\`\`\``)
            //embed.addField('Member Permission', `\`${memberPermissions}\``);
            message.channel.send({ embeds: [embed] });
        }
    }
};