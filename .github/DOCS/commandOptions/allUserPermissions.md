# AllUserPermissions
## Usage
```js
import { PermissionFlagsBits } from "discord.js"

allUserPermissions: [PermissionFlagsBits.<Permission>]
// Example
allUserPermissions: [PermissionFlagsBits.BanMembers]
```
* The user [The one who ran the command] must have all the specified permissions to be able to execute the command else the error embed is sent.
## Return Error
```js
returnAllUserPermissionsError: Boolean // Default: True
```