let handler = async (m, { conn }) => {
let fotonya = ''
let sewa = `
╔━━━『 *AI Menu* 』
┃ ⬡ .beauty
┃ ⬡ .tocartoon
┃ ⬡ .dalle
┃ ⬡ .gpt
┃ ⬡ .hairstyle
┃ ⬡ .openai
┃ ⬡ .ocr
┃ ⬡ .pixardif
┃ ⬡ .remini
┃ ⬡ .color
┃ ⬡ .hdr
┃ ⬡ .toanime
┃ ⬡ .txt2img
┃ ⬡ .blur
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.customPrefix = /^(.?aimenu)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler