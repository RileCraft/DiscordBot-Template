export const name = "ping";
export const aliases = ["pong"];
export const allowInDms = true;
export async function run(client, message) {
    message.channel.send({
        content: `My ping is ${client.ws.ping}ms.`
    });
}