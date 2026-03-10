---
sidebar_position: 46
title: 'setPerformanceReasonForProductionRecord'
description: 'Sets a performance reason for a specific production record.'
---

# system.mes.oee.setPerformanceReasonForProductionRecord

## Description

Sets a performance reason for a specific OEE production record, with optional notes.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setPerformanceReasonForProductionRecord(oeeProductionRecordId, performanceReasonId=None, notes=None)
```

## Parameters

| Parameter               | Type      | Nullable | Description                                                           |
|-------------------------|-----------|----------|-----------------------------------------------------------------------|
| `oeeProductionRecordId` | `String`  | False    | The ID of the OEE production record to update.                        |
| `performanceReasonId`   | `String`  | True     | The ID of the performance reason to assign. Set to `None` to clear.   |
| `notes`                 | `String`  | True     | Optional notes to add to the production record.                       |

## Returns

A JSON representation of the updated `OeeProductionRecordDTO` object.

| Name                             | Type                 | Nullable | Description                                                                         | Default Value   |
|----------------------------------|----------------------|----------|-------------------------------------------------------------------------------------|-----------------|
| `id`                             | `String`             | `True`   | The id of the OEE Production Record                                                 | `null`          |
| `locationId`                     | `String`             | `False`  | Identifier of the associated location where this OEE production record was captured | `null`          |
| `locationPath`                   | `String`             | `True`   | Path of the location where this OEE production record was captured                  | `null`          |
| `locationName`                   | `String`             | `True`   | Name of the associated location                                                     | `null`          |
| `status`                         | `Status`             | `False`  | Status of the OEE production record (e.g., running, faulted, canceled, complete)    | `UNKNOWN`       |
| `startDate`                      | `Instant`            | `False`  | Start date and time of the OEE production record                                    | `Instant.now()` |
| `endDate`                        | `Instant`            | `True`   | End date and time of the OEE production record                                      | `null`          |
| `totalDurationSec`               | `Double`             | `False`  | Total duration of the OEE production record in seconds                              | `0.0`           |
| `performanceReasonId`            | `String`             | `True`   | Identifier of the associated performance reason, if applicable                      | `null`          |
| `performanceReasonName`          | `String`             | `True`   | Name of the associated performance reason. (Name - Code) For display purposes only  | `null`          |
| `performanceReasonPath`          | `String`             | `True`   | Path to the current performance reason                                              | `null`          |
| `infeedCount`                    | `Double`             | `False`  | Total number of infeed units during this record period                              | `0.0`           |
| `expectedInfeedCount`            | `Double`             | `False`  | Expected number of infeed units during this record period                           | `0.0`           |
| `qualityStrategy`                | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Production Record                                     | `WASTE_COUNT`   |
| `outfeedCount`                   | `Double`             | `False`  | Total number of outfeed units recorded during this period                           | `0.0`           |
| `infeedCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the infeed count                              | `null`          |
| `infeedCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the infeed count                                    | `null`          |
| `infeedCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the infeed count                                  | `null`          |
| `infeedRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine infeed rate & standard rate                         | `MINUTES`       |
| `stateRecordId`                  | `String`             | `True`   | Identifier of the associated state record                                           | `null`          |
| `standardRate`                   | `Double`             | `True`   | The standard rate for this record                                                   | `0.0`           |
| `productionOrderId`              | `String`             | `True`   | The id of the production order associated with this OEE production record           | `null`          |
| `productionOrderName`            | `String`             | `True`   | The name of the production order associated with this OEE production record         | `null`          |
| `notes`                          | `String`             | `True`   | Notes associated with the OEE Production Record                                     | `null`          |
| `enabled`                        | `boolean`            | `True`   | Indicates whether the OEE Production Record is enabled                              | `true`          |
| `spare1`                         | `String`             | `True`   | Extra field 1                                                                       | `null`          |
| `spare2`                         | `String`             | `True`   | Extra field 2                                                                       | `null`          |
| `spare3`                         | `String`             | `True`   | Extra field 3                                                                       | `null`          |

## Code Examples

```python
# Assume we have a production record ID and a reason ID
productionRecordId = "someProductionRecordId"
reasonId = "some-performance-reason-id"

# Set the performance reason and add a note
try:
    updatedRecord = system.mes.oee.setPerformanceReasonForProductionRecord(
        oeeProductionRecordId=productionRecordId,
        performanceReasonId=reasonId,
        notes="Operator confirmed speed reduction due to material variability."
    )
    print "Successfully updated production record:", updatedRecord['id']
    print "New Reason:", updatedRecord['performanceReasonName']

except Exception as e:
    print "Error updating production record:", str(e)

# To clear a performance reason
# system.mes.oee.setPerformanceReasonForProductionRecord(productionRecordId, None, "Reason cleared.")
```

