# AnyUserPermissions
## Usage
```js
anyUserPermissions: ["permission", "permission"]
// Example
anyUserPermissions: ["Administrator", "ModerateMembers"]
```
* The user [who ran the command] must have any one of the specified permissions to be able to execute the command else the error embed is sent.
## Return Error
```js
returnAnyUserPermissionsError: Boolean // Default: true
```