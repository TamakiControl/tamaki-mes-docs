---
sidebar_position: 65
title: 'calculateOee'
description: 'Calculates OEE metrics for a specific location within a date range.'
---

# system.mes.oee.calculateOee

Calculates OEE (Overall Equipment Effectiveness) metrics for a specific location within a date range.

## Permissions

This method requires the `OEE.READ.CALCULATE` permission.

## Syntax

```python
# Basic calculation with required parameters
system.mes.oee.calculateOee(locationIdOrPath, startDate, endDate=None)

# Extended calculation with keyword arguments
system.mes.oee.calculateOee(locationIdOrPath=location, startDate=start, endDate=end, unitOfMeasureName=unit)
```

## Parameters

| Parameter           | Type     | Nullable | Description                                                          |
| ------------------- | -------- | -------- | -------------------------------------------------------------------- |
| `locationIdOrPath`  | `String` | False    | The ULID or path of the location to calculate OEE for.               |
| `startDate`         | `Date`   | False    | The start date for the calculation period.                           |
| `endDate`           | `Date`   | True     | The end date for the calculation period. Defaults to current time.   |
| `unitOfMeasureName` | `String` | True     | The unit of measure name for production calculations (keyword only). |

## Returns

Returns a JSON object containing calculated OEE metrics.

| Name                                 | Type      | Nullable | Description                                                                                    | Default Value   |
|--------------------------------------|-----------|----------|------------------------------------------------------------------------------------------------|-----------------|
| `locationId`                         | `String`  | `False`  | Identifier of the associated location where this OEE record was captured                       | `null`          |
| `locationPath`                       | `String`  | `True`   | Path of the location where this OEE record was captured                                        | `null`          |
| `startDate`                          | `Instant` | `False`  | Start date and time of the OEE record                                                          | `Instant.now()` |
| `endDate`                            | `Instant` | `True`   | End date and time of the OEE record                                                            | `null`          |
| `totalDurationSec`                   | `Double`  | `False`  | Total duration of the OEE record in seconds                                                    | `0.0`           |
| `scheduledDurationSec`               | `Double`  | `False`  | Duration in seconds that the machine was scheduled to run during this record period            | `0.0`           |
| `scheduledProductionModeEventCount`  | `Integer` | `False`  | Total number of scheduled production mode events during this record period                     | `0`             |
| `scheduledDowntimeDurationSec`       | `Double`  | `False`  | Duration in seconds that the machine was scheduled to be in downtime during this record period | `0.0`           |
| `scheduledDowntimeModeEventCount`    | `Integer` | `False`  | Total number of scheduled downtime mode events during this record period                       | `0`             |
| `unscheduledDowntimeDurationSec`     | `Double`  | `False`  | Duration in seconds that the machine was in unscheduled downtime during this record period     | `0.0`           |
| `unscheduledDowntimeEventCount`      | `Integer` | `False`  | Total number of unscheduled downtime mode events during this record period                     | `0`             |
| `runningDurationSec`                 | `Double`  | `False`  | Duration in seconds that the machine was actively running during this record period            | `0.0`           |
| `runningStateEventCount`             | `Integer` | `False`  | Total number of running state events during this record period                                 | `0`             |
| `blockedDurationSec`                 | `Double`  | `False`  | Duration in seconds that the machine was in BLOCKED state during this record period            | `0.0`           |
| `blockedStateEventCount`             | `Integer` | `False`  | Total number of blocked state events during this record period                                 | `0`             |
| `starvedDurationSec`                 | `Double`  | `False`  | Duration in seconds that the machine was in STARVED state during this record period            | `0.0`           |
| `starvedStateEventCount`             | `Integer` | `False`  | Total number of starved state events during this record period                                 | `0`             |
| `idleDurationSec`                    | `Double`  | `False`  | Duration in seconds that the machine was in IDLE state during this record period               | `0.0`           |
| `idleStateEventCount`                | `Integer` | `False`  | Total number of idle state events during this record period                                    | `0`             |
| `downtimeDurationSec`                | `Double`  | `False`  | Duration in seconds that the machine was in DOWNTIME state during this record period           | `0.0`           |
| `downtimeStateEventCount`            | `Integer` | `False`  | Total number of downtime state events during this record period                                | `0`             |
| `productionCount`                    | `Double`  | `False`  | Total number of units produced during this record period                                       | `0.0`           |
| `expectedProductionCount`            | `Double`  | `False`  | Expected number of units to be produced during this record period                              | `0.0`           |
| `averageStandardRate`                | `Double`  | `False`  | Average Standard Rate for the time period. Calculated as per minute                            | `0.0`           |
| `maximumStandardRate`                | `Double`  | `False`  | Maximum Standard Rate for the time period. Calculated as per minute                            | `0.0`           |
| `wasteCount`                         | `Double`  | `False`  | Total number of waste units recorded during this period                                        | `0.0`           |
| `goodCount`                          | `Double`  | `False`  | Total number of good units recorded during this period                                         | `0.0`           |
| `productionCountUnitOfMeasureId`     | `String`  | `True`   | Identifier of the unit of measure for the production count                                     | `null`          |
| `productionCountUnitOfMeasureName`   | `String`  | `True`   | Name of the unit of measure for the production count                                           | `null`          |
| `productionCountUnitOfMeasureSymbol` | `String`  | `True`   | Symbol of the unit of measure for the production count                                         | `null`          |
| `availability`                       | `Double`  | `True`   | Availability metric (0.0 to 1.0)                                                               | `1.0`           |
| `teep`                               | `Double`  | `True`   | Total Effective Equipment Performance (TEEP) metric (0.0 to 1.0)                               | `1.0`           |
| `performance`                        | `Double`  | `True`   | Performance metric (0.0 to 1.0)                                                                | `1.0`           |
| `quality`                            | `Double`  | `True`   | Quality metric (0.0 to 1.0)                                                                    | `1.0`           |
| `oee`                                | `Double`  | `True`   | Overall Equipment Effectiveness (OEE) metric (0.0 to 1.0)                                      | `1.0`           |

## Code Examples

```python
from java.util import Date
import system.date

# Calculate OEE for the last 24 hours
location_path = "Enterprise/Site/Area/Line1"
end_date = Date()
start_date = system.date.addHours(end_date, -24)

oee_result = system.mes.oee.calculateOee(location_path, start_date, end_date)

print("OEE Calculation Results:")
print("OEE:", oee_result.get('oee', 0))
print("Availability:", oee_result.get('availability', 0))
print("Performance:", oee_result.get('performance', 0))
print("Quality:", oee_result.get('quality', 0))

# Calculate OEE for a specific time range with unit of measure
start_date = system.date.parse("2024-10-01 00:00:00", "yyyy-MM-dd HH:mm:ss")
end_date = system.date.parse("2024-10-01 23:59:59", "yyyy-MM-dd HH:mm:ss")

oee_detailed = system.mes.oee.calculateOee(
    locationIdOrPath=location_path,
    startDate=start_date,
    endDate=end_date,
    unitOfMeasureName="Parts"
)

print("\nDetailed OEE Results:")
print("Production Count:", oee_detailed.get('productionCount', 0))
print("Expected Production:", oee_detailed.get('expectedProductionCount', 0))
print("Total Duration (sec):", oee_detailed.get('totalDurationSec', 0))
print("Scheduled Duration (sec):", oee_detailed.get('scheduledDurationSec', 0))
print("Running Duration (sec):", oee_detailed.get('runningDurationSec', 0))

# Calculate OEE for current day (endDate defaults to now)
today_start = system.date.midnight(Date())
oee_today = system.mes.oee.calculateOee(location_path, today_start)

print("\nToday's OEE:", oee_today.get('oee', 0))
```
