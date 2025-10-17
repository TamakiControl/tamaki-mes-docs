---
sidebar_position: 45
title: 'getAllOeeRecords'
description: 'Retrieves all OEE production records for a location within a specified time range.'
---

# system.mes.oee.getAllOeeRecords

Retrieves all OEE production records for a specific location within a given time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllOeeRecords(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                        |
| ------------------ | -------- | -------- | ------------------------------------------------------------------ |
| `locationIdOrPath` | `String` | False    | The location ID (ULID) or path to retrieve OEE records for.        |
| `startDate`        | `Date`   | False    | The start date/time for the query range.                           |
| `endDate`          | `Date`   | True     | The end date/time for the query range. If null, uses current time. |

## Returns

A list of `OeeRecordDTO` objects, each representing a historical or active OEE run.

| Name                                 | Type                 | Nullable | Description                                                                         | Default Value   |
| ------------------------------------ | -------------------- | -------- | ----------------------------------------------------------------------------------- | --------------- |
| `id`                                 | `String`             | `True`   | The id of the OEE Record                                                            | `null`          |
| `locationId`                         | `String`             | `False`  | Identifier of the associated location where this OEE record was captured            | `null`          |
| `locationPath`                       | `String`             | `True`   | Path of the location where this OEE record was captured                             | `null`          |
| `status`                             | `Status`             | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)               | `UNKNOWN`       |
| `startDate`                          | `Instant`            | `False`  | Start date and time of the OEE record                                               | `Instant.now()` |
| `endDate`                            | `Instant`            | `True`   | End date and time of the OEE record                                                 | `null`          |
| `totalDurationSec`                   | `Double`             | `False`  | Total duration of the OEE record in seconds                                         | `0.0`           |
| `scheduledDurationSec`               | `Double`             | `False`  | Duration in seconds that the machine was scheduled to run during this record period | `0.0`           |
| `runningDurationSec`                 | `Double`             | `False`  | Duration in seconds that the machine was actively running during this record period | `0.0`           |
| `productionCount`                    | `Double`             | `False`  | Total number of units produced during this record period                            | `0.0`           |
| `expectedProductionCount`            | `Double`             | `False`  | Expected number of units to be produced during this record period                   | `0.0`           |
| `qualityStrategy`                    | `OeeQualityStrategy` | `False`  | Quality Strategy for this OEE Record                                                | `WASTE_COUNT`   |
| `qualityCount`                       | `Double`             | `False`  | Total number of quality units recorded during this period                           | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`             | `True`   | Identifier of the unit of measure for the production count                          | `null`          |
| `productionCountUnitOfMeasureName`   | `String`             | `True`   | Name of the unit of measure for the production count                                | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`             | `True`   | Symbol of the unit of measure for the production count                              | `null`          |
| `productionRateTimeUnits`            | `TimeUnit`           | `False`  | Unit of measure for the machine production rate & standard rate                     | `MINUTES`       |
| `modeRecordId`                       | `String`             | `True`   | Identifier of the associated mode record                                            | `null`          |
| `modeCode`                           | `Integer`            | `True`   | Code of the associated mode record                                                  | `null`          |
| `standardRate`                       | `Double`             | `True`   | The standard rate for this record                                                   | `0.0`           |
| `productionOrderId`                  | `String`             | `True`   | The Id of the production order associated with this OEE record                      | `null`          |
| `productionOrderName`                | `String`             | `True`   | The name of the production order associated with this OEE record                    | `null`          |
| `notes`                              | `String`             | `True`   | Notes associated with the OEE Record                                                | `null`          |
| `enabled`                            | `boolean`            | `True`   | Indicates whether the OEE Record is enabled                                         | `true`          |
| `spare1`                             | `String`             | `True`   | Extra field 1                                                                       | `null`          |
| `spare2`                             | `String`             | `True`   | Extra field 2                                                                       | `null`          |
| `spare3`                             | `String`             | `True`   | Extra field 3                                                                       | `null`          |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get OEE records for the last 24 hours
location_path = "Enterprise/Site/Production/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(24))

oee_records = system.mes.oee.getAllOeeRecords(location_path, start_time, end_time)

for record in oee_records:
    print record.productionCount, record.qualityCount
```
