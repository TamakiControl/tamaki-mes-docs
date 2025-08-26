---
sidebar_position: 10
title: "getShiftReferences"
description: "Retrieves a list of references to a schedule shift with the given ID."
---

# system.mes.schedule.shift.getShiftReferences

## Description

Retrieves a list of references to a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record by
its ID.

## Syntax

```python
system.mes.schedule.shift.getShiftReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the schedule shift to inspect. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                           |
|--------------|---------------------|-----------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that contains references to the schedule shift. |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to referencing rows.               |

The JSON objects in `references` have the following properties:

| Name        | Type            | Description                                                    |
|-------------|-----------------|----------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                            |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the schedule shift. |

## Code Examples

```python
refs = system.mes.schedule.shift.getShiftReferences('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(refs)
```
