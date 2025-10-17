---
sidebar_position: 37
title: 'validateDowntimeReason'
description: 'Validates an OEE downtime reason object.'
---

# system.mes.oee.validateDowntimeReason

Validates an OEE Downtime Reason object against the system's business rules without saving it. This is useful for checking if a downtime reason is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateDowntimeReason(**reason_data)
```

## Parameters

An unpacked dictionary of `OeeDowntimeReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
| `id`           | `String`  | `True`   | The id of the Downtime Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this downtime reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this downtime reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent downtime reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this downtime reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the downtime reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the downtime reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the downtime reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Downtime Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Downtime Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## Returns

A PyObject containing validation results. If the object is empty, validation passed. If it contains entries, the keys are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new downtime reason object
new_reason = system.mes.oee.newDowntimeReason()

# Set some attributes (leaving required fields blank to trigger validation errors)
new_reason['enabled'] = True

# Validate the downtime reason
validation_errors = system.mes.oee.validateDowntimeReason(**new_reason)

if not validation_errors:
    print "Validation passed. Downtime reason is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validation_errors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid reason
valid_reason = system.mes.oee.newDowntimeReason()
valid_reason['name'] = 'Mechanical'
valid_reason['code'] = 100
# ... other required fields ...

errors = system.mes.oee.validateDowntimeReason(**valid_reason)
if not errors:
    print "\nThe second downtime reason is valid."
```
