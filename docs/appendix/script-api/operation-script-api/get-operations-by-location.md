---
sidebar_position: 6
title: "getOperationsByLocation"
description: "Retrieves all operations at a given location."
---

# system.mes.operation.getOperationsByLocation

## Description

Retrieves all the [Operations](../../data-model/operation-model/operation) records at a given location.

## Syntax

```python
system.mes.operation.getOperationsByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                   |
|--------------------|----------|----------|---------------------------------------------------------------|
| `locationIdOrPath` | `String` | False    | The ID or path of the location associated with the operation. |

## Returns

Returns a list of JSON objects representing all operations at the given location.

## Example Usage

```python
# Retrieve all operations at a given location
all_operations = system.mes.operation.getOperationsByLocation('DairyCo')

# Output the list of operations
print(all_operations)
```
