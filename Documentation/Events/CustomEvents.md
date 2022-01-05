# **Client Events**
## **Format**
```js
module.exports = {
    customEvent: true,
    run: async(<args>) => {
        //Code
    }
}
```

## **Example Usage**
```js
const Bababooey = require("something")
module.exports = {
    customEvent: true,
    run: async(client) => {
        Bababooey.on("yes", (e, E) => {
            //My code
        })
    }
}
```

## **Notes**
* In the async function `run()` you can always call `client, Discord` to access them.