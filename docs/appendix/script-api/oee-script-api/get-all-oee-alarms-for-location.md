---
sidebar_position: 9
title: "getAllOeeAlarmsForLocation"
description: "Gets all alarms configured for a location."
---

# system.mes.oee.getAllOeeAlarmsForLocation

## Description

Retrieves all [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations for a specific location.

## Syntax

```python
system.mes.oee.getAllOeeAlarmsForLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                              |
|--------------------|----------|----------|----------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to get alarm configurations for. |

## Returns

Returns a list of JSON objects representing all OEE alarm configurations for the location.

## Code Examples

```python
# Get all alarms for a location
alarms = system.mes.oee.getAllOeeAlarmsForLocation('DairyCo/Plant1/Line1')

# Output all alarms
for alarm in alarms:
    print(f"Tag: {alarm['tagPath']}, Min Priority: {alarm['minPriority']}")
```
