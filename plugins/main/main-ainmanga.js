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

 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ainmanga']
handler.tags = ['main']
handler.command = /^(ainmanga)$/i

export default handler