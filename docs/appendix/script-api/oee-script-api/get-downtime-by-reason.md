---
title: getDowntimeByReason
description: Analyze downtime events grouped by reason with comprehensive statistical analysis and trend reporting.
sidebar_position: 53
---

# system.mes.oee.getDowntimeByReason

Retrieves downtime events grouped by reason for a specified location and time range, with options to filter by specific downtime reasons.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeByReason(locationPath, startDate, endDate, downtimeReasonPath)
```

## Parameters

| Parameter            | Type     | Nullable | Description                                                       |
| -------------------- | -------- | -------- | ----------------------------------------------------------------- |
| `locationPath`       | `String` | False    | The path of the location to analyze.                              |
| `startDate`          | `Date`   | False    | The start of the analysis time range.                             |
| `endDate`            | `Date`   | True     | The end of the analysis time range. Defaults to the current time. |
| `downtimeReasonPath` | `String` | True     | An optional path to a specific downtime reason to filter by.      |

## Returns

A list JSON objects representing `OeeDowntimeByReasonDTO` objects, each containing the downtime analysis for a specific reason.

Each object has the following properties:

| Name                 | Type     | Nullable | Description                                  | Default Value |
| -------------------- | -------- | -------- | -------------------------------------------- | ------------- |
| `downtimeReasonPath` | `String` | `True`   | Path of the downtime reason                  | `null`        |
| `duration`           | `Double` | `True`   | Duration of downtime for this reason         | `0.0`         |
| `count`              | `Long`   | `True`   | Count of downtime events for this reason     | `null`        |
| `durationPercent`    | `Double` | `True`   | Percentage of total duration for this reason | `0.0`         |
| `countPercent`       | `Double` | `True`   | Percentage of total count for this reason    | `0.0`         |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get downtime by reason for the last 24 hours
location_path = "Enterprise/Site/Area/Line1"
end_date = Date()
start_date = Date(end_date.getTime() - TimeUnit.HOURS.toMillis(24))

downtime_by_reason = system.mes.oee.getDowntimeByReason(location_path, start_date, end_date)

for reason_data in downtime_by_reason:
    print reason_data['downtimeReasonPath'], reason_data['duration']
```
