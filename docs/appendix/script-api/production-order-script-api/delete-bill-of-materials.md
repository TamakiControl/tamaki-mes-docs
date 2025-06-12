---
sidebar_position: 39
title: "deleteBillOfMaterials"
description: "Deletes the bill of materials with the given ID."
---

# system.mes.productionOrder.deleteBillOfMaterials

## Description

Deletes a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID.
This cannot delete a bill of materials with references to it.

## Syntax

```python
system.mes.productionOrder.deleteBillOfMaterials(id)
```

## Parameters

| Parameter | Type            | Description                                |
| --------- | --------------- | ------------------------------------------ |
| `id`      | `String` (ULID) | The ID of the bill of materials to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the bill of materials that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a bill of materials by ID
system.mes.productionOrder.deleteBillOfMaterials('01JQ31CZMB-E7QA782B-5B521H4M')
```
