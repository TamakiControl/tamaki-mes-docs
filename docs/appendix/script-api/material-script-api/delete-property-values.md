---
sidebar_position: 50
title: "deletePropertyValues"
description: "Deletes all specified material property values with the given IDs."
---

# system.mes.material.deletePropertyValues

## Description

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records by the given IDs.
This cannot delete any material property value with references to it.

## Syntax

```python
system.mes.material.deletePropertyValues(ids)
```

## Parameters

| Parameter | Type                  | Description                                            |
| --------- | --------------------- | ------------------------------------------------------ |
| `ids`     | `List<String>` (ULID) | List of IDs of the material property values to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete all material property value by the given IDs
system.mes.material.deletePropertyValues(['01JRDP4APW-5D56ZQ8C-8949XKYT','01JRE81R3T-YEV59020-VHK88GPN'])
```
