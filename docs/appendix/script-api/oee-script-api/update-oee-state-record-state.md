---
sidebar_position: 51
title: "updateOeeStateRecordState"
description: "Updates the state of an existing OEE State Record."
---

# system.mes.oee.updateOeeStateRecordState

## Description

Updates the state of an existing [OEE State Record](../../data-model/oee-model/oee-state-record.md).

Copies the code, name, calculation type, color, from the OEE State to the OEE State Record.

## Permissions

This method requires the `SYSTEM.ADMIN` permission.

## Syntax

```python
system.mes.oee.updateOeeStateRecordState(oeeStateRecordId, newOeeStateId)
```

## Parameters

| Parameter          | Type          | Nullable | Description                               |
|--------------------|---------------|----------|-------------------------------------------|
| `oeeStateRecordId` | String (ULID) | False    | The ID of the OEE State Record to update. |
| `newOeeStateId`    | String (ULID) | False    | The ID of the new OEE State to set.       |

## Returns

Returns a JSON representation of the updated `OeeStaeRecordDTO` object.

| Name                       | Type                      | Nullable | Description                                                                | Default Value   |
|----------------------------|---------------------------|----------|----------------------------------------------------------------------------|-----------------|
| `id`                       | `String`                  | `True`   | The id of the OEE State Record                                             | `null`          |
| `code`                     | `Integer`                 | `False`  | Integer state number                                                       | `null`          |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location where this state record was recorded | `null`          |
| `locationName`             | `String`                  | `True`   | Name of the associated location                                            | `null`          |
| `locationPath`             | `String`                  | `True`   | Path of the location where this state record was recorded                  | `null`          |
| `name`                     | `String`                  | `False`  | Name of the recorded state                                                 | `null`          |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                   | `DOWNTIME`      |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                             | `"#000000"`     |
| `status`                   | `Status`                  | `False`  | Status of the OEE record (e.g., running, faulted, canceled, complete)      | `UNKNOWN`       |
| `startDate`                | `Instant`                 | `False`  | Start date and time of the state record                                    | `Instant.now()` |
| `endDate`                  | `Instant`                 | `True`   | End date and time of the state record                                      | `null`          |
| `duration`                 | `Double`                  | `False`  | Duration of the state record in seconds                                    | `0.0`           |
| `downtimeReasonId`         | `String`                  | `True`   | Identifier of the associated downtime reason, if applicable                | `null`          |
| `downtimeReason`           | `String`                  | `True`   | Title of the downtime reason. (Name - Code) For display purposes only      | `null`          |
| `downtimeReasonPath`       | `String`                  | `True`   | Path to the current downtime reason                                        | `null`          |
| `interruptionLocationId`   | `String`                  | `True`   | Location id that caused the blocked/starved state on the machine           | `null`          |
| `interruptionLocationName` | `String`                  | `True`   | Name of the interruption location that caused the blocked/starved state    | `null`          |
| `interruptionLocationPath` | `String`                  | `True`   | Location path that caused the blocked/starved state on the machine         | `null`          |
| `acknowledged`             | `Boolean`                 | `False`  | Boolean indicating whether the state record has been acknowledged          | `false`         |
| `acknowledgedBy`           | `String`                  | `True`   | Acknowledged By. This is the user who acknowledged the state record        | `null`          |
| `acknowledgedDate`         | `Instant`                 | `True`   | Acknowledged Date. This is the date when the state record was acknowledged | `null`          |
| `modeRecordId`             | `String`                  | `True`   | Identifier of the associated mode record                                   | `null`          |
| `rootCauseStateRecordId`   | `String`                  | `True`   | Identifier of the root cause state record, if applicable                   | `null`          |
| `primaryAlarmRecordId`     | `String`                  | `True`   | Identifier of the associated OEE Alarm Record, if applicable               | `null`          |
| `primaryAlarmName`         | `String`                  | `True`   | Primary alarm name, if applicable                                          | `null`          |
| `primaryAlarmDisplayPath`  | `String`                  | `True`   | Primary alarm display path, if applicable                                  | `null`          |
| `primaryAlarmLabel`        | `String`                  | `True`   | Primary alarm display name, if applicable                                  | `null`          |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## Code Examples

```python
oeeStateRecordId = "01JPWSRZPB-F5DR287Y-FPHMHHY1"  
newOeeStateId = "01JPWST278-J1K1GK0J-DNAD02QW"
  
system.mes.oee.updateOeeStateRecordState(oeeStateRecordId, newOeeStateId)
```
