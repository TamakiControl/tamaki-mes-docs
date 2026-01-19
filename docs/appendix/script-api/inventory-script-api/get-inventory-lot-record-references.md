---
sidebar_position: 60
title: "getInventoryLotRecordReferences"
description: "Retrieves a list of references to a inventory lot record with the given ID."
---

# system.mes.inventory.getInventoryLotRecordReferences

## Description

Retrieves a list of references to an [Inventory Lot Records](../../data-model/inventory-operation-model/inventory-lot-record) object by its ID.

## Syntax

```python
system.mes.inventory.getInventoryLotRecordReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                     |
|-----------|-----------------|----------|-------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the inventory lot record to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                   |
|--------------|---------------------|-------------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                               |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the inventory lot record. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                          |
|-------------|-----------------|----------------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                                  |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the inventory lot record. |

## Code Examples

```python
# Retrieve the references for the inventory lot record specified
lotRecordReferences = system.mes.inventory.getInventoryLotRecordReferences('VQNX3P98-01JE6QXQX0-993FMEHT')

# Output the inventory lot record references
print(lotRecordReferences)
```
