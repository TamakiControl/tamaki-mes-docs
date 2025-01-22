---
sidebar_position: 28
title: "validatePropertyValue"
description: "Validates a location property value based on provided parameters."
---

# system.mes.location.validatePropertyValue

## Description

Validates the specified parameters for a [Location Property Values](../../data-model/location-model/location-property-value) record and returns any validation errors. 
This only checks if the location property object can be saved based on the attributes given.

## Syntax
```python
system.mes.location.validatePropertyValue(**property_data)
```

## Parameters

| Parameter      | Type            | Description                                                                             |
|----------------|-----------------|-----------------------------------------------------------------------------------------|
| `locationId`   | `String` (ULID) | The ULID of the location.                                                               |
| `propertyId`   | `String` (ULID) | The ULID of the location property.                                                      |
| `dataType`     | `String`        | The data type of the property value. Must be the same as the data type of the property. |
| `value`        | `Mixed`         | The value assigned to the property value if none is provided.                           |
| `id`           | `String` (ULID) | The ULID of the location property value (optional, for updating an existing property).  |
| `notes`        | `String`        | Notes related to the location property value.                                           |
| `enabled`      | `Boolean`       | Indicates if the property value is active and enabled.                                  |
| `spare1`       | `String`        | Additional field for user-defined context.                                              |
| `spare2`       | `String`        | Additional field for user-defined context.                                              |
| `spare3`       | `String`        | Additional field for user-defined context.                                              |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Create a location property value instance
property_value_data = system.mes.location.newPropertyValue()

# Define property value details
property_value_data['locationId'] = system.mes.location.getLocation('DairyCo')['id']
property_value_data['propertyId'] = system.mes.location.getProperty('Cows')['id']
property_value_data['dataType'] = 'Int' # Must be the same data type as the property
property_value_data['value'] = 100

# Validate location property value parameters
validation_errors = system.mes.location.validatePropertyValue(**property_value_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Location property value parameters are valid.')
```
