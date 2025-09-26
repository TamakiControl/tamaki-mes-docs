---
sidebar_position: 7
title: "getAllDepartments"
description: "Retrieves all departments."
---

# system.mes.personnel.getAllDepartments

## Description

Retrieves a list of all [Personnel Department](../../data-model/personnel-model/personnel-department) records in the system.

## Syntax

```
system.mes.personnel.getAllDepartments()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all departments.

## Code Examples

```
# Retrieve all departments
allDepartments = system.mes.personnel.getAllDepartments()

# Output the list of departments
print(allDepartments)
```