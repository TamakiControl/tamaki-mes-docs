---
sidebar_position: 54
title: 'getOeeStateRecord'
description: 'Retrieves a specific OEE state record by its ID.'
---

# system.mes.oee.getOeeStateRecord

## Description

Retrieves a specific OEE state record by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeStateRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                    |
| --------- | --------------- | -------- | ---------------------------------------------- |
| `id`      | `String` (ULID) | False    | The unique identifier of the OEE state record. |

## Returns

A JSON representation of an `OeeStateRecordDTO` object containing the details of the specified state record.

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
# Get a specific OEE state record
state_record_id = "01JCH3STATE-REC-001"
state_record = system.mes.oee.getOeeStateRecord(state_record_id)

if state_record:
    print "State Name:", state_record['name']
    print "Duration (sec):", state_record['duration']
    if state_record['downtimeReason']:
        print "Downtime Reason:", state_record['downtimeReason']
```
