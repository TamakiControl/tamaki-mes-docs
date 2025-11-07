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
system.mes.location.savePropertyValue(**propertyValueData)
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
newLocation = system.mes.location.newLocation()
newLocation['name'] = 'DairyCo'
savedLocation = system.mes.location.saveLocation(**newLocation)

# Generate the object structure for a new property object
newProperty = system.mes.location.newProperty()
newProperty['name'] = 'Cows'
newProperty['dataType'] = 'Int'
savedProperty = system.mes.location.saveProperty(**newProperty)

# Generate the object structure for a new property value object with no initial arguments, set the location ID and property ID and save it
newPropertyValue = system.mes.location.newPropertyValue()
newPropertyValue['locationId'] = savedLocation.id
newPropertyValue['propertyId'] = savedProperty.id
savedPropertyValue = system.mes.location.savePropertyValue(**newPropertyValue)

# Output the JSON representation of the saved location property value
print(savedPropertyValue)

# Generate the object structure for another new property value object to update the previous location property value
propertyValueData = system.mes.location.newPropertyValue()
propertyValueData['id'] = savedPropertyValue.id
propertyValueData['dataType'] = 'Int' # Must be the same data type as the property
propertyValueData['value'] = 100

# Save the location property value to update it in the system
updatedPropertyValue = system.mes.location.savePropertyValue(**propertyValueData)

# Output the JSON representation of the updated location property value
print(updatedPropertyValue)
```
