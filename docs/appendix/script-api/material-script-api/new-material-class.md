---
sidebar_position: 2
title: "newMaterialClass"
description: "Generates an empty non-persisted material classes object to provide the structure to retrieve records from the database."
---

# system.mes.material.newMaterialClass

Generates an empty non-persisted [Material Classes](../../data-model/material-model/material-class) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterialClass](./save-material-class) method in order to persist the record.

## Syntax

```python
system.mes.material.newMaterialClass()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material class object. The following is a list of keys and default values:

| Key           | Default Value |
|---------------|---------------|
| `name`        | `null`        |
| `description` | `null`        |
| `path`        | `null`        |
| `parentId`    | `null`        |
| `id`          | `null`        |
| `notes`       | `null`        |
| `enabled`     | `true`        |
| `spare1`      | `null`        |
| `spare2`      | `null`        |
| `spare3`      | `null`        |

## Code Examples

```python
# Generate the object structure for a new material class object with no initial arguments
new_material_class = system.mes.material.newMaterialClass()

# Set basic attributes for the new material class
new_material_class['name'] = 'RAW'
# (You can continue setting other properties as needed here)

# Save the new material class to the system
saved_material_class = system.mes.material.saveMaterialClass(**new_material_class)

# Output the JSON representation of the saved material class
print(saved_material_class)
```
