---
sidebar_position: 22
title: "deleteOeeAlarm"
description: "Deletes an OEE alarm configuration."
---

# system.mes.oee.deleteOeeAlarm

## Description

Deletes an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration by its ID. This cannot delete an alarm with references to it.

## Syntax

```python
system.mes.oee.deleteOeeAlarm(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE alarm to delete.       |

## Returns

If successful, an `ApiResponse` object is returned with the `success` bool set to `True`. If unsuccessful, an InUseException is thrown.

## Code Examples

```python
# Delete an OEE alarm
result = system.mes.oee.deleteOeeAlarm('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```