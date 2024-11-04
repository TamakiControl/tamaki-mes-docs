---
sidebar_position: 13
title: "savePropertyValue"
description: "Creates or updates a location property value based on specified parameters."
---

# savePropertyValue

Creates or updates a property value for a specified location. If an ID is provided and corresponds to an existing
property value, the function updates the existing value; otherwise, a new value is created.

## Method Description

This function allows for the creation or updating of a property value associated with a location. It accepts various
parameters to define the property value, such as the data type and specific value for the property. This function is
typically called with an existing property value object, previously retrieved or created with `newPropertyValue()`.

## Returns

A JSON representation of the saved location property value.

## Throws

- **IllegalArgumentException**: Thrown if any expected arguments are missing.

## Parameters

| Parameter    | Type    | Description                                                                         |
|--------------|---------|-------------------------------------------------------------------------------------|
| `id`         | String  | The ULID of the location property value (optional, for updating an existing value). |
| `notes`      | String  | Notes related to the location property value.                                       |
| `enabled`    | Boolean | If the location property value is enabled.                                          |
| `value`      | Mixed   | The value of the property.                                                          |
| `dataType`   | String  | The data type of the property value (e.g., Integer, String, Float).                 |
| `locationId` | String  | The ULID of the location associated with this property value.                       |
| `propertyId` | String  | The ULID of the property associated with this value.                                |
| `spare1`     | String  | Additional field for user-defined context.                                          |
| `spare2`     | String  | Additional field for user-defined context.                                          |
| `spare3`     | String  | Additional field for user-defined context.                                          |

## Example Usage

```python
def setOrUpdateTemperatureValue(location_id, temperature_value):
    # Retrieve or create a property value for temperature
    property_value_data = system.mes.location.newPropertyValue()
    
    # Define property value attributes
    property_value_data['locationId'] = location_id
    property_value_data['propertyId'] = "01JAP8TF6X-7MFJQ9KJ-0C3BC2HR"  # Example property ULID for Temperature
    property_value_data['value'] = temperature_value
    property_value_data['dataType'] = "Float"
    
    # Save or update the property value
    saved_property_value = system.mes.location.savePropertyValue(**property_value_data)
    print(saved_property_value)
