---
sidebar_position: 15
title: "newMaterial"
description: "Generates an empty non-persisted material object to provide the structure to retrieve records from the database."
---

# system.mes.material.newMaterial

Generates an empty non-persisted [Materials](../../data-model/material-model/material) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveMaterial](./save-material) method in order to persist the record.

## Syntax

```python
system.mes.material.newMaterial()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material object. The following is a list of keys and default values:

| Key               | Default Value |
| ----------------- | ------------- |
| `name`            | `null`        |
| `description`     | `null`        |
| `path`            | `null`        |
| `materialClassId` | `null`        |
| `erpId`           | `null`        |
| `unitOfMeasureId` | `null`        |
| `shelfLifeDays`   | `null`        |
| `id`              | `null`        |
| `notes`           | `null`        |
| `enabled`         | `true`        |
| `spare1`          | `null`        |
| `spare2`          | `null`        |
| `spare3`          | `null`        |

## Code Examples

```python
# Generate the object structure for a new material object with no initial arguments
new_material = system.mes.material.newMaterial()

# Set basic attributes for the new material
new_material['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_material['name'] = '5391537510212'
new_material['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
# (You can continue setting other properties as needed here)

# Save the new material to the system
saved_material = system.mes.material.saveMaterial(**new_material)

# Output the JSON representation of the saved material
print(saved_material)
```
