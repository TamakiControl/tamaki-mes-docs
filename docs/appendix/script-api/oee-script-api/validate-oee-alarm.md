---
sidebar_position: 21
title: "validateOeeAlarm"
description: "Validates an OEE alarm configuration."
---

# system.mes.oee.validateOeeAlarm

## Description

Validates the specified parameters for an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration and returns any validation errors. This only checks if the alarm object can be saved based on the attributes given.

## Syntax

```python
system.mes.oee.validateOeeAlarm(alarm)
```

## Parameters

| Parameter      | Type      | Nullable | Description                                                                                                                  |
| -------------- | --------- | -------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `id`           | `String`  | True     | Unique identifier. If provided, updates existing alarm; if `None` or omitted, creates new alarm.                             |
| `locationId`   | `String`  | False    | Identifier for the associated location (required).                                                                           |
| `locationPath` | `String`  | True     | Path for the associated location (display only, optional).                                                                   |
| `tagPath`      | `String`  | False    | The qualified path to monitor for alarms. Should be in the format "provider/path/to/tag" or "tag/path/to/folder" (required). |
| `minPriority`  | `String`  | False    | Minimum alarm priority to include in events. Valid values: `Diagnostic`, `Low`, `Medium`, `High`, `Critical` (required).     |
| `enabled`      | `Boolean` | True     | Whether the alarm configuration is enabled. Defaults to `True` if not specified.                                             |
| `notes`        | `String`  | True     | Notes about the alarm configuration.                                                                                         |
| `spare1`       | `String`  | True     | Additional field for user-defined context.                                                                                   |
| `spare2`       | `String`  | True     | Additional field for user-defined context.                                                                                   |
| `spare3`       | `String`  | True     | Additional field for user-defined context.                                                                                   |
| `labelFilter`  | `String`  | True     | Label filter for the alarm configuration.                                                                                    |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages. If validation passes, returns an empty object or null.

## Code Examples

```python
# Validate an alarm before saving
alarm = system.mes.oee.newOeeAlarm()
alarm['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
alarm['tagPath'] = '[default]Alarms/Line1/Motor1'
alarm['minPriority'] = 2

errors = system.mes.oee.validateOeeAlarm(alarm)
if errors:
    print("Validation errors:", errors)
else:
    system.mes.oee.saveOeeAlarm(alarm)
```


