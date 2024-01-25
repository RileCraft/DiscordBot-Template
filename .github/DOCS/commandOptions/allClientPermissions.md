# AllClientPermissions
## Usage
```js
import { PermissionFlagsBits } from "discord.js"

allClientPermissions: [PermissionFlagsBits.<Permission>]
// Example
allClientPermissions: [PermissionFlagsBits.BanMembers]
```
* The client must have all the specified permissions to be able to execute the command else the error embed is sent.
## Return Error
```js
returnAllClientPermissionsError: Boolean // Default: true
```