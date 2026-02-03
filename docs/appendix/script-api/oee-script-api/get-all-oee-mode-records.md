---
title: getAllOeeModeRecords
description: Retrieve all OEE mode records with comprehensive filtering and analysis options.
sidebar_position: 46
---

# system.mes.oee.getAllOeeModeRecords

Retrieves all OEE mode records for a location within a specified time range.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllOeeModeRecords(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                        |
| ------------------ | -------- | -------- | ------------------------------------------------------------------ |
| `locationIdOrPath` | `String` | False    | The location ID (ULID) or path to retrieve OEE records for.        |
| `startDate`        | `Date`   | False    | The start date/time for the query range.                           |
| `endDate`          | `Date`   | True     | The end date/time for the query range. If null, uses current time. |

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

# Define time range (last 24 hours)
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.HOURS.toMillis(24))

# Get all mode records for a production line
location = "Enterprise/Site/Area/Line1"
mode_records = system.mes.oee.getAllOeeModeRecords(location, start_time, end_time)

for record in mode_records:
    print record['name'], record['duration']
```
