---
sidebar_position: 27
title: "newOeeAlarm"
description: "Creates a new OEE alarm configuration."
---

# system.mes.oee.newOeeAlarm

## Description

Creates an empty non-persisted [OEE Alarm](../../data-model/oee-model/oee-alarm) object to provide the structure required by the API to save a new alarm configuration.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newOeeAlarm()
```

## Parameters

This method does not take any parameters.

## Returns

Returns a JSON object representing the newly created `OeeAlarmDTO` object with default values.

| Name                         | Type            | Nullable | Description                                                                                                   | Default Value |
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

## Code Examples

```python
# Create a new OEE alarm object
alarm = system.mes.oee.newOeeAlarm()

# Set the required fields
alarm['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
alarm['tagPath'] = '[default]Alarms/Line1/Motor1'
alarm['minPriority'] = 'Diagnostic'  # Default value

# Optional: Set location path for display purposes
alarm['locationPath'] = 'DairyCo/Plant1/Line1'

# Save the alarm
system.mes.oee.saveOeeAlarm(alarm)
```
