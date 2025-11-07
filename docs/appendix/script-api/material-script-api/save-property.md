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

| Parameter             | Type            | Nullable | Description                                                                                                          |
|-----------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `materialClassId`     | `String` (ULID) | False    | The ULID of the material class associated with this material property.                                               |
| `name`                | `String`        | False    | The name of the material property.                                                                                   |
| `description`         | `String`        | True     | A description of the material property.                                                                              |
| `dataType`            | `String`        | False    | The data type of the property (e.g., Integer, String, Float). Default value is `String`.                             |
| `lowLimit`            | `Double`        | True     | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | True     | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | True     | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | True     | The ULID of the unit of measure for this property.                                                                   |
| `unitOfMeasureName`   | `String`        | True     | The name of the unit of measure for the property. For display purposes only.                                         |
| `unitOfMeasureSymbol` | `String`        | True     | The symbol of the unit of measure for the property. For display purposes only.                                       |
| `options`             | `String`        | True     | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | False    | Defines if the property can accept null values. Default value is `false`.                                            |
| `defaultValue`        | `Mixed`         | True     | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | True     | The ULID of the material property (optional, for updating an existing property).                                     |
| `notes`               | `String`        | True     | Notes related to the material property.                                                                              |
| `enabled`             | `Boolean`       | False    | Indicates if the property is active and enabled. Default value is `true`.                                            |
| `spare1`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | True     | Additional field for user-defined context.                                                                           |

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
