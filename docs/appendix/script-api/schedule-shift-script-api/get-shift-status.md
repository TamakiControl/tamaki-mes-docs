---
sidebar_position: 11
title: "getShiftStatus"
description: "Retrieves the status of a schedule shift."
---

# system.mes.schedule.shift.getShiftStatus

## Description

Retrieves the status of a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift). It evaluates the most
recent shift record to determine the current status.

## Syntax

```python
system.mes.schedule.shift.getShiftStatus(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the schedule shift to inspect. |

## Returns

Returns a `String` (Enum) representing the status. Possible values include: `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`,
`CANCELLED`, `UNKNOWN`, `PAUSED`.

## Code Examples

```python
status = system.mes.schedule.shift.getShiftStatus('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(status)
```
