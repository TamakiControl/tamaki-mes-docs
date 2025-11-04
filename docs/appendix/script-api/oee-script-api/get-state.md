---
title: getState
description: Retrieves a specific OEE state definition by its ID.
sidebar_position: 22
---

# system.mes.oee.getState

Retrieves a specific OEE state definition by its unique ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getState(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                     |
| --------- | -------- | -------- | ------------------------------- |
| `id`      | `String` | False    | The unique ID of the OEE state. |

## Returns

An `OeeStateDTO` object representing the requested OEE state.

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
# Retrieve an OEE state by its ID
state_id = "1"

try:
    oee_state = system.mes.oee.getState(id=state_id)
    if oee_state:
        print "State Name:", oee_state.name
        print "State Type:", oee_state.stateType
        print "Color:", oee_state.color
except:
    print "OEE State with ID '{}' not found.".format(state_id)

```
