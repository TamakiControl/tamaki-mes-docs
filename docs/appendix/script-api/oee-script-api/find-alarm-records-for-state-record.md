---
sidebar_position: 23
title: "findAlarmRecordsForStateRecord"
description: "Finds alarm records associated with a state record."
---

# system.mes.oee.findAlarmRecordsForStateRecord

## Description

Finds all [OEE Alarm Records](../../data-model/oee-model/oee-alarm-record) associated with a specific [OEE State Record](../../data-model/oee-model/oee-state-record).

## Syntax

```python
system.mes.oee.findAlarmRecordsForStateRecord(stateRecordId)
```

## Parameters

| Parameter       | Type            | Nullable | Description                                    |
| --------------- | --------------- | -------- | ---------------------------------------------- |
| `stateRecordId` | `String` (ULID) | False    | The ID of the state record to find alarms for. |

## Returns

Returns a list of JSON objects representing the alarm records associated with the state record.

## Code Examples

```python
# Find all alarms for a state record
alarm_records = system.mes.oee.findAlarmRecordsForStateRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the alarms
for alarm in alarm_records:
    print(f"Alarm ID: {alarm['id']}, Priority: {alarm['priority']}")
```
