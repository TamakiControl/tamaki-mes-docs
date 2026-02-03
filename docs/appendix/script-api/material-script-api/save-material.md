---
sidebar_position: 14
title: "saveMaterial"
description: "Creates or updates a material with specified parameters."
---

# system.mes.material.saveMaterial

## Description

Creates or updates a [Materials](../../data-model/material-model/material) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.saveMaterial(**materialData)
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

Returns a JSON representation of the saved material.

## Code Examples

```python
# Generate the object structure for a new material object, set the initial arguments and save it
newMaterial = system.mes.material.newMaterial()
newMaterial['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newMaterial['name'] = '5391537510212'
newMaterial['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
savedMaterial = system.mes.material.saveMaterial(**newMaterial)

# Output the JSON representation of the saved material
print(savedMaterial)

# Generate the object structure for another new material to update the previous material
materialData = system.mes.material.newMaterial()

# Set basic attributes for the updated material
materialData['id'] = savedMaterial.id
materialData['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
materialData['name'] = '5391537510212'
materialData['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
materialData['shelfLifeDays'] = 15
# (You can continue setting other properties as needed here)

# Save the material to update it in the system
updatedMaterial = system.mes.material.saveMaterial(**materialData)

# Output the JSON representation of the updated material
print(updatedMaterial)
```
