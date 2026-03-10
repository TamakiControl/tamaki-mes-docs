---
sidebar_position: 31
title: 'getAllPerformanceReasonPathsByLocation'
description: 'Retrieves all performance reason paths for a specific location as a list of full hierarchical path strings.'
---

# system.mes.oee.getAllPerformanceReasonPathsByLocation

## Description

Retrieves the full hierarchical path for all OEE Performance Reasons configured for a specific location. This method
returns a simple list of strings, where each string is the complete path of a performance reason.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllPerformanceReasonPathsByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                               |
|--------------------|----------|----------|---------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns paths for all locations. |

## Returns

A list of strings, where each string is the full hierarchical path of a performance reason (e.g.,
`"Equipment/Mechanical/Pump Failure"`).

## Code Examples

```python
# Get all performance reason paths for a specific location
location = "Site/Area/Line 1"
reasonPaths = system.mes.oee.getAllPerformanceReasonPathsByLocation(location)

for path in reasonPaths:
    print path
```

