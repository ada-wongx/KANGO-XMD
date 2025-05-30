//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '☙𝐴𝐷𝐴♡𝑊𝑂𝑁𝐺❦᭄' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '919643498754' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '𝐵𝐿𝐴𝐶𝐾𝐹𝐴𝑁𝐺' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "☙𝗛𝗘𝗔𝗥𝗧💋𝗦𝗣𝗔𝗖𝗘❦᭄" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "𝐵𝐿𝐴𝐶𝐾𝐹𝐴𝑁𝐺" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@iam_blackfang?si=yNeg7eti5sR1v4hA"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𝐵𝐿𝐴𝐶𝐾𝐹𝐴𝑁𝐺"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©𝐵𝐿𝐴𝐶𝐾𝐹𝐴𝑁𝐺', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
