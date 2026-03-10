---
title: getTopDowntimeByDuration
description: Retrieves the top availability reasons by total duration for a specified location and time range.
sidebar_position: 67
---

# system.mes.oee.getTopDowntimeByDuration

## Description

Retrieves the top availability reasons ranked by their total accumulated duration for a specified location and time range.

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

A list of JSON representations of `OeeDowntimeByReasonDTO` objects, each representing a availability reason and its aggregated data.

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

# Get the top 3 availability reasons by duration for the last 24 hours
location = "Enterprise/Site/Area/Line1"
endTime = Date()
startTime = Date(endTime.getTime() - TimeUnit.DAYS.toMillis(1))

topReasons = system.mes.oee.getTopDowntimeByDuration(
    location,
    startTime,
    endTime,
    3
)

print "Top 3 Availability Reasons by Duration:"
for reason in topReasons:
    print "  - {}: {:.2f} hours, {} occurrences".format(
        reason['availabilityReasonName'],
        reason['duration'] / 3600.0,
        reason['count']
    )
```
