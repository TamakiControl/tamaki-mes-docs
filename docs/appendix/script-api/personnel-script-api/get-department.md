---
sidebar_position: 9
title: "getDepartment"
description: "Retrieves a department by its ID or path."
---

# system.mes.personnel.getDepartment

## Description

Retrieves a [Personnel Department](../../data-model/personnel-model/personnel-department) record by its ID or path.

## Syntax

```
system.mes.personnel.getDepartment(idOrPath)
```

## Parameters

| Parameter   | Type   | Nullable | Description                                         |
| ----------- | ------ | -------- | --------------------------------------------------- |
| `idOrPath`  | `String` | False    | The ID or path of the department to retrieve.       |

## Returns

Returns a JSON object representing the department if found, or `null` if no department exists with the given ID or path.

## Code Examples

```
# Retrieve a department by ID or path
department = system.mes.personnel.getDepartment('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
# or
department = system.mes.personnel.getDepartment('Corporate/Engineering')

# Output the department
print(department)
```