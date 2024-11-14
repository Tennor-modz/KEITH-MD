const middleware = require('../../utility/botUtil/middleware');

module.exports = async (context) => {
    await middleware(context, async () => {
        const { client, m } = context;

        await client.clearChat(m.chat.jid);
        m.reply('cleared.');
    });
};