---
title: getTopDowntimeByDuration
description: Retrieves the top downtime reasons by total duration for a specified location and time range.
sidebar_position: 55
---

# system.mes.oee.getTopDowntimeByDuration

Retrieves the top downtime reasons ranked by their total accumulated duration for a specified location and time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getTopDowntimeByDuration(locationIdOrPath, startDate, endDate, count)
```

## Parameters

| Parameter          | Type      | Nullable | Description                              |
| ------------------ | --------- | -------- | ---------------------------------------- |
| `locationIdOrPath` | `String`  | False    | The location path or ID to analyze.      |
| `startDate`        | `Date`    | False    | The start time for the analysis period.  |
| `endDate`          | `Date`    | False    | The end time for the analysis period.    |
| `count`            | `Integer` | False    | The maximum number of reasons to return. |

## Returns

A list of `OeeDowntimeByReasonDTO` objects, each representing a downtime reason and its aggregated data.

| Name                 | Type     | Nullable | Description                                  | Default Value |
| -------------------- | -------- | -------- | -------------------------------------------- | ------------- |
| `downtimeReasonPath` | `String` | `True`   | Path of the downtime reason                  | `null`        |
| `duration`           | `Double` | `True`   | Duration of downtime for this reason         | `0.0 `        |
| `count`              | `Long`   | `True`   | Count of downtime events for this reason     | `null`        |
| `durationPercent`    | `Double` | `True`   | Percentage of total duration for this reason | `0.0`         |
| `countPercent`       | `Double` | `True`   | Percentage of total count for this reason    | `0.0`         |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get the top 3 downtime reasons by duration for the last 24 hours
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(1))

top_reasons = system.mes.oee.getTopDowntimeByDuration(
    locationIdOrPath=location,
    startDate=start_time,
    endDate=end_time,
    count=3
)

print "Top 3 Downtime Reasons by Duration:"
for reason in top_reasons:
    print "  - {}: {:.2f} hours, {} occurrences".format(
        reason.downtimeReasonName,
        reason.duration / 3600.0,
        reason.eventCount
    )
```
