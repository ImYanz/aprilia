import fetch from 'node-fetch';

var handler = async (m, { conn, text }) => {
  if (!text) throw `*_Masukin Nama Mahasiswa Yang mau lu Cari Bro !_*`;
  conn.reply(m.chat, '*Bentar Bro Gua Cariin Dulu 😁*', m);
  let res = await fetch('https://api-frontend.kemdikbud.go.id/hit_mhs/' + text);
  if (!res.ok) throw '*Waduh Mon Maaf Ni Bro Tapi Gua Ga Nemu Orang Yang Lu Cari😅*';
  let json = await res.json();
  let message = '';

  json.mahasiswa.forEach(data => {
    let nama = data.text;
    let websiteLink = data['website-link'];
    let website = `https://pddikti.kemdikbud.go.id${websiteLink}`;
    message += `\nNama = ${nama}\n\nGua Nemu Orangnya Dari Website Ini Bro = ${website}\n\n\n`;
  });
  
  conn.reply(m.chat, message, m);
  }

handler.help = ['mahasiswa']
handler.tags = ['internet']
handler.command = /^(mahasiswa)$/i
handler.limit = true

export default handler
  