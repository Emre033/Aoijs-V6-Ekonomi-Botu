module.exports = {
name: "günlük",
description:"Günlük",
code: `
$title[1;$userTag[$clientID] | Günlük]
$description[1;
Günlük Ödülün Verildi ve $random[200;4000] Coin Kazandın.
$setGlobalUserVar[param;$sum[$getGlobalUserVar[param;$authorID];$random[200;4000]];$authorID]
$footer[1;$userTag[$clientID] Tüm Hakları Saklıdır.]`}
