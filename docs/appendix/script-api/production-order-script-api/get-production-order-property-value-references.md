---
sidebar_position: 28
title: "getProductionOrderPropertyValueReferences"
description: "Retrieves a list of references to a production order property value with the given ID."
---

# system.mes.productionOrder.getProductionOrderPropertyValueReferences

## Description

Retrieves a list of references to a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its ID.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyValueReferences(id)
```

## Parameters

| Parameter | Type            | Description                                                  |
| --------- | --------------- | ------------------------------------------------------------ |
| `id`      | `String` (ULID) | The ULID of the production order property value to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                              |
| ------------ | ------------------- | ---------------------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                                          |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the production order property value. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                                     |
| ----------- | --------------- | ------------------------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                                             |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the production order property value. |

## Code Examples

```python
# Retrieve the references for the production order property value specified
property_value_references = system.mes.productionOrder.getProductionOrderPropertyValueReferences('01JQ2AN7CQ-MWR6A9M0-FQSEAHTJ')

# Output the production order property value references
print(property_value_references)
```
