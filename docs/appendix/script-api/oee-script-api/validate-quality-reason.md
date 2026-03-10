---
sidebar_position: 41
title: 'validateQualityReason'
description: 'Validates an OEE quality reason object.'
---

# system.mes.oee.validateQualityReason

## Description

Validates an OEE Quality Reason object without saving it. This is useful for
checking if a quality reason is valid before attempting to save it.

## Permissions

This method requires the `OEE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.oee.validateQualityReason(**reasonData)
```

## Parameters

An unpacked dictionary of `OeeQualityReasonDTO` fields.

| Parameter      | Type      | Nullable | Description                                                                 | Default Value |
|----------------|-----------|----------|-----------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Quality Reason                                                | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this quality reason applies     | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this quality reason applies           | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent quality reason, if applicable                      | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this quality reason                       | `0`           |
| `name`         | `String`  | `False`  | Name of the quality reason                                                  | `null`        |
| `description`  | `String`  | `True`   | Description of the quality reason                                           | `null`        |
| `path`         | `String`  | `True`   | Path representation of the quality reason within a hierarchical structure   | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Quality Reason                                    | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Quality Reason is enabled                             | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                               | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                               | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                               | `null`        |

## Returns

A JSON object containing validation results. If the object is empty, validation passed. If it contains entries, the keys
are the field names and the values are lists of validation error messages.

## Code Examples

```python
# Create a new quality reason object
newReason = system.mes.oee.newQualityReason()

# Set some attributes (leaving required fields blank to trigger validation errors)
newReason['enabled'] = True

# Validate the quality reason
validationErrors = system.mes.oee.validateQualityReason(**newReason)

if not validation_errors:
    print "Validation passed. Quality reason is valid."
else:
    print "Validation failed. Errors:"
    for field, errors in validationErrors.items():
        print "  - {}: {}".format(field, ", ".join(errors))

# Example of a valid reason
validReason = system.mes.oee.newQualityReason()
validReason['name'] = 'Mechanical'
validReason['code'] = 100
# ... other required fields ...

errors = system.mes.oee.validateQualityReason(**validReason)
if not errors:
    print "\nThe second quality reason is valid."
```

