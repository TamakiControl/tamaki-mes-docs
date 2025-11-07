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
system.mes.material.validateProperty(**propertyData)
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

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property object
newProperty = system.mes.material.newProperty()

# Define property attributes
newProperty['materialClassId'] = '01JCH3ENEB-SV2X8B3W-NFY8WZNK'
newProperty['name'] = 'Density'
# (You can continue setting other properties as needed here)

# Validate material property parameters
validationErrors = system.mes.material.validateProperty(**newProperty)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Material property parameters are valid.')
```
