# GlobalCooldown
## Usage
```js
globalCooldown: Time in milliseconds
// Example
globalCooldown: 10000 // 10 Seconds cooldown
```
* The user [who ran the command] must wait until the set amount of time passes before they can run the command again. **Note:** This cooldown is a __global cooldown__ meaning it applies to all the guilds.
## Return Error
```js
returnGlobalCooldownError: Boolean // Default: true
```