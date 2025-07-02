---
sidebar_position: 7
title: "getInventoryOperationReferences"
description: "Retrieves a list of references to an inventory operation with the given ID."
---

# system.mes.inventory.operation.getInventoryOperationReferences

## Description

Retrieves a list of references to an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its ID.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperationReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                    |
|-----------|-----------------|----------|------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the inventory operation to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                  |
|--------------|---------------------|------------------------------------------------------------------------------|
| `tableName`  | `String`            | The name of the table that the reference is in.                              |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the inventory operation. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                         |
|-------------|-----------------|---------------------------------------------------------------------|
| `fkColName` | `String`        | The name of the foreign key column.                                 |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the inventory operation. |

## Code Examples

```python
# Retrieve the references for the inventory operation specified
inventory_operation_references = system.mes.inventory.operation.getInventoryOperationReferences('01JPAND53P-BZ61RZHZ-V7C6EEHG')

# Output the inventory operation references
print(inventory_operation_references)
```
