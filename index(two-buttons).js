var rpc = require("discord-rpc")
var util = require("minecraft-server-util")
const client = new rpc.Client({ transport: 'ipc' })
const Config = require("./Config.json")
const DateStarted =  Date.now();
client.on('ready', () => {
    console.log('Код был успешно загружен!')
    stat1()
})
function stat1(){  
    client.request('SET_ACTIVITY', {
    pid: process.pid,
    activity : {
    details : `${Config.MainText}`, //Верхний тек
    state : `${Config.Descreption}`, //Нижний текст
    timestamps: {
        start: DateStarted
    },
    assets : {
    large_image : `${Config.Image}`, //Изображение
    large_text : `${Config.ImageDescreption}`, // Текст изображение
    small_image : `${Config.Image2}`, //Изображение
    small_text : `${Config.ImageDescreption2}`,
    },
    buttons: [
        { label: Config.ButtonNameOne, url: Config.ButtonUrlOne },
        { label: Config.ButtonNameTwo, url: Config.ButtonUrlTwo },
    ]
    }
    })
}
client.login({ clientId : Config.idApplication }).catch(console.error);
