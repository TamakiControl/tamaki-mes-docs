---
sidebar_position: 21
title: "getShiftRecordStatus"
description: "Retrieves the status of a shift record."
---

# system.mes.shift.getShiftRecordStatus

## Description

Retrieves the status of a [Shift Records](../../data-model/shift-model/shift-record).


## Permissions

This method requires the `SHIFT.READ.GET` permission.

## Syntax

```python
system.mes.shift.getShiftRecordStatus(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                          |
|-----------|-----------------|----------|--------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the shift record to check. |

## Returns

Returns a `String` (Enum) representing the status. Possible values include: `IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`.

## Code Examples

```python
status = system.mes.shift.getShiftRecordStatus('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(status)
```
