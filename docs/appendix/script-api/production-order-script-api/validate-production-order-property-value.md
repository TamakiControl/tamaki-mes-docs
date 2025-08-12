---
sidebar_position: 29
title: "validateProductionOrderPropertyValue"
description: "Validates a production order property value based on provided parameters."
---

# system.mes.productionOrder.validateProductionOrderPropertyValue

## Description

Validates the specified parameters for a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record and returns any validation errors.
This only checks if the production order property value object can be saved based on the attributes given, without actually creating or modifying the property value. Use this function to verify your parameters before executing a save production order property value operation.

## Syntax

```python
system.mes.productionOrder.validateProductionOrderPropertyValue(**property_data)
```

## Parameters

| Parameter           | Type            | Description                                                                                                        |
| ------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `productionOrderId` | `String` (ULID) | The ULID of the production order.                                                                                  |
| `propertyId`        | `String` (ULID) | The ULID of the production order property.                                                                         |
| `dataType`          | `String`        | The data type of the property value. Must be the same as the data type of the property.                            |
| `value`             | `Mixed`         | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                | `String` (ULID) | The ULID of the production order property value (optional, for updating an existing property).                     |
| `notes`             | `String`        | Notes related to the production order property value.                                                              |
| `enabled`           | `Boolean`       | Indicates if the property value is active and enabled.                                                             |
| `spare1`            | `String`        | Additional field for user-defined context.                                                                         |
| `spare2`            | `String`        | Additional field for user-defined context.                                                                         |
| `spare3`            | `String`        | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new property value object
property_value_data = system.mes.productionOrder.newProductionOrderPropertyValue()

# Define property value details
property_value_data['productionOrderId'] = system.mes.productionOrder.getProductionOrder('Order001')['id']
property_value_data['propertyId'] = system.mes.productionOrder.getProductionOrderProperty('Batch Size')['id']
property_value_data['dataType'] = 'Int' # Must be the same data type as the property
property_value_data['value'] = 100

# Validate production order property value parameters
validation_errors = system.mes.productionOrder.validateProductionOrderPropertyValue(**property_value_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Production order property value parameters are valid.')
```
