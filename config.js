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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_23_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDkwLFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDczLFxuICAgICAgICA3NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODMsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDc3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2FnWDJZYlBRNmJhTmsrRU1xV3NZeklKaFpTeTFiZVdzUmdJVERLa1RRND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjM0OTk4MzM2MDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyQkQyRUYyMDk3QTY3Q0E1ODU3RUMxNTFGNjEyNzU4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTU0ODYwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6TkRPMHItcVRiQzZmT0c5ZkdpRXh3XCIsXG4gIFwicGhvbmVJZFwiOiBcImRlMTkzNDU0LWRhZGMtNDI0ZC1hZjkwLWQ2ODJkZjliZTVhY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMCxcbiAgICAgIDI0LFxuICAgICAgMTM4LFxuICAgICAgMjI1LFxuICAgICAgMTE2LFxuICAgICAgMTgyLFxuICAgICAgMjMyLFxuICAgICAgNDQsXG4gICAgICAxNzQsXG4gICAgICAxMjYsXG4gICAgICAxODQsXG4gICAgICAyNTEsXG4gICAgICAxNTUsXG4gICAgICAyNTQsXG4gICAgICA2MSxcbiAgICAgIDQ1LFxuICAgICAgMTk1LFxuICAgICAgNTUsXG4gICAgICAyMzMsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzcsXG4gICAgICAxNSxcbiAgICAgIDg4LFxuICAgICAgMTQzLFxuICAgICAgMTk0LFxuICAgICAgMTUxLFxuICAgICAgNTQsXG4gICAgICA2NSxcbiAgICAgIDkzLFxuICAgICAgODIsXG4gICAgICAxMjQsXG4gICAgICAxMDIsXG4gICAgICAxMjQsXG4gICAgICAxMzUsXG4gICAgICAxNzgsXG4gICAgICA5OCxcbiAgICAgIDIxNyxcbiAgICAgIDI0NyxcbiAgICAgIDEzOCxcbiAgICAgIDI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBDVFQ1UDJaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0OTk4MzM2MDQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLaGFuXCIsXG4gICAgXCJsaWRcIjogXCIxMzAzODI4MjU1MjEyNzQ6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbWw4b2dIRUxYMStMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlR5M0RoK0dvQlJhdDl3dmpzVXJ4UEVxYlNsalVsaTNhNU8vdDJDZWtGbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicDZ3N1VORm5vY09WdHh5bUJxQWFlQW9VY0F6QStEZ0NQSmo0VFZhaGoza3QvcHEwM1FGeXpIWHVMWWc3OFplalBsY0FCeW9pdGxmUXk0c0NRWXBDQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMTVxRHJzSnVYdXhnNG05Yk5YSmI4R1M1UFUvRWpwWGpraUFvTTRPaTZTc0I3MW5PZURZVjZSbDJURjg3RnJWUW1yN1l0d3BrdUJHY2VtVkZUR3V4alE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDk5ODMzNjA0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTQ4NjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFhkXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQWGQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZTmsxNlduZTJYOWRJZFY0NDMrSG04N296ckcvUjBpdHRDSjgvY1NOT2Y4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4OTc2OTc5OTMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTU0ODYwMjgyNVwifSIKfQ=="  // PUT your SESSION_ID 


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
