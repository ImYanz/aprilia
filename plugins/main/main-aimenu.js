let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Animanga Menu* 』
┃ ⬡ .amv
┃ ⬡ .animeinfo
┃ ⬡ .charainfo
┃ ⬡ .doujinsearch
┃ ⬡ .doujindetail
┃ ⬡ .doujinlatest
┃ ⬡ .komikusearch
┃ ⬡ .komikudetail
┃ ⬡ .komikulatest
┃ ⬡ .mangainfo
┃ ⬡ .mangatoons
┃ ⬡ .nhentaisearch
┃ ⬡ .nhentaidetail
┃ ⬡ .otakusearch
┃ ⬡ .otakudetail
┃ ⬡ .doujinlatest
┃ ⬡ .ppcp
┃ ⬡ .storyanime
┃ ⬡ .whatanime
┃ ⬡ .jadianime
┃ ⬡ .gangbang
┃ ⬡ .hinata
┃ ⬡ .masturbation
┃ ⬡ .orgy
┃ ⬡ .wallpaperq <query>
╚━━━━━━━━━━━━✧

 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.customPrefix = /^(.?animemenu)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler