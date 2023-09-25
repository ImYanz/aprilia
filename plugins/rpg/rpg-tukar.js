const xppermoney = 2;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^tukar/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppermoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xppermoney * count) {
    global.db.data.users[m.sender].exp -= xppermoney * count;
    global.db.data.users[m.sender].money += count;
    conn.reply(m.chat, `
┌─「 *NOTE 📝* 」
‣ *Jumlah* : + ${count}💵 
‣ *Harga* : -${xppermoney * count} XP
└──────────────`, m);
  } else conn.reply(m.chat, `Exp kamu tidak cukup untuk menukarkan *${count}* menjadi money💵`, m);
};
handler.help = ['tukar', 'tukarall'];
handler.tags = ['xp'];
handler.command = ['tukar', 'tukarall'];

handler.disabled = false;

export default handler;
