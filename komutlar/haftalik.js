module.exports = {
name: "Haftalık",
description:"Haftalik",
code: `
$title[1;$userTag[$clientID] | Günlük]
$description[1;
Haftalık Ödülün Verildi ve $random[500;4000] Coin Kazandın.
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[200;5000]];$authorID]
$footer[1;$userTag[$clientID] Tüm Hakları Saklıdır.]
$globalUserCooldown[7d;1 Hafta Dolmadı=)]`}
