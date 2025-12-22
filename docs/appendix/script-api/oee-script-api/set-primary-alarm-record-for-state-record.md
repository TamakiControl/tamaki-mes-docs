---
sidebar_position: 11
title: "setPrimaryAlarmRecordForStateRecord"
description: "Manually sets the primary alarm for a state record."
---

# system.mes.oee.setPrimaryAlarmRecordForStateRecord

## Description

Manually sets the primary alarm for an [OEE State Record](../../data-model/oee-model/oee-state-record). This allows overriding the automatic primary alarm selection based on the `primary_alarm_resolution_strategy` in the OEE configuration.

## Syntax

```python
system.mes.oee.setPrimaryAlarmRecordForStateRecord(stateRecordId, alarmRecordId)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                                        |
| ------------------ | --------------- | -------- | ------------------------------------------------------------------ |
| `oeeStateRecordId` | `String` (ULID) | False    | The ID of the state record.                                        |
| `alarmRecordId`    | `String` (ULID) | True     | The ID of the alarm record to set as primary. Use `None` to clear. |

## Returns

Returns information about the operation result.

## Code Examples

```python
# Set a primary alarm for a state record
result = system.mes.oee.setPrimaryAlarmRecordForStateRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',  # state record ID
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE2'   # alarm record ID
)

# Clear the primary alarm
result = system.mes.oee.setPrimaryAlarmRecordForStateRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',  # state record ID
    None                              # clear primary alarm
)
```
