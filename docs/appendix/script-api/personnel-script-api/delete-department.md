---
sidebar_position: 11
title: "deleteDepartment"
description: "Deletes the department with the given ID or path."
---

# system.mes.personnel.deleteDepartment

## Description

Deletes a [Personnel Department](../../data-model/personnel-model/personnel-department) record by its ID or path.
This cannot delete a department with references to it.

## Syntax

```
system.mes.personnel.deleteDepartment(idOrPath)
```

## Parameters

| Parameter  | Type     | Description                                         |
| ---------- | -------- | --------------------------------------------------- |
| `idOrPath` | `String` | The ID or path of the department to delete.         |

## Returns

If successful, an ApiResponse object is returned with the `success` bool set to `true`. If unsuccessful, an exception is thrown or an ApiResponse object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```
# Delete a department by ID or path
system.mes.personnel.deleteDepartment('01JAP8R5RT-3FPXQABY-7KQZT6VF')
```