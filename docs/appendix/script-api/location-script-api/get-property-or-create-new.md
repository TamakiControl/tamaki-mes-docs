---
sidebar_position: 18
title: "getPropertyOrCreateNew"
description: "Retrieves or creates a location property by its ID or name depending on if it exists."
---

# system.mes.location.getPropertyOrCreateNew

## Description

Retrieves a [Location Properties](../../data-model/location-model/location-property) record if an existing location property exists with the specified ID or name.
Otherwise, creates a new [Location Properties](../../data-model/location-model/location-property) record with the specified name and attributes.


## Permissions

This method requires the `LOCATION.READ.GET` permission.

## Syntax

```python
system.mes.location.getPropertyOrCreateNew(**property_data)
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
| `id`                  | `String` (ULID) | True     | The ULID of the location property (optional, for retrieving the existing property).                                  |
| `notes`               | `String`        | True     | Notes related to the location property.                                                                              |
| `enabled`             | `Boolean`       | False    | Indicates if the property is active and enabled. Default value is `true`.                                            |
| `spare1`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | True     | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON representation of the location property.

## Code Examples

```python
# Generate the object structure for a new property object for temperature
new_property = system.mes.location.newProperty()

# Define property details
new_property['name'] = 'Temperature'
new_property['dataType'] = 'Float'
new_property['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
new_property['nullable'] = False
new_property['lowLimit'] = -20
new_property['highLimit'] = 50
# (You can continue setting other properties as needed here)

# Get the property if it exists, otherwise creates it with the given attributes
property = system.mes.location.getPropertyOrCreateNew(**new_property)

# Output the JSON representation of the property
print(property)
```
