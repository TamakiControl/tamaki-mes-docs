---
sidebar_position: 10
title: "getShiftReferences"
description: "Retrieves a list of references to a shift with the given ID."
---

# system.mes.shift.getShiftReferences

## Description

Retrieves a list of references to a [Shifts](../../data-model/shift-model/shift) record by
its ID.


## Permissions

This method requires the `SHIFT.READ.GET` permission.

## Syntax

```python
system.mes.shift.getShiftReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                    |
|-----------|-----------------|----------|--------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the shift to inspect. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                  |
|--------------|---------------------|--------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that contains references to the shift. |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to referencing rows.      |

The JSON objects in `references` have the following properties:

| Name        | Type            | Description                                           |
|-------------|-----------------|-------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                   |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the shift. |

## Code Examples

```python
refs = system.mes.shift.getShiftReferences('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(refs)
```
