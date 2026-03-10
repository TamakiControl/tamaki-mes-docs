---
title: getDowntimeByReason
description: Analyze downtime events grouped by reason with comprehensive statistical analysis and trend reporting.
sidebar_position: 66
---

# system.mes.oee.getDowntimeByReason

## Description

Retrieves downtime events grouped by reason for a specified location and time range, with options to filter by specific availability reasons.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeByReason(locationPath, startDate, endDate, availabilityReasonPath)
```

## Parameters

| Parameter            | Type     | Nullable | Description                                                       |
| -------------------- | -------- | -------- | ----------------------------------------------------------------- |
| `locationPath`       | `String` | False    | The path of the location to analyze.                              |
| `startDate`          | `Date`   | False    | The start of the analysis time range.                             |
| `endDate`            | `Date`   | True     | The end of the analysis time range. Defaults to the current time. |
| `availabilityReasonPath` | `String` | True     | An optional path to a specific availability reason to filter by.      |

## Returns

A list JSON objects representing `OeeDowntimeByReasonDTO` objects, each containing the downtime analysis for a specific reason.

Each object has the following properties:

| Name                 | Type     | Nullable | Description                                  | Default Value |
| -------------------- | -------- | -------- | -------------------------------------------- | ------------- |
| `availabilityReasonPath` | `String` | `True`   | Path of the availability reason                  | `null`        |
| `duration`           | `Double` | `True`   | Duration of downtime for this reason         | `0.0`         |
| `count`              | `Long`   | `True`   | Count of downtime events for this reason     | `null`        |
| `durationPercent`    | `Double` | `True`   | Percentage of total duration for this reason | `0.0`         |
| `countPercent`       | `Double` | `True`   | Percentage of total count for this reason    | `0.0`         |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get downtime by reason for the last 24 hours
locationPath = "Enterprise/Site/Area/Line1"
endDate = Date()
startDate = Date(endDate.getTime() - TimeUnit.HOURS.toMillis(24))

downtimeByReason = system.mes.oee.getDowntimeByReason(locationPath, startDate, endDate)

for reasonData in downtimeByReason:
    print reasonData['availabilityReasonPath'], reasonData['duration']
```
