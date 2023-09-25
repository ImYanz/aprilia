let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Quotes Menu* 』
┃ ⬡ .bacot
┃ ⬡ .bucin
┃ ⬡ .dare
┃ ⬡ .galau
┃ ⬡ .gombal
┃ ⬡ .programer
┃ ⬡ .q-islam
┃ ⬡ .quotes
┃ ⬡ .katabijak
┃ ⬡ .motivasi
┃ ⬡ .pantun
┃ ⬡ .senja
┃ ⬡ .truth
┃ ⬡ .videoquotes
┃ ⬡ .videogalau
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['quotesmenu']
handler.tags = ['main']
handler.customPrefix = /^(.?quotesmenu)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler