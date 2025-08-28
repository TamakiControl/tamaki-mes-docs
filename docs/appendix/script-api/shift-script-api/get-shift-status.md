---
sidebar_position: 11
title: "getShiftStatus"
description: "Retrieves the status of a shift."
---

# system.mes.shift.getShiftStatus

## Description

Retrieves the status of a [Shifts](../../data-model/shift-model/shift). It evaluates the most
recent shift record to determine the current status.

## Syntax

```python
system.mes.shift.getShiftStatus(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                       |
|-----------|-----------------|----------|-----------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the shift to inspect.   |

## Returns

Returns a `String` (Enum) representing the status. Possible values include: `IDLE`, `ACTIVE`, `CLOSED`, `VERIFIED`.

## Code Examples

```python
status = system.mes.shift.getShiftStatus('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(status)
```
