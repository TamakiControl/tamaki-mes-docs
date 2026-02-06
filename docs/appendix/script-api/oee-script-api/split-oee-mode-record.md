---
sidebar_position: 50
title: "splitOeeModeRecord"
description: "Split the OEE Mode Record at the given time."
---

# system.mes.oee.splitOeeModeRecord

## Description

Splits an existing Oee Mode record at a specified time. This action modifies the original record, shortening its duration, and creates a new record for the remaining time.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.splitOeeModeRecord(oeeModeRecordId, splitDate)
```

## Parameters

| Parameter         | Type            | Nullable | Description                              |
|-------------------|-----------------|----------|------------------------------------------|
| `oeeModeRecordId` | String (ULID)   | False    | The ID of the oee mode record to update. |
| `splitDate`       | Date            | False    | The date and time to split the record at.|

## Returns

Returns a JSON representation of the new `OeeModeRecordDTO` object created after the split.

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
oeeModeRecordId = "01K4OEEMRC-UNIT1-0001"  

splitDate = "2025-09-05 14:58:30"    
splitDate = system.date.parse(splitDate, "yyyy-MM-dd HH:mm:ss")  
  
newRecord = system.mes.oee.splitOeeModeRecord(oeeModeRecordId, splitDate)
print(newRecord)
```
