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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923141854239";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_29_06_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNixcbiAgICAgICAgMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA3OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODIsXG4gICAgICAgIDg5LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDksXG4gICAgICAgIDExMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDc3LFxuICAgICAgICAxODksXG4gICAgICAgIDczLFxuICAgICAgICAxNTYsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ1LFxuICAgICAgICA5MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg5LFxuICAgICAgICA1OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJCODc0dW1LZ3FQa2dueGpLMzQzMVJRZVdtNVZnYktEVzZaVW81YkFGZ29JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE0MTg1NDIzOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEQ0N0Q1N0M3M0M0RTQ2QzM3NTYxOUVFRTQxNjkzRkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5NDkxMzU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlyVkJmMXUwUk1pWjlhejVjVmVRM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTk1Y2YyZTQtMjlkNi00YzNhLThhOTgtN2VjNzMzMDQ5Nzk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDEzNSxcbiAgICAgIDUwLFxuICAgICAgMjgsXG4gICAgICAxNTEsXG4gICAgICAxNjQsXG4gICAgICAxMzEsXG4gICAgICAxMDgsXG4gICAgICAxODIsXG4gICAgICAyMzEsXG4gICAgICAwLFxuICAgICAgMTc3LFxuICAgICAgMTI4LFxuICAgICAgMzgsXG4gICAgICA2NyxcbiAgICAgIDAsXG4gICAgICAxNzMsXG4gICAgICA4MCxcbiAgICAgIDE2NyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDE0MixcbiAgICAgIDE0MixcbiAgICAgIDYwLFxuICAgICAgMjAsXG4gICAgICAxNjAsXG4gICAgICAxNTYsXG4gICAgICA3MixcbiAgICAgIDE3NSxcbiAgICAgIDg0LFxuICAgICAgMjA0LFxuICAgICAgOTksXG4gICAgICA1MyxcbiAgICAgIDEsXG4gICAgICAxMixcbiAgICAgIDI0MixcbiAgICAgIDkwLFxuICAgICAgNjUsXG4gICAgICAxMTgsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEVFQlRGNDlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzE0MTg1NDIzOToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4ODM4NjUzNDY3MDU0MToyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIklzbWFpbCBLcGtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLSEpsL29GRUpLMjliTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImFJQTZ4cm5yeWt0VWtsQ3lYRy90WUJ5a1BFUDFGVnF5NERuWTdDUTJhUzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZGlocmdKZGZ5Sml3aE1CREJaM2QzZUo3bW4zZHhIcUduQWl0VGpvT0VzZ2MzSHJaVEo4Z0RqeTFPY0QvRE9xY29aOTQ2eksvTnBZRUk3ZVQvbndIQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOG93SlArb2xKTGhaNEhYVG5TSldadHk5NEpHZE9UZVBVVVN1d3lSbjNETTQvTjRiVmRwSVNwYjZ3blUyS0x4aHBHOWFad3JpVWQ4a2xlSjBjNUFpZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTQxODU0MjM5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk0OTEzNDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJMmZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUkyZi5qc29uIjogIntcImtleURhdGFcIjpcImM0N1gzRklxZitlZGozMW5TdlV6YXNrL1o5aXBrZnk2Sy92YzM0Nm5naG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5ODQxNjAzMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NDkxMzUyMTA3XCJ9Igp9"  // PUT your SESSION_ID 


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
