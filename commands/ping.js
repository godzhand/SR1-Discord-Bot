const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder('pingx')
		.setName('pingx')
		.setDescription('Pong!'),
	async execute(interaction) {
		interaction.reply({
			content: 'Pong!',
		});

	},

};