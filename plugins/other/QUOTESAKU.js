const moment = require('moment');

let handler = async (m, { conn, command, text }) => {
    let today = moment().format('dddd');
    // Di sini, Anda dapat menambahkan logika untuk mendapatkan jadwal pelajaran berdasarkan hari 'today'.
    let jadwal = getJadwalByDay(today);

    if (jadwal) {
        conn.sendMessage(m.chat, jadwal, MessageType.text);
    } else {
        conn.sendMessage(m.chat, "Maaf, jadwal untuk hari ini tidak tersedia.", MessageType.text);
    }
}

// Fungsi untuk mendapatkan jadwal berdasarkan hari.
function getJadwalByDay(day) {
    switch (day.toLowerCase()) {
        case 'senin':
            return "Jadwal Senin: \n1. PAI\n2. PPKN\n3. B. INDONESIA";
        case 'selasa':
            return "Jadwal Selasa: \n1. MTK\n2. S.INDONESIA\n3. B. INGGRIS\n4. SENI BUDAYA";
        case 'rabu':
            return "Jadwal Rabu: \n1. MUATAN LOKAL\n2. PENJAS\n3. IPA TERAPAN\n4. KOMUNIKASI INDUSTRI PARIWISATA";
        case 'kamis':
            return "Libur🤭";
        case 'jumat':
            return "Jadwal Jumat: \n1. KEPARIWISATAAN\n2. SIMULASI KOMUNIKASI DIGITAL\n3. SANITASI H&K";
        case 'sabtu':
            return "Jadwal Sabtu: \n1. ADMINISTRASI UMUM\n2. BAHASA ASING PILIHAN (B. ARAB)";
        default:
            return null;
    }
}

handler.help = ['jadwal'];
handler.tags = ['jadwal'];
handler.customPrefix = /^(.?jadwal)$/i;
handler.command = new RegExp;

export default handler;
