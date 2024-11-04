---
sidebar_position: 12
title: "validatePropertyValue"
description: "Validates a location property value based on provided parameters."
---

# validatePropertyValue

Validates a location property value based on the specified parameters.

## Method Description

This function validates the provided parameters for a location property value, such as value and data type, to ensure
they meet defined standards. If validation violations are found, they are returned in a JSON dictionary format.

## Returns

A JSON dictionary where keys are field names, and values are lists of validation violation messages.

## Parameters

| Parameter    | Type    | Description                                                  |
|--------------|---------|--------------------------------------------------------------|
| `id`         | String  | The ULID of the location property value.                     |
| `notes`      | String  | Notes related to the location property value.                |
| `enabled`    | Boolean | If the location property value is enabled.                   |
| `value`      | Mixed   | The value of the property.                                   |
| `dataType`   | String  | The data type of the property value (e.g., Integer, String). |
| `locationId` | String  | The ULID of the location associated with the property value. |
| `propertyId` | String  | The ULID of the property associated with the value.          |
| `spare1`     | String  | Additional field for user-defined context.                   |
| `spare2`     | String  | Additional field for user-defined context.                   |
| `spare3`     | String  | Additional field for user-defined context.                   |

## Example Usage

```python
def validateTemperatureValue(location_id, temperature_value):
    # Define property value details for validation
    property_value_data = {
        "locationId": location_id,
        "propertyId": "01JAP8TF6X-7MFJQ9KJ-0C3BC2HR",  # Example property ULID for Temperature
        "value": temperature_value,
        "dataType": "Float"
    }
    
    # Validate the property value
    validation_errors = system.mes.location.validatePropertyValue(**property_value_data)
    
    if validation_errors:
        print("Validation errors:", validation_errors)
    else:
        print("Property value is valid.")
```