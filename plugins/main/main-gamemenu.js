let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Game Menu* 』
┃ ⬡ .caklontong
┃ ⬡ .family100
┃ ⬡ .iqtest
┃ ⬡ .math
┃ ⬡ .siapakahaku
┃ ⬡ .suit
┃ ⬡ .susunkata
┃ ⬡ .tebakanime
┃ ⬡ .tebakbendera
┃ ⬡ .tebakchara
┃ ⬡ .tebaksurah
┃ ⬡ .tekateki
┃ ⬡ .tebakkata
┃ ⬡ .tictactoe
┃ ⬡ .ttt
┃ ⬡ .fightkucing
┃ ⬡ .hunter
┃ ⬡ .attack
┃ ⬡ .atk
┃ ⬡ .war
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.customPrefix = /^(.?gamemenu|menugame)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler