---
sidebar_position: 32
title: 'savePerformanceReason'
description: 'Creates or updates an OEE performance reason.'
---

# system.mes.oee.savePerformanceReason

## Description

Creates or updates an OEE Performance Reason record in the system. To create a new performance reason, first generate
a new object with [`system.mes.oee.newPerformanceReason`](./new-performance-reason).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.savePerformanceReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeePerformanceReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                   | Default Value |
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

## Returns

A JSON representation of the saved `OeePerformanceReasonDTO` object.

## Code Examples

```python
# Create a new performance reason object
newReason = system.mes.oee.newPerformanceReason()

# Set attributes for the new reason
newReason['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newReason['name'] = 'Slow Conveyor'
newReason['enabled'] = True

# Save the new performance reason
savedReason = system.mes.oee.savePerformanceReason(**newReason)

print "Saved Performance Reason with ID:", savedReason['id']

# To update an existing reason, include its ID
# updatedReasonData = system.mes.oee.getPerformanceReason(savedReason['id'])
# updatedReasonData['name'] = 'Slow Conveyor'
# system.mes.oee.savePerformanceReason(**updatedReasonData)
```

