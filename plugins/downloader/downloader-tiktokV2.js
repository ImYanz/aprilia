import fetch from 'node-fetch'
import api from 'api-dylux'
let handler = async (m, { conn, args, text, usedPrefix, command }) => { 
 if (args[0]) throw `🚩 *Example:* ${usedPrefix+command} https://vt.tiktok.com/ZS8TQkpTK/`

let f = await api.tiktok(command)
await conn.sendMessage(m.chat, { react: { text: "🕘",key: m.key,}
  })  
  //await m.reply('Tunggu Sebentar...')
 let cap = `* TIKTOK*
 
 
*Nickname :* ${f.nickname}
*Duration :* ${f.duration}
*Description :* ${f.description}`
conn.sendFile(m.chat, f.play, 'ttmp4', cap, m)
}
//handler.help = ['tiktok', 'tt'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.customPrefix = /^(https:\/\/(?:www\.)?tiktok\.com\/[@\w-]+\/video\/[\w-]+|https:\/\/vt.tiktok\.com\/[\w-]+)\/?$/i
handler.command = new RegExp
handler.register = true
handler.exp = 10
handler.limit = true
export default handler