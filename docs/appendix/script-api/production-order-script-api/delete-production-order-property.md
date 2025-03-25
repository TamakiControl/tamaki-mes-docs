---
sidebar_position: 19
title: "deleteProductionOrderProperty"
description: "Deletes a specified production order property by its ID."
---

# system.mes.productionOrder.deleteProductionOrderProperty

## Description

Deletes a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its ID.
This cannot delete a production order property with references to it.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrderProperty(id)
```

## Parameters

| Parameter | Type            | Description                                          |
| --------- | --------------- | ---------------------------------------------------- |
| `id`      | `String` (ULID) | The ULID of the production order property to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a production order property by ID
system.mes.productionOrder.deleteProductionOrderProperty('01JPQKDYTM-1G81VA08-3QS948DK')
```
