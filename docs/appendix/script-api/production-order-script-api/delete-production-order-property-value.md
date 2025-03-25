---
sidebar_position: 30
title: "deleteProductionOrderPropertyValue"
description: "Deletes a specified production order property value with the given ID."
---

# system.mes.productionOrder.deleteProductionOrderPropertyValue

## Description

Deletes a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its ID.
This cannot delete a production order property value with references to it.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrderPropertyValue(id)
```

## Parameters

| Parameter | Type            | Description                                              |
| --------- | --------------- | -------------------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the production order property value to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a production order property value by ID
system.mes.productionOrder.deleteProductionOrderPropertyValue('01JQ2AN7CQ-MWR6A9M0-FQSEAHTJ')
```
