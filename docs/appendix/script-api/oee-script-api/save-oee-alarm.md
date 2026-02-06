---
sidebar_position: 30
title: "saveOeeAlarm"
description: "Saves an OEE alarm configuration."
---

# system.mes.oee.saveOeeAlarm

## Description

Creates or updates an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration in the system.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveOeeAlarm(**alarm)
```

## Parameters

An unpacked dictionary of `OeeAlarmDTO` fields.

| Parameter                    | Type            | Nullable | Description                                                                                                   | Default Value |
|------------------------------|-----------------|----------|---------------------------------------------------------------------------------------------------------------|---------------|
| `id`                         | `String`        | `True`   | The id of the OEE Alarm                                                                                       | `null`        |
| `locationId`                 | `String`        | `False`  | Identifier of the associated location                                                                         | `null`        |
| `locationPath`               | `String`        | `True`   | Path for the associated location                                                                              | `null`        |
| `tagPath`                    | `String`        | `False`  | The qualified path to monitor for alarms                                                                      | `null`        |
| `minPriority`                | `AlarmPriority` | `False`  | Minimum alarm priority to include in events                                                                   | `Diagnostic`  |
| `labelFilter`                | `String`        | `True`   | Optional filter to apply to alarm labels. Only alarms with labels matching this filter will be included.      | `null`        |
| `downtimeReasonCodeOverride` | `String`        | `True`   | Name of the associated data property in Ignition alarms that contains the downtime reason code override value | `null`        |
| `stateCodeOverride`          | `String`        | `True`   | Name of the associated data property in Ignition alarms that contains the state code override value           | `null`        |
| `notes`                      | `String`        | `True`   | Notes associated with the OEE Alarm                                                                           | `null`        |
| `enabled`                    | `boolean`       | `True`   | Indicates whether the OEE Alarm is enabled                                                                    | `true`        |
| `spare1`                     | `String`        | `True`   | Extra field 1                                                                                                 | `null`        |
| `spare2`                     | `String`        | `True`   | Extra field 2                                                                                                 | `null`        |
| `spare3`                     | `String`        | `True`   | Extra field 3                                                                                                 | `null`        |

## Returns

Returns a JSON representation of the saved `OeeAlarmDTO` object.

## Code Examples

```python
# Create and save a new alarm
alarm = system.mes.oee.newOeeAlarm()
alarm['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
alarm['tagPath'] = '[default]Alarms/Line1/Motor1'
alarm['minPriority'] = 'Medium'  # Valid values: Diagnostic, Low, Medium, High, Critical

saved_alarm = system.mes.oee.saveOeeAlarm(**alarm)

# Update an existing alarm
existing_alarm = system.mes.oee.getOeeAlarm('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
existing_alarm['minPriority'] = 'High'
updated_alarm = system.mes.oee.saveOeeAlarm(**existing_alarm)
```