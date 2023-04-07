# AnyClientPermissions
## Usage
```js
anyClientPermissions: ["permission", "permission"]
// Example
anyClientPermissions: ["Administrator", "ModerateMembers"]
```
* The client must have any one of the specified permissions to be able to execute the command else the error embed is sent.
## Return Error
```js
returnAnyClientPermissionsError: Boolean // Default: true
```