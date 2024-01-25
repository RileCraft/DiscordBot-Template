# ChannelCooldown
## Usage
```js
channelCooldown: Time in milliseconds
// Example
channelCooldown: 10000 // 10 Seconds cooldown
```
* The user [who ran the command] must wait until the set amount of time passes before they can run the command again. **Note:** This cooldown is a __per channel cooldown__ meaning let's say if you put a channelCooldown in channel `A` of 24hrs then the user must wait 24hrs before they can run the command again in channel `A` but they can run the command again in channel `B`.
## Return Error
```js
returnChannelCooldownError: Boolean // Default: true
```