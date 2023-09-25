let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┃ ⬡ .nekopoi
┃ ⬡ .asupan
┃ ⬡ .blackpink
┃ ⬡ .bocil
┃ ⬡ .bts
┃ ⬡ .china
┃ ⬡ .cosplay
┃ ⬡ .geayubi
┃ ⬡ .gensin
┃ ⬡ .hentai
┃ ⬡ .indonesia
┃ ⬡ .japan
┃ ⬡ .korea
┃ ⬡ .malaysia
┃ ⬡ .thailand
┃ ⬡ .vietnam
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.customPrefix = /^(.?random|randommenu)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler