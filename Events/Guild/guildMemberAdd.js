const { EmbedBuilder } = require("@discordjs/builders");
const { GuildMember, Embed, InteractionCollector } = require("discord.js");
const Schema = require("../../Models/Welcome");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    const { user, guild } = member;
    const welcomeChannel = member.guild.channels.cache.get('881002532372086851');

    const welcomeEmbed = new EmbedBuilder()
      .setTitle("**Bienvenido!**")
      .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
      .setDescription(`> Hola!, ¿Como estás? **<@${member.id}>** , bienvenido a mi servidor **ARG Store**!. 
      **Cosas importantes** 
      > <#1013498919105351701>
      > <#1009118625254354984>`)
      .setColor(0x037821)
      .setImage('https://media.discordapp.net/attachments/1024734457682464820/1025132794533384202/foto_1.jpg?width=722&height=406')
      .setTimestamp();

    welcomeChannel.send({ embeds: [welcomeEmbed] });
  }
}
