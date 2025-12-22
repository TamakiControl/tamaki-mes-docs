---
sidebar_position: 7
title: "newOeeAlarm"
description: "Creates a new OEE alarm configuration."
---

# system.mes.oee.newOeeAlarm

## Description

Creates an empty non-persisted [OEE Alarm](../../data-model/oee-model/oee-alarm) object to provide the structure required by the API to save a new alarm configuration.

## Syntax

```python
system.mes.oee.newOeeAlarm()
```

## Parameters

This method does not take any parameters.

## Returns

Returns a JSON object representing a newly created OEE alarm with default values. The returned object contains the following fields:

| Field          | Type      | Default Value  | Description                                                                                                   |
| -------------- | --------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `id`           | `String`  | `None`         | Unique identifier (will be generated upon save).                                                              |
| `locationId`   | `String`  | `None`         | Identifier for the associated location (required before saving).                                              |
| `locationPath` | `String`  | `None`         | Path for the associated location (display only, optional).                                                    |
| `tagPath`      | `String`  | `None`         | The qualified path to monitor for alarms (required before saving).                                            |
| `minPriority`  | `String`  | `'Diagnostic'` | Minimum alarm priority to include in events. Valid values: `Diagnostic`, `Low`, `Medium`, `High`, `Critical`. |
| `enabled`      | `Boolean` | `True`         | Whether the alarm configuration is enabled.                                                                   |
| `notes`        | `String`  | `None`         | Notes about the alarm configuration.                                                                          |
| `spare1`       | `String`  | `None`         | Additional field for user-defined context.                                                                    |
| `spare2`       | `String`  | `None`         | Additional field for user-defined context.                                                                    |
| `spare3`       | `String`  | `None`         | Additional field for user-defined context.                                                                    |
| `labelFilter`  | `String`  | `None`         | Label filter for the alarm configuration.                                                                     |

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
