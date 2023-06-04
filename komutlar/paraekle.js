module.exports = {
    name: "paraekle",
    code:`
    $title[1;$userTag[$clientID] | Para Ekle]
    $description[1;<@$mentioned[1]> Kullanicisina $message[2] Zynet Coin Eklendi!]
  
    $setServerVar[param;$message[2];$mentioned[1]]
    $footer[1;$userTag[$clientID] Tüm Hakları Saklıdır.]
$onlyForIDs[SENİN İD'N;]
    `
}
