---
sidebar_position: 54
title: "getInventoryLotReferences"
description: "Retrieves a list of references to a inventory lots record with the given ID."
---

# system.mes.inventory.getInventoryLotReferences

## Description

Retrieves a list of references to a [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID.

## Syntax

```python
system.mes.inventory.getInventoryLotReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the inventory lot to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                            |
|--------------|---------------------|------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                        |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the inventory lot. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                   |
|-------------|-----------------|---------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                           |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the inventory lot. |

## Code Examples

```python
# Retrieve the references for the inventory lot specified
lotReferences = system.mes.inventory.getInventoryLotReferences('01JE6F0CE9-T94PZD8R-TH9J01TJ')

# Output the inventory lot references
print(lotReferences)
```
