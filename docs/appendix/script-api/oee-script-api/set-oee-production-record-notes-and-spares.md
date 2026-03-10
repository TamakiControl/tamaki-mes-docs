---
sidebar_position: 61
title: "setOeeProductionRecordNotesAndSpares"
description: "Sets comment fields (notes, spare1, spare2, spare3) for an OEE Production Record."
---

# system.mes.oee.setOeeProductionRecordNotesAndSpares

## Description

Sets comment fields (notes, spare1, spare2, spare3) for an [OEE Production Record](../../data-model/oee-model/oee-production-record).

Accepts a full `OeeProductionRecordDTO` but only updates the notes and spare fields.

The record is fetched fresh from the database by ID.

Recommended to call with setOeeProductionRecordNotesAndSpares(**oeeProductionRecord) where oeeProductionRecord is an `OeeProductionRecordDTO` object.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setOeeProductionRecordNotesAndSpares(**oeeProductionRecord)
```

## Parameters

An unpacked dictionary of `OeeProductionRecordDTO` fields.

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
| 'performanceReasonId'            | `String`             | `True`   | The id of the associated performance reason, if applicable                          | `null`          |
| 'performanceReasonName'          | `String`             | `True`   | The name of the associated performance reason, if applicable                        | `null`          |
| 'performanceReasonPath'          | `String`             | `True`   | The path of the associated performance reason, if applicable                        | `null`          |
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

## Returns

Returns a JSON representation of the updated `OeeProductionRecordDTO` object.

## Code Examples

```python
# Retrieve an OEE production record by ID
oeeProductionRecord = system.mes.oee.getOeeProductionRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Change record notes
oeeProductionRecord['notes'] = 'Changed notes'

# Update OEE production record notes
system.mes.oee.setOeeProductionRecordNotesAndSpares(**oeeProductionRecord)
```