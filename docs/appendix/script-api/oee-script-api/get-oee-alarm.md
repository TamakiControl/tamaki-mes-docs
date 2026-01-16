---
sidebar_position: 8
title: "getOeeAlarm"
description: "Retrieves an OEE alarm configuration by ID."
---

# system.mes.oee.getOeeAlarm

## Description

Retrieves an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration by its ID.

## Syntax

```python
system.mes.oee.getOeeAlarm(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE alarm to retrieve.     |

## Returns

Returns a JSON representation of the OEE alarm configuration. Returns nothing if no alarm is found.

## Code Examples

```python
# Retrieve an OEE alarm by ID
alarm = system.mes.oee.getOeeAlarm('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the alarm configuration
print(alarm)
```


