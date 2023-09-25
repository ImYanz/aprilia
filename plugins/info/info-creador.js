const handler = async (m, {conn, usedPrefix}) => {
let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.reply(m.chat, `This is my owner's contact, please do not send spam messages.`);
         await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), false, { quoted: m })

    
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.customPrefix = /^(.?owner|creator)$/i
handler.command = new RegExp
export default handler;
