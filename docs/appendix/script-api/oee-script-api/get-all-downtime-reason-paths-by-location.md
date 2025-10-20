---
sidebar_position: 35
title: 'getAllDowntimeReasonPathsByLocation'
description: 'Retrieves all downtime reason paths for a specific location as a list of full hierarchical path strings.'
---

# system.mes.oee.getAllDowntimeReasonPathsByLocation

## Description

Retrieves the full hierarchical path for all OEE Downtime Reasons configured for a specific location. This method returns a simple list of strings, where each string is the complete path of a downtime reason.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllDowntimeReasonPathsByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                  |
| ------------------ | -------- | -------- | ---------------------------------------------------------------------------- |
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If omitted, returns paths for all locations. |

## Returns

A list of strings, where each string is the full hierarchical path of a downtime reason (e.g., `"Equipment/Mechanical/Pump Failure"`).

## Code Examples

```python
# Get all downtime reason paths for a specific location
location = "Site/Area/Line 1"
reason_paths = system.mes.oee.getAllDowntimeReasonPathsByLocation(locationIdOrPath=location)

for path in reason_paths:
    print path
```
