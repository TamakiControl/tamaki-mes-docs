---
sidebar_position: 29
title: "saveProperty"
description: "Creates or updates a material property with specified parameters."
---

# system.mes.material.saveProperty

## Description

Creates or updates a [Material Properties](../../data-model/material-model/material-property) record in the system based on the provided parameters.

## Syntax

```python
system.mes.material.saveProperty(**property_data)
```

## Parameters

| Parameter             | Type            | Description                                                                                                          |
| --------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `materialClassId`     | `String` (ULID) | The ULID of the material class associated with this material property.                                               |
| `name`                | `String`        | The name of the material property.                                                                                   |
| `description`         | `String`        | A description of the material property.                                                                              |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure for this property.                                                                   |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for the property. For display purposes only.                                         |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for the property. For display purposes only.                                       |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the material property (optional, for updating an existing property).                                     |
| `notes`               | `String`        | Notes related to the material property.                                                                              |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON representation of the saved material property.

## Code Examples

```python
# Generate the object structure for a new property object, set the name and save it
new_property = system.mes.material.newProperty()
new_property['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_property['name'] = 'Density'
saved_property = system.mes.material.saveProperty(**new_property)

# Output the JSON representation of the saved property
print(saved_property)

# Generate the object structure for another new property object to update the previous property
property_data = system.mes.material.newProperty()

# Define property attributes
property_data['id'] = saved_property.id
property_data['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
property_data['name'] = 'Density'
property_data['dataType'] = 'Float'
property_data['lowLimit'] = 0.1
property_data['highLimit'] = 10.0
property_data['unitOfMeasureId'] = '01JCH3ENDJ-351WQQPX-WRBNTY4C'
# (You can continue setting other properties as needed here)

# Save the material property to update it in the system
updated_property = system.mes.material.saveProperty(**property_data)

# Output the JSON representation of the updated material property
print(updated_property)
```
