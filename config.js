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

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_21_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICA5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI4LFxuICAgICAgICA3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNU5KUjBiQm5lMWJJK1M3c3dGcmFmTm9ZSmxOK09RWUpkVVdBQW13d25Ybz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOTFiY3F1MmxRVnlBb3pEZDlUb0dNUVwiLFxuICBcInBob25lSWRcIjogXCI4YzI1MzNlYi03MDUwLTRlZjQtODljMC0yMDhjODdiNmFmNGRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTg4LFxuICAgICAgMTEwLFxuICAgICAgNDIsXG4gICAgICA1NixcbiAgICAgIDY4LFxuICAgICAgMTk4LFxuICAgICAgMTUxLFxuICAgICAgMTI2LFxuICAgICAgMTE0LFxuICAgICAgNzEsXG4gICAgICAyMzksXG4gICAgICAxMzIsXG4gICAgICAyOCxcbiAgICAgIDIwMixcbiAgICAgIDE5LFxuICAgICAgNjksXG4gICAgICA3OSxcbiAgICAgIDE4MyxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDE1MSxcbiAgICAgIDEzNCxcbiAgICAgIDE2NyxcbiAgICAgIDIxLFxuICAgICAgOSxcbiAgICAgIDE4NSxcbiAgICAgIDI0LFxuICAgICAgMTgxLFxuICAgICAgMjI5LFxuICAgICAgMjAyLFxuICAgICAgMTY2LFxuICAgICAgMixcbiAgICAgIDE1OCxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgMTE3LFxuICAgICAgMCxcbiAgICAgIDEzLFxuICAgICAgMTY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5KUTJUN0paXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNV2w4b2dIRU55N3FyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5M0RoK0dvQlJhdDl3dmpzVXJ4UEVxYlNsalVsaTNhNU8vdDJDZWtGbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUVlGQ2daQ2ZLdFZNV2JLd0Fyakk0cStqb21qWEptR3duVnNwR0NPR05pVkV4ZlNDL3NMQmRWRFBEVVcwZlVkaUo1ODhkbTdPZFZGY2NrNTdpcXlkQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNDFjTzQxR1RYTU9DK2J2STNPNWpEbWFiTzVOQkE3TEc4bUtpSnV4VDFORzg1bTVWQlpibVVMZkFsV1dET1cxRlVYVzNybThISmpHNVlRZmoycEZxQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5ODMzNjA0OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjYzMjYzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQkxzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCTHMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpMWluSCthRnRSekV2dDBNdmhReU5lYytONGdLa083Q2FlcVdMUDZFNnNrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5ODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
