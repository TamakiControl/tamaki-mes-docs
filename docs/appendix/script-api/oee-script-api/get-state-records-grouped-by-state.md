---
title: getStateRecordsGroupedByState
description: Retrieves OEE state records aggregated by state for a specified location and time range.
sidebar_position: 53
---

# system.mes.oee.getStateRecordsGroupedByState

## Description

Retrieves OEE state records aggregated by state for a specified location and time range. This is useful for creating summary charts or reports of how time was spent.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getStateRecordsGroupedByState(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                             |
| ------------------ | -------- | -------- | --------------------------------------- |
| `locationIdOrPath` | `String` | False    | The location path or ID to analyze.     |
| `startDate`        | `Date`   | False    | The start time for the analysis period. |
| `endDate`          | `Date`   | False    | The end time for the analysis period.   |

## Returns

A list of JSON representations of `OeeStateRecordsGroupedByStateDTO` objects, each representing the aggregated data for a specific OEE state.

Each object has the following properties:

| Name         | Type      | Nullable | Description                                                | Default Value |
| ------------ | --------- | -------- | ---------------------------------------------------------- | ------------- |
| `locationId` | `String`  | `True`   | Identifier of the associated location                      | `null`        |
| `code`       | `Integer` | `True`   | The integer code associated with the State                 | `null`        |
| `name`       | `String`  | `True`   | The name of the state, such as "Downtime", "Running", etc. | `null`        |
| `color`      | `String`  | `True`   | The color code for displaying this state                   | `null`        |
| `duration`   | `Double`  | `True`   | The total aggregated duration of this state in seconds     | `null`        |
| `count`      | `Long`    | `True`   | The number of occurrences of this state                    | `null`        |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get state record summary for the last 24 hours
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(1))

grouped_states = system.mes.oee.getStateRecordsGroupedByState(
    locationIdOrPath=location,
    startDate=start_time,
    endDate=end_time
)

for state_group in grouped_states:
    print "State:", state_group['name']
    print "  Total Duration (hours):", state_group['duration'] / 3600.0
    print "  Occurrence Count:", state_group['count']
```
