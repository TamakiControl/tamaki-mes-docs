---
sidebar_position: 7
title: "saveProperty"
description: "Creates or updates a location property with specified parameters."
---

# system.mes.location.saveProperty

Creates or updates a location property based on the provided parameters. If an ID is provided and corresponds to an
existing location property, the function updates the existing property; otherwise, a new property is created.

## Method Description

This function allows for the creation or updating of a location property. It accepts various parameters to define the
property, such as data type, limits, and default values. This function is typically called with an existing location
property object, previously retrieved or created with `newLocationProperty()`.

## Returns

A JSON representation of the saved location property.

## Parameters

| Parameter      | Type          | Description                                                                      |
|----------------|---------------|----------------------------------------------------------------------------------|
| `id`           | String        | The ULID of the location property (optional, for updating an existing property). |
| `notes`        | String        | Notes related to the location property.                                          |
| `enabled`      | Boolean       | Indicates if the property is active and enabled.                                 |
| `name`         | String        | The name of the location property.                                               |
| `description`  | String        | A description of the location property.                                          |
| `dataType`     | String        | The data type of the property (e.g., Integer, String, Float).                    |
| `lowLimit`     | Integer/Float | The minimum value allowed for a numerical property.                              |
| `highLimit`    | Integer/Float | The maximum value allowed for a numerical property.                              |
| `format`       | String        | The format of the property, if applicable.                                       |
| `units`        | String        | The measurement units for the property (e.g., Celsius, kg).                      |
| `options`      | List          | List of possible values for the property, e.g., `"[option1, option2]"`.          |
| `nullable`     | Boolean       | Defines if the property can accept null values.                                  |
| `defaultValue` | Mixed         | The default value assigned to the property if none is provided.                  |
| `spare1`       | String        | Additional field for user-defined context.                                       |
| `spare2`       | String        | Additional field for user-defined context.                                       |
| `spare3`       | String        | Additional field for user-defined context.                                       |

## Example Usage

```python
def createOrUpdateTemperatureProperty():
    # Retrieve or create a property
    temperature_property = system.mes.location.newProperty()
    
    # Define property attributes
    temperature_property['name'] = "Temperature"
    temperature_property['dataType'] = "Float"
    temperature_property['lowLimit'] = -20
    temperature_property['highLimit'] = 50
    temperature_property['units'] = "Celsius"
    temperature_property['nullable'] = False
    temperature_property['defaultValue'] = 20.0
    
    # Save or update the property
    saved_property = system.mes.location.saveProperty(**temperature_property)
    print(saved_property)
