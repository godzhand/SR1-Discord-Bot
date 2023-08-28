async function EnterCarSync(ENTERCAREMBED, channel) {
    let sent;
    try {
        sent = await channel.send({ embeds: [ENTERCAREMBED] }).catch(error => {
            console.error(error + ' could not send');
        });
        await sent.react(':police:');
    }
    catch (error) {
        console.log(error + ' could not send message to channel');
    }
    const filter = (reaction, user) => {
        return [':police:'].includes(reaction.emoji.name) && user.id != sent.author.id;

    };
    if (typeof sent !== 'undefined') {
        sent.awaitReactions({ filter, max: 1, time: 8000, errors: ['time'] })
            .then(collected => {
                const reactionx = collected.first();
                if (reactionx.emoji.name === ':police:') {
                    sent.delete();
                }
            });
    }
}