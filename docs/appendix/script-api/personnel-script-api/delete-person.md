---
sidebar_position: 8
title: "deletePerson"
description: "Deletes the person with the given ID or username."
---

# system.mes.personnel.deletePerson

## Description

Deletes a [Person](../../data-model/personnel-model/personnel) by their ID or username.
This cannot delete a person with references to them.

## Syntax

```
system.mes.personnel.deletePerson(idOrUsername)
```

## Parameters

| Parameter      | Type   | Nullable | Description                                 |
|----------------| ------ |----------|---------------------------------------------|
| `idOrUsername` | `String` | False    | The ID or username of the person to delete. |

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
# Delete a person by ID
system.mes.personnel.deletePerson('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```