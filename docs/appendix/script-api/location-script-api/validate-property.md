---
sidebar_position: 21
title: "validateProperty"
description: "Validates a location property based on provided parameters."
---

# system.mes.location.validateProperty

## Description

Validates the specified parameters for a [Location Properties](../../data-model/location-model/location-property) record and returns any validation errors. 
This only checks if the location property object can be saved based on the attributes given.

## Syntax
```python
system.mes.location.validateProperty(**property_data)
```

## Parameters

| Parameter      | Type            | Description                                                                                                          |
|----------------|-----------------|----------------------------------------------------------------------------------------------------------------------|
| `name`         | `String`        | The name of the location property.                                                                                   |
| `description`  | `String`        | A description of the location property.                                                                              |
| `dataType`     | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`     | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`    | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`       | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | References the unit of measure for the property. See [unit_of_measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure). |
| `unitOfMeasureName`   | `String`        | The name of the uit of measure for the property. For display purposes only.                                                      |
| `unitOfMeasureSymbol` | `String`        | The name of the uit of measure for the property. For display purposes only.                                                      |
| `options`      | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`     | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue` | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`           | `String` (ULID) | The ULID of the location property (optional, for updating an existing property).                                     |
| `notes`        | `String`        | Notes related to the location property.                                                                              |
| `enabled`      | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`       | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`       | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`       | `String`        | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property object
temperature_property = system.mes.location.newProperty()

# Define property attributes
temperature_property['name'] = 'Temperature'
temperature_property['dataType'] = 'Float'
temperature_property['lowLimit'] = -20
temperature_property['highLimit'] = 50
temperature_property['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
temperature_property['nullable'] = False
temperature_property['defaultValue'] = 20.0
# (You can continue setting other properties as needed here)

# Validate location property parameters
validation_errors = system.mes.location.validateProperty(**temperature_property)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Location property parameters are valid.')
```