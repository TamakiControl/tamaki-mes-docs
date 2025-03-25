---
sidebar_position: 7
title: "getAllProductionOrders"
description: "Retrieves all production orders."
---

# system.mes.productionOrder.getAllProductionOrders

## Description

Retrieves a list of all [Production Orders](../../data-model/production-order-model/production-order) records in the system.

## Syntax

```python
system.mes.productionOrder.getAllProductionOrders()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all production orders.

## Code Examples

```python
# Retrieve all production orders
all_production_orders = system.mes.productionOrder.getAllProductionOrders()

# Output the list of production orders
print(all_production_orders)
```
