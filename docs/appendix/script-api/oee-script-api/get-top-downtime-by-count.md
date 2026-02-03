---
title: getTopDowntimeByCount
description: Retrieves the top downtime reasons by occurrence count for a specified location and time range.
sidebar_position: 56
---

# system.mes.oee.getTopDowntimeByCount

Retrieves the top downtime reasons ranked by the number of occurrences for a specified location and time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getTopDowntimeByCount(locationIdOrPath, startDate, endDate, count)
```

## Parameters

| Parameter          | Type      | Nullable | Description                              |
| ------------------ | --------- | -------- | ---------------------------------------- |
| `locationIdOrPath` | `String`  | False    | The location path or ID to analyze.      |
| `startDate`        | `Date`    | False    | The start time for the analysis period.  |
| `endDate`          | `Date`    | False    | The end time for the analysis period.    |
| `count`            | `Integer` | False    | The maximum number of reasons to return. |

## Returns

A list of JSON representations of `OeeDowntimeByReasonDTO` objects, each representing a downtime reason and its aggregated data.

Each object has the following properties:

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

# Get the top 5 most frequent downtime reasons for the last week
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(7))

top_reasons = system.mes.oee.getTopDowntimeByCount(
    location,
    start_time,
    end_time,
    5
)

print "Top 5 Downtime Reasons by Count:"
for reason in top_reasons:
    print "  - {}: {} occurrences, Total Duration: {:.2f} min".format(
        reason['downtimeReasonName'],
        reason['count'],
        reason['duration'] / 60.0
    )
```
