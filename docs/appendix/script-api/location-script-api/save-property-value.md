---
sidebar_position: 25
title: "savePropertyValue"
description: "Creates or updates a location property value based on specified parameters."
---

# system.mes.location.savePropertyValue

## Description

Creates or updates a [Location Property Values](../../data-model/location-model/location-property-value) record in the system based on the provided parameters.

## Syntax

```python
system.mes.location.savePropertyValue(**property_value_data)
```

## Parameters

| Parameter    | Type            | Nullable | Description                                                                                                        |
|--------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `locationId` | `String` (ULID) | False    | The ULID of the location.                                                                                          |
| `propertyId` | `String` (ULID) | False    | The ULID of the location property.                                                                                 |
| `dataType`   | `String`        | True     | The data type of the property value. Must be the same as the data type of the property. Default value is `String`. |
| `value`      | `Mixed`         | True     | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`         | `String` (ULID) | True     | The ULID of the location property value (optional, for updating an existing property).                             |
| `notes`      | `String`        | True     | Notes related to the location property value.                                                                      |
| `enabled`    | `Boolean`       | True     | Indicates if the property value is active and enabled. Default value is `true`.                                    |
| `spare1`     | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare2`     | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare3`     | `String`        | True     | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON representation of the saved location property value.

## Code Examples

```python
# Generate the object structure for a new location object
new_location = system.mes.location.newLocation()
new_location['name'] = 'DairyCo'
saved_location = system.mes.location.saveLocation(**new_location)

# Generate the object structure for a new property object
new_property = system.mes.location.newProperty()
new_property['name'] = 'Cows'
new_property['dataType'] = 'Int'
saved_property = system.mes.location.saveProperty(**new_property)

# Generate the object structure for a new property value object with no initial arguments, set the location ID and property ID and save it
new_property_value = system.mes.location.newPropertyValue()
new_property_value['locationId'] = saved_location.id
new_property_value['propertyId'] = saved_property.id
saved_property_value = system.mes.location.savePropertyValue(**new_property_value)

# Output the JSON representation of the saved location property value
print(saved_property_value)

# Generate the object structure for another new property value object to update the previous location property value
property_value_data = system.mes.location.newPropertyValue()
property_value_data['id'] = saved_property_value.id
property_value_data['dataType'] = 'Int' # Must be the same data type as the property
property_value_data['value'] = 100

# Save the location property value to update it in the system
updated_property_value = system.mes.location.savePropertyValue(**property_value_data)

# Output the JSON representation of the updated location property value
print(updated_property_value)
```
