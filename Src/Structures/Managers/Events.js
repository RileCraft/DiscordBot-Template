const { statSync } = require("node:fs");
const directorySearch = require("node-recursive-directory");
module.exports = async(client, rootPath) => {
    const clientEventsFiles = await directorySearch(`${rootPath}/Src/Events`);
    clientEventsFiles.forEach(eventFile => {
        if (statSync(eventFile).isDirectory()) return;
        const clientEvent = require(eventFile);
        if (clientEvent.ignore || !clientEvent.name || !clientEvent.run) return;

        client.events.set(clientEvent.name, clientEvent);
        if (clientEvent.customEvent) return clientEvent.run(client, rootPath);

        if (clientEvent.runOnce) client.once(clientEvent.name, (...args) => clientEvent.run(...args, client, rootPath));
        else client.on(clientEvent.name, (...args) => clientEvent.run(...args, client, rootPath));
    });
};