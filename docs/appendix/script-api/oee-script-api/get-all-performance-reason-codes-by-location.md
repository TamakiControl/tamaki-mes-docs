---
sidebar_position: 29
title: 'getAllPerformanceReasonCodesByLocation'
description: 'Retrieves all performance reason codes for a specific location as a flat list.'
---

# system.mes.oee.getAllPerformanceReasonCodesByLocation

## Description

Retrieves all OEE Performance Reasons configured for a specific location as a flat list, regardless of their
hierarchical structure.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllPerformanceReasonCodesByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing `OeePerformanceReasonDTO` objects.

Each object has the following properties:

| Name           | Type      | Nullable | Description                                                                   | Default Value |
|----------------|-----------|----------|-------------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Performance Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this performance reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this performance reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent performance reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this performance reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the performance reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the performance reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the performance reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Performance Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Performance Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                                 | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                                 | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                                 | `null`        |

## Code Examples

```python
# Get all performance reason codes for a specific location
location = "Site/Area/Line 1"
reasons = system.mes.oee.getAllPerformanceReasonCodesByLocation(location)

for reason in reasons:
    print "Code: %d, Name: %s, Path: %s" % (reason['code'], reason['name'], reason['path'])
```

