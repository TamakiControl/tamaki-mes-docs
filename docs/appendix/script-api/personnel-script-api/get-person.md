---
sidebar_position: 3
title: "getPerson"
description: "Retrieves a person object by its ID or username."
---

# system.mes.personnel.getPerson

Retrieves a [Person](../../data-model/personnel-model/personnel) object from the database by its unique ID or username.


## Permissions

This method requires the `PERSONNEL.READ.GET` permission.

## Syntax

```
system.mes.personnel.getPerson(idOrUsername)
```

## Parameters

| Parameter | Type   | Nullable | Description                                          |
| --------- | ------ | -------- |------------------------------------------------------|
| `id`      | `String` | False    | The unique ID or username of the person to retrieve. |

## Returns

Returns a JSON representation of the person object if found. The following is a list of keys and typical values:

| Key            | Type    | Description                                 |
| -------------- | ------- | ------------------------------------------- |
| `departmentId` | `String`  | The department ID the person belongs to.    |
| `departmentName` | `String` | The name of the department.                 |
| `departmentPath` | `String` | The path of the department.                 |
| `personStatus` | `String`  | The status of the person (e.g., `ACTIVE`).  |
| `firstName`    | `String`  | The person's first name.                    |
| `lastName`     | `String`  | The person's last name.                     |
| `initials`     | `String`  | The person's initials.                      |
| `username`     | `String`  | The person's username.                      |
| `id`           | `String`  | The unique ID of the person.                |
| `notes`        | `String`  | Notes about the person.                     |
| `enabled`      | `Boolean` | Whether the person is enabled.              |
| `spare1`       | `String`  | Spare field for additional context.         |
| `spare2`       | `String`  | Spare field for additional context.         |
| `spare3`       | `String`  | Spare field for additional context.         |

## Code Examples

```
# Retrieve a person by ID
person = system.mes.personnel.getPerson('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the JSON representation of the person
print(person)
```