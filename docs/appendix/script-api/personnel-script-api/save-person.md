---
sidebar_position: 4
title: "savePerson"
description: "Creates or updates a person with specified parameters."
---

# system.mes.personnel.savePerson

## Description

Creates or updates a [Person](../../data-model/personnel-model/personnel) record in the system based on the provided parameters.


## Permissions

This method requires the `PERSONNEL.WRITE.SAVE` permission.

## Syntax

```
system.mes.personnel.savePerson(**person_data)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                |
| ----------------- | --------------- |----------|----------------------------------------------------------------------------|
| `departmentId`    | `String` (ULID)   | True     | The ULID of the department this person is assigned to.                     |
| `departmentName`  | `String`          | True     | The name of the department.                                                |
| `departmentPath`  | `String`          | True     | The path of the department.                                                |
| `personStatus`    | `String` (Enum)   | False    | The status of the person (`ACTIVE` or `INACTIVE`). Default Value is `ACTIVE` |
| `firstName`       | `String`          | False    | The first name of the person.                                              |
| `lastName`        | `String`          | False    | The last name of the person.                                               |
| `initials`        | `String`          | True     | The initials of the person.                                                |
| `username`        | `String`          | False    | The username of the person.                                                |
| `id`              | `String` (ULID)   | True     | The ULID of the person (optional, used for updating an existing person).   |
| `notes`           | `String`          | True     | Notes related to the person.                                               |
| `enabled`         | `Boolean`         | True     | Indicates if the person is active and enabled.                             |
| `spare1`          | `String`          | True     | Additional field for user-defined context.                                 |
| `spare2`          | `String`          | True     | Additional field for user-defined context.                                 |
| `spare3`          | `String`          | True     | Additional field for user-defined context.                                 |

## Returns

Returns a JSON representation of the saved person.

## Code Examples

```
# Generate the object structure for a new person object, set the initial arguments and save it
person = system.mes.personnel.newPerson()
person['firstName'] = 'John'
person['lastName'] = 'Doe'
person['username'] = 'jdoe'
person['departmentId'] = '01JAP8R5RT-3FPXQABY-7KQZT6VF'
savedPerson = system.mes.personnel.savePerson(**person)

```