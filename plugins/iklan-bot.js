let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│ 
┬
╰──────────···`.trim()
  const button = {
        buttonText: ' 🛒',
        description: kontol,
        sections:  [{title: "STORE ", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:",
        {title: 'RULES', description: "rules ", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = []
handler.command = /^()$/i
handler.help = ['rules']
module.exports = handler
