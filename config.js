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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923436062975";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_19_06_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNixcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NixcbiAgICAgICAgNzIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk2LFxuICAgICAgICA5NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDMxLFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNSxcbiAgICAgICAgODksXG4gICAgICAgIDIyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImErUHZjRjUzWEtYbjAwYmRjRW9SWUlubktFK2dTMUZyRmFZdCtxSGxlS3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm5mazgxam11U2hPRjBLaUxnZTd1Z1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2IwMmQzNzItMDY3Yi00Y2ZjLWExNzYtNWNjZjc4MTFiMGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDEzNixcbiAgICAgIDEsXG4gICAgICAxNjIsXG4gICAgICAyMjMsXG4gICAgICA0NixcbiAgICAgIDkzLFxuICAgICAgMTQ5LFxuICAgICAgMTYyLFxuICAgICAgNjksXG4gICAgICAxMDEsXG4gICAgICAyMDIsXG4gICAgICA3NyxcbiAgICAgIDE3NSxcbiAgICAgIDI3LFxuICAgICAgODAsXG4gICAgICA1OCxcbiAgICAgIDEyLFxuICAgICAgNixcbiAgICAgIDE0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDgsXG4gICAgICAxMTEsXG4gICAgICAxMDgsXG4gICAgICAyMzYsXG4gICAgICAzOSxcbiAgICAgIDE0MCxcbiAgICAgIDIwNSxcbiAgICAgIDE0NyxcbiAgICAgIDYwLFxuICAgICAgODksXG4gICAgICAyMzIsXG4gICAgICAxMixcbiAgICAgIDE0MSxcbiAgICAgIDE5MSxcbiAgICAgIDM4LFxuICAgICAgNTEsXG4gICAgICAzNyxcbiAgICAgIDUyLFxuICAgICAgMTU5LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVRGRDZaSDRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNjA2Mjk3NTozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzMxODQwNDU4OTUwOjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pTeXhhc0VFT1RaMmJNR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVHZFdGpCNC9qWElYQnlUWDVKU1l0K2NoSDBkWUZkL3RFbk5ndVlZdDFrYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4YXByODZhMjNzdlFrWTU2YmZQR1g3SktYMHI2S1NiVk0rb3duMllMWHg4ZTJmTTZpbzVPWjlNbWhPdGtjS0RCa1VSbldkOUhhR2ZCM2pIdEJhRUhDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyM2hkeU1FZTZ0VzAwenZGaWVBUkFKTEJXb3FGZUJBbFNiVlJOaXI4T1FZb3N4d3NlamZ4aFdsazdXMjFST2w2eDhGdTdLSG1qcXphY1VmeEw1L2NDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MzYwNjI5NzU6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MDM3MTU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmZQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGZlAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ0c2FZUG9WSDBCSWQxbmQ0aE95R3p1OTk0Wng4RmFqeDdlSFNaMmRHZy9RPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNjUwNTYyNjcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
