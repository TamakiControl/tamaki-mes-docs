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

| Parameter     | Type            | Nullable | Description                                                                              |
| ------------- | --------------- |----------| ---------------------------------------------------------------------------------------- |
| `name`        | String          | False    | The name of the department.                                                              |
| `description` | String          | True     | The description of the department.                                                       |
| `path`        | String          | True     | The path to the department.                                                              |
| `parentId`    | String (ULID)   | True     | The ULID of the parent department to this department.                                    |
| `id`          | String (ULID)   | True     | The ULID of the department (optional, used for updating an existing department).         |
| `notes`       | String          | True     | Notes related to the department.                                                         |
| `enabled`     | Boolean         | True     | Indicates if the department is active and enabled.                                       |
| `spare1`      | String          | True     | Additional field for user-defined context.                                               |
| `spare2`      | String          | True     | Additional field for user-defined context.                                               |
| `spare3`      | String          | True     | Additional field for user-defined context.                                               |

## Returns

Returns a JSON representation of the saved department.

## Code Examples

```
# Generate the object structure for a new department object, set the initial arguments and save it
department = system.mes.personnel.newDepartment()
department['name'] = 'Engineering'
savedDepartment = system.mes.personnel.saveDepartment(**newDepartment)
```