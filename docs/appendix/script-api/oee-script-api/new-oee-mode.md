---
sidebar_position: 11
title: 'newOeeMode'
description: 'Generates a new, empty OEE mode object.'
---

# system.mes.oee.newOeeMode

Generates an empty, non-persisted OEE Mode object. This object provides the structure required to save a new mode record using [`system.mes.oee.saveMode`](./save-mode).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newOeeMode()
```

## Parameters

This method does not take any parameters.

## Returns

A JSON representation of an `OeeModeDTO` object with default values, ready to be populated and saved.

| Name                         | Type                            | Nullable | Description                                                                               | Default Value          |
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

## Code Examples

```python
# Create a new OEE mode object
new_mode = system.mes.oee.newOeeMode()

# Now you can set properties on the new_mode object
new_mode['locationId'] = 'some-location-id'
new_mode['name'] = 'Running'
new_mode['calculationType'] = 'SCHEDULED_PRODUCTION'

# To persist the mode, pass it to the saveMode function
# saved_mode = system.mes.oee.saveMode(**new_mode)
```
