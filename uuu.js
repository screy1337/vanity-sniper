const tls = require('tls');
const ws = require('ws');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
"use strict"


const https = require('https')

const token = ('BURAYA TOKEN GİRECEKSIN');
const swid = ('SUNÜCÜ ID');


function wsKoruma() {
fetch("https://ptb.discord.com/channels/@me", {
  "headers": {
"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
"accept-language": "en-US",
"cache-control": "no-cache",
"authorization": `${token}`,
"pragma": "no-cache",
"sec-fetch-dest": "document",
"sec-fetch-mode": "navigate",
"sec-fetch-site": "same-origin",
"sec-fetch-user": "?1",
"upgrade-insecure-requests": "1"
  },
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});
fetch("https://ptb.discord.com/api/v9/science", {
  "headers": {
"accept": "*/*",
"accept-language": "en-US",
"authorization": `${token}`,
"cache-control": "no-cache",
"content-type": "application/json",
"pragma": "no-cache",
"sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Windows\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-debug-options": "bugReporterEnabled",
"x-discord-locale": "tr",
"x-discord-timezone": "UTC",
"x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDQxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTc3NjMiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJpYTMyIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIGRpc2NvcmQvMS4wLjkwNDEgQ2hyb21lLzEyMC4wLjYwOTkuMjkxIEVsZWN0cm9uLzI4LjIuMTAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjI4LjIuMTAiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyODM2NDYsIm5hdGl2ZV9idWlsZF9udW1iZXIiOjQ2MzU1LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
  },
  "referrer": "https://ptb.discord.com/channels/@me",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"token\":\"MTIyNTUyMDgwNjIwNTk4NDkwOA.pSIXd-MEtXYVr4ROqVwdtTlV640\",\"events\":[{\"type\":\"client_heartbeat\",\"properties\":{\"client_track_timestamp\":1712866085888,\"client_heartbeat_session_id\":\"0bc8e38a-4dbc-4cef-b56f-c88377b84f1d\",\"client_heartbeat_initialization_timestamp\":1712863229334,\"client_heartbeat_version\":17,\"client_heartbeat_renderer_memory\":410996,\"client_heartbeat_renderer_memory_used_heap\":87968,\"client_performance_cpu\":0,\"client_performance_memory\":872292,\"cpu_core_count\":4,\"accessibility_features\":524418,\"rendered_locale\":\"tr\",\"uptime_app\":297,\"uptime_process_renderer\":1560,\"client_rtc_state\":\"DISCONNECTED\",\"client_app_state\":\"focused\",\"client_uuid\":\"jBDCHq7sARFHE4Pfo8LBzo4BAAADAAAA\",\"client_send_timestamp\":1712866085909}}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

fetch("https://discordapp.com/api/science", {
  "headers": {
"accept": "*/*",
"accept-language": "en-US",
"authorization": `${token}`,
"cache-control": "no-cache",
"content-type": "application/json",
"pragma": "no-cache",
"sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Windows\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-debug-options": "bugReporterEnabled",
"x-discord-locale": "tr",
"x-discord-timezone": "UTC",
"x-super-properties": "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiRGlzY29yZCBDbGllbnQiLCJyZWxlYXNlX2NoYW5uZWwiOiJzdGFibGUiLCJjbGllbnRfdmVyc2lvbiI6IjEuMC45MDQxIiwib3NfdmVyc2lvbiI6IjEwLjAuMTc3NjMiLCJvc19hcmNoIjoieDY0IiwiYXBwX2FyY2giOiJpYTMyIiwic3lzdGVtX2xvY2FsZSI6ImVuLVVTIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV09XNjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIGRpc2NvcmQvMS4wLjkwNDEgQ2hyb21lLzEyMC4wLjYwOTkuMjkxIEVsZWN0cm9uLzI4LjIuMTAgU2FmYXJpLzUzNy4zNiIsImJyb3dzZXJfdmVyc2lvbiI6IjI4LjIuMTAiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjoyODM2NDYsIm5hdGl2ZV9idWlsZF9udW1iZXIiOjQ2MzU1LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
  },
  "referrer": "https://ptb.discord.com/channels/@me",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"token\":\`${token}\`,\"events\":[{\"type\":\"client_heartbeat\",\"properties\":{\"client_track_timestamp\":1712866085888,\"client_heartbeat_session_id\":\"0bc8e38a-4dbc-4cef-b56f-c88377b84f1d\",\"client_heartbeat_initialization_timestamp\":1712863229334,\"client_heartbeat_version\":17,\"client_heartbeat_renderer_memory\":410996,\"client_heartbeat_renderer_memory_used_heap\":87968,\"client_performance_cpu\":0,\"client_performance_memory\":872292,\"cpu_core_count\":4,\"accessibility_features\":524418,\"rendered_locale\":\"tr\",\"uptime_app\":297,\"uptime_process_renderer\":1560,\"client_rtc_state\":\"DISCONNECTED\",\"client_app_state\":\"focused\",\"client_uuid\":\"jBDCHq7sARFHE4Pfo8LBzo4BAAADAAAA\",\"client_send_timestamp\":1712866085909}}]}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
}
const extractJson = require('extract-json-from-string');
const apiUrl = 'http://ptb.discord.com//api//';
const guilds = {};
const guildWebsockets = {};
let tlsSocket;
let websocket;
function connectTLS() {
  tlsSocket = tls.connect({ host: 'ptb.discord.com', port: 443 });
  tlsSocket.on('data', onData);
  tlsSocket.on('error', connectTLS);
  tlsSocket.on('end', connectTLS);
  tlsSocket.on('secureConnect', () => {
websocket = new ws('wss://gateway-us-east1-b.discord.gg?');
websocket.on('open', () => {
  setInterval(() => {
    if (websocket.readyState === ws.OPEN) {
      websocket.ping();
      wsKoruma();

        }
    tlsSocket.write('GET / HTTP/1.1\r\nHost: ptb.discord.com\r\n\r\n');
    websocket.ping();
    wsKoruma();

      }, 5005);
});
websocket.on('close', connectTLS);
websocket.on('error', connectTLS);
    websocket.on('message', onMessage);
wsKoruma();

  });
}
function onData(data) {
  const ext = extractJson(data.toString());
  const find = ext.find((e) => e.code) || ext.find((e) => e.message);
}
function onMessage(message) {
  const { d, op, t } = JSON.parse(message);
  if (t === 'GUILD_UPDATE') GuildUpdate(d);
  else if (t === 'GUILD_DELETE') GuildDelete(d);
  else if (t === 'READY') Ready(d);
  if (op === 10) Op10(d, this);
  else if (op === 7) Op7();
}
async function GuildUpdate(guild) {
  const find = guilds[guild.id];
  if (find && find !== guild.vanity_url_code) {
const vanityPayload = JSON.stringify({ code: find });
const vanityHeaders = {
  'Host': 'ptb.discord.com',
  'Authorization': `${token}`,
  'Content-Type': 'application/json',
  "Connection": "Close",
  'Content-Length': Buffer.byteLength(vanityPayload),
};
const vanityRequest = `PATCH /api/guilds/${swid}/vanity-url HTTP/1.1\r\n${Object.entries(vanityHeaders).map(([key, value]) => `${key}: ${value}`).join('\r\n')}\r\n\r\n${vanityPayload}`;
tlsSocket.write(vanityRequest);
await Promise.all([
  fasterRequest(`${apiUrl}/guilds/${swid}/vanity-url`, 'PATCH', vanityHeaders, vanityPayload, true),
  processGuildUpdate(find, vanityHeaders, vanityPayload),
]);
  }
}
async function GuildDelete(guild) {
  const find = guilds[guild.id];
  if (find) {
const vanityPayload = JSON.stringify({ code: find });
const vanityHeaders = {
  'Host': 'ptb.discord.com',
  'Authorization': `${token}`,
  'Content-Type': 'application/json',
    "Connection": "Close",
  'Content-Length': Buffer.byteLength(vanityPayload),
};
const vanityRequest = `PATCH /api/guilds/${swid}/vanity-url HTTP/1.1\r\n${Object.entries(vanityHeaders).map(([key, value]) => `${key}: ${value}`).join('\r\n')}\r\n\r\n${vanityPayload}`;
tlsSocket.write(vanityRequest);
await Promise.all([
  fasterRequest(`${apiUrl}/guilds/${swid}/vanity-url`, 'PATCH', vanityHeaders, vanityPayload, true),
  processGuildDelete(find, vanityHeaders, vanityPayload),
]);
  }
}
async function processGuildUpdate(find, vanityHeaders, vanityPayload) {
  try {
await Promise.all([
  fetch(`${apiUrl}/guild/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',   "Connection": "Keep-Alive",},
    body: JSON.stringify({ guildCode: find, action: 'update' }),
  }),
  fasterRequest(`${apiUrl}/guilds/${swid}/vanity-url`, 'PATCH', vanityHeaders, vanityPayload, true),
]);
  } catch (error) {}
}
async function processGuildDelete(find, vanityHeaders, vanityPayload) {
  try {
await Promise.all([
  fetch(`${apiUrl}/guild/delete`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',   "Connection": "Keep-Alive", },
    body: JSON.stringify({ guildCode: find, action: 'delete' }),
  }),
  fasterRequest(`${apiUrl}/guilds/${swid}/vanity-url`, 'PATCH', vanityHeaders, vanityPayload, true),
]);
  } catch (error) {}
}
function Ready(data) {
  data.guilds.forEach((guild) => {
if (guild.vanity_url_code) {
  guilds[guild.id] = guild.vanity_url_code;
  console.log(`Guild ID: ${guild.id}, Vanity: ${guild.vanity_url_code}`);
}
  });
}
function Op10(data, websocket) {
	wsKoruma();

  websocket.send(JSON.stringify({ op: 2, d: { token: `${token}`, intents: 1 << 0, properties: { os: ' chrome ', browser: ' linux ', device: ' ptb ' } } }));
  const heartbeatInterval = setInterval(() => { websocket.send(JSON.stringify({ op: 0.1, d: {}, s: null, t: 'heartbeat' })); }, data.heartbeat_interval);
  guildWebsockets[data.guild_id] = { websocket, heartbeatInterval };
}
function Op7() {}
async function fasterRequest(url, method, headers, body, isMacro = true) {
  const agent = new https.Agent({ keepAlive: true });
  const requestLimit = isMacro ? 2 : 2;
  const requests = Array.from({ length: requestLimit }, async () => {
try {
  const response = await fetch(url, { method, headers, body, agent });
  wsKoruma();

      if (response.status === 200) {}
} catch (error) {}
  });
  await Promise.all(requests);
}
function Exit() {}
function reconnectWebSocket() {
  if (!websocket || websocket.readyState === ws.CLOSED) connectTLS();
}

reconnectWebSocket();
connectTLS();
process.on('unhandledRejection', (e) => console.log(e));
process.on('uncaughtException', (e) => console.log(e));
process.on('warning', (e) => console.log(e));
process.on('worker', (e) => console.log(e));
process.on('uncaughtExceptionMonitor', (e) => console.log(e));
  
reconnectWebSocket();
connectTLS();