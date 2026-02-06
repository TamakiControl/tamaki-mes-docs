---
sidebar_position: 16
title: 'saveState'
description: 'Creates or updates an OEE state.'
---

# system.mes.oee.saveState

## Description

Creates or updates an OEE State in the system. To create a new state, first generate a new object with [`system.mes.oee.newOeeState`](./new-oee-state).

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.saveState(**state_data)
```

## Parameters

An unpacked dictionary of `OeeStateDTO` fields.

| Parameter                  | Type                      | Nullable | Description                                                                                                                | Default Value |
|----------------------------|---------------------------|----------|----------------------------------------------------------------------------------------------------------------------------|---------------|
| `id`                       | `String`                  | `True`   | The id of the OEE State                                                                                                    | `null`        |
| `locationId`               | `String`                  | `False`  | Identifier of the associated location                                                                                      | `null`        |
| `locationPath`             | `String`                  | `True`   | Path of the associated location                                                                                            | `null`        |
| `code`                     | `Integer`                 | `False`  | Integer state number, which must be unique for a given location                                                            | `null`        |
| `name`                     | `String`                  | `False`  | Name of the state                                                                                                          | `null`        |
| `calculationType`          | `OeeStateCalculationType` | `False`  | Specifies how this state contributes to OEE calculations                                                                   | `DOWNTIME`    |
| `color`                    | `String`                  | `False`  | Hex color code representing the state visually                                                                             | `"#000000"`   |
| `autoAcknowledge`          | `Boolean`                 | `False`  | Whether to automatically acknowledge the state record when it is created                                                   | `false`       |
| `interruptionLocationId`   | `String`                  | `True`   | Immediate interruption location that caused a blocked/starved state                                                        | `null`        |
| `interruptionLocationPath` | `String`                  | `True`   | Path to the location that caused a blocked/starved state                                                                   | `null`        |
| `maxRootCauseDelaySeconds` | `Integer`                 | `True`   | Maximum delay in seconds for looking back at historical state records when resolving root cause for blocked/starved states | `0`           |
| `notes`                    | `String`                  | `True`   | Notes associated with the OEE State                                                                                        | `null`        |
| `enabled`                  | `boolean`                 | `True`   | Indicates whether the OEE State is enabled                                                                                 | `true`        |
| `spare1`                   | `String`                  | `True`   | Extra field 1                                                                                                              | `null`        |
| `spare2`                   | `String`                  | `True`   | Extra field 2                                                                                                              | `null`        |
| `spare3`                   | `String`                  | `True`   | Extra field 3                                                                                                              | `null`        |

## Returns

A JSON representation of the saved `OeeStateDTO` object.

## Code Examples

```python
# Create a new OEE state object
new_state = system.mes.oee.newOeeState()

# Set attributes for the new state
new_state['locationId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_state['name'] = 'Running'
new_state['calculationType'] = 'RUNNING'
new_state['enabled'] = True

# Save the new state
saved_state = system.mes.oee.saveState(**new_state)

print "Saved OEE State with ID:", saved_state['id']

# To update an existing state, include its ID
# updated_state_data = system.mes.oee.getState(saved_state['id'])
# updated_state_data['name'] = 'Production Running'
# system.mes.oee.saveState(**updated_state_data)
```
