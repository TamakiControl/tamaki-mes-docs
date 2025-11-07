---
sidebar_position: 17
title: "getProductionOrderForOperation"
description: "Retrieves the production order for an operation."
---

# system.mes.operation.getProductionOrderForOperation

## Description

Retrieves the production order for a given [Operations](../../data-model/operation-model/operation) record.

## Syntax

```python
system.mes.operation.getProductionOrderForOperation(operationId)
```

## Parameters

| Parameter     | Type            | Nullable | Description              |
|---------------|-----------------|----------|--------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation. |

## Returns

Returns a JSON objects representing a production order associated with the operation.

## Example Usage

```python
# Retrieve the production order associated with the operation
production_order = system.mes.operation.getProductionOrderForOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the production order
print(production_order)
```
