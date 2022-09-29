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
      .setDescription(`> Hola!, ¿Como estás? **<@${member.id}>** , bienvenido a mi servidor **ARG Store**!. 
      **Cosas importantes** 
      > <#1013498919105351701>
      > <#1009118625254354984>`)
      .setColor(0x037821)
      .setImage('https://images.hdqwalls.com/wallpapers/grand-theft-auto-online-4k-do.jpg')
      .setTimestamp();
      .setFooter({ text: 'ARG Store', iconURL: 'https://i.imgur.com/gKhJ1Ld.png' });

    welcomeChannel.send({ embeds: [welcomeEmbed] });
  }
}
