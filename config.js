const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923499833604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "true" to show logs , "true" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_48_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDY5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDkzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT2YzMm5DcHpQLzNVWHVleVJidThERG5DYUF0SGljbHhmenh1dFpXZnYzTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3BCTXhVMWlSS1N5a0Z6WnlrcUJaZ1wiLFxuICBcInBob25lSWRcIjogXCIyMDZiZDY1YS02YzgzLTRhZDctOTlmOS1hNmFmMzA4N2JiZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgOTIsXG4gICAgICAzMixcbiAgICAgIDE4OSxcbiAgICAgIDE1NCxcbiAgICAgIDg1LFxuICAgICAgMjMxLFxuICAgICAgNzQsXG4gICAgICAxMDgsXG4gICAgICA5MSxcbiAgICAgIDE3NCxcbiAgICAgIDE3NyxcbiAgICAgIDIyNixcbiAgICAgIDEwMSxcbiAgICAgIDEwMixcbiAgICAgIDAsXG4gICAgICAzNixcbiAgICAgIDE0MixcbiAgICAgIDExOSxcbiAgICAgIDE0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDIyLFxuICAgICAgNTksXG4gICAgICAxOTYsXG4gICAgICAyMzAsXG4gICAgICAxMDEsXG4gICAgICA0NyxcbiAgICAgIDE2NCxcbiAgICAgIDIyNSxcbiAgICAgIDIwNixcbiAgICAgIDM3LFxuICAgICAgMTgwLFxuICAgICAgMTIsXG4gICAgICAxNjMsXG4gICAgICA5OCxcbiAgICAgIDU5LFxuICAgICAgMjQxLFxuICAgICAgMTc1LFxuICAgICAgMTAwLFxuICAgICAgMTk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjUzVzNBTEVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYWw4b2dIRU9xQXE3TUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5M0RoK0dvQlJhdDl3dmpzVXJ4UEVxYlNsalVsaTNhNU8vdDJDZWtGbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSGd3WG9qMitQVm9MNzlkVDRvN0ZlQUkvd1Y2QzYrWjhWTzdoYjdSMXJlblZqcExlOWdtS3FoS1YyT3o0eUlLVXdkSk96VzZkT3BTc3V2c0ppWjFkRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0wxNkViZ1dIczJqcXF2ejlDbzlwVEhPb2p6Tzk1eWNtaHdvNVoxczBlOHREZXlmYUQzZlg2Q3ZjN0lBTm5sTGpHakJzUTl6MGRmUmF5eUkreUpuRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5ODMzNjA0OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjcyMTA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMWluSCthRnRSekV2dDBNdmhReU5lYytONGdLa083Q2FlcVdMUDZFNnNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
