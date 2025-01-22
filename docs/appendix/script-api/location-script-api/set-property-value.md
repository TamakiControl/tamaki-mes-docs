---
sidebar_position: 25
title: "setPropertyValue"
description: "Updates the value of a location property value given a location object and a property object."
---

# system.mes.location.setPropertyValue

## Description

Updates the value of a [Location Property Values](../../data-model/location-model/location-property-value) record given 
a location id or path and a property id or name.

## Syntax
```python
system.mes.location.setPropertyValue(locationIdOrPath, propertyIdOrName, value)
```

## Parameters

| Parameter          | Type            | Description                                                        |
|--------------------|-----------------|--------------------------------------------------------------------|
| `locationIdOrPath` | `String`        | The ULID or path of the location.                                  |
| `propertyIdOrName` | `String`        | The ULID or name of the property for which the value is retrieved. |
| `value`            | `Mixed`         | The value assigned to the property value if none is provided.      |

## Returns

Returns a JSON representation of the updated location property value.

## Code Examples

```python
# Update the value of a location property value
updated_property_value = system.mes.location.setPropertyValue('DairyCo', 'Cows', 200)

# Output the JSON representation of the updated location property value
print(updated_property_value)
```