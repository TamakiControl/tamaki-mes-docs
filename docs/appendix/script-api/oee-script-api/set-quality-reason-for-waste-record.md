---
sidebar_position: 47
title: 'setQualityReasonForWasteRecord'
description: 'Sets a quality reason for a specific OEE waste record.'
---

# system.mes.oee.setQualityReasonForWasteRecord

## Description

Sets a quality reason for a specific OEE waste record, with optional notes.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setQualityReasonForWasteRecord(oeeWasteRecordId, qualityReasonId=None, notes=None)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                     |
|--------------------|----------|----------|-----------------------------------------------------------------|
| `oeeWasteRecordId` | `String` | False    | The ID of the OEE waste record to update.                       |
| `qualityReasonId`  | `String` | True     | The ID of the quality reason to assign. Set to `None` to clear. |
| `notes`            | `String` | True     | Optional notes to add to the waste record.                      |

## Returns

A JSON representation of the updated `OeeWasteRecordDTO` object.

| Name                            | Type      | Nullable | Description                                                                    | Default Value   |
|---------------------------------|-----------|----------|--------------------------------------------------------------------------------|-----------------|
| `id`                            | `String`  | `True`   | The id of the OEE Waste Record                                                 | `null`          |
| `locationId`                    | `String`  | `False`  | Identifier of the associated location where this OEE waste record was captured | `null`          |
| `locationPath`                  | `String`  | `True`   | Path of the location where this OEE waste record was captured                  | `null`          |
| `locationName`                  | `String`  | `True`   | Name of the associated location                                                | `null`          |
| `startDate`                     | `Instant` | `False`  | Start date and time of the OEE waste record                                    | `Instant.now()` |
| `endDate`                       | `Instant` | `True`   | End date and time of the OEE waste record                                      | `null`          |
| `totalDurationSec`              | `Double`  | `False`  | Total duration of the OEE waste record in seconds                              | `0.0`           |
| `qualityReasonId`               | `String`  | `True`   | Identifier of the associated quality reason, if applicable                     | `null`          |
| `qualityReasonName`             | `String`  | `True`   | Name of the associated quality reason. (Name - Code) For display purposes only | `null`          |
| `qualityReasonPath`             | `String`  | `True`   | Path to the current quality reason                                             | `null`          |
| 'qualityReasonCode'             | `String`  | `True`   | Code of the associated quality reason                                          | `null`          |
| `wasteCount`                    | `Double`  | `False`  | Total number of waste units recorded during this period                        | `0.0`           |
| 'wasteCountUnitOfMeasureId'     | `String`  | `True`   | Identifier of the unit of measure for the waste count                          | `null`          |
| 'wasteCountUnitOfMeasureName'   | `String`  | `True`   | Name of the unit of measure for the waste count                                | `null`          |
| 'wasteCountUnitOfMeasureSymbol' | `String`  | `True`   | Symbol of the unit of measure for the waste count                              | `null`          |
| `notes`                         | `String`  | `True`   | Notes associated with the OEE Waste Record                                     | `null`          |
| `enabled`                       | `boolean` | `True`   | Indicates whether the OEE Waste Record is enabled                              | `true`          |
| `spare1`                        | `String`  | `True`   | Extra field 1                                                                  | `null`          |
| `spare2`                        | `String`  | `True`   | Extra field 2                                                                  | `null`          |
| `spare3`                        | `String`  | `True`   | Extra field 3                                                                  | `null`          |

## Code Examples

```python
# Assume we have a waste record ID and a quality reason ID
wasteRecordId = "someWasteRecordId"
reasonId = "some-quality-reason-id"

# Set the quality reason and add a note
try:
    updatedRecord = system.mes.oee.setQualityReasonForWasteRecord(
        oeeWasteRecordId=wasteRecordId,
        qualityReasonId=reasonId,
        notes="Operator confirmed defective units due to packaging fault."
    )
    print "Successfully updated waste record:", updatedRecord['id']
    print "New Reason:", updatedRecord['qualityReasonName']

except Exception as e:
    print "Error updating waste record:", str(e)

# To clear a quality reason
# system.mes.oee.setQualityReasonForWasteRecord(wasteRecordId, None, "Reason cleared.")
```

