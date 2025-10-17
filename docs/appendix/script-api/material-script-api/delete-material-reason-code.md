---
sidebar_position: 60
title: "deleteMaterialReasonCode"
description: "Deletes the material reason code with the given ID."
---

# system.mes.material.deleteMaterialReasonCode

## Description

Deletes a [Material Reason Codes](../../data-model/material-model/material-reason-code) record by its ID.
This cannot delete a material reason code with references to it.


## Permissions

This method requires the `MATERIAL.WRITE.DELETE` permission.

## Syntax

```python
system.mes.material.deleteMaterialReasonCode(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                   |
|-----------|-----------------|----------|-----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the material reason code to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the material reason code that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a material reason code by ID
system.mes.material.deleteMaterialReasonCode('01JRG9XR3F-2ZQ532FM-TPR50GY6')
```
