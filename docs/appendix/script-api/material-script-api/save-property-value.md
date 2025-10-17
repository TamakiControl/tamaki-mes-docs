---
sidebar_position: 38
title: "savePropertyValue"
description: "Creates or updates a material property value based on specified parameters."
---

# system.mes.material.savePropertyValue

## Description

Creates or updates a [Material Property Values](../../data-model/material-model/material-property-value) record in the system based on the provided parameters.


## Permissions

This method requires the `MATERIAL.WRITE.SAVE` permission.

## Syntax

```python
system.mes.material.savePropertyValue(**property_value_data)
```

## Parameters

| Parameter            | Type            | Nullable | Description                                                                                                        |
|----------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `materialId`         | `String` (ULID) | False    | The ULID of the material.                                                                                          |
| `materialPropertyId` | `String` (ULID) | False    | The ULID of the material property.                                                                                 |
| `dataType`           | `String`        | True     | The data type of the property value. Must be the same as the data type of the property. Default value is `String`. |
| `value`              | `Mixed`         | True     | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                 | `String` (ULID) | True     | The ULID of the material property value (optional, for updating an existing property).                             |
| `notes`              | `String`        | True     | Notes related to the material property value.                                                                      |
| `enabled`            | `Boolean`       | True     | Indicates if the property value is active and enabled. Default value is `true`.                                    |
| `spare1`             | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare2`             | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare3`             | `String`        | True     | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON representation of the saved material property value.

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

# Generate the object structure for a new property value object with no initial arguments, set the material ID and property ID and save it
new_property_value = system.mes.material.newPropertyValue()
new_property_value['materialId'] = saved_material.id
new_property_value['materialPropertyId'] = saved_property.id
saved_property_value = system.mes.material.savePropertyValue(**new_property_value)

# Generate the object structure for another new property value object to update the previous material property value
property_value_data = system.mes.material.newPropertyValue()
property_value_data['id'] = saved_property_value.id
property_value_data['dataType'] = 'Float' # Must be the same data type as the property
property_value_data['value'] = 100

# Save the material property value to update it in the system
updated_property_value = system.mes.material.savePropertyValue(**property_value_data)

# Output the JSON representation of the updated material property value
print(updated_property_value)
```
