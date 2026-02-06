---
sidebar_position: 61
title: "setOeeRecordNotesAndSpares"
description: "Sets comment fields (notes, spare1, spare2, spare3) for an OEE Record."
---

# system.mes.oee.getOeeRecord

## Description

Sets comment fields (notes, spare1, spare2, spare3) for an [OEE Record](../../data-model/oee-model/oee-record).

Accepts a full `OeeRecordDTO` but only updates the notes and spare fields.

The record is fetched fresh from the database by ID.

Recommended to call with setOeeRecordNotesAndSpares(**oeeRecord) where oeeRecord is an `OeeRecordDTO` object.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setOeeRecordNotesAndSpares(**oeeRecord)
```

## Parameters

An unpacked dictionary of `OeeRecordDTO` fields.

| Name                                 | Type                 | Nullable | Description                                                              | Default Value   |
|--------------------------------------|----------------------|----------|--------------------------------------------------------------------------|-----------------|
| `id`                                 | `String`             | `True`   | The id of the OEE Record                                                 | `null`          |
| `locationId`                         | `String`             | `False`  | Identifier of the associated location where this OEE record was captured | `null`          |
| `locationPath`                       | `String`             | `True`   | Path of the location where this OEE record was captured                  | `null`          |
| `locationName`                       | `String`             | `True`   | Name of the associated location                                          | `null`          |
| `status`                             | `Status`             | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)    | `UNKNOWN`       |
| `startDate`                          | `Instant`            | `False`  | Start date and time of the OEE record                                    | `Instant.now()` |
| `endDate`                            | `Instant`            | `True`   | End date and time of the OEE record                                      | `null`          |
| `totalDurationSec`                   | `Double`             | `False`  | Total duration of the OEE record in seconds                              | `0.0`           |
| `productionCount`                    | `Double`             | `False`  | Total number of units produced during this record period                 | `0.0`           |
| `expectedProductionCount`            | `Double`             | `False`  | Expected number of units to be produced during this record period        | `0.0`           |
| `qualityStrategy`                    | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Record                                     | `WASTE_COUNT`   |
| `qualityCount`                       | `Double`             | `False`  | Total number of quality units recorded during this period                | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the production count               | `null`          |
| `productionCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the production count                     | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the production count                   | `null`          |
| `productionRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine production rate & standard rate          | `MINUTES`       |
| `stateRecordId`                      | `String`             | `True`   | Identifier of the associated state record                                | `null`          |
| `standardRate`                       | `Double`             | `True`   | The standard rate for this record                                        | `0.0`           |
| `productionOrderId`                  | `String`             | `True`   | The id of the production order associated with this OEE record           | `null`          |
| `productionOrderName`                | `String`             | `True`   | The name of the production order associated with this OEE record         | `null`          |
| `notes`                              | `String`             | `True`   | Notes associated with the OEE Record                                     | `null`          |
| `enabled`                            | `boolean`            | `True`   | Indicates whether the OEE Record is enabled                              | `true`          |
| `spare1`                             | `String`             | `True`   | Extra field 1                                                            | `null`          |
| `spare2`                             | `String`             | `True`   | Extra field 2                                                            | `null`          |
| `spare3`                             | `String`             | `True`   | Extra field 3                                                            | `null`          |

## Returns

Returns a JSON representation of the updated `OeeRecordDTO` object.

## Code Examples

```python
# Retrieve an OEE record by ID
oee_record = system.mes.oee.getOeeRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Change record notes
oee_record['notes'] = 'Changed notes'

# Update OEE record notes
system.mes.oee.setOeeRecordNotesAndSpares(**oee_record)
```