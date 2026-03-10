---
sidebar_position: 23
title: 'getAllAvailabilityReasonPathsByLocation'
description: 'Retrieves all availability reason paths for a specific location as a list of full hierarchical path strings.'
---

# system.mes.oee.getAllAvailabilityReasonPathsByLocation

## Description

Retrieves the full hierarchical path for all OEE Availability Reasons configured for a specific location. This method returns a simple list of strings, where each string is the complete path of a availability reason.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllAvailabilityReasonPathsByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                               |
| ------------------ | -------- | -------- |---------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns paths for all locations. |

## Returns

A list of strings, where each string is the full hierarchical path of a availability reason (e.g., `"Equipment/Mechanical/Pump Failure"`).

## Code Examples

```python
# Get all availability reason paths for a specific location
location = "Site/Area/Line 1"
reasonPaths = system.mes.oee.getAllAvailabilityReasonPathsByLocation(location)

for path in reasonPaths:
    print path
```
