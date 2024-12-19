---
sidebar_position: 10
title: "getPropertyValueFor"
description: "Retrieves a property value for a specified location and property."
---

# system.mes.location.getPropertyValueFor

Retrieves the property value for a specified location and property.

## Method Description

This function retrieves the value associated with a specific property for a given location. It allows users to query
properties directly by the location’s ULID or path and the property’s ULID or name.

## Returns

The property value for the specified location and property if it exists.

## Parameters

| Parameter          | Type   | Description                                                        |
|--------------------|--------|--------------------------------------------------------------------|
| `locationIdOrPath` | String | The ULID or path of the location.                                  |
| `propertyIdOrName` | String | The ULID or name of the property for which the value is retrieved. |

## Example Usage

```python
def getTemperatureValue(location_id, property_name):
    # Retrieve the property value for the specified location and property
    temperature_value = system.mes.location.getPropertyValueFor(location_id, property_name)
    
    if temperature_value:
        print(f"Temperature Value for Location {location_id}: {temperature_value")
    else:
        print(f"No property value found for {property_name} at Location {location_id}")
