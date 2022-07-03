// INI SC MASIH ADA BUG YA FIX IN AJA
// BASE ILMANHDYT
// SC ORI HYZER
// CREATOR KRIZYN OFC
// RECODE BY RIEL OFC
// RECODE BACK BY ARULL OFC

//=============『 Utama 』================== //
global.owner = ['94782575993'] 
global.mods = ['94782575993'] 
global.prems = ['94782575993'] 

//=============『 Info Owner 』============== //
global.nameowner = 'V I M U K T H I'
global.numberowner = '94782575993'
global.instagram = 'මම ඔය මගුලෙ නැ බ්න්'
global.github = 'https://github.com/zero7v'
global.dana = '94782575993'
global.pulsa = '94782575993'
global.gopay = ''

//=============『 Info Bot 』=================//
global.namebot = 'V I U K T H I '
global.gc = 'me maguleth ne utto'
global.web = 'me maguleth ne utto' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.webm = 'oshada.ga'
global.price1 = 'මෙ නම්බරෙට +94782575993 රිලොඩ් එකක් දපන්කො හිහි'

//=======『 Tampilan Dan Lainnya 』============//
global.fotonya1 = 'https://telegra.ph/file/57f6828f84e24c3c58dfe.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/57f6828f84e24c3c58dfe.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '𝖛𝖎𝖒𝖚𝖐𝖙𝖍𝖎'
global.watermark = wm
global.wm2 = '𝖈𝖗𝖊𝖆𝖙𝖊 𝖇𝖞 𝖛𝖎𝖒𝖚𝖐𝖙𝖍𝖎'
global.wm3 = '𝘷𝘪𝘮𝘶𝘬𝘵𝘩𝘪'
global.htki = '––––––『' 
global.htka = '』––––––'
global.media = 'https://telegra.ph/file/57f6828f84e24c3c58dfe.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '⏳Tපොඩ්ඩක් ඉන්න මෙක හදනකම්...'
global.eror = '_*🚨 හත්තික්කෙ අවුලක් ඔයි*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '⏳ Stiker ස්ටිකර් හදන ගමන් බොසා'
global.packname = 'Sticker By'
global.author = 'vimukthi :) </br> Official wp User BOt'

//=============『 Apikey 』================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============『 RPG GAMES 』================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========『 Jangan Di Ubah 』================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
