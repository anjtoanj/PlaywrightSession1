/*
Task: 1
1. Define multiple overloaded signatures for the 'handleResponse' function.
   - Each signature should specify a status code (`200`, `404`, `500`) as an argument, and a `string` type for the response.
   - Also, define the corresponding return type for each signature (`object` for `200`, `null` for `404`, and `Error` for `500`).

2. Write the implementation of the `handleResponse` function.
   - Use a single function signature with `statusCode` as a `number` and `response` as an `object`.
   - The return type should be a union type: `object | null | Error`.
   - Inside the function, use a `switch` statement to handle different `statusCode` values.
   - Return the appropriate type for each case: the response object, `null`, or a new `Error`.

3. Test the function by calling `handleResponse` with different status codes and response objects.
4. Run the TypeScript file and observe the console output.
   
*/
/*
Task: 2
1. Create a`findMissingNumber.ts`.

2. Define a function.
   - The function should take one parameter, `arr`, which is an array of numbers (`number[]`).

3. Inside the function, use a `for` loop to iterate through the array.
   - In each iteration, check if the next number in the array is consecutive.
        If it isn't, return the current number plus one (which is the missing number).
   - If the loop completes without finding the missing number, return `-1`.

4. Call the function with an  array (For example: `const myArray = [1, 2, 3, 5, 6];`)
    and store the result in a variable. Print the result.

Task: 3

Note: Implement the same using an anonymous function and arrow function.
*/
/*
Task: 4

1. Define the Enum for Roles:
   - Declare an enum named `Role` with members such as `Admin`, `Editor`, and `Viewer`.

2. **Define the Object Literal for Permissions**:
   - Create an object `rolePermissions`.
   - For each role in the `Role` enum, define an object with keys as permissions (like 'create', 'edit', etc.)
     and boolean values indicating whether the role has that permission.

3. Define a function called `hasPermission` that takes two parameters: a `Role` and a `permission` string.
   - In the function, retrieve the permissions object for the given role and check if the specified permission is set to `true`.

4. Create test cases to verify if specific roles have certain permissions. For example, check if `Role.Admin` has the 'delete' permission.
   - Print the results of these tests.

*/
// 1. Define the Enum for Roles:
//    - Declare an enum named `Role` with members such as `Admin`, `Editor`, and `Viewer`.
var RoleTypes;
(function (RoleTypes) {
    RoleTypes[RoleTypes["Admin"] = 0] = "Admin";
    RoleTypes[RoleTypes["Editor"] = 1] = "Editor";
    RoleTypes[RoleTypes["Viewer"] = 2] = "Viewer";
})(RoleTypes || (RoleTypes = {}));
function launchRoles(roleName) {
    console.log("Existing roles : ".concat(RoleTypes));
}
launchRoles(RoleTypes.Admin);
// 2. **Define the Object Literal for Permissions**:
//    - Create an object `rolePermissions`.
//    - For each role in the `Role` enum, define an object with keys as permissions (like 'create', 'edit', etc.) 
//      and boolean values indicating whether the role has that permission.
var rolePermissions;
(function (rolePermissions) {
    rolePermissions[rolePermissions["create"] = 0] = "create";
    rolePermissions[rolePermissions["edit"] = 1] = "edit";
    rolePermissions[rolePermissions["delete"] = 2] = "delete";
    rolePermissions[rolePermissions["view"] = 3] = "view";
})(rolePermissions || (rolePermissions = {}));
function reportRolePermission(permission) {
    console.log("Role permissions: ".concat(rolePermissions));
}
reportRolePermission(rolePermissions.create);
reportRolePermission(rolePermissions.edit);
reportRolePermission(rolePermissions.delete);
reportRolePermission(rolePermissions.view);
