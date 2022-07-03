let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```නම``` : විමුක්ති ඕශද
║│➸ ```වයස``` : 17
║│➸ ```WHATSAPP``` : http://wa.me/94782575993
╰────────❉
`.trim(), m)
}

handler.help = ['info']
handler.tags = ['main', 'utama']
handler.command = /^(info|inforozi)$/i

handler.exp = 150

module.exports = handler
