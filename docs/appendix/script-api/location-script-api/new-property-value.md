---
sidebar_position: 23
title: "newPropertyValue"
description: "Creates a new property value for a location."
---

# system.mes.location.newPropertyValue

## Description

Creates a new [Location Property Values](../../data-model/location-model/location-property-value) record to be formatted with attributes.

## Syntax
```python
system.mes.location.newPropertyValue()
```

## Parameters

| Parameter | Type | Description                               |
|-----------|------|-------------------------------------------|
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Location Property Value object. The following is a list of keys and default values:

| Key          | Default Value    |
|--------------|------------------|
| `locationId` | `null`           |
| `propertyId` | `null`           |
| `dataType`   | `String`         |
| `value`      | `null`           |
| `id`         | `null`           |
| `notes`      | `null`           |
| `enabled`    | `true`           |
| `spare1`     | `null`           |
| `spare2`     | `null`           |
| `spare3`     | `null`           |

## Code Examples

```python
# Create a new location instance
new_location = system.mes.location.newLocation()
new_location['name'] = 'DairyCo'
saved_location = system.mes.location.saveLocation(**new_location)

# Create a new property instance
new_property = system.mes.location.newProperty()
new_property['name'] = 'Cows'
new_property['dataType'] = 'Int'
saved_property = system.mes.location.saveProperty(**new_property)
 
# Create a new property value instance
new_property_value = system.mes.location.newPropertyValue()

# Define property value details
new_property_value['locationId'] = saved_location.id
new_property_value['propertyId'] = saved_property.id
new_property_value['dataType'] = 'Int' # Must be the same data type as the property
new_property_value['value'] = 100
# (You can continue setting other properties as needed here)

# Save the property value
saved_property_value = system.mes.location.savePropertyValue(**new_property_value)

# Output the JSON representation of the saved location property value
print(saved_property_value)
```
