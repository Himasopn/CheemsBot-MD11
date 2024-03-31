//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +917002015750
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ownername = '🦋' //ur owner name
global.ownernumber = '917002015750' //ur owner number
global.ytname = "https://www.Instagram.com/woxsov" //ur yt chanel name
global.socialm = "GitHub: 𝗛𝗶𝗺𝗮𝘀𝗼𝗽𝗻" //ur github or insta name
global.location = "ＥＡＲＴＨ 🌎" //ur location

//new
global.botname = '𝙒𝞓 𝙐𝙎𝞢𝞒-𝞑𝞗𝙏📍' //ur bot name


global.websitex = "https://Instagram.com/woxsov"
global.wagc = "https://wa.me/917002015750?text=%F0%9D%98%8F%F0%9D%98%8C%F0%9D%98%A0%20%F0%9F%A4%8D"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/Himasopn' //script link
global.packname = "𝞠𝞢𝞓𝘾𝞢⚛️"
global.author = "𝗔𝗦🎐         ╰┈➤₊₉₁₇₀₀₂₀₁₅₇₅₀          𝙎𝙩𝙞𝙘𝙠𝙚𝙧 𝙢𝙖𝙙𝙚 𝙗𝙮 𝙗𝙤𝙩💌                         © 𝑾𝑨 𝑼𝑺𝑬𝑹-𝑩𝑶𝑻"
global.creator = "917002015750@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["917002015750"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!🫠',
	nsfw: 'Nsfw is disabled in this group',
    done: 'Done💌',
    error: 'Error!💀',
    success: 'Here you go!🌚 hehehe'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
