import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let vn = "sepuh.mp3"
	let aa = conn.sendFile(m.chat, vn, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
let stiker = await sticker(null, `https://telegra.ph/file/1466c1926e595905f6b92.jpg`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(mastah|sepuh|sesepuh)$/i;
handler.command = new RegExp();

export default handler