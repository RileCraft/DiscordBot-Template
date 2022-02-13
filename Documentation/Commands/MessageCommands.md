# **Message / Normal Commands**
## **Default Format**
```js
module.exports = {
    name: "cmdname",
    run: async(client, message, args, container) => {
        //Do stuff
    }
}
```

## **Example**
```js
module.exports = {
    name: "ping",
    run: async(client, message, args, container) => {
        message.channel.send({
            content: `My ping is ${client.ws.ping}ms.`
        })
    }
}
```