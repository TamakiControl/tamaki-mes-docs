---
sidebar_position: 21
title: "getShiftRecordStatus"
description: "Retrieves the status of a schedule shift record."
---

# system.mes.schedule.shift.getShiftRecordStatus

## Description

Retrieves the status of a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record).

## Syntax

```python
system.mes.schedule.shift.getShiftRecordStatus(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                   |
|-----------|-----------------|----------|-----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the schedule shift record to check. |

## Returns

Returns a `String` (Enum) representing the status. Possible values include: `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`,
`CANCELLED`, `UNKNOWN`, `PAUSED`.

## Code Examples

```python
status = system.mes.schedule.shift.getShiftRecordStatus('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(status)
```
