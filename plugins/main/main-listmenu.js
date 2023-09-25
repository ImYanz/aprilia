let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
👋🏻ʜᴀɪ ᴋᴀᴋ!!!

sᴀʏᴀ ᴀᴅᴀʟᴀʜ ${yanz}  (ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ) ʏᴀɴɢ ᴅɪᴘʀᴏɢʀᴀᴍ ᴏʟᴇʜ ${yan} ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴍᴇʟᴀᴋᴜᴋᴀɴ sᴇsᴜᴀᴛᴜ, ᴍᴇɴᴄᴀʀɪ ᴅᴀɴ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ᴅᴀᴛᴀ / ɪɴғᴏʀᴍᴀsɪ ʜᴀɴʏᴀ ᴍᴇʟᴀʟᴜɪ ᴡʜᴀᴛsᴀᴘᴘ.

ᴊɪᴋᴀ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴇʀʀᴏʀ ᴀᴛᴀᴜ ɪɴɢɪɴ ᴍᴇɴᴊᴀᴅɪ ᴘᴇɴɢɢᴜɴᴀ ᴘʀᴇᴍɪᴜᴍ/ᴠɪᴘ
ʙɪsᴀ ᴄʜᴀᴛ ᴏᴡɴᴇʀ ʙᴏᴛ.\n\n┏━───═[ *MENU AWAL* ]\n┃ *言 allmenu*\n┃ *言 mainmenu*\n┃ *言 aimenu*\n┃ *言 groupmenu*\n┃ *言 gamemenu*\n┃ *言 rpgmenu*\n┃ *言 stikermenu*\n┃ *言 makermenu*\n┃ *言 animemenu*\n┃ *言 nsfwmenu*\n┃ *言 internet*\n┃ *言 downloadmenu*\n┃ *言 toolsmenu*\n┃ *言 islamic*\n┃ *言 quotesmenu*\n┃ *言 random*\n┃ *言 ownermenu*\n┗━━━━━━━━━═┅═━━━━━━━━\n\n_${yanz}_
`
conn.reply(m.chat, sewa, m)
let aa = conn.sendFile(m.chat, `errmenu.mp3`, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: `errmenu.mp3`}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
}
handler.help = ['islamic']
handler.tags = ['main']
handler.customPrefix = /^(.?menu|help|bot|hai|p|yan)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler