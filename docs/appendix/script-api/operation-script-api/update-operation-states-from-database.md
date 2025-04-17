---
sidebar_position: 22
title: "updateOperationStatesFromDatabase"
description: "Updates the current operation state from the database."
---

# system.mes.operation.updateOperationStatesFromDatabase

## Description

**No Parameter:** Updates the states of all the [Operations](../../data-model/operation-model/operation) from the database.

**With a Parameter:** Updates the states of only the specified [Operations](../../data-model/operation-model/operation) from the database given
the ID of the operations.

## Syntax

```python
system.mes.operation.updateOperationStatesFromDatabase()
system.mes.operation.updateOperationStatesFromDatabase([operationIds])
```

## Parameters

**No Parameter:**

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

**With a Parameter:**

| Parameter      | Type                  | Description                    |
| -------------- | --------------------- | ------------------------------ |
| `operationIds` | `List<String>` (ULID) | List of IDs of the operations. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Update the state of the operations from the database
system.mes.operation.updateOperationStatesFromDatabase(['01JPBCPKSR-972W3V0Y-H00NNSKQ', '01JS21BASN-Z4CFME9H-9417JWBW'])
```
