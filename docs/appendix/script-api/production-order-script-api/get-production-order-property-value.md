---
sidebar_position: 25
title: "getProductionOrderPropertyValue"
description: "Retrieves a production order property value by its ID."
---

# system.mes.productionOrder.getProductionOrderPropertyValue

## Description

Retrieves a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its specified ID.


## Permissions

This method requires the `PRODUCTION_ORDER.READ.GET` permission.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyValue(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                                  |
|-----------|-----------------|----------|--------------------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the production order property value to retrieve. |

## Returns

Returns a JSON representation of the production order property value. Returns nothing if no production order property value is found.

| Name                | Type            | Description                                                                                                        |
|---------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
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

## Code Examples

```python
# Retrieve a production order property value by ID
property_value = system.mes.productionOrder.getProductionOrderPropertyValue('01JQ2AN7CQ-MWR6A9M0-FQSEAHTJ')

# Output the production order property value
print(property_value)
```
