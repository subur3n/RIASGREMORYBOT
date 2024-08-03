//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2348086541281";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZsMTByL0NVRTBzOTErVE1wZUZtdFJGNTkvTlh5QVFCOXdpODZXYkhFdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBkYVAyQjk3clRCd1ZYYW1idWJrWW8xNTFrN21FZm1hb2NHV04zdG1Ydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTHlZUmd4TERjcytrMzlseGRKQm5HaTlBYzlJRG9qVmxmWWxWTXlpTGt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWNkZqSDNRUGdzd2ZCRXlwVlo0cUdJTWRQV2ZGNXRaeXR0cDlrZ243dzNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBUk8rYzUxT1lwVWdWNmVyS1FWeEpDVXhDaUszQUFzSFhjR0ZNUDAvVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imo3N3B4SHU1RkJqS25rejhGYXlhUkdYVWlhZTRGSzNpMURkODY1SjlKeFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJnd3d1dHRNNEU4dkthZzRuTmNUa1lXVndISHVjMXZ3VDBGcEQrdVBtUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU1OaWFVRFREcXA1bzhZd0RkaGs0Z0VpM3VmY1V4MFNqY0t6aHd3ZkdYUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZLbkdCaXhCSUtoWFFoUityRzRiczlKVHBsckl5djJsbDFpM296TkJIWmF6R1V5Vm94aDFYTDJ4ODNndkx3VlFTeUxhd09zMEJNblBFNDMvUGxUbURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6Imh1UUFnTkN6WEN4RHE1LzRyZjl6bHduVWwxeTZ0TkVEZ2lmOXFSang0Zzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzQyODY5ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDdDQzU2REVCM0M4QkJGMEY0NDlDRTkyMUZCQTE4MEYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjY5ODU3Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NzQyODY5ODFAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDU0NkI1NDYxNDAwMTA1RTk5MjgyRkQzMjdENTE0NTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjY5ODU3Nn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidHZXV1VBeXZRMU9KTHZWQmRLT2N3USIsInBob25lSWQiOiJjZGMxZDIxYS0wNGEwLTQ4OGUtOGM1NC01YTBjMTIxMTU3NzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlVlMEQ3YjJySUVWekFQOFpsdGRCMGMwVXhvPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikp1enowaFBpSUlweml1VmwvK09YNno2UnFBdz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxRENKSlNaRCIsIm1lIjp7ImlkIjoiMjc2NzQyODY5ODE6MzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0ou4oCgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKYTZ6L1lCRU1HV3ViVUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSNU01N3lCMm1QU1dHSklGbExpeDRjYTV6Z3VERGoyRTFjMHRXVXlRdlRVPSIsImFjY291bnRTaWduYXR1cmUiOiJqc2ZCV3BvZHNTRnBVdTRUM3ZaVnAyMC9oRU4yMFkwZjNwMXI2ejBlZFBwbEY5bDZ0bWppS3hPUjRCcFdiQVgyMnlWbDZVNTNvaTBKT0F6VDRFRU9Cdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2R5djIvQ2tYZVIrSGNkV24rdy9Nc2dKUWhDeWNSaTR6WkppMW9rOStQQVl3ZjV5VGEvbisvUlhVbUVMMEFTSk1LakdRV01sUFJWMEhEYk4ranJ0QUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY3NDI4Njk4MTozNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVZVRPZThnZHBqMGxoaVNCWlM0c2VIR3VjNExndzQ5aE5YTkxWbE1rTDAxIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNjk4NTc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwxSSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "ᴛᴏxxɪᴄ ᴍᴅ",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "CJ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
