---
sidebar_position: 13
title: "updateOeeModeRecordMode"
description: "Updates the mode of an existing OEE Mode Record."
---

# system.mes.oee.updateOeeModeRecordMode

## Description

Updates the mode of an existing [OEE Mode Record](../../data-model/oee-model/oee-mode-record.md).

Copies the code, name, calculation type, color, from the OEE Mode to the OEE Mode Record.

## Permissions

This method requires the `SYSTEM.ADMIN` permission.

## Syntax

```python
system.mes.oee.updateOeeModeRecordMode(oeeModeRecordId, newOeeModeId, newExpectedDurationSec)
```

## Parameters

| Parameter                | Type          | Nullable | Description                                                     |
|--------------------------|---------------|----------|-----------------------------------------------------------------|
| `oeeModeRecordId`        | String (ULID) | False    | The ID of the OEE Mode Record to update.                        |
| `newOeeModeId`           | String (ULID) | False    | The ID of the new OEE Mode to set.                              |
| `newExpectedDurationSec` | Double        | True     | New expected duration in seconds to set on the OEE Mode Record. |

## Returns

Returns a JSON representation of the updated `OeeModeRecordDTO` object.

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
oeeModeRecordId = "01JPWSRZPB-F5DR287Y-FPHMHHY1"  
newOeeModeId = "01JPWST278-J1K1GK0J-DNAD02QW"
newExpectedDurationSec = 3600  # 1 hour
  
system.mes.oee.updateOeeModeRecordMode(oeeModeRecordId, newOeeModeId, newExpectedDurationSec)
```
