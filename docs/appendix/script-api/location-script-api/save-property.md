---
sidebar_position: 17
title: "saveProperty"
description: "Creates or updates a location property with specified parameters."
---

# system.mes.location.saveProperty

## Description

Creates or updates a [Location Properties](../../data-model/location-model/location-property) record in the system based on the provided parameters.

## Syntax

```python
system.mes.location.saveProperty(**property_data)
```

## Parameters

| Parameter             | Type            | Nullable | Description                                                                                                          |
| --------------------- | --------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`        | False    | The name of the location property.                                                                                   |
| `description`         | `String`        | True     | A description of the location property.                                                                              |
| `dataType`            | `String`        | False    | The data type of the property (e.g., Integer, String, Float). Default value is `String`.                            |
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

Returns a JSON representation of the saved location property.

## Code Examples

```python
# Generate the object structure for a new property object, set the name and save it
new_property = system.mes.location.newProperty()
new_property['name'] = 'Temperature'
saved_property = system.mes.location.saveProperty(**new_property)

# Output the JSON representation of the saved property
print(saved_property)

# Generate the object structure for another new property object to update the previous property
property_data = system.mes.location.newProperty()

# Define property attributes
property_data['id'] = saved_property.id
property_data['name'] = 'Temperature'
property_data['dataType'] = 'Float'
property_data['lowLimit'] = -20
property_data['highLimit'] = 50
property_data['unitOfMeasureId'] = '01JAP8RJBN-4VYZUKE1-LY2QHV8X'
property_data['nullable'] = False
property_data['defaultValue'] = 20.0
# (You can continue setting other properties as needed here)

# Save the location property to update it in the system
updated_property = system.mes.location.saveProperty(**property_data)

# Output the JSON representation of the updated location property
print(updated_property)
```
