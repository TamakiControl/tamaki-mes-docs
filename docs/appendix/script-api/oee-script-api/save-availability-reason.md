---
sidebar_position: 24
title: 'saveAvailabilityReason'
description: 'Creates or updates an OEE availability reason.'
---

# system.mes.oee.saveAvailabilityReason

## Description

Creates or updates an OEE Availability Reason record in the system. To create a new availability reason, first generate
a new object with [`system.mes.oee.newAvailabilityReason`](./new-availability-reason).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveAvailabilityReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeeAvailabilityReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                    | Default Value |
|----------------|-----------|----------|--------------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Availability Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this availability reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this availability reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent availability reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this availability reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the availability reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the availability reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the availability reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Availability Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Availability Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                                  | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                                  | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                                  | `null`        |

## Returns

A JSON representation of the saved `OeeAvailabilityReasonDTO` object.

## Code Examples

```python
# Create a new availability reason object
newReason = system.mes.oee.newAvailabilityReason()

# Set attributes for the new reason
newReason['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newReason['name'] = 'Jam'
newReason['enabled'] = True

# Save the new availability reason
savedReason = system.mes.oee.saveAvailabilityReason(**newReason)

print "Saved Availability Reason with ID:", savedReason['id']

# To update an existing reason, include its ID
# updatedReasonData = system.mes.oee.getAvailabilityReason(savedReason['id'])
# updatedReasonData['name'] = 'Mechanical Jam'
# system.mes.oee.saveAvailabilityReason(**updatedReasonData)
```
