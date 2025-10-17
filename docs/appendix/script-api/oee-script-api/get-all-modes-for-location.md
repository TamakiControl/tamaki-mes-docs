---
sidebar_position: 13
title: 'getAllModesForLocation'
description: 'Retrieves all OEE mode records for a specific location.'
---

# system.mes.oee.getAllModesForLocation

Retrieves all OEE Modes associated with a specific location.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllModesForLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                        |
| ------------------ | -------- | -------- | -------------------------------------------------- |
| `locationIdOrPath` | `String` | False    | The ULID or path of the location to get modes for. |

## Returns

A list of OEE Mode objects for the specified location. Each object contains the fields from the `OeeModeDTO`. Returns an empty list if no modes are found.

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
# Get all modes for a specific location by path
location_path = "Enterprise/Site/Area/Line1"
modes = system.mes.oee.getAllModesForLocation(location_path)

for mode in modes:
    print mode.name, mode.code
```
