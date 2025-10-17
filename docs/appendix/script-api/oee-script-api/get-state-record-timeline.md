---
title: getStateRecordTimeline
description: Retrieve a chronological timeline of OEE state records.
sidebar_position: 50
---

# system.mes.oee.getStateRecordTimeline

Retrieves a chronological timeline of OEE state records for a specified location and time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getStateRecordTimeline(locationIdOrPath, startDate, endDate, microstopThreshold=None, microstopThresholdTimeUnits='SECONDS')
```

## Parameters

| Parameter                     | Type      | Nullable | Description                                                           |
| ----------------------------- | --------- | -------- | --------------------------------------------------------------------- |
| `locationIdOrPath`            | `String`  | False    | The location path or ID to analyze.                                   |
| `startDate`                   | `Date`    | False    | The start time for the timeline period.                               |
| `endDate`                     | `Date`    | False    | The end time for the timeline period.                                 |
| `microstopThreshold`          | `Integer` | True     | A duration to filter out records shorter than this value.             |
| `microstopThresholdTimeUnits` | `String`  | True     | The time units for `microstopThreshold` (e.g., `SECONDS`, `MINUTES`). |

## Returns

A list of `OeeChartSegmentDTO` objects, each representing a segment in the state timeline.

| Name              | Type      | Nullable | Description                                                                  | Default Value |
| ----------------- | --------- | -------- | ---------------------------------------------------------------------------- | ------------- |
| `name`            | `String`  | `True`   | The name of the chart segment (e.g., "Unscheduled Downtime" or "Running")    | `null`        |
| `code`            | `Integer` | `True`   | The integer code associated with the Mode or State                           | `null`        |
| `color`           | `String`  | `True`   | The color code for displaying this segment                                   | `null`        |
| `duration`        | `Double`  | `True`   | The total aggregated duration of this segment in seconds                     | `null`        |
| `durationPercent` | `Double`  | `True`   | The percentage (0.0 to 1.0) of the total duration that this segment occupies | `null`        |
| `type`            | `String`  | `True`   | The type of the original record, either "Mode" or "State"                    | `null`        |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get state record timeline for the last 8 hours, ignoring stops less than 30 seconds
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(8))

timeline_segments = system.mes.oee.getStateRecordTimeline(
    locationIdOrPath=location,
    startDate=start_time,
    endDate=end_time,
    microstopThreshold=30,
    microstopThresholdTimeUnits='SECONDS'
)

for segment in timeline_segments:
    print "State:", segment.name, "Duration (sec):", segment.duration
```
