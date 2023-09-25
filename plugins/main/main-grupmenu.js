let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/0ca381849e95396ae0481.jpg'
let sewa = `
╔━━━『 *Group Menu* 』
┃ ⬡ .enable
┃ ⬡ .disable
┃ ⬡ .absen
┃ ⬡ .add
┃ ⬡ .+
┃ ⬡ .cekid
┃ ⬡ .ceksewa
┃ ⬡ .delete
┃ ⬡ .demote
┃ ⬡ .hidetag
┃ ⬡ .infogrup
┃ ⬡ .linkgc
┃ ⬡ .promote
┃ ⬡ .setbye
┃ ⬡ .setdesc
┃ ⬡ .sdesc
┃ ⬡ .setnamagc
┃ ⬡ .setppgc
┃ ⬡ .group
┃ ⬡ .setwelcome
┃ ⬡ .gcsider
┃ ⬡ .tagadmin
┃ ⬡ .tagall
┃ ⬡ .tagme
┃ ⬡ .cekpacar
┃ ⬡ .ikhlasin
┃ ⬡ .tembak
┃ ⬡ .putus
┃ ⬡ .terima
┃ ⬡ .tolak
┃ ⬡ .odemote
┃ ⬡ .kick
┃ ⬡ .-
┃ ⬡ .getprofile
╚━━━━━━━━━━━━✧
 _${yanz}_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['groupmenu']
handler.tags = ['main']
handler.customPrefix = /^(.?groupmenu|menugroup|grupmenu|menugrup)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10

export default handler