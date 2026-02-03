---
sidebar_position: 12
title: 'getMode'
description: 'Retrieves an OEE mode record by its ID.'
---

# system.mes.oee.getMode

Retrieves an OEE Mode record by its ID.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getMode(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                           |
| --------- | --------------- | -------- | ------------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the OEE mode to retrieve. |

## Returns

A JSON representation of an `OeeModeDTO` object.

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
# Retrieve an OEE mode by ID
mode_id = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"

try:
    mode = system.mes.oee.getMode(mode_id)
    print "Mode Name:", mode['name']
    print "Calculation Type:", mode['calculationType']
except Exception as e:
    print "Error retrieving mode:", str(e)
```
