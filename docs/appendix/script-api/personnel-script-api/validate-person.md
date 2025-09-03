---
sidebar_position: 10
title: "validatePerson"
description: "Validates the specified parameters for a person."
---

# system.mes.personnel.validatePerson

## Description

Validates the specified parameters for a [Person](../../data-model/personnel-model/personnel) record and returns any validation errors.
This only checks if the person object can be saved based on the attributes given.

## Syntax

```
system.mes.personnel.validatePerson(**person_data)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                |
| ----------------- | --------------- |----------|----------------------------------------------------------------------------|
| `departmentId`    | String (ULID)   | True     | The ULID of the department this person is assigned to.                     |
| `departmentName`  | String          | True     | The name of the department.                                                |
| `departmentPath`  | String          | True     | The path of the department.                                                |
| `personStatus`    | String (Enum)   | False    | The status of the person (`ACTIVE` or `INACTIVE`). Default Value is `ACTIVE` |
| `firstName`       | String          | False    | The first name of the person.                                              |
| `lastName`        | String          | False    | The last name of the person.                                               |
| `initials`        | String          | True     | The initials of the person.                                                |
| `username`        | String          | False    | The username of the person.                                                |
| `id`              | String (ULID)   | True     | The ULID of the person (optional, used for updating an existing person).   |
| `notes`           | String          | True     | Notes related to the person.                                               |
| `enabled`         | Boolean         | True     | Indicates if the person is active and enabled.                             |
| `spare1`          | String          | True     | Additional field for user-defined context.                                 |
| `spare2`          | String          | True     | Additional field for user-defined context.                                 |
| `spare3`          | String          | True     | Additional field for user-defined context.                                 |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```
person = system.mes.personnel.newPerson()
person['firstName'] = 'John'
person['lastName'] = 'Doe'
person['username'] = 'jdoe'
person['departmentId'] = '01JAP8R5RT-3FPXQABY-7KQZT6VF'
violations = system.mes.personnel.validatePerson(**person)
```