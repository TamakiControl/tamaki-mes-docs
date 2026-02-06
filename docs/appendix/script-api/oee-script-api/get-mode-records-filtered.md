---
title: getModeRecordsFiltered
description: Get all OEE Mode records that match the provided filters such as location, date range, calculation types, codes, statuses, and duration/overrun duration ranges.
sidebar_position: 40
---

# system.mes.oee.getModeRecordsFiltered

Get all OEE Mode records that match the provided filters such as location, date range, calculation types, codes, statuses, and duration/overrun duration ranges.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getModeRecordsFiltered(locationPath, startDate, endDate, calculationTypes=None, codes=None, stauses=None, minDurationSec=None, maxDurationSec=None, minOverrunDurationSec=None, maxOverrunDurationSec=None)
```

## Parameters

| Parameter               | Type        | Nullable | Description                                               |
|-------------------------|-------------|----------|-----------------------------------------------------------|
| `locationPath`          | `String`    | False    | The MES location path to search.                          |
| `startDate`             | `Date`      | False    | The start date of the time range.                         |
| `endDate`               | `Date`      | False    | The end date of the time range.                           |
| `calculationTypes`      | `String[]`  | True     | Set of different OEE Mode Calculation Types to filter by. |
| `codes`                 | `Integer[]` | True     | Set of different OEE Mode codes to filter by.             |
| `statuses`              | `String[]`  | True     | Set of different statuses to filter by.                   |
| `minDurationSec`        | `Double`    | True     | Minimum duration in seconds to filter by.                 |
| `maxDurationSec`        | `Double`    | True     | Maximum duration in seconds to filter by.                 |
| `minOverrunDurationSec` | `Double`    | True     | Minimum overrun duration in seconds to filter by.         |
| `maxOverrunDurationSec` | `Double`    | True     | Maximum overrun duration in seconds to filter by.         |

## Returns

A list of JSON representations of `OeeModeRecordDTO` objects.

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

# Get all "Scheduled Downtime" mode records with "Idle" status longer than 1 minute from the last day
location = "Enterprise/Site/Area/Line1"
end_time = Date()
start_time = Date(end_time.getTime() - TimeUnit.DAYS.toMillis(1))

filtered_records = system.mes.oee.getModeRecordsFiltered(
    locationPath=location,
    startDate=start_time,
    endDate=end_time,
    calculatedTypes=["Scheduled Downtime"], # Filter for scheduled downtime-related modes
    statuses=["IDLE"], # Filer for IDLE status
    minDurationSec=60 # Filter for modes lasting longer than a minute
)

for record in filtered_records:
    print "Mode:", record['name'], "Duration (sec):", record['duration'] / 60.0
```
