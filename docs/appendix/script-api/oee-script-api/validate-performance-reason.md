---
sidebar_position: 33
title: 'validatePerformanceReason'
description: 'Validates an OEE performance reason object.'
---

# system.mes.oee.validatePerformanceReason

## Description

Validates an OEE Performance Reason object without saving it. This is useful for
checking if a performance reason is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validatePerformanceReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeePerformanceReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                   | Default Value |
|----------------|-----------|----------|-------------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Performance Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this performance reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this performance reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent performance reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this performance reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the performance reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the performance reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the performance reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Performance Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Performance Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                                 | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                                 | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                                 | `null`        |

## Returns

A JSON object containing validation results. If the object is empty, validation passed. If it contains entries, the keys
are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new performance reason object
newReason = system.mes.oee.newPerformanceReason()

# Set some attributes (leaving required fields blank to trigger validation errors)
newReason['enabled'] = True

# Validate the performance reason
validationErrors = system.mes.oee.validatePerformanceReason(**newReason)

if not validation_errors:
    print "Validation passed. Performance reason is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validationErrors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid reason
validReason = system.mes.oee.newPerformanceReason()
validReason['name'] = 'Mechanical'
validReason['code'] = 100
# ... other required fields ...

errors = system.mes.oee.validatePerformanceReason(**validReason)
if not errors:
    print "\nThe second performance reason is valid."
```

