---
sidebar_position: 16
title: "getAllProductionOrderProperties"
description: "Retrieves all production order properties."
---

# system.mes.productionOrder.getAllProductionOrderProperties

## Description

Retrieves a list of all [Production Order Properties](../../data-model/production-order-model/production-order-property) records in the system.

## Syntax

```python
system.mes.productionOrder.getAllProductionOrderProperties()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all production order properties.

## Code Examples

```python
# Retrieve all production order properties
allProductionOrderProperties = system.mes.productionOrder.getAllProductionOrderProperties()

# Output the list of production order properties
print(allProductionOrderProperties)
```
