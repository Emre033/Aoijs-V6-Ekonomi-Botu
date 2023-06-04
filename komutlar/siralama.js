module.exports = {
name:"sıralama",
  code:`
$color[1;RANDOM]
$title[1;$userTag[$clientID] | Para Sıralaması]
$description[1;
$globalUserLeaderBoard[param;asc]
**İpucu:** _Bu Sıralama $getServerVar[Botisim]'nin Olduğu Tüm Sunucuların Sıralamasıdır._
]
$footer[1;$userTag[$clientID] Tüm Hakları Saklıdır.]

`
  }
