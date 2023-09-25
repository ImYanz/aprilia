const handler = async (m, { conn }) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return { ...value, jid: key };
  });

  const { money, exp, role } = global.db.data.users[m.sender];
  const formattedExp = exp.toLocaleString(); 
  const formattedMoney = money.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
  const sortedMoney = users.slice().sort(sort('money'));
  const usersMoney = sortedMoney.map(enumGetKey);

  const len = Math.min(10, sortedMoney.length);

  const texto = `
  乂  *G L O B A L - R A N K*
  
  "Anda berada di peringkat *${usersMoney.indexOf(m.sender) + 1}* dari *${usersMoney.length}* pengguna."

  ${sortedMoney.slice(0, len).map(({ jid, money: userMoney, exp: userExp, role }, i) => `
  ${i + 1}. @${jid.split`@`[0]}
      *💵 Uang :  ${userMoney.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}*
      *⚡ Exp  :  ${userExp.toLocaleString()}*
      *⚔️ Peran  :  ${role}*
  `).join('\n')}
  `.trim();

  conn.sendMessage(m.chat, { text: texto, mentions: conn.parseMention(texto) }, { quoted: m })
};

handler.tags = ['xp'];
handler.customPrefix = /^(.?rank|lb)$/i
handler.command = new RegExp
handler.register = true
handler.limit = false
handler.exp = 10
export default handler;

function sort(property, ascending = true) {
  return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
}

function enumGetKey(a) {
  return a.jid;
}
