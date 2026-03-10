---
sidebar_position: 49
title: "splitOeeProductionRecord"
description: "Splits an OEE production record at a specific time."
---

# system.mes.oee.splitOeeProductionRecord

## Description

Splits an [OEE Production Record](../../data-model/oee-model/oee-production-record) at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time.

## Syntax

```python
system.mes.oee.splitOeeProductionRecord(oeeProductionRecordId, splitDate)
```

## Parameters

| Parameter      | Type            | Nullable | Description                                    |
|----------------|-----------------|----------|------------------------------------------------|
| `oeeProductionRecordId`  | `String` (ULID) | False    | The ID of the OEE production record to split.             |
| `splitDate`    | `Date`          | False    | The date at which to split the record.         |

## Returns

Returns a JSON representation of the new `OeeProductionRecordDTO` object that was split off from the original Oee production record.

| Name                                 | Type                 | Nullable | Description                                                              | Default Value   |
|--------------------------------------|----------------------|----------|--------------------------------------------------------------------------|-----------------|
| `id`                                 | `String`             | `True`   | The id of the OEE Production Record                                                 | `null`          |
| `locationId`                         | `String`             | `False`  | Identifier of the associated location where this OEE production record was captured | `null`          |
| `locationPath`                       | `String`             | `True`   | Path of the location where this OEE production record was captured                  | `null`          |
| `locationName`                       | `String`             | `True`   | Name of the associated location                                          | `null`          |
| `status`                             | `Status`             | `False`  | Status of the OEE production record (e.g., running, faulted, canceled, complete)    | `UNKNOWN`       |
| `startDate`                          | `Instant`            | `False`  | Start date and time of the OEE production record                                    | `Instant.now()` |
| `endDate`                            | `Instant`            | `True`   | End date and time of the OEE production record                                      | `null`          |
| `totalDurationSec`                   | `Double`             | `False`  | Total duration of the OEE production record in seconds                              | `0.0`           |
| `productionCount`                    | `Double`             | `False`  | Total number of units produced during this record period                 | `0.0`           |
| `expectedProductionCount`            | `Double`             | `False`  | Expected number of units to be produced during this record period        | `0.0`           |
| `qualityStrategy`                    | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Production Record                                     | `WASTE_COUNT`   |
| `qualityCount`                       | `Double`             | `False`  | Total number of quality units recorded during this period                | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the production count               | `null`          |
| `productionCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the production count                     | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the production count                   | `null`          |
| `productionRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine production rate & standard rate          | `MINUTES`       |
| `stateRecordId`                      | `String`             | `True`   | Identifier of the associated state record                                | `null`          |
| `standardRate`                       | `Double`             | `True`   | The standard rate for this record                                        | `0.0`           |
| `productionOrderId`                  | `String`             | `True`   | The id of the production order associated with this OEE production record           | `null`          |
| `productionOrderName`                | `String`             | `True`   | The name of the production order associated with this OEE production record         | `null`          |
| `notes`                              | `String`             | `True`   | Notes associated with the OEE Production Record                                     | `null`          |
| `enabled`                            | `boolean`            | `True`   | Indicates whether the OEE Production Record is enabled                              | `true`          |
| `spare1`                             | `String`             | `True`   | Extra field 1                                                            | `null`          |
| `spare2`                             | `String`             | `True`   | Extra field 2                                                            | `null`          |
| `spare3`                             | `String`             | `True`   | Extra field 3                                                            | `null`          |

## Code Examples

```python
# Split an OEE production record at a specific date
splitDate = "2025-09-05 14:58:30"    
splitDate = system.date.parse(splitDate, "yyyy-MM-dd HH:mm:ss")  

system.mes.oee.splitOeeProductionRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',
    splitDate
)
```
