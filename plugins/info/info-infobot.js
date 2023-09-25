import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(850);
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╔═〘 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 〙═══════
║
╠➥ [👨‍🦯] Speed: 
╠  *${speed} ms* 
╠══════════════════════${readMore}
╠➥ [🤴🏻] Creator: *Yanz*
╠➥ [#️⃣] Number: *+6281239303460*
╠➥ [🎳] Prefix: *${usedPrefix}*
╠➥ [🔐] Chat Privat: *${chats.length - groups.length}*
╠➥ [🦜] Chat Group: *${groups.length}* 
╠➥ [💡] Total Chat: *${chats.length}* 
╠➥ [🚀] Active Darling: *${uptime}*
╠➥ [🎩] Total User: *${totalreg} User*
╠➥ [☑️] Auto Read: ${autoread ? "*On*" : "*Off*"}
╠➥ [❗] Restrict: ${restrict ? "*On*" : "*Off*"} 
╠➥ [💬] PcOnly: ${pconly ? "*On*" : "*Off*"}
╠➥ [🏢] GcOnly: ${gconly ? "*On*" : "*Off*"}
╠➥ [🌎] Mode: ${self ? "*Self*" : "*Public*"}
╠➥ [💬] Antipc: ${antiprivado ? "*On*" : "*Off*"}
╠➥ [🤖] Mode Jadi Bot: ${modejadibot ? "*On*" : "*Off*"}
╠➥ [📵] Anti Call: ${antiCall ? "*On*" : "*Off*"}
║
╚═〘 ${yanz} 〙 ═
`.trim();
  m.reply(info)
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.customPrefix = /^(.?infobot)$/i
handler.command = new RegExp
handler.register = true
handler.limit = true
handler.exp = 100;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
