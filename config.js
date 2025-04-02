const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6283142143417@s.whatsapp.net"]
global.nomerOwner = "6281389190204" 
global.nomorOwner = ['6281389190204']
global.namaDeveloper = "PetraInfernox" // jangn diubh bng hargai dev
global.namaBot = "GOKU V1"
global.packname = "ranstamvan" // jangan di ubah
global.author = "ranstamvan 👽" // jangan di ubah
global.thumb = fs.readFileSync("./rog.mp4")
global.ThM = 'https://a.top4top.io/p_3236bm09p1.jpg'

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})