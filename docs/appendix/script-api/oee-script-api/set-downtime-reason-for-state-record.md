---
sidebar_position: 43
title: 'setDowntimeReasonForStateRecord'
description: 'Sets a downtime reason for a specific state record.'
---

# system.mes.oee.setDowntimeReasonForStateRecord

Sets a downtime reason for a specific OEE state record, with optional notes and an acknowledgment status.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.setDowntimeReasonForStateRecord(oeeStateRecordId, downtimeReasonId=None, notes=None, acknowledge=False)
```

## Parameters

| Parameter          | Type      | Nullable | Description                                                      |
| ------------------ | --------- | -------- | ---------------------------------------------------------------- |
| `oeeStateRecordId` | `String`  | False    | The ID of the OEE state record to update.                        |
| `downtimeReasonId` | `String`  | True     | The ID of the downtime reason to assign. Set to `None` to clear. |
| `notes`            | `String`  | True     | Optional notes to add to the state record.                       |
| `acknowledge`      | `Boolean` | True     | Whether to acknowledge the record. Defaults to `False`.          |

## Returns

A PyObject representing the updated `OeeStateRecordDTO`.

| Name                       | Type                      | Nullable | Description                                                                | Default Value   |
| -------------------------- | ------------------------- | -------- | -------------------------------------------------------------------------- | --------------- |
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
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State Record                                 | `null`          |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State Record is enabled                          | `true`          |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                              | `null`          |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                              | `null`          |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                              | `null`          |

## Code Examples

```python
# Assume we have a state record ID and a reason ID
state_record_id = "some-state-record-id"
reason_id = "some-downtime-reason-id"

# Set the downtime reason and add a note
try:
    updated_record = system.mes.oee.setDowntimeReasonForStateRecord(
        oeeStateRecordId=state_record_id,
        downtimeReasonId=reason_id,
        notes="Operator confirmed mechanical jam.",
        acknowledge=True
    )
    print "Successfully updated state record:", updated_record['id']
    print "New Reason:", updated_record['downtimeReasonName']
    print "Acknowledged:", updated_record['acknowledged']

except Exception as e:
    print "Error updating state record:", str(e)

# To clear a downtime reason
# system.mes.oee.setDowntimeReasonForStateRecord(state_record_id, None, "Reason cleared.")
```
