const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder('invite')
		.setName('invite')
		.setDescription('invite someone to your gang')
		.addUserOption(option =>
			option
				.setName('user')
				.setDescription('the user to invite to your gang')
				.setRequired(true)),
};