---
sidebar_position: 13
title: "updateOeeModeRecordMode"
description: "Updates the mode of an existing OEE Mode Record."
---

# system.mes.oee.updateOeeModeRecordMode

## Description

Updates the mode of an existing [OEE Mode Record](../../data-model/oee-model/oee-mode-record.md).

Copies the code, name, calculation type, color, from the OEE Mode to the OEE Mode Record.

## Syntax

```python
system.mes.oee.updateOeeModeRecordMode(oeeModeRecordId, newOeeModeId)
```

## Parameters

| Parameter                | Type          | Nullable | Description                                                     |
|--------------------------|---------------|----------|-----------------------------------------------------------------|
| `oeeModeRecordId`        | String (ULID) | False    | The ID of the OEE Mode Record to update                         |
| `newOeeModeId`           | String (ULID) | False    | The ID of the new OEE Mode to set                               |
| `newExpectedDurationSec` | Double        | True     | New expected duration in seconds to set on the OEE Mode Record. |

## Returns

## Returns

| Field                | Type          | Nullable | Description                                                                     |
|----------------------|---------------|----------|---------------------------------------------------------------------------------|
| `id`                 | String (ULID) | False    | Unique identifier of the OEE Mode Record.                                       |
| `locationId`         | String (ULID) | False    | Identifier of the associated location where this mode was recorded.             |
| `locationName`       | String        | True     | Name of the associated location.                                                |
| `locationPath`       | String        | True     | Path of the associated location where this mode was recorded.                   |
| `code`               | Integer       | False    | Integer mode number.                                                            |
| `status`             | String (enum) | False    | Status of the OEE record (running, faulted, cancelled, complete, etc.).         |
| `startDate`          | String        | False    | Start date and time of the mode record.                                         |
| `endDate`            | String        | True     | End date and time of the mode record. Can be null if the mode is still ongoing. |
| `duration`           | Double        | False    | Total duration of the mode record in seconds.                                   |
| `overrunDurationSec` | Double        | False    | Duration in seconds that the machine has overrun its scheduled downtime.        |
| `name`               | String        | False    | Name of the mode.                                                               |
| `calculationType`    | String (enum) | False    | Specifies how this mode should be factored into OEE calculations.               |
| `color`              | String        | False    | Hex color code representing the mode visually.                                  |
| `expectedDuration`   | Double        | False    | Expected duration of the mode in seconds.                                       |
| `createdAt`          | String        | True     | When the record was created.                                                    |
| `updatedAt`          | String        | True     | When the record was last updated.                                               |

## Code Examples

```python
oeeModeRecordId = "01JPWSRZPB-F5DR287Y-FPHMHHY1"  
newOeeModeId = "01JPWST278-J1K1GK0J-DNAD02QW"
newExpectedDurationSec = 3600  # 1 hour
  
system.mes.oee.updateOeeModeRecordMode(oeeModeRecordId, splitDate, newExpectedDurationSec)
```
