---
title: getTopDowntimeByCount
description: Retrieves the top availability reasons by occurrence count for a specified location and time range.
sidebar_position: 68
---

# system.mes.oee.getTopDowntimeByCount

## Description

Retrieves the top availability reasons ranked by the number of occurrences for a specified location and time range.

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

A list of JSON representations of `OeeDowntimeByReasonDTO` objects, each representing a availability reason and its aggregated data.

Each object has the following properties:

| Name                 | Type     | Nullable | Description                                  | Default Value |
| -------------------- | -------- | -------- | -------------------------------------------- | ------------- |
| `availabilityReasonPath` | `String` | `True`   | Path of the availability reason                  | `null`        |
| `duration`           | `Double` | `True`   | Duration of downtime for this reason         | `0.0 `        |
| `count`              | `Long`   | `True`   | Count of downtime events for this reason     | `null`        |
| `durationPercent`    | `Double` | `True`   | Percentage of total duration for this reason | `0.0`         |
| `countPercent`       | `Double` | `True`   | Percentage of total count for this reason    | `0.0`         |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get the top 5 most frequent availability reasons for the last week
location = "Enterprise/Site/Area/Line1"
endTime = Date()
startTime = Date(endTime.getTime() - TimeUnit.DAYS.toMillis(7))

topReasons = system.mes.oee.getTopDowntimeByCount(
    location,
    startTime,
    endTime,
    5
)

print "Top 5 Availability Reasons by Count:"
for reason in topReasons:
    print "  - {}: {} occurrences, Total Duration: {:.2f} min".format(
        reason['availabilityReasonName'],
        reason['count'],
        reason['duration'] / 60.0
    )
```
