---
sidebar_position: 4
title: "savePerson"
description: "Creates or updates a person with specified parameters."
---

# system.mes.personnel.savePerson

## Description

Creates or updates a [Person](../../data-model/personnel-model/personnel) record in the system based on the provided parameters.

## Syntax

```
system.mes.personnel.savePerson(**person_data)
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

Returns a JSON representation of the saved person.

## Code Examples

```
# Generate the object structure for a new person object, set the initial arguments and save it
new_person = system.mes.personnel.newPerson()
new_person['firstName'] = 'John'
new_person['lastName'] = 'Doe'
new_person['username'] = 'jdoe'
new_person['departmentId'] = '01JAP8R5RT-3FPXQABY-7KQZT6VF'
saved_person = system.mes.personnel.savePerson(**new_person)

# Output the JSON representation of the saved person
print(saved_person)

# Generate the object structure for another new person to update the previous person
person_data = system.mes.personnel.newPerson()

# Set basic attributes for the updated person
person_data['id'] = saved_person.id
person_data['firstName'] = 'John'
person_data['lastName'] = 'Doe'
person_data['personStatus'] = 'INACTIVE'
# (You can continue setting other properties as needed here)

# Save the person to update it in the system
updated_person = system.mes.personnel.savePerson(**person_data)

# Output the JSON representation of the updated person
print(updated_person)
```