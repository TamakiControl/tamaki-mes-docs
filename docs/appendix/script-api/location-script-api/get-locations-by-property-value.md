---
sidebar_position: 7
title: "getLocationsByPropertyValue"
description: "Retrieves all locations with a specific property value."
---

# system.mes.location.getLocationsByPropertyValue

## Description

Retrieves all [Locations](../../data-model/location-model/location) records that have a property value that matches the provided value.

## Syntax

```python
system.mes.location.getLocationsByPropertyValue(idOrName, value)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                            |
|--------------------|----------|----------|--------------------------------------------------------|
| `propertyIdOrName` | `String` | False    | The ID or name of the location property to filter by.  |
| `propertyValue`    | `String` | False    | The value to search for within the specified property. |

## Returns

Returns a JSON list of all locations that have the specified property value.

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

# Generate the object structure for a new property value object
new_property_value = system.mes.location.newPropertyValue()
new_property_value['locationId'] = saved_location.id
new_property_value['propertyId'] = saved_property.id
new_property_value['dataType'] = 'Int' # Must be the same data type as the property
new_property_value['value'] = 100
system.mes.location.savePropertyValue(**new_property_value)

# Retrieve locations by property value
matching_locations = system.mes.location.getLocationsByPropertyValue('Cows', '100')

# Output the list of matching locations
print(matching_locations)
```
