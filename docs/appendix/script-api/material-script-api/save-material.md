---
sidebar_position: 16
title: "saveMaterial"
description: "Creates or updates a material with specified parameters."
---

# system.mes.material.saveMaterial

## Description

Creates or updates a [Materials](../../data-model/material-model/material) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.saveMaterial(**material_data)
```

## Parameters

| Parameter         | Type            | Description                                                                  |
| ----------------- | --------------- | ---------------------------------------------------------------------------- |
| `name`            | `String`        | The name of the material.                                                    |
| `description`     | `String`        | The description of the material.                                             |
| `path`            | `String`        | The path to the material.                                                    |
| `materialClassId` | `String` (ULID) | The ULID of the material class associated with this material.                |
| `erpId`           | `String` (ULID) | The ULID of the erp associated with this material.                           |
| `unitOfMeasureId` | `String` (ULID) | The ULID of the unit of measure associated with this material.               |
| `shelfLifeDays`   | `Integer`       | The shelf life in days of this material.                                     |
| `id`              | `String` (ULID) | The ULID of the material (optional, used for updating an existing material). |
| `notes`           | `String`        | Notes related to the material.                                               |
| `enabled`         | `Boolean`       | Indicates if the material is active and enabled.                             |
| `spare1`          | `String`        | Additional field for user-defined context.                                   |
| `spare2`          | `String`        | Additional field for user-defined context.                                   |
| `spare3`          | `String`        | Additional field for user-defined context.                                   |

## Returns

Returns a JSON representation of the saved material.

## Code Examples

```python
# Generate the object structure for a new material object, set the initial arguments and save it
new_material = system.mes.material.newMaterial()
new_material['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_material['name'] = '5391537510212'
new_material['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
saved_material = system.mes.material.saveMaterial(**new_material)

# Output the JSON representation of the saved material
print(saved_material)

# Generate the object structure for another new material to update the previous material
material_data = system.mes.material.newMaterial()

# Set basic attributes for the updated material
material_data['id'] = saved_material.id
material_data['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
material_data['name'] = '5391537510212'
material_data['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
material_data['shelfLifeDays'] = 15
# (You can continue setting other properties as needed here)

# Save the material to update it in the system
updated_material = system.mes.material.saveMaterial(**material_data)

# Output the JSON representation of the updated material
print(updated_material)
```
