---
sidebar_position: 33
title: "getOeeProductionRecord"
description: "Retrieves a specific OEE production record by ID."
---

# system.mes.oee.getOeeProductionRecord

## Description

Retrieves a specific [OEE Production Record](../../data-model/oee-model/oee-production-record) by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeProductionRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                          |
|-----------|-----------------|----------|--------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE production record to retrieve. |

## Returns

Returns a JSON representation of the `OeeProductionRecordDTO` object. Returns nothing if no record is found.

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
# Retrieve an OEE production record by ID
oeeProductionRecord = system.mes.oee.getOeeProductionRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the record
print(oeeProductionRecord)
```