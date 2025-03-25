---
sidebar_position: 37
title: "getBillOfMaterialsReferences"
description: "Retrieves a list of references to a bill of materials with the given ID."
---

# system.mes.productionOrder.getBillOfMaterialsReferences

## Description

Retrieves a list of references to a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID.

## Syntax

```python
system.mes.productionOrder.getBillOfMaterialsReferences(id)
```

## Parameters

| Parameter | Type            | Description                                  |
| --------- | --------------- | -------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the bill of materials to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                |
| ------------ | ------------------- | -------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                            |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the bill of materials. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                       |
| ----------- | --------------- | ----------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                               |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the bill of materials. |

## Code Examples

```python
# Retrieve the references for the bill of materials specified
bill_of_materials_references = system.mes.productionOrder.getBillOfMaterialsReferences('01JQ31CZMB-E7QA782B-5B521H4M')

# Output the bill of materials references
print(bill_of_materials_references)
```
