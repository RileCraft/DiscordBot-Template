# GuildCooldown
## Usage
```js
guildCooldown: Time in milliseconds
// Example
guildCooldown: 10000 // 10 Seconds cooldown
```
* The user [who ran the command] must wait until the set amount of time passes before they can run the command again. **Note:** This cooldown is a __per guild cooldown__ meaning let's say if you put a guildCooldown in guild `A` of 24hrs then the user must wait 24hrs before they can run the command again in guild `A` but they can run the command again in guild `B`.
## Return Error
```js
returnGuildCooldownError: Boolean // Default: true
```