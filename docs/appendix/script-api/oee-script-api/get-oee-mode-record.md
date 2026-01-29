---
title: getOeeModeRecord
description: Retrieve individual OEE mode record.
sidebar_position: 58
---

# system.mes.oee.getOeeModeRecord

Retrieves a specific OEE mode record by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeModeRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                           |
| --------- | --------------- | -------- | ----------------------------------------------------- |
| `id`      | `String` (ULID) | False    | The unique identifier of the mode record to retrieve. |

## Returns

An `OeeModeRecordDTO` object containing the details of the specified mode record.

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
| `expectedDurationSource`     | `OeeModeExpectedDurationSource` | `False`  | Source to calculate the expected duration of an scheduled downtime event | `STATIC`               |
| `expectedDurationExpression` | `String`                        | `True`   | Expression to calculate the expected duration of the mode in seconds     | `null`                 |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                 | `0.0`                  |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode Record                                | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode Record is enabled                         | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                            | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                            | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                            | `null`                 |

## Code Examples

```python
# Get a specific mode record by its ID
record_id = "01JDBQ7Y2B-QZ8XJ9XJ-V2QZJ9XJ"
mode_record = system.mes.oee.getOeeModeRecord(record_id)

if mode_record:
    print "Mode Name:", mode_record.name
    print "Duration (sec):", mode_record.duration
```
