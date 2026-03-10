---
sidebar_position: 28
title: 'getPerformanceReason'
description: 'Retrieves an OEE performance reason by its ID.'
---

# system.mes.oee.getPerformanceReason

## Description

Retrieves an OEE Performance Reason by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getPerformanceReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                     |
|-----------|-----------------|----------|-------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the performance reason to retrieve. |

## Returns

Returns a JSON representation of an `OeePerformanceReasonDTO` object if found, or `None` if the performance reason
doesn't exist.

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
# Get a specific performance reason
reasonId = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"
reason = system.mes.oee.getPerformanceReason(reasonId)

if reason:
    print reason['name'], reason['code']
else:
    print "Performance reason not found"
```

