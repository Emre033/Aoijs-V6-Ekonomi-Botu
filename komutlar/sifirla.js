module.exports = {
    name: "sıfırla",
    code:`
    $title[1;$userTag[$clientID] | Sıfırla]
    $description[1;Başarılı!]
    $argsCheck[1;Birini Etiketle!!]
    $setServerVar[param;0;$mentioned[1]]
    $footer[1;$userTag[$clientID].]
$onlyForIDs[KENDİ IDN;]
    `
}
// BU ALTYAPIYI İZİNSİZ PAYLAŞMAK YASAKTIR
