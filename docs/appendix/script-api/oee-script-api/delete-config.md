---
sidebar_position: 6
title: 'deleteConfig'
description: 'Deletes an OEE configuration record by its ID.'
---

# system.mes.oee.deleteConfig

Deletes an OEE Configuration record by its ID. This operation cannot delete a configuration that has references to it from other system components.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.deleteConfig(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
| --------- | --------------- | -------- | -------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the OEE configuration to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the oee config that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee config by ID
system.mes.oee.deleteConfig('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```
