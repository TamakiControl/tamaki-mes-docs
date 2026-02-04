---
sidebar_position: 24
title: "getOeeAlarmRecord"
description: "Retrieves a specific alarm record by ID."
---

# system.mes.oee.getOeeAlarmRecord

## Description

Retrieves a specific [OEE Alarm Record](../../data-model/oee-model/oee-alarm-record) by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeAlarmRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the alarm record to retrieve.  |

## Returns

Returns a JSON representation of the `OeeAlarmRecordDTO` object. Returns nothing if no record is found.

| Name                         | Type                   | Nullable | Description                                                     | Default Value   |
|------------------------------|------------------------|----------|-----------------------------------------------------------------|-----------------|
| `id`                         | `String`               | `True`   | The id of the OEE Alarm Record                                  | `null`          |
| `locationId`                 | `String`               | `False`  | Identifier of the associated location                           | `null`          |
| `locationPath`               | `String`               | `True`   | Path of the location where this state record was recorded       | `null`          |
| `oeeStateRecordId`           | `String`               | `True`   | Oee State Record Id active at this location at this time        | `null`          |
| `oeeStateRecordCode`         | `Integer`              | `True`   | Oee State Record code active at this location at this time      | `null`          |
| `name`                       | `String`               | `False`  | The alarm name as configured in Ignition                        | `null`          |
| `ignitionAlarmId`            | `String`               | `False`  | Unique identifier of the alarm instance in Ignition             | `null`          |
| `source`                     | `String`               | `False`  | The tag path or source that generated this alarm                | `null`          |
| `priority`                   | `AlarmPriority`        | `True`   | The configured priority level of the alarm                      | `null`          |
| `displayPath`                | `String`               | `False`  | The hierarchical display path of the alarm in the tag structure | `null`          |
| `label`                      | `String`               | `False`  | The human-readable display name for the alarm                   | `null`          |
| `activeDate`                 | `Instant`              | `False`  | Indicates when the alarm condition became active                | `Instant.now()` |
| `clearedDate`                | `Instant`              | `True`   | Indicates when the alarm condition cleared                      | `null`          |
| `acknowledgedDate`           | `Instant`              | `True`   | Indicates if the alarm has been acknowledged by an operator     | `null`          |
| `shelvedDate`                | `Instant`              | `True`   | Indicates if the alarm has been temporarily suppressed          | `null`          |
| `state`                      | `AlarmState`           | `False`  | The current state of the alarm in Ignition's state machine      | `null`          |
| `lastEventState`             | `AlarmStateTransition` | `False`  | The most recent state transition that occurred for this alarm   | `null`          |
| `downtimeReasonCodeOverride` | `Integer`              | `True`   | Optional downtime reason code override                          | `null`          |
| `stateCodeOverride`          | `Integer`              | `True`   | Optional state code override                                    | `null`          |
| `notes`                      | `String`               | `True`   | Notes associated with the OEE Alarm Record                      | `null`          |
| `enabled`                    | `boolean`              | `True`   | Indicates whether the OEE Alarm Record is enabled               | `true`          |
| `spare1`                     | `String`               | `True`   | Extra field 1 for the OEE Alarm Record                          | `null`          |
| `spare2`                     | `String`               | `True`   | Extra field 2 for the OEE Alarm Record                          | `null`          |
| `spare3`                     | `String`               | `True`   | Extra field 3 for the OEE Alarm Record                          | `null`          |

## Code Examples

```python
# Retrieve an alarm record by ID
alarm_record = system.mes.oee.getOeeAlarmRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the record
print "Active Date:", alarm_record['activeDate']
print "Cleared Date:", alarm_record.get('clearedDate', 'Not cleared')
```