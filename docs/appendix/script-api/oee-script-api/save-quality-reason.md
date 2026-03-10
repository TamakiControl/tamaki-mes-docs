---
sidebar_position: 40
title: 'saveQualityReason'
description: 'Creates or updates an OEE quality reason.'
---

# system.mes.oee.saveQualityReason

## Description

Creates or updates an OEE Quality Reason record in the system. To create a new quality reason, first generate
a new object with [`system.mes.oee.newQualityReason`](./new-quality-reason).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveQualityReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeeQualityReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                 | Default Value |
|----------------|-----------|----------|-----------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Quality Reason                                                | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this quality reason applies     | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this quality reason applies           | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent quality reason, if applicable                      | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this quality reason                       | `0`           |
| `name`         | `String`  | `False`  | Name of the quality reason                                                  | `null`        |
| `description`  | `String`  | `True`   | Description of the quality reason                                           | `null`        |
| `path`         | `String`  | `True`   | Path representation of the quality reason within a hierarchical structure   | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Quality Reason                                    | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Quality Reason is enabled                             | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                               | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                               | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                               | `null`        |

## Returns

A JSON representation of the saved `OeeQualityReasonDTO` object.

## Code Examples

```python
# Create a new quality reason object
newReason = system.mes.oee.newQualityReason()

# Set attributes for the new reason
newReason['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newReason['name'] = 'Bad Packaging'
newReason['enabled'] = True

# Save the new quality reason
savedReason = system.mes.oee.saveQualityReason(**newReason)

print "Saved Quality Reason with ID:", savedReason['id']

# To update an existing reason, include its ID
# updatedReasonData = system.mes.oee.getQualityReason(savedReason['id'])
# updatedReasonData['name'] = 'Mechanical Jam'
# system.mes.oee.saveQualityReason(**updatedReasonData)
```

