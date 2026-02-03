---
title: getModeRecordTimeline
description: Retrieve a chronological timeline of OEE mode records.
sidebar_position: 47
---

# system.mes.oee.getModeRecordTimeline

Retrieves a chronological timeline of OEE mode records for a specified location and time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getModeRecordTimeline(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                             |
| ------------------ | -------- | -------- | --------------------------------------- |
| `locationIdOrPath` | `String` | False    | The location path or ID to analyze.     |
| `startDate`        | `Date`   | False    | The start time for the timeline period. |
| `endDate`          | `Date`   | False    | The end time for the timeline period.   |

## Returns

A list of JSON representations of `OeeModeRecordDTO` objects, each representing a recorded instance of an OEE mode.

Each object has the following properties:

| Name                         | Type                            | Nullable | Description                                                              | Default Value          |
| ---------------------------- | ------------------------------- | -------- | ------------------------------------------------------------------------ | ---------------------- |
| `id`                         | `String`                        | `True`   | The id of the OEE Mode Record                                            | `null`                 |
| `locationId`                 | `String`                        | `False`  | Identifier of the associated location where this mode was recorded       | `null`                 |
| `locationName`               | `String`                        | `True`   | Name of the associated location                                          | `null`                 |
| `locationPath`               | `String`                        | `True`   | Path of the associated location where this mode was recorded             | `null`                 |
| `code`                       | `Integer`                       | `False`  | Integer mode number                                                      | `null`                 |
| `status`                     | `Status`                        | `False`  | Status of the OEE record (running, faulted, cancelled, complete etc.)    | `UNKNOWN`              |
| `startDate`                  | `Instant`                       | `False`  | Start date and time of the mode record                                   | `Instant.now()`        |
| `endDate`                    | `Instant`                       | `True`   | End date and time of the mode record                                     | `null`                 |
| `duration`                   | `Double`                        | `False`  | Total duration of the mode record in seconds                             | `0.0`                  |
| `overrunDurationSec`         | `Double`                        | `False`  | Duration in seconds that the machine has overrun its scheduled downtime  | `0.0`                  |
| `name`                       | `String`                        | `False`  | Name of the mode                                                         | `null`                 |
| `calculationType`            | `OeeModeCalculationType`        | `False`  | Specifies how this mode should be factored into OEE calculations         | `SCHEDULED_PRODUCTION` |
| `color`                      | `String`                        | `False`  | Hex color code representing the mode visually                            | `"#000000"`            |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                 | `0.0`                  |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode Record                                | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode Record is enabled                         | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                            | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                            | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                            | `null`                 |

## Code Examples

```python
from java.util import Date
from java.util.concurrent import TimeUnit

# Get mode record timeline for the last 8 hours
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(8))

timeline_segments = system.mes.oee.getModeRecordTimeline(location, start_time, end_time)

for segment in timeline_segments:
    print "Mode:", segment['name'], "Duration (sec):", segment['duration']
```
