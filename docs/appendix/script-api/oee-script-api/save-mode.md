---
sidebar_position: 14
title: 'saveMode'
description: 'Creates or updates an OEE mode.'
---

# system.mes.oee.saveMode

Creates or updates an OEE Mode in the system. To create a new mode, first generate a new object with [`system.mes.oee.newOeeMode`](./new-oee-mode).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveMode(**mode_data)
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
new_mode = system.mes.oee.newOeeMode()

# Set attributes for the new mode
new_mode['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_mode['name'] = 'Production'
new_mode['calculationType'] = 'SCHEDULED_PRODUCTION'
new_mode['enabled'] = True

# Save the new mode
saved_mode = system.mes.oee.saveMode(**new_mode)

print "Saved OEE Mode with ID:", saved_mode['id']

# To update an existing mode, include its ID
# updated_mode_data = system.mes.oee.getMode(saved_mode['id'])
# updated_mode_data['name'] = 'Full Production'
# system.mes.oee.saveMode(**updated_mode_data)
```
