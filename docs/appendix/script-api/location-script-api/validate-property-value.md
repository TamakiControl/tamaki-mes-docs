---
sidebar_position: 29
title: "validatePropertyValue"
description: "Validates the specified parameters for a location property value and returns any validation errors."
---

# system.mes.location.validatePropertyValue

## Description

Validates the specified parameters for a [Location Property Values](../../data-model/location-model/location-property-value) record and returns any validation errors.
This only checks if the location property value object can be saved based on the attributes given, without actually creating or modifying the property value. Use this function to verify your parameters before executing a save location property values operation.

## Syntax

```python
system.mes.location.validatePropertyValue(**propertyData)
```

## Parameters

| Parameter    | Type            | Nullable | Description                                                                                                        |
|--------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `locationId` | `String` (ULID) | False    | The ULID of the location.                                                                                          |
| `propertyId` | `String` (ULID) | False    | The ULID of the location property.                                                                                 |
| `dataType`   | `String`        | True     | The data type of the property value. Must be the same as the data type of the property. Default value is `String`. |
| `value`      | `Mixed`         | True     | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`         | `String` (ULID) | True     | The ULID of the location property value (optional, for updating an existing property).                             |
| `notes`      | `String`        | True     | Notes related to the location property value.                                                                      |
| `enabled`    | `Boolean`       | True     | Indicates if the property value is active and enabled. Default value is `true`.                                    |
| `spare1`     | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare2`     | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare3`     | `String`        | True     | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property value object
propertyValueData = system.mes.location.newPropertyValue()

# Define property value details
propertyValueData['locationId'] = system.mes.location.getLocation('DairyCo')['id']
propertyValueData['propertyId'] = system.mes.location.getProperty('Cows')['id']
propertyValueData['dataType'] = 'Int' # Must be the same data type as the property
propertyValueData['value'] = 100

# Validate location property value parameters
validationErrors = system.mes.location.validatePropertyValue(**propertyValueData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Location property value parameters are valid.')
```
