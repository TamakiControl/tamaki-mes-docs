---
sidebar_position: 12
title: "deleteDepartments"
description: "Deletes multiple departments with the given IDs or paths."
---

# system.mes.personnel.deleteDepartments

## Description

Deletes multiple [Personnel Department](../../data-model/personnel-model/personnel-department) records by their IDs or paths.
This cannot delete any departments that have references to them.


## Permissions

This method requires the `PERSONNEL.WRITE.DELETE` permission.

## Syntax

```
system.mes.personnel.deleteDepartments(idsOrPaths)
```

## Parameters

| Parameter    | Type                 | Nullable | Description                                               |
| ------------ |---------------------|----------| --------------------------------------------------------- |
| `idsOrPaths` | `List<String>`      | False    | List of IDs or paths of the departments to delete.        |

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
# Delete multiple departments by IDs or paths
system.mes.personnel.deleteDepartments(['01JAP8R5RT-3FPXQABY-7KQZT6VF', '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'])
```