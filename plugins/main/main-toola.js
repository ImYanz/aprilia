let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Tools Menu* 』
┃ ⬡ .monitor
┃ ⬡ .smeme
┃ ⬡ .call <nomer>
┃ ⬡ .halah <teks>
┃ ⬡ .hilih <teks>
┃ ⬡ .huluh <teks>
┃ ⬡ .heleh <teks>
┃ ⬡ .holoh <teks>
┃ ⬡ .modapk
┃ ⬡ .addvn
┃ ⬡ .addmsg
┃ ⬡ .addvideo
┃ ⬡ .addaudio
┃ ⬡ .addimg
┃ ⬡ .addstiker
┃ ⬡ .addgif
┃ ⬡ .delmsg
┃ ⬡ .all
┃ ⬡ .listdoc
┃ ⬡ .listvn
┃ ⬡ .listmsg
┃ ⬡ .listvideo
┃ ⬡ .listgif
┃ ⬡ .listaudio
┃ ⬡ .listimg
┃ ⬡ .liststicker
┃ ⬡ .qr
┃ ⬡ .qrcode
┃ ⬡ .react
┃ ⬡ .readmore
┃ ⬡ .spoiler
┃ ⬡ .readviewonce
┃ ⬡ .spamwa <number>|<mesage>|<no of messages>
┃ ⬡ .wastalk
┃ ⬡ .style
┃ ⬡ .tomp3
┃ ⬡ .tovn
┃ ⬡ .upload
┃ ⬡ .translate
┃ ⬡ .tts
┃ ⬡ .run
┃ ⬡ .zodiac *2001 11 15*
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['toolsmenu']
handler.tags = ['main']
handler.customPrefix = /^(.?toolsmenu)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler