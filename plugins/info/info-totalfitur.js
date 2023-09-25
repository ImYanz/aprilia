import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
let fitur = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await m.reply(`Fitur Yang Di Miliki *${yanz}* Saat Ini\nTotal : *${fitur.length}* Fitur\n\nPeople :\n\t\tFitur Doang Banyak Tapi Sering Error\n\nOwner :\n\t\tDikasi Gratis Banyak Bacot Lu Bang`)
}
handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = ['totalfitur']
export default handler
