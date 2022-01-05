const fs = require("fs");
const Filer = require("../../Utils/Filer");
const Discord = require("discord.js");
module.exports = async function(client) {
    Filer(`${ROOT.path}/Root/Events`, async function(err, res){
        res.forEach(file => {
            if (fs.statSync(file).isDirectory()) return;
            const event = require(file);
            if (event.ignoreFile) return;
            if (event.customEvent) event.run(client, Discord);
            client.events.set(event.name, event);

            if (event.once) client.once(event.name, (...args) => event.run(...args, client, Discord));
            else client.on(event.name, (...args) => event.run(...args, client, Discord));
        })
     })
    }