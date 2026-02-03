---
sidebar_position: 63
title: 'findAlarmsForStateRecord'
description: 'Finds all OEE Alarm Records associated with a specific OEE State Record.'
---

# system.mes.oee.findAlarmsForStateRecord

## Description

Finds all OEE Alarm Records associated with a specific OEE State Record.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.findAlarmsForStateRecord(oeeStateRecordId)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                   |
| ------------------ | -------- | -------- | ------------------------------------------------------------- |
| `oeeStateRecordId` | `String` | False    | The ID of the OEE State Record to find associated alarms for. |

## Returns

A list of JSON objects where each object represents an `OeeAlarmRecordDTO`. 

Each object has the following properties.

| Name                 | Type                   | Nullable | Description                                                     | Default Value |
| -------------------- | ---------------------- | -------- | --------------------------------------------------------------- | ------------- |
| `id`                 | `String`               | `True`   | The id of the OEE Alarm Record                                  | `null`        |
| `locationId`         | `String`               | `False`  | Identifier of the associated location                           | `null`        |
| `locationPath`       | `String`               | `True`   | Path to the associated location                                 | `null`        |
| `oeeStateRecordId`   | `String`               | `True`   | Oee State Record Id active at this location at this time        | `null`        |
| `oeeStateRecordCode` | `Integer`              | `True`   | Oee State Record code active at this location at this time      | `null`        |
| `name`               | `String`               | `False`  | The alarm name as configured in Ignition                        | `null`        |
| `ignitionAlarmId`    | `String`               | `False`  | Unique identifier of the alarm instance in Ignition             | `null`        |
| `source`             | `String`               | `False`  | The tag path or source that generated this alarm                | `null`        |
| `priority`           | `AlarmPriority`        | `True`   | The configured priority level of the alarm                      | `null`        |
| `displayPath`        | `String`               | `False`  | The hierarchical display path of the alarm in the tag structure | `null`        |
| `label`              | `String`               | `False`  | The human-readable display name for the alarm                   | `null`        |
| `cleared`            | `Boolean`              | `False`  | Indicates if the alarm condition has returned to normal         | `false`       |
| `acknowledged`       | `Boolean`              | `False`  | Indicates if the alarm has been acknowledged by an operator     | `false`       |
| `shelved`            | `Boolean`              | `False`  | Indicates if the alarm has been temporarily suppressed          | `false`       |
| `state`              | `AlarmState`           | `False`  | The current state of the alarm in Ignition's state machine      | `null`        |
| `lastEventState`     | `AlarmStateTransition` | `False`  | The most recent state transition that occurred for this alarm   | `null`        |
| `eventType`          | `AlarmEventType`       | `False`  | The event type of this alarm record                             | `null`        |
| `timestamp`          | `Long`                 | `False`  | The timestamp when this alarm event was triggered               | `null`        |
| `notes`              | `String`               | `True`   | Notes associated with the OEE Alarm Record                      | `null`        |
| `enabled`            | `boolean`              | `True`   | Indicates whether the Alarm Record is enabled                   | `true`        |
| `spare1`             | `String`               | `True`   | Extra field 1                                                   | `null`        |
| `spare2`             | `String`               | `True`   | Extra field 2                                                   | `null`        |
| `spare3`             | `String`               | `True`   | Extra field 3                                                   | `null`        |

## Code Examples

```python
# Find alarms for a specific state record
state_record_id = "some-state-record-id"
alarms = system.mes.oee.findAlarmsForStateRecord(state_record_id)

for alarm in alarms:
    print alarm['name'], alarm['timestamp'], alarm['priority']
```
