---
sidebar_position: 27
title: "getProductionOrderPropertyValueFor"
description: "Retrieves a production order property value given a production order object and a property object."
---

# system.mes.productionOrder.getProductionOrderPropertyValueFor

## Description

Retrieves a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record given
a production order ID and a property ID or name.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyValueFor(productionOrderIdOrName, propertyIdOrName)
```

## Parameters

| Parameter                  | Type            | Description                                                        |
|----------------------------| --------------- |--------------------------------------------------------------------|
| `productionOrderIdOrName`  | `String`      | The ULID or Name of the production order.                          |
| `propertyIdOrName`         | `String`        | The ULID or name of the property for which the value is retrieved. |

## Returns

Returns a JSON representation of the production order property value. Returns nothing if no production order property value is found.

| Name                    | Type            | Description                                                                                                        |
| ----------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `productionOrderId`     | `String` (ULID) | The ULID of the production order.                                                                                  |
| `propertyId`            | `String` (ULID) | The ULID of the production order property.                                                                         |
| `dataType`              | `String`        | The data type of the property value. Must be the same as the data type of the property.                            |
| `value`                 | `Mixed`         | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                    | `String` (ULID) | The ULID of the production order property value (optional, for updating an existing property).                     |
| `notes`                 | `String`        | Notes related to the production order property value.                                                              |
| `enabled`               | `Boolean`       | Indicates if the property value is active and enabled.                                                             |
| `spare1`                | `String`        | Additional field for user-defined context.                                                                         |
| `spare2`                | `String`        | Additional field for user-defined context.                                                                         |
| `spare3`                | `String`        | Additional field for user-defined context.                                                                         |

## Code Examples

```python
# Retrieve a production order property value by its production order ID and property ID or name
property_value = system.mes.productionOrder.getProductionOrderPropertyValueFor('01JPMTA7K3-E8EHA4MD-7C304P4Z', 'Batch Size')

# Output the production order property value
print(property_value)
```
