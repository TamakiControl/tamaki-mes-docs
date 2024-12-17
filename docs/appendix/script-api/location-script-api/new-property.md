---
sidebar_position: 5
title: "newProperty"
description: "Creates a new location property."
---

# system.mes.location.newProperty

Creates a new property associated with a location.

## Method Description

This function initializes a new property that can be associated with locations. Properties are customizable attributes
that add flexibility to location configurations, such as additional metadata or operational parameters.

## Returns

A JSON representation of the newly created location property.

## Parameters

No parameters are required to initialize a new property. However, additional attributes such as `name`, `dataType`, and
`nullable` should be set after creating the property to define its characteristics.

## Example Usage

```python
def addTemperatureProperty():
    # Create a new property for temperature
    temperature_property = system.mes.location.newProperty()
    
    # Define property details
    temperature_property['name'] = "Temperature"
    temperature_property['dataType'] = "Float"
    temperature_property['nullable'] = False
    temperature_property['units'] = "Celsius"
    temperature_property['lowLimit'] = -20
    temperature_property['highLimit'] = 50
    
    # Save the property
    saved_property = system.mes.location.saveProperty(**temperature_property)
    print(saved_property)
