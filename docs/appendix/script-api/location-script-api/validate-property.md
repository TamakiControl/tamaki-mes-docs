---
sidebar_position: 21
title: "validateProperty"
description: "Validates the specified parameters for a location property and returns any validation errors."
---

# system.mes.location.validateProperty

## Description

Validates the specified parameters for a [Location Properties](../../data-model/location-model/location-property) record and returns any validation errors.
This only checks if the location property object can be saved based on the attributes given, without actually creating or modifying the property. Use this function to verify your parameters before executing a save location properties operation.


## Permissions

This method requires the `LOCATION.READ.VALIDATE` permission.

## Syntax

```python
system.mes.location.validateProperty(**property_data)
```

## Parameters

| Parameter             | Type            | Nullable | Description                                                                                                          |
|-----------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `name`                | `String`        | False    | The name of the location property.                                                                                   |
| `description`         | `String`        | True     | A description of the location property.                                                                              |
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
| `id`                  | `String` (ULID) | True     | The ULID of the location property (optional, for updating an existing property).                                     |
| `notes`               | `String`        | True     | Notes related to the location property.                                                                              |
| `enabled`             | `Boolean`       | False    | Indicates if the property is active and enabled. Default value is `true`.                                            |
| `spare1`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | True     | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property object
new_property = system.mes.location.newProperty()

# Define property attributes
new_property['name'] = 'Temperature'
new_property['dataType'] = 'Float'
new_property['lowLimit'] = -20
new_property['highLimit'] = 50
new_property['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
new_property['nullable'] = False
new_property['defaultValue'] = 20.0
# (You can continue setting other properties as needed here)

# Validate location property parameters
validation_errors = system.mes.location.validateProperty(**new_property)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Location property parameters are valid.')
```
