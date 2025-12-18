---
sidebar_position: 12
title: "splitOeeModeRecord"
description: "Split the OEE Mode Record at the given time."
---

# system.mes.oee.splitOeeModeRecord

## Description

Splits the [OEE Mode Record](../../data-model/oee-model/oee-mode-record.md) at the given time.

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

Returns a JSON representation of the new OEE Mode Record created after the split.

| Name                  | Type                          | Nullable | Description                                                                                    |
|-----------------------|-------------------------------|----------|------------------------------------------------------------------------------------------------|
| `locationId`          | String (ULID)                 | False    | Identifier of the associated location where this mode was recorded.                            |
| `locationName`        | String                        | True     | Name of the associated location.                                                               |
| `locationPath`        | String                        | True     | Path of the associated location where this mode was recorded.                                  |
| `code`                | Integer                       | False    | Integer mode number.                                                                           |
| `status`              | Status (enum)                 | False    | Status of the OEE record (running, faulted, cancelled, complete etc.).                         |
| `startDate`           | Instant                       | False    | Start date and time of the mode record.                                                        |
| `endDate`             | Instant                       | True     | End date and time of the mode record. Can be null if the mode is still ongoing.                |
| `duration`            | Double                        | False    | Total duration of the mode record in seconds.                                                  |
| `overrunDurationSec`  | Double                        | False    | Duration in seconds that the machine has overrun its scheduled downtime.                       |
| `name`                | String                        | False    | Name of the mode.                                                                              |
| `calculationType`     | OeeModeCalculationType (enum) | False   | Specifies how this mode should be factored into OEE calculations.                              |
| `color`               | String                        | False    | Hex color code representing the mode visually.                                                 |
| `expectedDuration`    | Double                        | True     | Expected duration of the mode in seconds.                                                      |

## Code Examples

```python
oeeModeRecordId = "01K4OEEMRC-UNIT1-0001"  

splitDate = "2025-09-05 14:58:30"    
splitDate = system.date.parse(splitDate, "yyyy-MM-dd HH:mm:ss")  
  
newRecord = system.mes.oee.splitOeeModeRecord(oeeModeRecordId, splitDate)
print(newRecord)
```
