---
sidebar_position: 2
title: "newPerson"
description: "Generates an empty non-persisted person object to provide the structure to retrieve records from the database."
---

# system.mes.personnel.newPerson

Generates an empty non-persisted [Person](../../data-model/personnel-model/personnel) object to provide the structure required by the API to save a new record into the database. This method must be combined with the [savePerson](./save-person) method in order to persist the record.

## Syntax

```
system.mes.personnel.newPerson()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created person object. The following is a list of keys and default values:

| Key            | Default Value |
| -------------- | ------------- |
| `departmentId` | `""`          |
| `departmentName` | `null`      |
| `departmentPath` | `null`      |
| `personStatus` | `ACTIVE`      |
| `firstName`    | `""`          |
| `lastName`     | `""`          |
| `initials`     | `""`          |
| `username`     | `""`          |
| `id`           | `null`        |
| `notes`        | `null`        |
| `enabled`      | `true`        |
| `spare1`       | `null`        |
| `spare2`       | `null`        |
| `spare3`       | `null`        |

## Code Examples

```
# Generate the object structure for a new person object with no initial arguments
person = system.mes.personnel.newPerson()

# Set basic attributes for the new person
person['firstName'] = ''
person['lastName'] = ''
person['initials'] = ''
person['username'] = ''
person['departmentId'] = ''
person['personStatus'] = 'ACTIVE'
# (You can continue setting other properties as needed here)

# Save the new person to the system
savedPerson = system.mes.personnel.savePerson(**person)

# Output the JSON representation of the saved person
print(savedPerson)
```