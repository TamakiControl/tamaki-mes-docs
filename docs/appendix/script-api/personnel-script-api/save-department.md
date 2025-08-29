---
sidebar_position: 4
title: "saveDepartment"
description: "Creates or updates a department with specified parameters."
---

# system.mes.personnel.saveDepartment

## Description

Creates or updates a [Personnel Department](../../data-model/personnel-model/personnel-department) record in the system based on the provided parameters.

## Syntax

```
system.mes.personnel.saveDepartment(**department_data)
```

## Parameters

| Parameter     | Type            | Description                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------- |
| `name`        | String          | The name of the department.                                                              |
| `description` | String          | The description of the department.                                                       |
| `path`        | String          | The path to the department.                                                              |
| `parentId`    | String (ULID)   | The ULID of the parent department to this department.                                    |
| `id`          | String (ULID)   | The ULID of the department (optional, used for updating an existing department).         |
| `notes`       | String          | Notes related to the department.                                                         |
| `enabled`     | Boolean         | Indicates if the department is active and enabled.                                       |
| `spare1`      | String          | Additional field for user-defined context.                                               |
| `spare2`      | String          | Additional field for user-defined context.                                               |
| `spare3`      | String          | Additional field for user-defined context.                                               |

## Returns

Returns a JSON representation of the saved department.

## Code Examples

```
# Generate the object structure for a new department object, set the initial arguments and save it
new_department = system.mes.personnel.newDepartment()
new_department['name'] = 'Engineering'
saved_department = system.mes.personnel.saveDepartment(**new_department)

# Output the JSON representation of the saved department
print(saved_department)

# Generate the object structure for another new department to update the previous department
department_data = system.mes.personnel.newDepartment()

# Set basic attributes for the updated department
department_data['id'] = saved_department.id
department_data['name'] = 'Engineering'
department_data['description'] = 'Handles engineering tasks'
# (You can continue setting other properties as needed here)

# Save the department to update it in the system
updated_department = system.mes.personnel.saveDepartment(**department_data)

# Output the JSON representation of the updated department
print(updated_department)
```