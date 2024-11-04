---
sidebar_position: 11
title: "validateProperty"
description: "Validates a location property based on provided parameters."
---

# validateProperty

Validates a location property based on the specified parameters.

## Method Description

This function checks the parameters provided for a location property to ensure they meet validation requirements, such
as data type, limits, and options. If validation violations are found, they are returned in a JSON dictionary format.

## Returns

A JSON dictionary where keys are field names, and values are lists of validation violation messages.

## Parameters

| Parameter      | Type          | Description                                                     |
|----------------|---------------|-----------------------------------------------------------------|
| `id`           | String        | The ULID of the location property.                              |
| `notes`        | String        | Notes related to the location property.                         |
| `enabled`      | Boolean       | If the location property is enabled.                            |
| `name`         | String        | The name of the location property.                              |
| `description`  | String        | A description of the location property.                         |
| `dataType`     | String        | The data type of the property (e.g., Integer, String, Float).   |
| `lowLimit`     | Integer/Float | The lower limit for a numerical property.                       |
| `highLimit`    | Integer/Float | The upper limit for a numerical property.                       |
| `format`       | String        | The format of the property, if applicable.                      |
| `units`        | String        | The measurement units for the property (e.g., Celsius, kg).     |
| `options`      | List          | Possible values for the property, e.g., `"[option1, option2]"`. |
| `nullable`     | Boolean       | Defines if the property can accept null values.                 |
| `defaultValue` | Mixed         | The default value assigned to the property if none is provided. |
| `spare1`       | String        | Additional field for user-defined context.                      |
| `spare2`       | String        | Additional field for user-defined context.                      |
| `spare3`       | String        | Additional field for user-defined context.                      |

## Example Usage

```python
def validateTemperatureProperty():
    # Define property details for validation
    property_data = {
        "name": "Temperature",
        "dataType": "Float",
        "lowLimit": -20,
        "highLimit": 50,
        "units": "Celsius",
        "nullable": False,
        "defaultValue": 20.0
    }
    
    # Validate the property details
    validation_errors = system.mes.location.validateProperty(**property_data)
    
    if validation_errors:
        print("Validation errors:", validation_errors)
    else:
        print("Property is valid.")
