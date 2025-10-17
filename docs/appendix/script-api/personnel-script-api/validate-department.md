---
sidebar_position: 10
title: "validateDepartment"
description: "Validates the specified parameters for a department."
---

# system.mes.personnel.validateDepartment

## Description

Validates the specified parameters for a [Personnel Department](../../data-model/personnel-model/personnel-department) record and returns any validation errors.
This only checks if the department object can be saved based on the attributes given.


## Permissions

This method requires the `PERSONNEL.READ.VALIDATE` permission.

## Syntax

```
system.mes.personnel.validateDepartment(**department_data)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                                                              |
| ------------- | --------------- |----------| ---------------------------------------------------------------------------------------- |
| `name`        | `String`          | False    | The name of the department.                                                              |
| `description` | `String`          | True     | The description of the department.                                                       |
| `path`        | `String`          | True     | The path to the department.                                                              |
| `parentId`    | `String` (ULID)   | True     | The ULID of the parent department to this department.                                    |
| `id`          | `String` (ULID)   | True     | The ULID of the department (optional, used for updating an existing department).         |
| `notes`       | `String`          | True     | Notes related to the department.                                                         |
| `enabled`     | `Boolean`         | True     | Indicates if the department is active and enabled.                                       |
| `spare1`      | `String`          | True     | Additional field for user-defined context.                                               |
| `spare2`      | `String`          | True     | Additional field for user-defined context.                                               |
| `spare3`      | `String`          | True     | Additional field for user-defined context.                                               |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```
department = system.mes.personnel.newDepartment()
department['name'] = 'Engineering'
violations = system.mes.personnel.validateDepartment(**department)
```