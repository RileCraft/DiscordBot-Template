import { fileReader } from "../../utils/fileReader.js";

export const EventManager = async(client, rootPath) => {
    const eventFiles = fileReader(`${rootPath}/src/events`);
    if (!eventFiles.length) return;

    for (const event of eventFiles) {
        const clientEvent = (await import(`file:///${event}`))?.Event;
        if (!clientEvent) continue;

        client.events?.set(clientEvent.name, clientEvent);

        if (!clientEvent.ignore && clientEvent.customEvent) clientEvent.run(client);
        else if (!clientEvent.ignore && clientEvent.name && clientEvent.runOnce) client.once(clientEvent.name, (...args) => clientEvent.run(...args, client));
        else if (!clientEvent.ignore && clientEvent.name) client.on(clientEvent.name, (...args) => clientEvent.run(...args, client));
    };
};