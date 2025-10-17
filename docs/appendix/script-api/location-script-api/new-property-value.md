---
sidebar_position: 24
title: 'newPropertyValue'
description: 'Generates an empty non-persisted property values object to provide the structure to save a new record into the database.'
---

# system.mes.location.newPropertyValue

## Description

Generates an empty non-persisted [Location Property Values](../../data-model/location-model/location-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.location.newPropertyValue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created location property value object. The following is a list of keys and default values:

| Key          | Default Value |
| ------------ | ------------- |
| `locationId` | `null`        |
| `propertyId` | `null`        |
| `dataType`   | `String`      |
| `value`      | `null`        |
| `id`         | `null`        |
| `notes`      | `null`        |
| `enabled`    | `true`        |
| `spare1`     | `null`        |
| `spare2`     | `null`        |
| `spare3`     | `null`        |

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

# Generate the object structure for a new property value object with no initial arguments
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
