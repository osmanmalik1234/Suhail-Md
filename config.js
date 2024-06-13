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
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "true" to show logs , "true" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_09_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTEsXG4gICAgICAgIDczLFxuICAgICAgICA5LFxuICAgICAgICAxODgsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICA4NixcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDkxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDY2LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA5OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDkzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1LFxuICAgICAgICA2NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAwLFxuICAgICAgICA4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkkyR0s2cFB4ZUZSRS9ZVTJYYVNrL0w1ZTBicDRVeFF2YVFRQzVmMWpwL0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDM2MDYyOTc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJEQ0E3QzUxRkJGNEU4MDNEQkNCOEQ0MEY0QjEzNzlFNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTgyNTUzODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0MzYwNjI5NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjgzNjYzNDk4MkNDMzY3RkUwQjdCRkVEQkNBMTczRTNGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODI1NTM4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKWlJhaVBXc1F5cW1GZlRaWFJwb093XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyNDYyYWY5LTA2NzYtNDBlNS04Yjg0LTQ4Y2E2OTVhNDJkOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAyNDksXG4gICAgICA1NixcbiAgICAgIDE2NixcbiAgICAgIDY1LFxuICAgICAgMTk1LFxuICAgICAgMTIsXG4gICAgICAxMjMsXG4gICAgICAzNyxcbiAgICAgIDQ0LFxuICAgICAgODEsXG4gICAgICAyMjEsXG4gICAgICAxOTcsXG4gICAgICA0LFxuICAgICAgNjksXG4gICAgICAxMjcsXG4gICAgICAzNSxcbiAgICAgIDU5LFxuICAgICAgMjU0LFxuICAgICAgMjEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNSxcbiAgICAgIDUwLFxuICAgICAgMjE1LFxuICAgICAgODEsXG4gICAgICAyMjksXG4gICAgICAyMTYsXG4gICAgICAxNTQsXG4gICAgICA3NyxcbiAgICAgIDE4NixcbiAgICAgIDExMCxcbiAgICAgIDE5NCxcbiAgICAgIDM4LFxuICAgICAgMTIzLFxuICAgICAgNjgsXG4gICAgICAxMTIsXG4gICAgICAxNTYsXG4gICAgICAxODcsXG4gICAgICA2NixcbiAgICAgIDcyLFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUdaM1BKOE1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQzNjA2Mjk3NToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzMxODQwNDU4OTUwOjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKalO+4j/Cfkp7wnZCMLfCdkIzwnZCA8J2Qi/CdkIjwnZCKLfCdkIrwnZCH8J2QgPCdkI3wn5Ke4pqU77iPXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZ5eGFzRUVKSCtxYk1HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInoxa1ZleXJUcUp2MGpGNDVFUm5UbW9ST1pjdExlcldHMDZFSkl2c1hsNWpsdGFEd3hSVmtwWGRhV2pWOEtTQlRNbm5UQlF3ZVRwZlhXRFIzdEFBTUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJlM0tsOUluWTBQVUkzdzNzdy9yQUdwRUh6UXBBdFRVRUpSbHpwZUlCSFU3NmdhK0RQVFUrcjl6bS84MDVCSEY1Z3k1b3M0UFlrM3BoRUk0V0FlSkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyNTUzNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmUC5qc29uIjogIntcImtleURhdGFcIjpcInRzYVlQb1ZIMEJJZDFuZDRoT3lHenU5OTRaeDhGYWp4N2VIU1oyZEdnL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
  //readmessage:process.env.READ_MESSAGE|| "true",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "true", 
  //alwaysonline:process.env.WAPRESENCE|| "online", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
