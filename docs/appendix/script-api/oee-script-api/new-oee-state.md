---
sidebar_position: 21
title: 'newOeeState'
description: 'Generates a new, empty OEE state object.'
---

# system.mes.oee.newOeeState

Generates an empty, non-persisted OEE State object. This object provides the structure required to save a new state record using [`system.mes.oee.saveState`](./save-state).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newOeeState()
```

## Parameters

This method does not take any parameters.

## Returns

An `OeeStateDTO` object with default values, ready to be populated and saved.

| Name                       | Type                      | Nullable | Description                                                              | Default Value |
| -------------------------- | ------------------------- | -------- | ------------------------------------------------------------------------ | ------------- |
| `id`                       | `String`                  | `True`   | The id of the OEE State                                                  | `null`        |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location                                    | `null`        |
| `locationPath`             | `String`                  | `True`   | Path of the associated location                                          | `null`        |
| `code`                     | `Integer`                 | `False`  | Integer state number, which must be unique for a given location          | `null`        |
| `name`                     | `String`                  | `False`  | Name of the state                                                        | `null`        |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                 | `DOWNTIME`    |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                           | `"#000000"`   |
| `autoAcknowledge`          | `Boolean`                 | `False`  | Whether to automatically acknowledge the state record when it is created | `false`       |
| `interruptionLocationId`   | `String`                  | `True`   | Immediate interruption location that caused a blocked/starved state      | `null`        |
| `interruptionLocationPath` | `String`                  | `True`   | Path to the location that caused a blocked/starved state                 | `null`        |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State                                      | `null`        |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State is enabled                               | `true`        |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                            | `null`        |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                            | `null`        |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                            | `null`        |

## Code Examples

```python
# Create a new OEE state object
new_state = system.mes.oee.newOeeState()

# Now you can set properties on the new_state object
new_state['locationId'] = 'some-location-id'
new_state['name'] = 'Running'
new_state['calculationType'] = 'RUNNING'

# To persist the state, pass it to the saveState function
# saved_state = system.mes.oee.saveState(**new_state)
```
