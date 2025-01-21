---
sidebar_position: 20
title: "validateProperty"
description: "Validates a location property based on provided parameters."
---

# system.mes.location.validateProperty

## Description

Validates the specified parameters for a [Location Properties](../../data-model/location-model/location-property) and returns any validation errors. 
This only checks if the location property object can be saved based on the attributes given.

## Syntax
```python
system.mes.location.validateLocation(**property_data)
```

## Parameters

| Parameter      | Type            | Description                                                                      |
|----------------|-----------------|----------------------------------------------------------------------------------|
| `name`         | `String`        | The name of the location property.                                               |
| `description`  | `String`        | A description of the location property.                                          |
| `dataType`     | `String`        | The data type of the property (e.g., Integer, String, Float).                    |
| `lowLimit`     | `Double`        | The minimum value allowed for a numerical property.                              |
| `highLimit`    | `Double`        | The maximum value allowed for a numerical property.                              |
| `format`       | `String`        | The format of the property, if applicable.                                       |
| `units`        | `String`        | The measurement units for the property (e.g., Celsius, kg).                      |
| `options`      | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).         |
| `nullable`     | `Boolean`       | Defines if the property can accept null values.                                  |
| `defaultValue` | `Mixed`         | The default value assigned to the property if none is provided.                  |
| `id`           | `String` (ULID) | The ULID of the location property (optional, for updating an existing property). |
| `notes`        | `String`        | Notes related to the location property.                                          |
| `enabled`      | `Boolean`       | Indicates if the property is active and enabled.                                 |
| `spare1`       | `String`        | Additional field for user-defined context.                                       |
| `spare2`       | `String`        | Additional field for user-defined context.                                       |
| `spare3`       | `String`        | Additional field for user-defined context.                                       |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Create a location property instance
temperature_property = system.mes.location.newProperty()

# Define property attributes
temperature_property['name'] = 'Temperature'
temperature_property['dataType'] = 'Float'
temperature_property['lowLimit'] = -20
temperature_property['highLimit'] = 50
temperature_property['units'] = 'Celsius'
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
