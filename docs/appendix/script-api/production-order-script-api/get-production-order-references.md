---
sidebar_position: 8
title: "getProductionOrderReferences"
description: "Retrieves a list of references to a production order with the given ID."
---

# system.mes.productionOrder.getProductionOrderReferences

## Description

Retrieves a list of references to a [Production Orders](../../data-model/production-order-model/production-order) record by its ID or Name.

## Syntax

```python
system.mes.productionOrder.getProductionOrderReferences(productionOrderIdOrName)
```

## Parameters

| Parameter                   | Type     | Description                                         |
|-----------------------------|----------|-----------------------------------------------------|
| `productionOrderIdOrName`   | `String` | The ID or name of the production order to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                               |
| ------------ | ------------------- | ------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                           |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the production order. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                      |
| ----------- | --------------- | ---------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                              |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the production order. |

## Code Examples

```python
# Retrieve the references for the production order specified
production_order_references = system.mes.productionOrder.getProductionOrderReferences('01JPMTA7K3-E8EHA4MD-7C304P4Z')

# Output the production order references
print(production_order_references)
```
