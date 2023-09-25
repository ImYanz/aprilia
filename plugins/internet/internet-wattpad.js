import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  try {
    // Memeriksa apakah pengguna memberikan kata kunci
    if (!text) {
      throw 'Mau Cari Apa?';
    }

    // Mengirim permintaan ke API Wattpad
    let res = await fetch(`https://api.xyroinee.xyz/api/search/wattpad?q=${text}&apikey=itlawQwzP4`);
    let anu = await res.json();

    // Memeriksa apakah data yang diterima valid
    if (!anu || !Array.isArray(anu.data) || anu.data.length === 0) {
      throw 'Tidak ada hasil ditemukan';
    }

    // Mengambil informasi pertama dari hasil pencarian
    let firstResult = anu.data[0];
    let foto = firstResult.thumb;

    // Mengonversi data menjadi format pesan
    let message = `*Title:* ${firstResult.title}\n*Reads:* ${firstResult.reads}\n*Vote:* ${firstResult.vote}\n*Chapter:* ${firstResult.chapter}\n*Link:* ${firstResult.link}\n*Description:* ${firstResult.desc}`;

    // Mengirim pesan dengan foto dan informasi
    conn.sendFile(m.chat, foto, '', message, m);
  } catch (error) {
    // Menangani kesalahan dan memberi tahu pengguna
    conn.reply(m.chat, 'error', m);
  }
};

handler.help = ['wattpad'];
handler.tags = ['internet'];
handler.command = /^(wattpad)$/i;
handler.limit = true;

export default handler;
