---
sidebar_position: 7
title: "getOperations"
description: "Retrieves all operations."
---

# system.mes.operation.getOperations

## Description

Retrieves all the [Operations](../../data-model/operation-model/operation) records.

## Syntax

```python
system.mes.operation.getOperations()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all operations.

## Example Usage

```python
# Retrieve all operations
allOperations = system.mes.operation.getOperations()

# Output the list of operations
print(allOperations)
```
