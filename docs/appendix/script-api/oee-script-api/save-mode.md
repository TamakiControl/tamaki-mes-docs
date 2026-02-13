---
sidebar_position: 10
title: 'saveMode'
description: 'Creates or updates an OEE mode.'
---

# system.mes.oee.saveMode

## Description

Creates or updates an OEE Mode in the system. To create a new mode, first generate a new object with [`system.mes.oee.newOeeMode`](./new-oee-mode).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveMode(**modeData)
```

## Parameters

An unpacked dictionary of `OeeModeDTO` fields.

| Parameter                    | Type                            | Nullable | Description                                                                               | Default Value          |
| ---------------------------- | ------------------------------- | -------- | ----------------------------------------------------------------------------------------- | ---------------------- |
| `id`                         | `String`                        | `True`   | The id of the OEE Mode                                                                    | `null`                 |
| `locationId`                 | `String`                        | `False`  | Identifier of the associated location                                                     | `null`                 |
| `locationPath`               | `String`                        | `True`   | Path to the associated location                                                           | `null`                 |
| `code`                       | `Integer`                       | `False`  | Integer value representing the mode                                                       | `null`                 |
| `name`                       | `String`                        | `False`  | Name of the mode                                                                          | `null`                 |
| `calculationType`            | `OeeModeCalculationType`        | `False`  | Specifies how this mode should be factored into OEE calculations                          | `SCHEDULED_PRODUCTION` |
| `expectedDurationSource`     | `OeeModeExpectedDurationSource` | `False`  | Defines the source used to determine the expected duration of a scheduled downtime event  | `STATIC`               |
| `expectedDurationExpression` | `String`                        | `True`   | Ignition expression to dynamically calculate the expected duration of the mode in seconds | `null`                 |
| `expectedDuration`           | `Double`                        | `True`   | Expected duration of the mode in seconds                                                  | `0.0`                  |
| `color`                      | `String`                        | `False`  | Hex color code representing the mode visually                                             | `"#000000"`            |
| `notes`                      | `String`                        | `True`   | Notes associated with the OEE Mode                                                        | `null`                 |
| `enabled`                    | `boolean`                       | `True`   | Indicates whether the OEE Mode is enabled                                                 | `true`                 |
| `spare1`                     | `String`                        | `True`   | Extra field 1                                                                             | `null`                 |
| `spare2`                     | `String`                        | `True`   | Extra field 2                                                                             | `null`                 |
| `spare3`                     | `String`                        | `True`   | Extra field 3                                                                             | `null`                 |

## Returns

A JSON representation of the saved `OeeModeDTO` object.

## Code Examples

```python
# Create a new OEE mode object
newMode = system.mes.oee.newOeeMode()

# Set attributes for the new mode
newMode['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newMode['name'] = 'Production'
newMode['calculationType'] = 'SCHEDULED_PRODUCTION'
newMode['enabled'] = True

# Save the new mode
savedMode = system.mes.oee.saveMode(**newMode)

print "Saved OEE Mode with ID:", savedMode['id']

# To update an existing mode, include its ID
# updatedModeData = system.mes.oee.getMode(savedMode['id'])
# updatedModeData['name'] = 'Full Production'
# system.mes.oee.saveMode(**updatedModeData)
```
