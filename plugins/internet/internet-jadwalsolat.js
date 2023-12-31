import { jadwalsholat } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} semarang`
    const res = await jadwalsholat(text)
    m.reply(`
Hai Kak Berikut
Jadwal Sholat *${text}*

*Jangan Lupa Sholat Yak😁.*

${Object.entries(res.today).map(([name, data]) => `*Sholat ${name}:* ${data}`).join('\n').trim()}
`.trim())
}
handler.help = ['salat <daerah>']
handler.tags = ['islamic']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

export default handler
