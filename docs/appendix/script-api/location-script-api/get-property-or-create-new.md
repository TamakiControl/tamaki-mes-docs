---
sidebar_position: 18
title: "getPropertyOrCreateNew"
description: "Retrieves or creates a location property by its ID or name depending on if it exists."
---

# system.mes.location.getPropertyOrCreateNew

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) record if an existing location property exists with the specified ID or name.
Otherwise, creates a new [Location Properties](../../data-model/location-model/location-property) record with the specified name and attributes.

## Syntax
```python
system.mes.location.getPropertyOrCreateNew(**property_data)
```

## Parameters

| Parameter             | Type            | Description                                                                                                          |
|-----------------------|-----------------|----------------------------------------------------------------------------------------------------------------------|
| `name`                | `String`        | The name of the location property.                                                                                   |
| `description`         | `String`        | A description of the location property.                                                                              |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | References the unit of measure for the property. See [unit_of_measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure). |
| `unitOfMeasureName`   | `String`        | The name of the uit of measure for the property. For display purposes only.                                                      |
| `unitOfMeasureSymbol` | `String`        | The name of the uit of measure for the property. For display purposes only.                                                      |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the location property (optional, for retrieving the existing property).                                  |
| `notes`               | `String`        | Notes related to the location property.                                                                              |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON representation of the location property.

## Code Examples

```python
# Generate the object structure for a new property object for temperature
temperature_property = system.mes.location.newProperty()

# Define property details
temperature_property['name'] = 'Temperature'
temperature_property['dataType'] = 'Float'
temperature_property['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
temperature_property['nullable'] = False
temperature_property['lowLimit'] = -20
temperature_property['highLimit'] = 50
# (You can continue setting other properties as needed here)

# Get the property if it exists, otherwise creates it with the given attributes
property = system.mes.location.getPropertyOrCreateNew(**temperature_property)

# Output the JSON representation of the property
print(property)
```