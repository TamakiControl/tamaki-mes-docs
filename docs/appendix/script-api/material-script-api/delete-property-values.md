---
sidebar_position: 50
title: "deletePropertyValues"
description: "Deletes all specified material property values with the given IDs."
---

# system.mes.material.deletePropertyValues

## Description

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records by the given IDs.
This cannot delete any material property value with references to it.


## Permissions

This method requires the `MATERIAL.WRITE.DELETE` permission.

## Syntax

```python
system.mes.material.deletePropertyValues(ids)
```

## Parameters

| Parameter | Type                  | Nullable | Description                                            |
|-----------|-----------------------|----------|--------------------------------------------------------|
| `ids`     | `List<String>` (ULID) | False    | List of IDs of the material property values to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete all material property value by the given IDs
system.mes.material.deletePropertyValues(['01JRDP4APW-5D56ZQ8C-8949XKYT','01JRE81R3T-YEV59020-VHK88GPN'])
```
