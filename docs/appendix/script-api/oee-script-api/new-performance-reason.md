---
sidebar_position: 27
title: 'newPerformanceReason'
description: 'Generates a new, empty performance reason object.'
---

# system.mes.oee.newPerformanceReason

## Description

Generates an empty, non-persisted Performance Reason object. This object provides the structure required to save a new
performance reason record using [`system.mes.oee.savePerformanceReason`](./save-performance-reason).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newPerformanceReason()
```

## Parameters

This method does not take any parameters.

## Returns

A JSON representation of an `OeePerformanceReasonDTO` object with default values, ready to be populated and saved.

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
# Create a new performance reason object
newReason = system.mes.oee.newPerformanceReason()

# Now you can set properties on the new_reason object
newReason['locationId'] = 'some-location-id'
newReason['name'] = 'Slow Conveyor'

# To persist the reason, pass it to the savePerformanceReason function
# savedReason = system.mes.oee.savePerformanceReason(**newReason)
```

