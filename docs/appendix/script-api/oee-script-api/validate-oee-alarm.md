---
sidebar_position: 21
title: "validateOeeAlarm"
description: "Validates an OEE alarm configuration."
---

# system.mes.oee.validateOeeAlarm

## Description

Validates the specified parameters for an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration and returns any validation errors. This only checks if the alarm object can be saved based on the attributes given.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateOeeAlarm(**alarm)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages. If validation passes, returns an empty object or null.

## Code Examples

```python
# Validate an alarm before saving
alarm = system.mes.oee.newOeeAlarm()
alarm['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
alarm['tagPath'] = '[default]Alarms/Line1/Motor1'
alarm['minPriority'] = 'Diagnostic'

errors = system.mes.oee.validateOeeAlarm(**alarm)
if errors:
    print("Validation errors:", errors)
else:
    system.mes.oee.saveOeeAlarm(alarm)
```


