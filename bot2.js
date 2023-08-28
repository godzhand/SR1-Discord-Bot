require('dotenv').config();
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
console.log(process.env.CLIENT_TOKEN);
const { Client, Collection } = require('discord.js');
const irc = require('irc');
const client = new Client({
	intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_PRESENCES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGES', 'DIRECT_MESSAGE_TYPING', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_REACTIONS'],
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}
client.login(process.env.CLIENT_TOKEN);
const MySQLEvents = require('@rodrigogs/mysql-events');
const mysql = require('mysql');
const { MessageEmbed } = require('discord.js');
let data;
fs.readFile('US_Strings.txt', 'utf8', function(err, rawData) {
	if (err) {
		return console.log(err);
	}
	data = rawData.split('\n');
	// console.log(data);

});
// inside a command, event listener, etc.
const program = async () => {

	const ircK = new irc.Client('irc.koach.com', 'tharow', {
		channels: ['#tha-row.net'],
	});
	ircK.addListener('message', function(from, to, message) {
		if (to === ircK.nick) {
			if (from !== ircK.nick) {
				if (message.charAt(0) !== '@') { return; }
				const commandBody = message.substring(1);
				const argX = commandBody.split('=');
				if (argX[0] == 'UPDATE_XUID') {
					const strip = commandBody.split('=');
					const divide = strip[1].split('!');
					const getGT = divide[0];
					const xuid = divide[1];
					console.log(getGT + ' logged on with xuid ' + xuid);

				}
				if (argX[0] == 'ENTERED_CAR') {
					tclient.say('#tharowNET', '!cmd level_ambient ' + Math.floor(Math.random() * 255) + ' ' + Math.floor(Math.random() * 255) + ' ' + Math.floor(Math.random() * 255));
					tclient.say('#tharowNET', '!cmd set_notoriety_vice_kings ' + Math.floor(Math.random() * 5));
				}
				if (argX[0] == 'CHANGE_GAMERTAG') {
					// @CHANGE_GAMERTAG=gamertag!1!GODZHANDXXX
					const getGT1 = commandBody.split('!');
					const myGT = getGT1[0];
					const getGT = getGT1[2];
					const pN = getGT1[1];
					const myGT2 = myGT.split('=');

					console.log(getGT + ' wants to change their gamertag and is player ' + pN);
					// let symbol = '👤';
					const sql = 'SELECT user,DiscordID,isAdmin FROM users WHERE gamertag=?';
					connection.query(sql, [getGT], function(err, result) {

						if (err) throw err;
						if (result && result.length) {
							// const did = result[0].DiscordID;
							const isAdmin = result[0].isAdmin;
							const user = result[0].user;
							if (isAdmin == 'True') {
							//	symbol = '🥷';
							}
							const sql2 = 'SELECT gang_id,isAdmin,isOwner FROM members WHERE user=?';
							connection.query(sql2, [user], function(err, result2) {
								if (err) throw err;
								if (result2 && result2.length) {
									const gangid = result2[0].gang_id;
									const isAdming = result2[0].isAdmin;
									const isOwner = result2[0].isOwner;
									const sql3 = 'SELECT Gang_Tag,Gang_Name,motto FROM gangs WHERE id=?';
									connection.query(sql3, [gangid], function(err, result3) {
										if (err) throw err;
										if (result3 && result3.length) {
											const gangtag = result3[0].Gang_Tag;
											const motto = result3[0].motto;
											if (isAdming == 'True' || isOwner == 'True') {
												if (isAdmin == 'False') {
												//	symbol = '🔨';
												}
												// tclient.say('#tharowNET', '@CHANGE_GT ?' + myGT2[1] + '?' + pN + '?[' + gangtag + '] ' + getGT + '?' + motto);
												ircK.say(from, '@CHANGE_GT ?' + myGT2[1] + '?' + pN + '?[' + gangtag + '] ' + getGT + '?' + motto);
											}
											else {
												if (isAdmin == 'False') {
												//	symbol = '👥';
													// eslint-disable-next-line no-empty
												//	if (gender == 'Male') {
												//	}
													// eslint-disable-next-line no-empty
												//	else if (gender == 'Female') {

												//	}
												}
												// tclient.say('#tharowNET', '@CHANGE_GT ?' + myGT2[1] + '?' + pN + '?[' + gangtag + '] ' + getGT + '?' + motto);
												ircK.say(from, '@CHANGE_GT ?' + myGT2[1] + '?' + pN + '?[' + gangtag + '] ' + getGT + '?' + motto);
											}
										}
									});
								}
							});
						}
					});
				}
				console.log('recieved a message ' + from + ' => ' + to + ': ' + message);
				if (message === 'lol') {
					console.log('laugh out loud');
				}
			}
		}
		else {
			console.log(from + ' => ' + to + ': ' + message);
		}
	});
	const tmi = require('tmi.js');
	const tclient = new tmi.Client({
		options: { debug: true },
		identity: {
			username: 'tharowNET',
			password: 'oauth:kkwau6yo2ejrc2zj0ogp5bi85j3qmo',
		},
		channels: [ '#tharowNET' ],
	});
	tclient.connect();
	tclient.on('message', (channel, tags, message, self) => {
		// Ignore echoed messages.
		if (self) return;
		if (message.toLowerCase() === '!gamertag') {
			tclient.say(channel, `@${tags.username}, gt`);
		}
		if (message.toLowerCase() === '!hello') {
			// "@alca, heya!"
			tclient.say(channel, `@${tags.username}, heya!`);
		}
	});
	instance.addTrigger({
		name: 'gang_server',
		expression: '*',
		statement: MySQLEvents.STATEMENTS.ALL,
		onEvent: (event) => {
			console.log(event);
		},
	});
	instance.addTrigger({
		name: 'USER_CREATED',
		expression: 'gang_server.users',
		statement: MySQLEvents.STATEMENTS.INSERT,
		onEvent: async (event) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			for (const [key, value] of Object.entries(event)) {
				console.log(`${key}: ${value}`);
			}
			const channel = client.channels.cache.get('995461464724869120');
			const ax = event.affectedRows;
			channel.send(ax[0].after.user + ' created a new account!');
			console.log('account created!');
		},
	});

	instance.addTrigger({
		name: 'GENDER_UPDATED',
		expression: 'gang_server.users',
		statement: MySQLEvents.STATEMENTS.UPDATE,
		onEvent: async (oldRow) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			const ax = oldRow.affectedRows;
			const ax2 = oldRow.affectedColumns;
			const cgender = ax2[0];
			if (cgender == 'gender') {
				const gender = ax[0].after.gender;
				// const user = ax[0].before.user;
				const did = ax[0].before.DiscordID;
				if (did != null) {
					console.log(ax[0].after.gender);
					const guild = client.guilds.cache.get('850029824273809438');
					guild.members.fetch().then(members => {
						// Loop through every members
						members.forEach(member => {
							const mTag = member.user.tag;
							let musername = member.user.username;
							if (mTag == did) {
								musername = musername.substr(0, 24);
								let symbol = '👓';
								const sql = 'SELECT user,isAdmin FROM users WHERE DiscordID=?';
								connection.query(sql, [mTag], function(err, result) {
									if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
										if (err) throw err;
										if (result && result.length) {
											const user = result[0].user;
											const isAdmin = result[0].isAdmin;
											if (isAdmin == 'True') {
												console.log(mTag);
												symbol = '🥷';
											}
											const sql2 = 'SELECT gang_id,isAdmin,isOwner FROM members WHERE user=?';
											connection.query(sql2, [user], function(err, result2) {
												if (err) throw err;
												if (result2 && result2.length) {
													const gangid = result2[0].gang_id;
													const isAdming = result2[0].isAdmin;
													const isOwner = result2[0].isOwner;
													const sql3 = 'SELECT Gang_Tag,Gang_Name FROM gangs WHERE id=?';
													connection.query(sql3, [gangid], function(err, result3) {
														if (err) throw err;
														if (result3 && result3.length) {
															// const gangname = result3[0].Gang_Name;
															const gangtag = result3[0].Gang_Tag;
															if (isAdming == 'True' || isOwner == 'True') {
																if (isAdmin == 'False') {
																	symbol = '🔨';
																	// console.log(mTag);
																}
																member.setNickname(`${symbol} [${gangtag}] ${musername}`);
															}
															else {
																if (isAdmin == 'False') {
																	symbol = '👥';
																	if (gender == 'Male') {
																		//   symbol = "🧑‍";
																	}
																	else if (gender == 'Female') {
																		//  symbol = "💁‍";
																	}
																}
																member.setNickname(`${symbol} [${gangtag}] ${musername}`);
															}
														}
													});
												}
												else {
													if (isAdmin == 'False') {
														symbol = '👤';
														if (gender == 'Male') {
															//  symbol = "️🧑";
														}
														if (gender == 'Female') {
															//  symbol = "💁‍";
														}
													}
													console.log(`${symbol} ${musername}`);
													member.setNickname(`${symbol} ${musername}`);
												}
											});
											//


										}
										else {
											// member.setNickname(`${symbol} ${musername}`);
										}
									}
								});
								//
							}
						});
					});
				}
			}
		},
	});
	instance.addTrigger({
		name: 'GANG_DELETED',
		expression: 'gang_server.gangs',
		statement: MySQLEvents.STATEMENTS.DELETE,
		onEvent: async (oldRow) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			//	console.log(`${key}: ${value}`);
			// }
			const channel = client.channels.cache.get('995461464724869120');
			const list = client.guilds.cache.get('850029824273809438');
			const ax = oldRow.affectedRows;
			const owner = ax[0].before.owner;
			const gangname = ax[0].before.Gang_Name;
			// const clantag = ax[0].before.Gang_Tag;
			let symbol2 = '👤';
			// const crole = list.roles.cache.find(r => r.name === gangname);
			const sql = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
			connection.query(sql, [owner], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					const did = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					list.members.fetch().then(members => {
						// Loop through every members
						members.forEach(member => {
							const mTag = member.user.tag;
							let musername = member.user.username;
							musername = musername.substr(0, 24);
							if (mTag == did) {
								if (isAdmin == 'True') {
									symbol2 = '🥷';
								}
								if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
									const crole = list.roles.cache.find(r => r.name === gangname);
									if (crole) {
										// member.roles.remove(crole);
										crole.delete();
									}
									member.setNickname(`${symbol2} ${musername}`);
								}
							}
						});
					});
				}
			});
			channel.send(ax[0].before.owner + ' destroyed ' + ax[0].before.Gang_Name + '.');
			console.log('gang deleted!');
			// let symbol3 = '👤';

			// this is where im leaving off 5:28pm saturday july 30 2022

		},
	});
	instance.addTrigger({
		name: 'GANG_JOIN',
		expression: 'gang_server.members',
		statement: MySQLEvents.STATEMENTS.INSERT,
		onEvent: async (oldRow) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			console.log('joined gang');
			const list = client.guilds.cache.get('850029824273809438');
			const axjoin = oldRow.affectedRows;
			const gangid = axjoin[0].after.gang_id;
			const juser = axjoin[0].after.user;
			const jisAdmin = axjoin[0].after.isAdmin;
			const jisOwner = axjoin[0].after.isOwner;
			let symbol = '👥';
			const sql = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
			connection.query(sql, [juser], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					const did = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					if (isAdmin == 'True') {
						symbol = '🥷';
					}
					const sql2 = 'SELECT Gang_Tag,Gang_Name FROM gangs WHERE id=?';
					connection.query(sql2, [gangid], function(err, result2) {
						if (err) throw err;
						if (result2 && result2.length) {
							const gangname = result2[0].Gang_Name;
							const gangtag = result2[0].Gang_Tag;
							if (jisAdmin == 'True' || jisOwner == 'True') {
								if (isAdmin == 'False') {
									symbol = '🔨';
								}
							}
							list.members.fetch().then(members => {
								// Loop through every members
								members.forEach(member => {
									const mTag = member.user.tag;
									let musername = member.user.username;
									musername = musername.substr(0, 24);
									if (mTag == did) {
										if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
											member.setNickname(`${symbol} [${gangtag}] ${musername}`);
											const brole = list.roles.cache.find(r => r.name === gangname);
											if (!brole) {
												console.log('doesnt exist');
											}
											else {
												member.roles.add(brole).then(() => {
													console.log('successfully added');
												}).catch(console.error);
											}
										}
									}
								});
							});
							//
						}
					});
				}
			});
		},
	});


	instance.addTrigger({
		name: 'GANG_INVITE',
		expression: 'gang_server.invitations',
		statement: MySQLEvents.STATEMENTS.INSERT,
		onEvent: async (oldRow, event) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			// const channel = client.channels.cache.get('995461464724869120');
			const list = client.guilds.cache.get('850029824273809438');
			const invax = oldRow.affectedRows;
			const gangid = invax[0].after.gang_id;
			const inviteTo = invax[0].after.invite_to;
			const inviteFrom = invax[0].after.invite_from;
			// const timestamp = invax[0].after.timestamp;
			// const invitationid = invax[0].after.invitation_id;
			let did_inviteTo;
			let did_inviteFrom;
			const sql = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
			connection.query(sql, [inviteTo], async function(err, result) {
				if (err) throw err;
				if (result && result.length) {
					did_inviteTo = result[0].DiscordID;
					// did2 = result[1].DiscordID;
					const isAdmin = result[0].isAdmin;
					// var isAdmin2 = result[1].isAdmin;
					if (!did_inviteTo) {
						console.log('undefined');
					}
					if (did_inviteTo) {
						if (isAdmin == 'True') {
							// symbol = "🥷";
						}
						const sql2 = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
						connection.query(sql2, [inviteFrom], async function(err, result2) {
							if (err) throw err;
							if (result2 && result2.length) {
								did_inviteFrom = result[0].DiscordID;
								// did2 = result[1].DiscordID;
								const isAdmin2 = result[0].isAdmin;
								// var isAdmin2 = result[1].isAdmin;
								if (!did_inviteFrom) {
									console.log('undefined');
								}
								if (inviteFrom) {
									if (isAdmin2 == 'True') {
										// symbol = "🥷";
									}
								}
							}
						});
						let gangname1;
						let gangtag1;
						let gangbio1;
						let gangid1;
						let motto1;
						const sql3 = 'SELECT Gang_Tag,Gang_Name,Gang_Bio,id, motto FROM gangs WHERE id=?';
						connection.query(sql3, [gangid], async function(err, result3) {
							if (err) throw err;
							if (result3 && result3.length) {
								gangname1 = result3[0].Gang_Name;
								gangtag1 = result3[0].Gang_Tag;
								gangbio1 = result3[0].Gang_Bio;
								gangid1 = result3[0].id;
								motto1 = result3[0].motto;
							}
							list.members.fetch().then(members => {
								// Loop through every members
								members.forEach(member => {
									const mTag = member.user.tag;
									// let mid = member.user.id;
									// let musername = member.user.username;
									// musername = musername.substr(0, 24);
									if (mTag == did_inviteTo) {
										if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
											// client.users.cache.get(mid).send("someMessage").catch(console.error);
											const exampleEmbed = new MessageEmbed()
												.setColor('#0099ff')
												.setTitle(did_inviteFrom + ' sent you a gang invitation')
												.setURL('https://tha-row.net')
												.setAuthor({ name: '[' + gangtag1 + ']', iconURL: 'https://tha-row.net/images/pimp_slap_small.png', url: 'https://tha-row.net' })
												.setDescription('*' + motto1 + '*')
												.setThumbnail('https://tha-row.net/images/pimp_slap.png')
												.addFields(
													{ name: 'bio:', value: '```' + gangbio1 + '```' },
													{ name: '!', value: 'you have been invited to join ' + gangname1 },
													{ name: '!', value: '👍 to join ' + gangname1 + ' 🖕 to decline the invitation' },
												)
												.setImage('https://tha-row.net/images/pimp_slap.png')
												.setTimestamp()
												.setFooter({ text: 'Gang invitation', iconURL: 'https://tha-row.net/images/pimp_slap_small.png' });
											console.log(event);
											// member.send({ embeds: [exampleEmbed] })
											// .catch(error => {
											//      console.error(
											//       `Could not send help DM to ${member.user.tag}.\n`,
											//     error
											//  );
											// channel.send("it seems like I can't DM you! Do you have DMs disabled?");
											// });
											try {
												declaredAsAsync(member, exampleEmbed, gangname1, gangtag1, gangid1, inviteTo, inviteFrom);
											}
											catch (error) {
												console.log(error);
											}


										}
									}
								});
							});
						});
					}
				}
			});
		},
	});
	async function declaredAsAsync(member, exampleEmbed, gangname1, gangtag1, gangid1, inviteTo, inviteFrom) {
		const sent = await member.send({ embeds: [exampleEmbed] });
		await sent.react('👍');
		await sent.react('🖕');
		console.log('sent ' + gangid1);
		const guild = client.guilds.cache.get('850029824273809438');
		// const filter = (m) => m.author.id != sent.author.id;
		//	const filter = (reaction) => {
		// return ['✅', '❌'].includes(reaction.emoji.name);

		// };
		// Create a message collector
		// const DM = await member.send({content: `The collector is started! Type something:`}); //We're creating a DM channel with the user that ran the command.
		// const collector = await DM.channel.createMessageCollector({ filter, max: 5, time: 30000}); //We're creating the collector, allowing for a max of 5 messages or 30 seconds runtime.
		// await collector.on('collect', m => { //Triggered when the collector is receiving a new message
		// console.log(m.content); //Console log the content of the message
		// DM.channel.send(m.content);
		// });
		// await collector.on('end', (collected, reason) => { //Triggered when the collector ends. collected is a <Collection> of all messages collected and reason is the reason the collector ended.
		// DM.channel.send({content: `Collector ended for reason: ${reason} reached! I collected ${collected.size} messages.`}); //Sending a message to the user informing the collector ended, and why.
		// });
		// const filter = (m) => m.author.id != sent.author.id;
		const filter = (reaction, user) => {
			return ['👍', '🖕'].includes(reaction.emoji.name) && user.id != sent.author.id;

		};

		sent.awaitReactions({ filter, max: 1, time: 86400000, errors: ['time'] })
			.then(collected => {
				const reactionx = collected.first();
				if (reactionx.emoji.name === '👍') {
					// sent.delete();
					const dx = member.user.tag;
					const sql = 'SELECT user,isAdmin FROM users WHERE DiscordID=?';
					connection.query(sql, [dx], function(err, result) {
						if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
							if (err) throw err;
							if (result && result.length) {
								const userc = result[0].user;
								const isAdmin = result[0].isAdmin;
								if (isAdmin == 'True') {

									// symbol = "🥷";
								}
								const sql2 = 'SELECT gang_id,isAdmin,isOwner FROM members WHERE user=?';
								connection.query(sql2, [userc], function(err, result2) {
									if (err) throw err;
									if (result2 && result2.length) {
										const gangid = result2[0].gang_id;
										// const isAdming = result[0].isAdmin;
										const isOwner = result2[0].isOwner;
										const sql3 = 'SELECT Gang_Tag,Gang_Name FROM gangs WHERE id=?';
										connection.query(sql3, [gangid], function(err, result3) {
											if (err) throw err;
											if (result3 && result3.length) {
												const gangname = result3[0].Gang_Name;
												const gangtag = result3[0].Gang_Tag;

												if (isOwner == 'True') {
													console.log('true');
													// find new owner
													const sql4 = 'SELECT user FROM members WHERE gang_id=?';
													connection.query(sql4, [gangid], function(err, result4) {
														if (err) throw err;
														if (result4 && result4.length) {
															if (result4.length > 1) {
																const sql5 = 'SELECT user FROM members WHERE gang_id=? AND user <>? AND isAdmin = "True"';
																connection.query(sql5, [gangid, userc], function(err, result5) {
																	if (err) throw err;
																	if (result5 && result5.length) {
																		console.log('admins: ' + result5.length);
																		const newOwner = result5[0].user;
																		console.log('lucky winner ' + newOwner);
																		try {
																			sent.delete();
																			declaredAsAsync2(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, newOwner, inviteTo, inviteFrom);
																		}
																		catch (error) {
																			console.error(error);
																		}

																	}
																	else {
																		// try to grab a regular user
																		const sql6 = 'SELECT user FROM members WHERE gang_id=? AND user <>? AND isAdmin = "False"';
																		connection.query(sql6, [gangid, userc], function(err, result6) {
																			if (err) throw err;
																			if (result6 && result6.length) {
																				console.log('regular users: ' + result6.length);
																				const newOwner = result6[0].user;
																				console.log('lucky winner ' + newOwner);
																				try {
																					sent.delete();
																					declaredAsAsync2(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, newOwner, inviteTo, inviteFrom);
																				}
																				catch (error) {
																					console.error(error);
																				}

																			}
																		});
																	}

																});
																// prompt that you are owner of this gang, a randomly selected member will take over before you leave

															}
															else {
																sent.delete();
																console.log('async3');
																declaredAsAsync3(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, inviteTo, inviteFrom);
																// prompt that you are owner of this gang, there are no members and that your gang will be deleted

																// destroy gang
															}

														}
													});
												}
												else {
													sent.delete();
													console.log('async4');
													declaredAsAsync4(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, inviteTo, inviteFrom);
													// continue leaving gang and joining new gang

												}
											}
										});
									}
									else {
										sent.delete();
										const sql4 = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
										connection.query(sql4, [inviteTo, inviteFrom], function(err) {
											if (err) throw err;
										});
										member.send('```gang invitation accepted```');
										const isAdminx = 'False';
										const isOwnerx = 'False';
										const memberU = [
											[gangid1, userc, isAdminx, isOwnerx],
										];
										const sql5 = 'INSERT INTO members (gang_id, user, isAdmin, isOwner) VALUES ?';
										connection.query(sql5, [memberU], function(err) {
											if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
												if (err) throw err;
												// let crole = list.roles.cache.find(r => r.name === gangname);
												const grole = guild.roles.cache.find(r => r.name === gangname1);
												let symbol = '👤';
												// let mTag = member.user.tag;
												let musername = member.user.username;
												musername = musername.substr(0, 24);
												if (grole) {
													member.roles.add(grole).then(() => {
														symbol = '👥';
														member.setNickname(`${symbol} [${gangtag1}] ${musername}`);
													}).catch(console.error);
												}
											}


										});
										// declaredAsAsync5(member,gangid1,gangname1,gangtag1);
									}
								});
							}
						}
					});
					// check if owner of gang
					// if owner prompt that owner will be given to random user
					// if not owner leave gang delete member
				}
				else if (reactionx.emoji.name === '🖕') {
					sent.delete();
					member.send('```gang invitation declined```');
					const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});
					// delete invitation

				}

			})
			.catch(collected => {
				console.log('its been a day self destructing ' + collected);
				sent.delete();
				member.send('```gang invitation expired```');
				const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
				connection.query(sql, [inviteTo, inviteFrom], function(err) {
					if (err) throw err;
				});
			});

	}

	async function declaredAsAsync2(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, newOwner, inviteTo, inviteFrom) {
		try {
			// const guild = client.guilds.cache.get('850029824273809438');
			const sent_gowner = await member.send('```warning: you are currently owner of 	' + gangname + '```\n```' + newOwner + ' has been selected to take ownership```\n```👍 to leave ' + gangname + ' and join ' + gangname1 + '```\n```🖕 to decline the invitation```');
			await sent_gowner.react('👍');
			await sent_gowner.react('🖕');
			const MAX_REACTIONS = 1;
			const filter = (reaction, user) => ['👍', '🖕'].includes(reaction.emoji.name) && !user.bot;
			const collector = sent_gowner.createReactionCollector({
				filter,
				max: MAX_REACTIONS,
				time: 86400000,
			});

			collector.on('collect', (reaction) => {
				// in case you want to do something when someone reacts with 👍
				if (reaction.emoji.name === '👍') {
					sent_gowner.delete();
					member.send('```gang invitation accepted```');
					const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});


				}
				else if (reaction.emoji.name === '🖕') {
					sent_gowner.delete();
					member.send('```❌gang invitation declined```');
					const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});
				}

			});

			// fires when the time limit or the max is reached
			collector.on('end', (collected, reason) => {
				// reactions are no longer collected
				// if the 👍 emoji is clicked the MAX_REACTIONS times
				if (reason === 'time') {
					sent_gowner.delete();
					return member.send('```❌gang invitation expired```');
				}
				// return member.send(`We've just reached the maximum of ${MAX_REACTIONS} reactions.`);
			});
		}
		catch (error) {
			// "handle" errors
			console.log(error);
		}
	}
	async function declaredAsAsync3(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, inviteTo, inviteFrom) {
		try {
			const guild = client.guilds.cache.get('850029824273809438');
			const sent_gowner = await member.send('```warning: you are currently owner of 	' + gangname + '```\n```you have no members, and gang will be destroyed```\n```👍 to destroy ' + gangname + ' and join ' + gangname1 + '```\n```🖕 to decline the invitation```');
			await sent_gowner.react('👍');
			await sent_gowner.react('🖕');
			const MAX_REACTIONS = 1;
			const filter = (reaction, user) => ['👍', '🖕'].includes(reaction.emoji.name) && !user.bot;
			const collector = sent_gowner.createReactionCollector({
				filter,
				max: MAX_REACTIONS,
				time: 86400000,
			});

			collector.on('collect', (reaction) => {
				// in case you want to do something when someone reacts with 👍
				if (reaction.emoji.name === '👍') {
					sent_gowner.delete();
					member.send('```gang invitation accepted```');
					const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});
					const sql2 = 'DELETE FROM gangs WHERE id=?';
					connection.query(sql2, [gangid], function(err) {
						if (err) throw err;
					});
					const isAdminx = 'False';
					const isOwnerx = 'False';
					const memberU = [
						[gangid1, userc, isAdminx, isOwnerx],
					];
					const sql3 = 'INSERT INTO members (gang_id, user, isAdmin, isOwner) VALUES ?';
					connection.query(sql3, [memberU], function(err) {
						if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
							if (err) throw err;
							// let crole = guild.roles.cache.find(r => r.name === gangname);
							const grole = guild.roles.cache.find(r => r.name === gangname1);
							let symbol = '👤';
							// const mTag = member.user.tag;
							let musername = member.user.username;
							musername = musername.substr(0, 24);
							member.roles.add(grole).then(() => {
								symbol = '👥';
								member.setNickname(`${symbol} [${gangtag1}] ${musername}`);
							}).catch(console.error);
						}


					});
				}
				else if (reaction.emoji.name === '🖕') {
					sent_gowner.delete();
					member.send('```❌gang invitation declined```');
					const sql4 = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql4, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});
				}

			});

			// fires when the time limit or the max is reached
			collector.on('end', (collected, reason) => {
				// reactions are no longer collected
				// if the 👍 emoji is clicked the MAX_REACTIONS times
				if (reason === 'time') {
					sent_gowner.delete();
					return member.send('```❌gang invitation expired```');
				}
				// return member.send(`We've just reached the maximum of ${MAX_REACTIONS} reactions.`);
			});
		}
		catch (error) {
			// "handle" errors
			console.log(error);
		}
	}

	async function declaredAsAsync4(member, userc, gangid, gangname, gangtag, gangid1, gangname1, gangtag1, inviteTo, inviteFrom) {
		try {
			const guild = client.guilds.cache.get('850029824273809438');
			const sent_gowner = await member.send('```warning: you are currently already in ' + gangname + '```\n```if you leave this gang, the gang will be notified!```\n```👍 to betray ' + gangname + ' and join ' + gangname1 + '```\n```🖕 to decline the invitation```');
			await sent_gowner.react('👍');
			await sent_gowner.react('🖕');
			const MAX_REACTIONS = 1;
			const filter = (reaction, user) => ['👍', '🖕'].includes(reaction.emoji.name) && !user.bot;
			const collector = sent_gowner.createReactionCollector({
				filter,
				max: MAX_REACTIONS,
				time: 86400000,
			});

			collector.on('collect', (reaction) => {
				// in case you want to do something when someone reacts with 👍
				if (reaction.emoji.name === '👍') {
					sent_gowner.delete();
					member.send('```gang invitation accepted```');
					const isAdminx = 'False';
					const isOwnerx = 'False';
					const sql = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;

					});
					const sql2 = 'DELETE FROM members WHERE user=?';
					connection.query(sql2, [userc], function(err) {
						if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
							if (err) throw err;
							const memberU = [
								[gangid1, userc, isAdminx, isOwnerx],
							];
							const sql3 = 'INSERT INTO members (gang_id, user, isAdmin, isOwner) VALUES ?';
							connection.query(sql3, [memberU], function(err) {
								if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
									if (err) throw err;
									const crole = guild.roles.cache.find(r => r.name === gangname);
									const grole = guild.roles.cache.find(r => r.name === gangname1);
									let symbol = '👤';
									// const mTag = member.user.tag;
									let musername = member.user.username;
									musername = musername.substr(0, 24);
									member.setNickname(`${symbol} ${musername}`);
									if (!crole) {
										// Role doesn't exist, safe to create
									}
									else {
										// member.roles.remove(crole).then();
										if (!grole) {
											// Role doesn't exist, safe to create
										}
										else {
											member.roles.add(grole).then();
										}
										symbol = '👥';
										member.setNickname(`${symbol} [${gangtag1}] ${musername}`);

									}
								}


							});
						}
					});

				}
				else if (reaction.emoji.name === '🖕') {
					sent_gowner.delete();
					member.send('```❌gang invitation declined```');
					const sql4 = 'DELETE FROM invitations WHERE invite_to=? AND invite_from=?';
					connection.query(sql4, [inviteTo, inviteFrom], function(err) {
						if (err) throw err;
					});
				}

			});

			// fires when the time limit or the max is reached
			collector.on('end', (collected, reason) => {
				// reactions are no longer collected
				// if the 👍 emoji is clicked the MAX_REACTIONS times
				if (reason === 'time') {
					sent_gowner.delete();
					return member.send('```❌gang invitation expired```');
				}
				// return member.send(`We've just reached the maximum of ${MAX_REACTIONS} reactions.`);
			});
		}
		catch (error) {
			// "handle" errors
			console.log(error);
		}
	}
	instance.addTrigger({
		name: 'GANG_MEMBERS_STATUS_UPDATE',
		expression: 'gang_server.members',
		statement: MySQLEvents.STATEMENTS.UPDATE,
		onEvent: async (oldRow) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			// const list = client.guilds.cache.get("850029824273809438");
			const axpart = oldRow.affectedRows;
			console.log(axpart[0].before);
			console.log(axpart[0].after);
		},


	});
	instance.addTrigger({
		name: 'GANG_PART',
		expression: 'gang_server.members',
		statement: MySQLEvents.STATEMENTS.DELETE,
		onEvent: async (oldRow) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			const list = client.guilds.cache.get('850029824273809438');
			const axpart = oldRow.affectedRows;
			console.log(axpart[0]);
			const gangid = axpart[0].before.gang_id;
			const juser = axpart[0].before.user;
			// const jisAdmin = axpart[0].before.isAdmin;
			// const jisOwner = axpart[0].before.isOwner;
			let symbol = '👤';
			const sql = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
			connection.query(sql, [juser], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					const did = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					if (isAdmin == 'True') {
						symbol = '🥷';
					}
					let gangname;
					// let gangtag;
					const sql2 = 'SELECT Gang_Tag,Gang_Name FROM gangs WHERE id=?';
					connection.query(sql2, [gangid], function(err, result2) {
						if (err) throw err;
						if (result2 && result2.length) {
							gangname = result2[0].Gang_Name;
							// gangtag = result2[0].Gang_Tag;
						}
						list.members.fetch().then(members => {
							// Loop through every members
							members.forEach(member => {
								const mTag = member.user.tag;
								let musername = member.user.username;
								musername = musername.substr(0, 24);
								if (mTag == did) {
									if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
										member.setNickname(`${symbol} ${musername}`);
										const xrole = list.roles.cache.find(r => r.name === gangname);
										if (!xrole) {
											console.log('doesnt exist');
										}
										else {
											member.roles.remove(xrole).then(() => {
												console.log('successfully removed');
											}).catch(console.error);
										}
									}
								}
							});
						});
						//
					});
				}
			});
		},
	});
	instance.addTrigger({
		name: 'GANG_CREATED',
		expression: 'gang_server.gangs',
		statement: MySQLEvents.STATEMENTS.INSERT,
		onEvent: async (oldRow, event) => {
			// Here you will get the events for the given expression/statement.
			// This could be an async function.
			// This could be an async function.
			// for (let [key, value] of Object.entries(oldRow)) {
			// console.log(`${key}: ${value}`);
			// }
			const ax2 = oldRow.affectedRows;
			const owner = ax2[0].after.owner;
			const clantag = ax2[0].after.Gang_Tag;
			const gangname = ax2[0].after.Gang_Name;
			let symbol = '🔨';
			const list = client.guilds.cache.get('850029824273809438');
			const underrole = list.roles.cache.find(r => r.id === '968942539900088320');
			const upos = underrole.position;
			console.log('attempting to create gang ' + gangname);
			const zrole = list.roles.cache.find(r => r.name === gangname);
			// let nrole;
			if (!zrole) {
				console.log('attempting to create role');
				list.roles.create({
					name: gangname,
					color: 'Blue',
					position: upos - 1,
					permissions: [],
					hoist: true,
					reason: 'new gang created',
				// }).then(role => {
					// nrole = role;
					// member.roles.add(role).then();
				})
					.catch(console.error);
			}
			else {
				console.log('role already exists');
				// member.roles.add(zrole).then();
				// nrole = zrole;
			}
			const sql = 'SELECT DiscordID,isAdmin FROM users WHERE user=?';
			connection.query(sql, [owner], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					const did = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					list.members.fetch().then(members => {
						// Loop through every members
						members.forEach(member => {
							const mTag = member.user.tag;
							let musername = member.user.username;
							musername = musername.substr(0, 24);
							if (mTag == did) {
								if (isAdmin == 'True') {
									symbol = '🥷';
								}
								if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
									member.setNickname(`${symbol} [${clantag}] ${musername}`);
									// member.roles.add(nrole).then();
								}
							}
						});
					});
				}

			});
			const channel = client.channels.cache.get('995461464724869120');
			const exampleEmbed = new MessageEmbed()
				.setColor('#0099ff')
				.setTitle(ax2[0].after.Gang_Name)
				.setURL('https://tha-row.net')
				.setAuthor({ name: '[' + ax2[0].after.Gang_Tag + ']', iconURL: 'https://tha-row.net/images/pimp_slap_small.png', url: 'https://tha-row.net' })
				.setDescription('*' + ax2[0].after.motto + '*')
				.setThumbnail('https://tha-row.net/images/pimp_slap.png')
				.addFields(
					{ name: 'bio:', value: '```' + ax2[0].after.Gang_Bio + '```' },
				)
				.setImage('https://tha-row.net/images/pimp_slap.png')
				.setTimestamp()
				.setFooter({ text: 'New Gang created!', iconURL: 'https://tha-row.net/images/pimp_slap_small.png' });
			channel.send('[' + ax2[0].after.Gang_Tag + '] ' + ax2[0].after.owner + ' created ' + ax2[0].after.Gang_Name + '.\n*' + ax2[0].after.motto + '*\n```' + ax2[0].after.Gang_Bio + '```');
			console.log(event);
			channel.send({ embeds: [exampleEmbed] });

		},
	});
	instance.on(MySQLEvents.EVENTS.CONNECTION_ERROR, console.error);
	instance.on(MySQLEvents.EVENTS.ZONGJI_ERROR, console.error);
	client.on('messageCreate', function(message) {
		if (message.content == '*verify check') {
			message.member.setNickname(`${message.member.displayName}`)
				.catch(err => console.log(err));
			message.react('⏪');
		}
		const prefix = '!';
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;

		const commandBody = message.content.slice(prefix.length);
		const args = commandBody.split(' ');
		const command = args.shift().toLowerCase();
		if (command === 'signup') {
			// const timeTaken = Date.now() - message.createdTimestamp;
			message.reply('sign up @ https://tha-row.net\ncustomize your profile and attach your gamertag + Discord Name under customization tab\ncreate or join a gang today!');


		}
		if (command == 'c') {
			const list = client.guilds.cache.get('850029824273809438');
			const underrole = list.roles.cache.find(r => r.id === '852914281565388800');
			const upos = underrole.position;
			list.roles.create({
				name: 'fucku',
				color: 'blue',
				position: upos - 1,
				reason: 'we needed a role for Super Cool People',
			})
				.then(console.log('created'))
				.catch(console.error);
			// console.log(upos);
		}
		if (command === 'rand') {
			// const timeTaken = Date.now() - message.createdTimestamp;
			message.reply(getRandomLine());
		}
		if (command == '+') {
			// message.reply(message.author.tag);
			const sql = 'SELECT user,isAdmin FROM users WHERE DiscordID=?';
			connection.query(sql, [message.author.tag], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					// const uid = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					if (isAdmin == 'True') {
						const list = client.guilds.cache.get('850029824273809438');
						const zrole = list.roles.cache.find(r => r.id === '985671533638844436');
						message.guild.members.cache.get(message.author.id).roles.add(zrole).then(() => {
							// symbol = '👥';
						//	message.author.setNickname(`${symbol} [${gangtag1}] ${musername}`);
						}).catch(console.error);
					//	message.reply('you are an administator of saintsrow.net ' + message.author.username);
					}
					else { message.reply('You are not an an administrator of saintsrow.net'); }
				}
				else {
					message.reply('you do not have access to this command function');
				}
			});
		}
		if (command == '-') {
			// message.reply(message.author.tag);
			const sql = 'SELECT user,isAdmin FROM users WHERE DiscordID=?';
			connection.query(sql, [message.author.tag], function(err, result) {

				if (err) throw err;
				if (result && result.length) {
					// const uid = result[0].DiscordID;
					const isAdmin = result[0].isAdmin;
					if (isAdmin == 'True') {
						const list = client.guilds.cache.get('850029824273809438');
						const zrole = list.roles.cache.find(r => r.id === '985671533638844436');
						message.guild.members.cache.get(message.author.id).roles.remove(zrole).then(() => {
							// symbol = '👥';
						//	message.author.setNickname(`${symbol} [${gangtag1}] ${musername}`);
						}).catch(console.error);
					//	message.reply('you are an administator of saintsrow.net ' + message.author.username);
					}
					else { message.reply('You are not an an administrator of saintsrow.net'); }
				}
				else {
					message.reply('you do not have access to this command function');
				}
			});
		}
	});


	client.once('ready', c => {
		const CLIENT_ID = client.user.id;

		const rest = new REST({
			version: '10',
		}).setToken(process.env.CLIENT_TOKEN);
		(async () => {
			try {
				if (process.env.ENV === 'production') {
					await rest.put(Routes.applicationCommand(CLIENT_ID), {
						body: commands,
					});
					console.log('Successfully registered commands globally.');
				}
				else {
					await rest.put(Routes.applicationGuildCommands(CLIENT_ID, process.env.GUILD_ID), {
						body: commands,
					});
					console.log('Successfully registered commands locally.');
				}
			}
			catch (err) {
				console.error(err);
			}
		})();
		// const clientTag = c.user.tag;
		console.log(`Ready! Logged in as ${c.user.tag}`);
		const channel = client.channels.cache.get('995461464724869120');
		channel.send('Connection successful.');
		// Get the Guild and store it under the variable "list"
		const list = client.guilds.cache.get('850029824273809438');


		// Fetch and get the list named 'members'
		list.members.fetch().then(members => {
			// Loop through every members
			members.forEach(member => {
				const mTag = member.user.tag;
				let musername = member.user.username;
				musername = musername.substr(0, 24);
				if (member.kickable) {
				if (member.roles.cache.some(role => role.name === 'Inactive')) {
					if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1014378810562596915') && !member.roles.cache.has('1019449782655262810') && !member.roles.cache.has('1000099544710774896')) {
					 member.kick({
							reason: 'saintsrow.net',
					 });
					}
				}
				if (member.roles.cache.some(role => role.name === 'Member')) {
					if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1014378810562596915') && !member.roles.cache.has('1019449782655262810') && !member.roles.cache.has('1000099544710774896')) {
						member.kick({
							   reason: 'saintsrow.net',
						});
					   }
					//   console.log("member");
				}
				console.log(member.user.id);
			}
				else {
					// console.log("Not A member");
				}
				let symbol = '👓';
				const sql = 'SELECT user,isAdmin,gender FROM users WHERE DiscordID=?';
				connection.query(sql, [mTag], function(err, result) {
					if (!member.roles.cache.has('968942766287638608') && !member.roles.cache.has('1000099544710774896')) {
						if (err) throw err;
						if (result && result.length) {
							const user = result[0].user;
							const isAdmin = result[0].isAdmin;
							const gender = result[0].gender;
							if (isAdmin == 'True') {
								symbol = '🥷';
							}
							const sql2 = 'SELECT gang_id,isAdmin,isOwner FROM members WHERE user=?';
							connection.query(sql2, [user], function(err, result2) {
								if (err) throw err;
								if (result2 && result2.length) {
									const gangid = result2[0].gang_id;
									const isAdming = result2[0].isAdmin;
									const isOwner = result2[0].isOwner;
									const sql3 = 'SELECT Gang_Tag,Gang_Name FROM gangs WHERE id=?';
									connection.query(sql3, [gangid], function(err, result3) {
										if (err) throw err;
										if (result3 && result3.length) {
											// const gangname = result3[0].Gang_Name;
											const gangtag = result3[0].Gang_Tag;
											if (isAdming == 'True' || isOwner == 'True') {
												if (isAdmin == 'False') {
													symbol = '🔨';
													// console.log(mTag);
												}
												member.setNickname(`${symbol} [${gangtag}] ${musername}`);
											}
											else {
												if (isAdmin == 'False') {
													symbol = '👥';
													if (gender == 'Male') {
														//   symbol = "🧑‍";
													}
													else if (gender == 'Female') {
														// symbol = "💁‍";
													}
												}
												console.log(`${symbol} [${gangtag}] ${musername}`);
												member.setNickname(`${symbol} [${gangtag}] ${musername}`);
											}
										}
									});
								}
								else {
									if (isAdmin == 'False') {
										symbol = '👤';
										if (gender == 'Male') {
											symbol = '️🧑';
										}
										if (gender == 'Female') {
											symbol = '💁‍';
										}
									}
									member.setNickname(`${symbol} ${musername}`);
								}
							});
							//

						}
						else {
							// member.setNickname(`${symbol} ${musername}`);
						}
					}
				});

				// Do whatever you want with the current member
			});
		});
	});
	// eslint-disable-next-line no-empty-function
	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;
		const command = client.commands.get(interaction.commandName);
		if (!command) return;
		try {
			await command.execute(interaction);
		}
		catch (err) {
			if (err) console.error(err);
			await interaction.reply({
				content: 'An error occured while executing that command',
				ephemeral: false,

			});
		}
	});
};
program()
	.then(() => {
		console.log('Waiting for database events...');
	},
	)
	.catch(console.error);


function getRandomLine() {
	return data[randomInt(0, data.length)].split('=')[1].split('\\n')[0];
}
function randomInt(low, high) {
	return Math.floor(Math.random() * (high - low) + low);
}
