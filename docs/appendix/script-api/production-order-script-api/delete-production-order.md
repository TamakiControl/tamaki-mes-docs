---
sidebar_position: 10
title: "deleteProductionOrder"
description: "Deletes the production order with the given ID."
---

# system.mes.productionOrder.deleteProductionOrder

## Description

Deletes a [Production Orders](../../data-model/production-order-model/production-order) record by its ID.
This cannot delete a production order with references to it.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrder(id)
```

## Parameters

| Parameter | Type            | Description                               |
| --------- | --------------- | ----------------------------------------- |
| `id`      | `String` (ULID) | The ID of the production order to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the production order that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a production order by ID
system.mes.productionOrder.deleteProductionOrder('01JPMTA7K3-E8EHA4MD-7C304P4Z')
```
