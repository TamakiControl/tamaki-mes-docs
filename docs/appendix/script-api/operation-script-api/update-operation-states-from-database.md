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


## Permissions

This method requires the `OPERATION.READ.GET` permission.

## Syntax

```python
system.mes.operation.updateOperationStatesFromDatabase()
system.mes.operation.updateOperationStatesFromDatabase([operationIds])
```

## Parameters

### Method 1: Update all operations

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

### Method 2: Update specific operations

| Parameter      | Type                  | Nullable | Description                    |
|----------------|-----------------------|----------|--------------------------------|
| `operationIds` | `List<String>` (ULID) | True     | List of IDs of the operations. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Update the state of the operations from the database
system.mes.operation.updateOperationStatesFromDatabase(['01JPBCPKSR-972W3V0Y-H00NNSKQ', '01JS21BASN-Z4CFME9H-9417JWBW'])
```
