let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Islamic Menu* 』
┃ ⬡ .asmaulhusna
┃ ⬡ .ayatkursi
┃ ⬡ .salat <daerah>
┃ ⬡ .niatsholat
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.customPrefix = /^(.?islamic)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler