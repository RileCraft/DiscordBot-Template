import { statSync } from "fs";
import { glob } from "glob";

export default async(client, rootPath) => {
    const clientEventsFiles = await glob(`${rootPath}/Src/Events/**/*`);
    clientEventsFiles.forEach(async(eventFile) => {
        if (statSync(eventFile).isDirectory()) return;
        const clientEvent = await import(eventFile);

        if (clientEvent.ignore || !clientEvent.run) return;
        if (clientEvent.customEvent) return clientEvent.run(client, rootPath);
        if (!clientEvent.name) return;

        client.events.set(clientEvent.name, clientEvent);

        if (clientEvent.runOnce) client.once(clientEvent.name, (...args) => clientEvent.run(...args, client, rootPath));
        else client.on(clientEvent.name, (...args) => clientEvent.run(...args, client, rootPath));
    });
};
