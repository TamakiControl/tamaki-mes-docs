---
sidebar_position: 65
title: 'getDowntimeStatistics'
description: 'Calculates downtime statistics for a specific location within a date range.'
---

# system.mes.oee.getDowntimeStatistics

Calculates comprehensive downtime statistics for a specific location within a date range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeStatistics(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                        |
| ------------------ | -------- | -------- | ------------------------------------------------------------------ |
| `locationIdOrPath` | `String` | False    | The ULID or path of the location to calculate statistics for.      |
| `startDate`        | `Date`   | False    | The start date for the calculation period.                         |
| `endDate`          | `Date`   | True     | The end date for the calculation period. Defaults to current time. |

## Returns

A JSON representation of an `OeeDowntimeStatisticsDTO` object containing comprehensive downtime statistics.

| Name                              | Type      | Nullable | Description                                                                  | Default Value   |
| --------------------------------- | --------- | -------- | ---------------------------------------------------------------------------- | --------------- |
| `locationId`                      | `String`  | `False`  | Identifier of the associated location where this OEE record was captured     | `null`          |
| `locationPath`                    | `String`  | `True`   | Path of the location where this OEE record was captured                      | `null`          |
| `startDate`                       | `Instant` | `False`  | Start date and time of the OEE record                                        | `Instant.now()` |
| `endDate`                         | `Instant` | `True`   | End date and time of the OEE record                                          | `null`          |
| `totalDurationSec`                | `Double`  | `False`  | Total duration of the OEE record in seconds                                  | `0.0`           |
| `downtimeTotalDurationSec`        | `Double`  | `False`  | Total downtime duration of the OEE record in seconds                         | `0.0`           |
| `downtimeEventAverageDurationSec` | `Double`  | `False`  | Average Duration in seconds for downtime events on the machine               | `0.0`           |
| `downtimeEventCount`              | `Integer` | `False`  | Downtime Event Count during this record period                               | `0`             |
| `downtimePercent`                 | `Double`  | `False`  | Percent of time of the total duration that the machine was in downtime state | `0.0`           |
| `meanTimeBetweenFailuresSec`      | `Double`  | `False`  | The Mean Time Between Failures (MTBF) in seconds                             | `0.0`           |
| `meanTimeToRepairSec`             | `Double`  | `False`  | The Mean Time To Repair (MTTR) in seconds                                    | `0.0`           |
| `starvedTotalDurationSec`         | `Double`  | `False`  | Total starved duration of the OEE record in seconds                          | `0.0`           |
| `starvedEventAverageDurationSec`  | `Double`  | `False`  | Average Duration in seconds for starved events on the machine                | `0.0`           |
| `starvedEventCount`               | `Integer` | `False`  | Starved Event Count during this record period                                | `0`             |
| `starvedPercent`                  | `Double`  | `False`  | Percent of time of the total duration that the machine was in starved state  | `0.0`           |
| `blockedTotalDurationSec`         | `Double`  | `False`  | Total blocked duration of the OEE record in seconds                          | `0.0`           |
| `blockedEventAverageDurationSec`  | `Double`  | `False`  | Average Duration in seconds for blocked events on the machine                | `0.0`           |
| `blockedEventCount`               | `Integer` | `False`  | Blocked Event Count during this record period                                | `0`             |
| `blockedPercent`                  | `Double`  | `False`  | Percent of time of the total duration that the machine was in blocked state  | `0.0`           |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Calculate downtime statistics for the last 24 hours
location_path = "Enterprise/Site/Area/Line1"
end_date = Date()
start_date = Date(end_date.getTime() - TimeUnit.HOURS.toMillis(24))

downtime_stats = system.mes.oee.getDowntimeStatistics(location_path, start_date, end_date)

print "Downtime Events:", downtime_stats['downtimeEventCount']
print "MTBF (sec):", downtime_stats['meanTimeBetweenFailuresSec']
print "MTTR (sec):", downtime_stats['meanTimeToRepairSec']
```
