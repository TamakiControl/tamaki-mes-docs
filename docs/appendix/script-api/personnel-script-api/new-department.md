---
sidebar_position: 1
title: "newDepartment"
description: "Generates an empty non-persisted department object to provide the structure to retrieve records from the database."
---

# system.mes.personnel.newDepartment

Generates an empty non-persisted [Personnel Department](../../data-model/personnel-model/personnel-department) object to provide the structure required by the API to save a new record into the database. This method must be combined with the [saveDepartment](./save-department) method in order to persist the record.

## Syntax

```
system.mes.personnel.newDepartment()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created department object. The following is a list of keys and default values:

| Key           | Default Value |
| ------------- | ------------- |
| `name`        | `null`        |
| `description` | `null`        |
| `path`        | `null`        |
| `parentId`    | `null`        |
| `id`          | `null`        |
| `notes`       | `null`        |
| `enabled`     | `true`        |
| `spare1`      | `null`        |
| `spare2`      | `null`        |
| `spare3`      | `null`        |

## Code Examples

```
# Generate the object structure for a new department object with no initial arguments
new_department = system.mes.personnel.newDepartment()

# Set basic attributes for the new department
new_department['name'] = 'Engineering'
# (You can continue setting other properties as needed here)

# Save the new department to the system
saved_department = system.mes.personnel.saveDepartment(**new_department)

# Output the JSON representation of the saved department
print(saved_department)
```