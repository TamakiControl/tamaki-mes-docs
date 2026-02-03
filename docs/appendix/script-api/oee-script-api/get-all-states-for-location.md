---
sidebar_position: 23
title: 'getAllStatesForLocation'
description: 'Retrieves all OEE states for a specific location.'
---

# system.mes.oee.getAllStatesForLocation

Retrieves all OEE States associated with a specific location.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllStatesForLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                |
| ------------------ | -------- | -------- | ------------------------------------------ |
| `locationIdOrPath` | `String` | False    | The location ID or path to get states for. |

## Returns

A list of JSON representations of `OeeStateDTO` objects for the specified location.

Each object has the following properties:

| Name                       | Type                      | Nullable | Description                                                                                                                | Default Value |
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

## Code Examples

```python
# Get all OEE states for a location
location = "Enterprise/Site/Area/ProductionLine1"
states = system.mes.oee.getAllStatesForLocation(location)

for state in states:
    print state['name'], state['code']
```
