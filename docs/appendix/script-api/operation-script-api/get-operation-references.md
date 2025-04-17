---
sidebar_position: 8
title: "getOperationReferences"
description: "Retrieves a list of references to an operation with the given ID."
---

# system.mes.operation.getOperationReferences

## Description

Retrieves a list of references to an [Operations](../../data-model/operation-model/operation) object by its ID.

## Syntax

```python
system.mes.operation.getOperationReferences(id)
```

## Parameters

| Parameter | Type            | Description                          |
| --------- | --------------- | ------------------------------------ |
| `id`      | `String` (ULID) | The ID of the operation to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                        |
| ------------ | ------------------- | ------------------------------------------------------------------ |
| `tableName`  | `String`            | The name of the table that the reference is in.                    |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the operation. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                               |
| ----------- | --------------- | --------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                       |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the operation. |

## Code Examples

```python
# Retrieve the references for the operation specified
operation_references = system.mes.operation.getOperationReferences('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation references
print(operation_references)
```
