---
sidebar_position: 10
title: "validateMaterialClass"
description: "Validates the specified parameters for a material class."
---

# system.mes.material.validateMaterialClass

## Description

Validates the specified parameters for a [Material Classes](../../data-model/material-model/material-class) record and returns any validation errors.
This only checks if the material class object can be saved based on the attributes given, without actually creating or modifying the material class. Use this function to verify your parameters before executing a save material class operation.

## Syntax

```python
system.mes.material.validateMaterialClass(**material_class_data)
```

## Parameters

| Parameter     | Type            | Nullable | Description                                                                              |
|---------------|-----------------|----------|------------------------------------------------------------------------------------------|
| `name`        | `String`        | False    | The name of the material class.                                                          |
| `description` | `String`        | True     | The description of the material class.                                                   |
| `path`        | `String`        | True     | The path to the material class.                                                          |
| `parentId`    | `String` (ULID) | True     | The ULID of the parent material class to this material class.                            |
| `id`          | `String` (ULID) | True     | The ULID of the material class (optional, used for updating an existing material class). |
| `notes`       | `String`        | True     | Notes related to the material class.                                                     |
| `enabled`     | `Boolean`       | True     | Indicates if the material class is active and enabled. Default value is `true`.          |
| `spare1`      | `String`        | True     | Additional field for user-defined context.                                               |
| `spare2`      | `String`        | True     | Additional field for user-defined context.                                               |
| `spare3`      | `String`        | True     | Additional field for user-defined context.                                               |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new material class object
material_class_data = system.mes.material.newMaterialClass()

# Set basic attributes for the new material class
material_class_data['name'] = 'RAW'
# (You can continue setting other properties as needed here)

# Validate material class parameters
validation_errors = system.mes.material.validateMaterialClass(**material_class_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Material class parameters are valid.')
```
