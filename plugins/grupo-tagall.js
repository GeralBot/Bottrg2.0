let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ` 𝔸ℕ𝕆𝕋𝔼ℕ𝕊𝔼 𝔹𝕆𝕋𝕊 🤖 : ${pesan}`
let teks = `🤍𝙱𝙾𝚃 𝚃𝚁𝙶 𝚃𝙴 𝙸𝙽𝚅𝙾𝙲𝙰🤍 \n\n❏ ${oi}\n\n❏  𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 :\n`
for (let mem of participants) {
teks +=`❄️ @${mem.id.split('@')[0]}\n`}
teks += `➥𝙱𝙾𝚃 𝙳𝙴 𝚃𝚁𝙶 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    