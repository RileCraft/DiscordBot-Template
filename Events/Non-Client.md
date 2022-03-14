# **Non Client Events**
{% hint style="info" %}
**Note:** In the async function `run()` you can always call `client, container` after you call your required arguments for the event to access them.
{% endhint %}
## **Format**
```javascript
module.exports = {
    customEvent: true,
    run: async(<args>) => {
        //Code
    }
}
```

## **Example Usage**
```javascript
const Bababooey = require("something")
module.exports = {
    customEvent: true,
    run: async(client, container) => {
        Bababooey.on("yes", (e, E) => {
            //My code
        })
    }
}
```