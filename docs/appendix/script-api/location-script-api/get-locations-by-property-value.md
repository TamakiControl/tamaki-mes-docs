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
newLocation = system.mes.location.newLocation()
newLocation['name'] = 'DairyCo'
savedLocation = system.mes.location.saveLocation(**newLocation)

# Generate the object structure for a new property object
newProperty = system.mes.location.newProperty()
newProperty['name'] = 'Cows'
newProperty['dataType'] = 'Int'
savedProperty = system.mes.location.saveProperty(**newProperty)

# Generate the object structure for a new property value object
newPropertyValue = system.mes.location.newPropertyValue()
newPropertyValue['locationId'] = savedLocation.id
newPropertyValue['propertyId'] = savedProperty.id
newPropertyValue['dataType'] = 'Int' # Must be the same data type as the property
newPropertyValue['value'] = 100
system.mes.location.savePropertyValue(**newPropertyValue)

# Retrieve locations by property value
matchingLocations = system.mes.location.getLocationsByPropertyValue('Cows', '100')

# Output the list of matching locations
print(matchingLocations)
```
