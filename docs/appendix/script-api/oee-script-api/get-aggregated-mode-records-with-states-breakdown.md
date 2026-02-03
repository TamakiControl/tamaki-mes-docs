---
sidebar_position: 62
title: 'getAggregatedModeRecordsWithStatesBreakdown'
description: 'Retrieves aggregated OEE mode records with a breakdown of states for a specified location and time range.'
---

# system.mes.oee.getAggregatedModeRecordsWithStatesBreakdown

## Description

Retrieves aggregated OEE mode records, including a detailed breakdown of states for each mode. This function is useful for creating timeline-style charts that visualize both the operational mode and the specific states within that mode over a given period.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAggregatedModeRecordsWithStatesBreakdown(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                          |
| ------------------ | -------- | -------- | ---------------------------------------------------- |
| `locationIdOrPath` | `String` | False    | The ID or path of the location to retrieve data for. |
| `startDate`        | `Date`   | False    | The start date/time of the period to analyze.        |
| `endDate`          | `Date`   | False    | The end date/time of the period to analyze.          |

## Returns

A list of JSON representations of `OeeChartSegmentDTO` objects, each representing a segment of time with mode and state information.

| Name              | Type      | Nullable | Description                                                                  | Default Value |
|-------------------|-----------|----------|------------------------------------------------------------------------------|---------------|
| `name`            | `String`  | `True`   | The name of the chart segment (e.g., "Unscheduled Downtime" or "Running")    | `null`        |
| `code`            | `Integer` | `True`   | The integer code associated with the Mode or State                           | `null`        |
| `color`           | `String`  | `True`   | The color code for displaying this segment                                   | `null`        |
| `duration`        | `Double`  | `True`   | The total aggregated duration of this segment in seconds                     | `null`        |
| `durationPercent` | `Double`  | `True`   | The percentage (0.0 to 1.0) of the total duration that this segment occupies | `null`        |
| `type`            | `String`  | `True`   | The type of the original record, either "Mode" or "State"                    | `null`        |
| `count`           | `Long`    | `True`   | The number of occurrences of this segment                                    | `null`        |

## Code Examples

```python
from java.util import Date

# Define the location and time range for the analysis
location = "Site/Area/Line 1"
# Example: last 8 hours
end_date = Date()
start_date = Date(end_date.getTime() - 8 * 3600 * 1000)

# Retrieve the aggregated data
aggregated_data = system.mes.oee.getAggregatedModeRecordsWithStatesBreakdown(
    location,
    start_date,
    end_date
)

# Print the results
for segment in aggregated_data:
    type_name = segment['type']
    name = segment['name']
    duration_seconds = segment['duration'] / 1000

    print "Type: %s, Name: %s, Duration: %.2f seconds" % (type_name, name, duration_seconds)
```
