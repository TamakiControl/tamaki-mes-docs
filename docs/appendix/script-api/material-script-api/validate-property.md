---
sidebar_position: 34
title: "validateProperty"
description: "Validates a material property based on provided parameters."
---

# system.mes.material.validateProperty

## Description

Validates the specified parameters for a [Material Properties](../../data-model/material-model/material-property) record and returns any validation errors.
This only checks if the material property object can be saved based on the attributes given, without actually creating or modifying the material property. Use this function to verify your parameters before executing a save material property operation.

## Syntax

```python
system.mes.material.validateProperty(**property_data)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property object
new_property = system.mes.material.newProperty()

# Define property attributes
new_property['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
new_property['name'] = 'Density'
# (You can continue setting other properties as needed here)

# Validate material property parameters
validation_errors = system.mes.material.validateProperty(**new_property)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Material property parameters are valid.')
```
