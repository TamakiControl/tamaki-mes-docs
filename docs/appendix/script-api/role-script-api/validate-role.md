---
title: 'validateRole'
description: 'Validates a role object.'
---

# system.mes.role.validateRole

## Description

Validates a [Role](../../data-model/personnel-model/role) object based on the provided parameters. Returns a JSON dictionary of validation violations for each field.

## Permissions

This method requires the `SYSTEM.ADMIN` permission.

## Syntax

```python
system.mes.role.validateRole(**roleData)
```

## Parameters

| Parameter             | Type            | Nullable | Description                                                                                              |
| --------------------- | --------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `id`                  | `String` (ULID) | True     | The ULID of the role (optional, used for updating an existing role).                                     |
| `enabled`             | `Boolean`       | True     | Indicates if the role is active and enabled.                                                             |
| `notes`               | `String`        | True     | Notes related to the role.                                                                               |
| `spare1`              | `String`        | True     | Additional field for user-defined context.                                                               |
| `spare2`              | `String`        | True     | Additional field for user-defined context.                                                               |
| `spare3`              | `String`        | True     | Additional field for user-defined context.                                                               |
| `securityLevels`      | `List<String>`  | False    | List of Ignition security levels required for this role.                                                 |
| `permissions`         | `List<String>`  | False    | List of MES permissions granted by this role.                                                            |
| `roleRequirementType` | `Enum`          | False    | Specifies if all or any security levels are required to grant permissions. See RoleRequirementType enum. |

## Returns

Returns a JSON dictionary of validation violations. Each key is a field name, and each value is a list of violations for that field.

## Code Examples

```python
# Generate the object structure for a new role object, set the initial arguments and validate it
role = system.mes.role.newRole()
role['securityLevels'] = ['Authenticated/Roles/Administrator']
role['permissions'] = ['MATERIALS.WRITE', 'INVENTORY.READ']
role['roleRequirementType'] = 'ALL_OF'
violations = system.mes.role.validateRole(**role)

# Output the JSON dictionary of validation violations
print(violations)
```
