---
sidebar_position: 24
title: 'saveDowntimeReason'
description: 'Creates or updates an OEE downtime reason.'
---

# system.mes.oee.saveDowntimeReason

## Description

Creates or updates an OEE Downtime Reason record in the system. To create a new downtime reason, first generate a new object with [`system.mes.oee.newDowntimeReason`](./new-downtime-reason).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveDowntimeReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeeDowntimeReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
| `id`           | `String`  | `True`   | The id of the Downtime Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this downtime reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this downtime reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent downtime reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this downtime reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the downtime reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the downtime reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the downtime reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Downtime Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Downtime Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## Returns

A JSON representation of the saved `OeeDowntimeReasonDTO` object.

## Code Examples

```python
# Create a new downtime reason object
newReason = system.mes.oee.newDowntimeReason()

# Set attributes for the new reason
newReason['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newReason['name'] = 'Jam'
newReason['path'] = 'Mechanical/Jam'
newReason['enabled'] = True

# Save the new downtime reason
savedReason = system.mes.oee.saveDowntimeReason(**newReason)

print "Saved Downtime Reason with ID:", savedReason['id']

# To update an existing reason, include its ID
# updatedReasonData = system.mes.oee.getDowntimeReason(savedReason['id'])
# updatedReasonData['name'] = 'Mechanical Jam'
# system.mes.oee.saveDowntimeReason(**updatedReasonData)
```
