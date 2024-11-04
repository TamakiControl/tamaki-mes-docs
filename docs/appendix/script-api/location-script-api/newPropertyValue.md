---
sidebar_position: 9
title: "newPropertyValue"
description: "Creates a new property value for a location."
---

# newPropertyValue

Creates a new property value for a specified location.

## Method Description

This function initializes a new property value associated with a location. Property values allow you to store specific
data under a location's property, enhancing the configurability and custom attributes available for each location.

## Returns

A JSON representation of the newly created location property value.

## Parameters

No parameters are required to initialize a new property value. However, fields such as `locationId`, `propertyId`,
`value`, and `dataType` should be set after creating the property value to define its content and association.

## Example Usage

```python
def addTemperatureValue(location_id, temperature_value):
    # Create a new property value for temperature
    temperature_property_value = system.mes.location.newPropertyValue()
    
    # Define property value details
    temperature_property_value['locationId'] = location_id
    temperature_property_value['propertyId'] = "01JAP8TF6X-7MFJQ9KJ-0C3BC2HR"  # Example property ULID for Temperature
    temperature_property_value['value'] = temperature_value
    temperature_property_value['dataType'] = "Float"
    
    # Save the property value
    saved_property_value = system.mes.location.savePropertyValue(**temperature_property_value)
    print(saved_property_value)
