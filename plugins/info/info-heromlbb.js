import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukin Nama Heronya Bro😁`
  m.reply('*Benar bro Gua Cariin Dulu😁*')
  try {
  let res = await fetch(`https://api.xyroinee.xyz/api/others/heroml?q=${text}&apikey=itlawQwzP4`)
  let anu = await res.json()
  let hero = anu.data
  let ini = anu.data.gameplay_info
  let story = anu.data.story_info_list
  let teks = `*Nama MLBB:* ${text}\n*Nama Asli:* ${story.Alias}\n*Asal:* ${story.Origin}\n*Species:* ${story.Species}\n*Kelamin:* ${story.Gender}\n*Afiliasi:* ${story.Affiliation}\n*Senjata:* ${story.Weapons}\n*Abilities:* ${story.Abilities}\n*Height:* ${story.Height}\n`
  
  let kntl = `\n*Realese:* ${hero.release}\n*Role:* ${hero.role}\n*Specialty:* ${hero.specialty}\n*Lane:* ${hero.lane}\n*Price:* ${hero.price}\n\n*Durability:* ${ini.durability}\n*Offense:* ${ini.offense}\n*Control:* ${ini.control_effect}\n*Difficulty:* ${ini.difficulty}\n\n`
  
  anu = anu.data.attributes.map((v) => `*Attributes:* ${v.attribute}\n*Level:* ${v.level_1}\n*Growth:* ${v.growth}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  
  conn.sendMessage(m.chat, {
  text: teks + kntl + anu,
  contextInfo: {
    externalAdReply: {
      showAdAttribution: true,
      title: `${yanz}`,
      body: text,
      thumbnailUrl: hero.hero_img,
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
    }
  }
});
  } catch (e) {
  m.reply(`Waduh, Sorry Bro Gua Ga Nemu Hero Yang Lu Cari😅`)
  }
}
handler.help = ['heroml']
handler.tags = ['internet']
handler.command = /^(heroml)$/i
handler.limit = true

export default handler