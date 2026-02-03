---
sidebar_position: 24
title: "newPropertyValue"
description: "Generates an empty non-persisted property values object to provide the structure to save a new record into the database."
---

# system.mes.location.newPropertyValue

## Description

Generates an empty non-persisted [Location Property Values](../../data-model/location-model/location-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [savePropertyValue](./save-property-value) method in order to persist the record.

## Syntax

```python
system.mes.location.newPropertyValue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
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
newLocation = system.mes.location.newLocation()
newLocation['name'] = 'DairyCo'
savedLocation = system.mes.location.saveLocation(**newLocation)

# Generate the object structure for a new property object
newProperty = system.mes.location.newProperty()
newProperty['name'] = 'Cows'
newProperty['dataType'] = 'Int'
savedProperty = system.mes.location.saveProperty(**newProperty)

# Generate the object structure for a new property value object with no initial arguments
newPropertyValue = system.mes.location.newPropertyValue()

# Define property value details
newPropertyValue['locationId'] = savedLocation.id
newPropertyValue['propertyId'] = savedProperty.id
newPropertyValue['dataType'] = 'Int' # Must be the same data type as the property
newPropertyValue['value'] = 100
# (You can continue setting other properties as needed here)

# Save the property value
savedPropertyValue = system.mes.location.savePropertyValue(**newPropertyValue)

# Output the JSON representation of the saved location property value
print(savedPropertyValue)
```
