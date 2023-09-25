import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN ANIME A BUSCAR*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'id', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'id', autoCorrect: true});
    const AnimeInfo = `
🎀 • *Judul:* ${result.title}
🎋 • *Format:* ${result.type}
📈 • *Status:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
🍥 • *Jumplah Eps:* ${result.episodes}
🎈 • *Durasi: ${result.duration}*
✨ • *Berdasarkan:* ${result.source.toUpperCase()}
💫 • *Dirilis:* ${result.aired.from}
🎗 • *Tamat:* ${result.aired.to}
🎐 • *Popularitas:* ${result.popularity}
🎏 • *Favorit:* ${result.favorites}
🎇 • *Ranking:* ${result.rating}
🏅 • *Rank:* ${result.rank}
♦ • *Trailer:* ${result.trailer.url}
🌐 • *URL:* ${result.url}
🎆 • *Background:* ${resultes.text}
❄ • *Ringkasan:* ${resultes2.text}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERROR, INTENTELO DE NUEVO*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
