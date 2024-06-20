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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_18_06_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODcsXG4gICAgICAgIDUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODcsXG4gICAgICAgIDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwLFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4LFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2NixcbiAgICAgICAgMTA1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInJDNFVWdWhKVWVzTTNLSGhXTHBEUFVNMFJhMkVsL1k2a2RMdytiK3FkaE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRXcXl1MnZZU1B1R1dtSUo3elB3N2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDBiMzE4ZjAtMmUxOC00Y2RkLThjNzMtYTkzNzljNDk4ZTBiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDE0NSxcbiAgICAgIDIyNCxcbiAgICAgIDIwNSxcbiAgICAgIDE3OSxcbiAgICAgIDU1LFxuICAgICAgMjExLFxuICAgICAgMzksXG4gICAgICA0MCxcbiAgICAgIDIzMCxcbiAgICAgIDE0LFxuICAgICAgOTUsXG4gICAgICAxOTcsXG4gICAgICAxMixcbiAgICAgIDcyLFxuICAgICAgMjUsXG4gICAgICA1OSxcbiAgICAgIDEwNCxcbiAgICAgIDE1NyxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OCxcbiAgICAgIDMzLFxuICAgICAgMjA0LFxuICAgICAgOTAsXG4gICAgICAyMDEsXG4gICAgICA5NyxcbiAgICAgIDExNixcbiAgICAgIDIwOCxcbiAgICAgIDE1OCxcbiAgICAgIDc4LFxuICAgICAgNTMsXG4gICAgICA0OCxcbiAgICAgIDc0LFxuICAgICAgODQsXG4gICAgICAyOCxcbiAgICAgIDI0NyxcbiAgICAgIDIyMCxcbiAgICAgIDE3OCxcbiAgICAgIDE4MSxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQTRDTVRXOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDM2MDYyOTc1OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgzMzE4NDA0NTg5NTA6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSlN5eGFzRUVLRHgwck1HR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUdkV0akI0L2pYSVhCeVRYNUpTWXQrY2hIMGRZRmQvdEVuTmd1WVl0MWtjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkthbVNHR2pYb0Nra3JyMkpFWndUQ2NieWZpN09qVnJXQ3NOdG1YNm1USFp4YUJzSGNtM0RMcnVLK3NJRm0wamtwTWk2ZHE1WVFWWTgya1pJbFlGRUR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdVVzFnTVYvQWNiUERGdlg4VHJ5QlVzN1J5a1A2Ny9Xd1k2Y3JRdXFXRW5nMjU1MW51eHUyejN5SWFNMlNBRVQ1NE4wOEw3UDhNSDVzQTQvTnIxRGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQzNjA2Mjk3NTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5MjU0NzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZlBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZmUC5qc29uIjogIntcImtleURhdGFcIjpcInRzYVlQb1ZIMEJJZDFuZDRoT3lHenU5OTRaeDhGYWp4N2VIU1oyZEdnL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTA1NjI2NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
