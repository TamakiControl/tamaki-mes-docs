---
sidebar_position: 17
title: "getProductionOrderPropertyReferences"
description: "Retrieves a list of references to a production order property with the given ID."
---

# system.mes.productionOrder.getProductionOrderPropertyReferences

## Description

Retrieves a list of references to a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its ID.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                            |
|-----------|-----------------|----------|--------------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the production order property to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                        |
|--------------|---------------------|------------------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                                    |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the production order property. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                               |
|-------------|-----------------|---------------------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                                       |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the production order property. |

## Code Examples

```python
# Retrieve the references for the production order property specified
propertyReferences = system.mes.productionOrder.getProductionOrderPropertyReferences('01JPQKDYTM-1G81VA08-3QS948DK')

# Output the production order property references
print(propertyReferences)
```
