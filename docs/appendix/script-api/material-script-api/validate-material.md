---
sidebar_position: 21
title: "validateMaterial"
description: "Validates the specified parameters for a material."
---

# system.mes.material.validateMaterial

## Description

Validates the specified parameters for a [Materials](../../data-model/material-model/material) record and returns any validation errors.
This only checks if the material object can be saved based on the attributes given, without actually creating or modifying the material. Use this function to verify your parameters before executing a save material operation.

## Syntax

```python
system.mes.material.validateMaterial(**materialData)
```

## Parameters

| Parameter         | Type            | Nullable | Description                                                                  |
|-------------------|-----------------|----------|------------------------------------------------------------------------------|
| `name`            | `String`        | False    | The name of the material.                                                    |
| `description`     | `String`        | True     | The description of the material.                                             |
| `path`            | `String`        | True     | The path to the material.                                                    |
| `materialClassId` | `String` (ULID) | False    | The ULID of the material class associated with this material.                |
| `erpId`           | `String` (ULID) | True     | The ULID of the erp associated with this material.                           |
| `unitOfMeasureId` | `String` (ULID) | False    | The ULID of the unit of measure associated with this material.               |
| `shelfLifeDays`   | `Integer`       | True     | The shelf life in days of this material.                                     |
| `id`              | `String` (ULID) | True     | The ULID of the material (optional, used for updating an existing material). |
| `notes`           | `String`        | True     | Notes related to the material.                                               |
| `enabled`         | `Boolean`       | True     | Indicates if the material is active and enabled. Default value is `true`.    |
| `spare1`          | `String`        | True     | Additional field for user-defined context.                                   |
| `spare2`          | `String`        | True     | Additional field for user-defined context.                                   |
| `spare3`          | `String`        | True     | Additional field for user-defined context.                                   |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new material object
materialData = system.mes.material.newMaterial()

# Set basic attributes for the new material
materialData['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
materialData['name'] = '5391537510212'
materialData['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
# (You can continue setting other properties as needed here)

# Validate material parameters
validationErrors = system.mes.material.validateMaterial(**materialData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Material parameters are valid.')
```
