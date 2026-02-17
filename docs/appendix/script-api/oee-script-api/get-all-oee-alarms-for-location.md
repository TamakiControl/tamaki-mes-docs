---
sidebar_position: 29
title: "getAllOeeAlarmsForLocation"
description: "Gets all alarms configured for a location."
---

# system.mes.oee.getAllOeeAlarmsForLocation

## Description

Retrieves all [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations for a specific location.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllOeeAlarmsForLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                              |
|--------------------|----------|----------|----------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The location ID or path to get alarm configurations for. |

## Returns

Returns a list of JSON objects representing all `OeeAlarmDTO` objects for the location.

Each object has the following properties:

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
# Get all alarms for a location
alarms = system.mes.oee.getAllOeeAlarmsForLocation('DairyCo/Plant1/Line1')

# Output all alarms
for alarm in alarms:
    print "Tag:", alarm['tagPath'], ", Min Priority:", alarm['minPriority']
```
