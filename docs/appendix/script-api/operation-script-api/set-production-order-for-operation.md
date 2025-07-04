---
sidebar_position: 16
title: "setProductionOrderForOperation"
description: "Sets the production order for an operation."
---

# system.mes.inventory.setInventoryMetadata

## Description

Sets the production order for a given [Operations](../../data-model/operation-model/operation) record.

## Syntax

```python
system.mes.operation.setProductionOrderForOperation(locationId, operationName, productionOrderIdOrName)
system.mes.operation.setProductionOrderForOperation(operationId, productionOrderIdOrName)
```

## Parameters

| Parameter               | Type            | Description                                                         |
| ----------------------- | --------------- | ------------------------------------------------------------------- |
| `locationId`            | `String` (ULID) | The ID of the location associated with the operation.               |
| `operationName`         | `String`        | The name of the operation.                                          |
| `productionOrderIdOrName` | `String`      | The ID or Name of the production order to associate with the operation. |

| Parameter               | Type            | Description                                                         |
| ----------------------- | --------------- | ------------------------------------------------------------------- |
| `operationId`           | `String` (ULID) | The ID of the operation.                                            |
| `productionOrderIdOrName` | `String`      | The ID or Name of the production order to associate with the operation. |

## Returns

No response is returned.

## Code Examples

```python
# Set the production order for an operation
system.mes.operation.setProductionOrderForOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ', '01JPMTA7K3-E8EHA4MD-7C304P4Z')
```
