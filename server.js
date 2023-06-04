//AŞAGİYA ELLEME! 
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
require('http').createServer(function (req, res) {res.write('');res.end();}).listen(8080);

const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "TOKENİNİ BURAYA YAZ",
    prefix: "PREFİXİN",
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./komutlar/") //you can change this to any directory you want
//Ping Komutu Elleme!
bot.command({
name: "ping",
code: `
$title[1;$userTag[$clientID] | Ping]
$description[1;
Bot Gecikmesi: $ping 
Mesaj Gecikmesi: $messagePing
Veritabanı Gecikmesi: $dbPing]
$footer[1;$userTag[$clientID] Tüm Hakları Saklıdır]
`
})

bot.variables ({
  param:"0",
})
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
