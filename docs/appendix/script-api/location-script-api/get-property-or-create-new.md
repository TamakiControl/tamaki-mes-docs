---
sidebar_position: 17
title: "getPropertyOrCreateNew"
description: "Retrieves or creates a location property by its ID or name depending on if it exists."
---

# system.mes.location.getPropertyOrCreateNew

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) if an existing location property exists with the specified ID or name.
Otherwise, creates a new [Location Properties](../../data-model/location-model/location-property) with the specified name and attributes.

## Syntax
```python
system.mes.location.getPropertyOrCreateNew(**property_data)
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

A JSON representation of the location property.

## Code Examples

```python
# Create a new property for temperature
temperature_property = system.mes.location.newProperty()

# Define property details
temperature_property['name'] = 'Temperature'
temperature_property['dataType'] = 'Float'
temperature_property['units'] = 'Celsius'
temperature_property['nullable'] = False
temperature_property['lowLimit'] = -20
temperature_property['highLimit'] = 50
# (You can continue setting other properties as needed here)

# Gets the property if it exists, otherwise creates it with the given attributes
property = system.mes.location.getPropertyOrCreateNew(**temperature_property)

# Print the JSON representation of the property
print(property)
```