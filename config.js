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
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_02_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc2LFxuICAgICAgICA2NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICA0LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDg2LFxuICAgICAgICAzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMTM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidG01bTFESmtMbThxTHl4UCs4emZwTk9ZODlwNFdHVXZSUUpqYStoSXpGbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT1I4dVdpZVBSbmlfWnk3ZEpZMzM2QVwiLFxuICBcInBob25lSWRcIjogXCIzNjYyMzg0NC1kZjA1LTQ3NzMtYWZhOC1lOTljNjRjM2JkM2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTQsXG4gICAgICAxOTksXG4gICAgICA1OSxcbiAgICAgIDExNyxcbiAgICAgIDExNSxcbiAgICAgIDQ0LFxuICAgICAgMjI1LFxuICAgICAgMTE5LFxuICAgICAgMjQ3LFxuICAgICAgMTYsXG4gICAgICAxMDEsXG4gICAgICAxNjcsXG4gICAgICAyNTEsXG4gICAgICAxMDcsXG4gICAgICAyMTQsXG4gICAgICA2MixcbiAgICAgIDMwLFxuICAgICAgMTk0LFxuICAgICAgMTg5LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMzcsXG4gICAgICA4NixcbiAgICAgIDE2NyxcbiAgICAgIDE5MyxcbiAgICAgIDc4LFxuICAgICAgMTYzLFxuICAgICAgNzgsXG4gICAgICA4OCxcbiAgICAgIDEyOSxcbiAgICAgIDE1MixcbiAgICAgIDcwLFxuICAgICAgMTMzLFxuICAgICAgMTEsXG4gICAgICAyMzMsXG4gICAgICAxNzcsXG4gICAgICA4LFxuICAgICAgMjU1LFxuICAgICAgMTUyLFxuICAgICAgMTU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlKWTFCSEhFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNaWw4b2dIRUxqajZyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5M0RoK0dvQlJhdDl3dmpzVXJ4UEVxYlNsalVsaTNhNU8vdDJDZWtGbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWEpLdU9GMXg1djNnU3VZZTlSOGd3ZXBBWmg3dWtSK2dZWTF5U3NKUGgyTkZGQWFTVW1ZYTd4RTYraGptNGsvdmZuMS9rM1hYbmthdkwwOUUzMUwrQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1lQcWFCQ2M1Q2oxczZ6bUdlenl4L0htOUZaaXRualo2MmZ4UGRHNWVRaERFckIvOTNVOVdOaDYrMlBGaW4wT2NkZlFsL2IxcjcyOUZuTEttRjhyQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5ODMzNjA0OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzE2OTIyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMWluSCthRnRSekV2dDBNdmhReU5lYytONGdLa083Q2FlcVdMUDZFNnNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
