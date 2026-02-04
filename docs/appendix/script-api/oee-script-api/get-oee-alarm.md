---
sidebar_position: 8
title: "getOeeAlarm"
description: "Retrieves an OEE alarm configuration by ID."
---

# system.mes.oee.getOeeAlarm

## Description

Retrieves an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeAlarm(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE alarm to retrieve.     |

## Returns

Returns a JSON representation of the `OeeAlarmDTO` object. Returns nothing if no alarm is found.

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
# Retrieve an OEE alarm by ID
alarm = system.mes.oee.getOeeAlarm('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the alarm configuration
print(alarm)
```


