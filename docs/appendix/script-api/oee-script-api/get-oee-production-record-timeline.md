---
sidebar_position: 35
title: "getOeeProductionRecordTimeline"
description: "Gets production timeline data."
---

# system.mes.oee.getOeeProductionRecordTimeline

## Description

Retrieves production timeline data for OEE records, providing a chronological view of production activities for a specific location within a time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeProductionRecordTimeline(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                       |
| ------------------ | -------- | -------- | ------------------------------------------------- |
| `locationIdOrPath` | `String` | False    | The location ID or path to get timeline data for. |
| `startDate`        | `Date`   | False    | Start date for the timeline.                      |
| `endDate`          | `Date`   | False    | End date for the timeline.                        |

## Returns

Returns a list of JSON representations of `OeeRecordDTO` objects, adjusted to the specified time window.

Each object has the following properties:

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

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get production timeline
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(8))

timeline = system.mes.oee.getOeeProductionRecordTimeline(
    location,
    start_time,
    end_time
)

# Output the timeline data
print(timeline)
```
