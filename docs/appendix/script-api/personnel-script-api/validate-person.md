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

| Parameter         | Type            | Description                                                                              |
| ----------------- | --------------- | ---------------------------------------------------------------------------------------- |
| `departmentId`    | String (ULID)   | The ULID of the department this person is assigned to.                                   |
| `departmentName`  | String          | The name of the department.                                                              |
| `departmentPath`  | String          | The path of the department.                                                              |
| `personStatus`    | String (Enum)   | The status of the person (`ACTIVE` or `INACTIVE`).                                       |
| `firstName`       | String          | The first name of the person.                                                            |
| `lastName`        | String          | The last name of the person.                                                             |
| `initials`        | String          | The initials of the person.                                                              |
| `username`        | String          | The username of the person.                                                              |
| `id`              | String (ULID)   | The ULID of the person (optional, used for updating an existing person).                 |
| `notes`           | String          | Notes related to the person.                                                             |
| `enabled`         | Boolean         | Indicates if the person is active and enabled.                                           |
| `spare1`          | String          | Additional field for user-defined context.                                               |
| `spare2`          | String          | Additional field for user-defined context.                                               |
| `spare3`          | String          | Additional field for user-defined context.                                               |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```
# Generate the object structure for a new person object
person_data = system.mes.personnel.newPerson()

# Set basic attributes for the new person
person_data['firstName'] = 'John'
person_data['lastName'] = 'Doe'
person_data['username'] = 'jdoe'
person_data['departmentId'] = '01JAP8R5RT-3FPXQABY-7KQZT6VF'
# (You can continue setting other properties as needed here)

# Validate person parameters
validation_errors = system.mes.personnel.validatePerson(**person_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Person parameters are valid.')
```