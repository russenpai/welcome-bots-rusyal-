const Discord = require('discord.js');
//Rusyalı Tarafından Kodlanmıştır.
const tokens = [
    "ilk Botun Tokenini buraya girin"
];
const kanallar = [
    "ilk botun giriceği ses kanalını buraya girin"
];
const welcome = [];
client.ayar = {
  "readyFooter": ["Rusyalı 💜 Aurelion", "Rusyalı 💜 Rusyalı", "Aurelion 💜 Rusyalı", "Rusyalı Welcome Bots", "Rusyali Was Here ?"]
}
try {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  
   client.user.setStatus("online");
    setInterval(() => {
        const oynuyor = client.ayar.readyFooter;
        const index = Math.floor(Math.random() * (oynuyor.length));
        client.user.setActivity(`${oynuyor[index]}`, {type: "WATCHING"});
      }, 10000);
  
  } catch (err) { }

for (let index = 0; index < tokens.length; index++) {
    const token = tokens[index];
    const client = new Discord.Client();
    client.login(token);
    let RSYL;
    let rusyalı;
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.user.bot) return;
        if (cur.channel && (cur.channel.id === kanallar[index])) {
            if (cur.channelID === prev.channelID) return;
            if (welcome.includes(cur.member.id) && (cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("İD").rawPosition)) {//Rol id Girin
              
                rusyalı = await RSYL.play('./rusyalıtekrardan.mp3');
                return;
            }
            if ((cur.member.roles.highest.rawPosition < cur.guild.roles.cache.get("İD").rawPosition)) { //Rol id Girin
                rusyalı = await RSYL.play('./hoşgeldin2.mp3');
                welcome.push(cur.member.user.id);
            } else if (cur.member.roles.highest.rawPosition > cur.guild.roles.cache.get('İD').rawPosition) {//Rol id Girin
                rusyalı = await RSYL.play('./yetkili2.mp3');
                welcome.push(cur.member.user.id);
            }
        }
        if (prev.channel && (prev.channel.id === kanallar[index]) && (prev.channel.members.size === 1) && rusyalı) rusyalı.end();
    });
    client.on('guildMemberUpdate', async (prev, cur) => {
        if (RSYL.channel.members.some(biri => biri.user.id === cur.user.id)) {
            if ((prev.roles.highest.rawPosition < cur.roles.highest.rawPosition)) {
                rusyalı = await RSYL.play('./rusyalıelveda.mp3');
            }
        } else return;
    });
    client.on('voiceStateUpdate', async (prev, cur) => {
        if (cur.member.id === client.user.id) RSYL = await client.channels.cache.get(kanallar[index]).join();
    })
}
