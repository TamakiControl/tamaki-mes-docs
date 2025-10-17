---
sidebar_position: 66
title: 'calculateOeeByTimeInterval'
description: 'Calculates OEE metrics broken down by time intervals for a specific location.'
---

# system.mes.oee.calculateOeeByTimeInterval

Calculates OEE metrics broken down by time intervals for a specific location within a date range.

## Permissions

This method requires the `OEE.READ.CALCULATE` permission.

## Syntax

```python
# Basic calculation with positional parameters
system.mes.oee.calculateOeeByTimeInterval(locationIdOrPath, startDate, endDate, interval, intervalTimeUnits=None)

# Extended calculation with keyword arguments
system.mes.oee.calculateOeeByTimeInterval(
    locationIdOrPath=location,
    startDate=start,
    endDate=end,
    interval=interval_value,
    intervalTimeUnits=time_units,
    unitOfMeasureName=unit
)
```

## Parameters

| Parameter           | Type      | Nullable | Description                                                              |
| ------------------- | --------- | -------- | ------------------------------------------------------------------------ |
| `locationIdOrPath`  | `String`  | False    | The ULID or path of the location to calculate OEE for.                   |
| `startDate`         | `Date`    | False    | The start date for the calculation period.                               |
| `endDate`           | `Date`    | False    | The end date for the calculation period.                                 |
| `interval`          | `Integer` | False    | The time interval value for breaking down the calculations.              |
| `intervalTimeUnits` | `String`  | True     | Time units for interval ("MINUTES", "HOURS", "DAYS"). Default: "MINUTES" |
| `unitOfMeasureName` | `String`  | True     | The unit of measure name for production calculations (keyword only).     |

## Returns

Returns a JSON array of `OeeResultsDTO` for each time interval. Each interval object includes:

| Name                                 | Type      | Nullable | Description                                                                         | Default Value   |
| ------------------------------------ | --------- | -------- | ----------------------------------------------------------------------------------- | --------------- |
| `locationId`                         | `String`  | `False`  | Identifier of the associated location where this OEE record was captured            | `null`          |
| `locationPath`                       | `String`  | `True`   | Path of the location where this OEE record was captured                             | `null`          |
| `startDate`                          | `Instant` | `False`  | Start date and time of the OEE record                                               | `Instant.now()` |
| `endDate`                            | `Instant` | `True`   | End date and time of the OEE record                                                 | `null`          |
| `totalDurationSec`                   | `Double`  | `False`  | Total duration of the OEE record in seconds                                         | `0.0`           |
| `scheduledDurationSec`               | `Double`  | `False`  | Duration in seconds that the machine was scheduled to run during this record period | `0.0`           |
| `runningDurationSec`                 | `Double`  | `False`  | Duration in seconds that the machine was actively running during this record period | `0.0`           |
| `productionCount`                    | `Double`  | `False`  | Total number of units produced during this record period                            | `0.0`           |
| `expectedProductionCount`            | `Double`  | `False`  | Expected number of units to be produced during this record period                   | `0.0`           |
| `averageStandardRate`                | `Double`  | `False`  | Average Standard Rate for the time period. Calculated as per minute                 | `0.0`           |
| `maximumStandardRate`                | `Double`  | `False`  | Maximum Standard Rate for the time period. Calculated as per minute                 | `0.0`           |
| `wasteCount`                         | `Double`  | `False`  | Total number of waste units recorded during this period                             | `0.0`           |
| `goodCount`                          | `Double`  | `False`  | Total number of good units recorded during this period                              | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`  | `True`   | Identifier of the unit of measure for the production count                          | `null`          |
| `productionCountUnitOfMeasureName`   | `String`  | `True`   | Name of the unit of measure for the production count                                | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`  | `True`   | Symbol of the unit of measure for the production count                              | `null`          |
| `availability`                       | `Double`  | `True`   | Availability metric (0.0 to 1.0)                                                    | `1.0`           |
| `performance`                        | `Double`  | `True`   | Performance metric (0.0 to 1.0)                                                     | `1.0`           |
| `quality`                            | `Double`  | `True`   | Quality metric (0.0 to 1.0)                                                         | `1.0`           |
| `oee`                                | `Double`  | `True`   | Overall Equipment Effectiveness (OEE) metric (0.0 to 1.0)                           | `1.0`           |

## Code Examples

```python
from java.util import Date
import system.date

# Calculate hourly OEE for the last 8 hours
location_path = "Enterprise/Site/Area/Line1"
end_date = Date()
start_date = system.date.addHours(end_date, -8)

hourly_oee = system.mes.oee.calculateOeeByTimeInterval(
    location_path,
    start_date,
    end_date,
    1,
    "HOURS"
)

print "Hourly OEE Results:"
for interval in hourly_oee:
    start_time = interval.get('startTime')
    end_time = interval.get('endTime')
    oee_pct = interval.get('oeePercentage', 0)
    print "Hour {} - {}: {}% OEE".format(start_time, end_time, oee_pct)

```
