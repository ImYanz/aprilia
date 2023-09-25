const moment = require('moment-timezone');
let isSendingEnabled = true;
const groupsWithAutoAdzan = [];

// Fungsi untuk mengirim pesan pada waktu tertentu
function sendMessageAtScheduledTime(hour, minute, message, groupJid) {
    const targetTime = moment.tz({hour, minute}, 'Asia/Makassar');

    setInterval(() => {
        const now = moment().tz('Asia/Makassar');
        if (isSendingEnabled && now.format('HH:mm') === targetTime.format('HH:mm')) {
            conn.sendMessage(groupJid, message, MessageType.text);
        }
    }, 60 * 1000); // Periksa setiap menit apakah waktu cocok
}

// Fungsi untuk mengaktifkan atau menonaktifkan autoadzan di grup
function toggleAutoAdzan(groupId, isEnabled) {
    if (isEnabled && !groupsWithAutoAdzan.includes(groupId)) {
        groupsWithAutoAdzan.push(groupId);
    } else if (!isEnabled && groupsWithAutoAdzan.includes(groupId)) {
        groupsWithAutoAdzan = groupsWithAutoAdzan.filter(group => group !== groupId);
    }
}

// Fungsi untuk mengaktifkan atau menonaktifkan pengiriman pesan
function toggleSendingStatus(isEnabled) {
    isSendingEnabled = isEnabled;
    return `Sending is now ${isSendingEnabled ? 'enabled' : 'disabled'}.`;
}

// Contoh penggunaan dari pesan WhatsApp
export default {
    commands: ['toggleSending'],
    run: (m) => {
        const isEnabled = m.text.includes('on');
        const groupId = m.chat;

        toggleAutoAdzan(groupId, isEnabled);

        const statusMessage = toggleSendingStatus(isEnabled);

        conn.reply(m.chat, statusMessage, m);
    }
};

// Jadwal pengiriman pesan
const tasks = [
    { hour: 4, minute: 37, message: 'Jadwal Adzan untuk hari ini di Makassar (Asia/Makassar):\n' },
    { hour: 11, minute: 57, message: 'Jadwal Adzan untuk hari ini di Makassar (Asia/Makassar):\n' },
    { hour: 15, minute: 7, message: 'Jadwal Adzan untuk hari ini di Makassar (Asia/Makassar):\n' },
    { hour: 18, minute: 0, message: 'Jadwal Adzan untuk hari ini di Makassar (Asia/Makassar):\n' },
    { hour: 19, minute: 9, message: 'Jadwal Adzan untuk hari ini di Makassar (Asia/Makassar):\n' }
];

groupsWithAutoAdzan.forEach(group => {
    tasks.forEach(task => {
        sendMessageAtScheduledTime(task.hour, task.minute, task.message, group);
    });
});
