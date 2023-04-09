# AllClientPermissions
## Usage
```js
allClientPermissions: ["permission", "permission"]
// Example
allClientPermissions: ["Administrator", "ModerateMembers"]
```
* The client must have all the specified permissions to be able to execute the command else the error embed is sent.
## Return Error
```js
returnAllClientPermissionsError: Boolean // Default: true
```