---
sidebar_position: 15
title: 'validateMode'
description: 'Validates an OEE mode object.'
---

# system.mes.oee.validateMode

Validates an OEE Mode object against the system's business rules without saving it. This is useful for checking if a mode is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateMode(**mode_data)
```

## Parameters

An unpacked dictionary of `OeeModeDTO` fields.

| Parameter                    | Type                            | Nullable | Description                                                                               | Default Value          |
|------------------------------| ------------------------------- | -------- | ----------------------------------------------------------------------------------------- | ---------------------- |
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

A JSON object containing validation results. If the object is empty, validation passed. If it contains entries, the keys are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new OEE mode object
new_mode = system.mes.oee.newOeeMode()

# Set some attributes (leaving required fields blank to trigger validation errors)
new_mode['enabled'] = True

# Validate the mode
validation_errors = system.mes.oee.validateMode(**new_mode)

if not validation_errors:
    print "Validation passed. Mode is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validation_errors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid mode
valid_mode = system.mes.oee.newOeeMode()
valid_mode['locationId'] = 'some-location-id'
valid_mode['name'] = 'Production'
valid_mode['code'] = 1
valid_mode['calculationType'] = 'SCHEDULED_PRODUCTION'
# ... other required fields ...

errors = system.mes.oee.validateMode(**valid_mode)
if not errors:
    print "\nThe second mode is valid."
```
