# **Message / Normal Commands**
## **Default Format**
```js
module.exports = {
    name: "cmdname",
    run: async(client, message, args, Discord) => {
        //Do stuff
    }
}
```

## **Example**
```js
module.exports = {
    name: "ping",
    run: async(client, message, args, Discord) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        })
    }
}
```