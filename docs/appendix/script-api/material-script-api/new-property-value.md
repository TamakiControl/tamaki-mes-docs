---
sidebar_position: 37
title: "newPropertyValue"
description: "Generates an empty non-persisted property values object to provide the structure to save a new record into the database."
---

# system.mes.material.newPropertyValue

## Description

Generates an empty non-persisted [Material Property Values](../../data-model/material-model/material-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record.

## Syntax

```python
system.mes.material.newPropertyValue()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created material property value object. The following is a list of keys and default values:

| Key                  | Default Value |
| -------------------- | ------------- |
| `materialId`         | `null`        |
| `materialPropertyId` | `null`        |
| `dataType`           | `String`      |
| `value`              | `null`        |
| `id`                 | `null`        |
| `notes`              | `null`        |
| `enabled`            | `true`        |
| `spare1`             | `null`        |
| `spare2`             | `null`        |
| `spare3`             | `null`        |

## Code Examples

```python
# Generate the object structure for a new material object
new_material = system.mes.material.newMaterial()
new_material['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_material['name'] = '5391537510212'
new_material['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
saved_material = system.mes.material.saveMaterial(**new_material)

# Generate the object structure for a new property object
new_property = system.mes.material.newProperty()
new_property['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_property['name'] = 'Density'
new_property['dataType'] = 'Float'
saved_property = system.mes.material.saveProperty(**new_property)

# Generate the object structure for a new property value object with no initial arguments
new_property_value = system.mes.material.newPropertyValue()

# Define property value details
new_property_value['materialId'] = saved_material.id
new_property_value['materialPropertyId'] = saved_property.id
new_property_value['dataType'] = 'Float' # Must be the same data type as the property
new_property_value['value'] = 100
# (You can continue setting other properties as needed here)

# Save the property value
saved_property_value = system.mes.material.savePropertyValue(**new_property_value)

# Output the JSON representation of the saved material property value
print(saved_property_value)
```
