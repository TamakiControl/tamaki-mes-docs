---
sidebar_position: 10
title: "saveOeeAlarm"
description: "Saves an OEE alarm configuration."
---

# system.mes.oee.saveOeeAlarm

## Description

Creates or updates an [OEE Alarm](../../data-model/oee-model/oee-alarm) configuration in the system.

## Syntax

```python
system.mes.oee.saveOeeAlarm(alarm)
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

Returns a JSON representation of the saved OEE alarm configuration.

## Code Examples

```python
# Create and save a new alarm
alarm = system.mes.oee.newOeeAlarm()
alarm['locationId'] = '01JAP8RJBN-8ZTPXSGY-J9GSDPE1'
alarm['tagPath'] = '[default]Alarms/Line1/Motor1'
alarm['minPriority'] = 'Medium'  # Valid values: Diagnostic, Low, Medium, High, Critical

saved_alarm = system.mes.oee.saveOeeAlarm(alarm)

# Update an existing alarm
existing_alarm = system.mes.oee.getOeeAlarm('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
existing_alarm['minPriority'] = 'High'
updated_alarm = system.mes.oee.saveOeeAlarm(existing_alarm)
```