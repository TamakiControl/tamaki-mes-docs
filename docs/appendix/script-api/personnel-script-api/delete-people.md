---
sidebar_position: 9
title: "deletePeople"
description: "Deletes multiple people with the given IDs or usernames."
---

# system.mes.personnel.deletePeople

## Description

Deletes multiple [Person](../../data-model/personnel-model/personnel) records by their IDs or usernames.
This cannot delete any people that have references to them.


## Permissions

This method requires the `PERSONNEL.WRITE.DELETE` permission.

## Syntax

```
system.mes.personnel.deletePeople(ids)
```

## Parameters

| Parameter        | Type                 | Nullable | Description                                       |
|------------------|----------------------|----------|---------------------------------------------------|
| `idsOrUsernames` | `List<String>` | False    | List of IDs or usernames of the people to delete. |

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
# Delete multiple people by IDs
system.mes.personnel.deletePeople(['01JAP8RJBN-8ZTPXSGY-J9GSDPE1', '01JAP8R5RT-3FPXQABY-7KQZT6VF'])
```