---
sidebar_position: 3
title: "saveMaterialClass"
description: "Creates or updates a material class with specified parameters."
---

# system.mes.material.saveMaterialClass

## Description

Creates or updates a [Material Classes](../../data-model/material-model/material-class) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.saveMaterialClass(**material_class_data)
```

## Parameters

| Parameter     | Type            | Description                                                                              |
| ------------- | --------------- | ---------------------------------------------------------------------------------------- |
| `name`        | `String`        | The name of the material class.                                                          |
| `description` | `String`        | The description of the material class.                                                   |
| `path`        | `String`        | The path to the material class.                                                          |
| `parentId`    | `String` (ULID) | The ULID of the parent material class to this material class.                            |
| `id`          | `String` (ULID) | The ULID of the material class (optional, used for updating an existing material class). |
| `notes`       | `String`        | Notes related to the material class.                                                     |
| `enabled`     | `Boolean`       | Indicates if the material class is active and enabled.                                   |
| `spare1`      | `String`        | Additional field for user-defined context.                                               |
| `spare2`      | `String`        | Additional field for user-defined context.                                               |
| `spare3`      | `String`        | Additional field for user-defined context.                                               |

## Returns

Returns a JSON representation of the saved material class.

## Code Examples

```python
# Generate the object structure for a new material class object, set the initial arguments and save it
new_material_class = system.mes.material.newMaterialClass()
new_material_class['name'] = 'RAW'
saved_material_class = system.mes.material.saveMaterialClass(**new_material_class)

# Output the JSON representation of the saved material class
print(saved_material_class)

# Generate the object structure for another new material class to update the previous material class
material_class_data = system.mes.material.newMaterialClass()

# Set basic attributes for the updated material class
material_class_data['id'] = saved_material_class.id
material_class_data['name'] = 'RAW'
material_class_data['description'] = 'Material Class for Raw Materials'
# (You can continue setting other properties as needed here)

# Save the material class to update it in the system
updated_material_class = system.mes.material.saveMaterialClass(**material_class_data)

# Output the JSON representation of the updated material class
print(updated_material_class)
```
