---
sidebar_position: 25
title: 'validateAvailabilityReason'
description: 'Validates an OEE availability reason object.'
---

# system.mes.oee.validateAvailabilityReason

## Description

Validates an OEE Availability Reason object against the system's business rules without saving it. This is useful for checking if a availability reason is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateAvailabilityReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeeAvailabilityReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
| `id`           | `String`  | `True`   | The id of the Availability Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this availability reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this availability reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent availability reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this availability reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the availability reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the availability reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the availability reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Availability Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Availability Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## Returns

A JSON object containing validation results. If the object is empty, validation passed. If it contains entries, the keys are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new availability reason object
newReason = system.mes.oee.newAvailabilityReason()

# Set some attributes (leaving required fields blank to trigger validation errors)
newReason['enabled'] = True

# Validate the availability reason
validationErrors = system.mes.oee.validateAvailabilityReason(**newReason)

if not validation_errors:
    print "Validation passed. Availability reason is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validationErrors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid reason
validReason = system.mes.oee.newAvailabilityReason()
validReason['name'] = 'Mechanical'
validReason['code'] = 100
# ... other required fields ...

errors = system.mes.oee.validateAvailabilityReason(**validReason)
if not errors:
    print "\nThe second availability reason is valid."
```
