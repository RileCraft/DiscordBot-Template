module.exports = async function(client) {
const Discord = require("discord.js")
const fs = require("fs")
const { FileArray } = require(`${ROOT.path}/Root/Functions/FileArray`)

FileArray(`${ROOT.path}/Root/Events`, async function(err, res){
    res.forEach(file => {
        if (fs.statSync(file).isDirectory()) return;
        let event = require(file)
        if (event.ignoreFile) return;
        if (event.customEvent) event.run(client, Discord);
        client.events.set(event.name, event)
        event = client.events.get(event.name)
        
        if (event.once) client.once(event.name, (...args) => event.run(...args, client, Discord))
        else client.on(event.name, (...args) => event.run(...args, client, Discord))
    })
 })
}