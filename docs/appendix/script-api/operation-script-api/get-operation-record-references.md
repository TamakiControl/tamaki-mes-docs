---
sidebar_position: 21
title: "getOperationRecordReferences"
description: "Retrieves a list of references to an operation record with the given ID."
---

# system.mes.operation.getOperationRecordReferences

## Description

Retrieves a list of references to an [Operation Records](../../data-model/operation-model/operation-record) object by its ID.

## Syntax

```python
system.mes.operation.getOperationRecordReferences(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                 |
| --------- | --------------- | -------- | ------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ID of the operation record to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                               |
| ------------ | ------------------- | ------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                           |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the operation record. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                      |
| ----------- | --------------- | ---------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                              |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the operation record. |

## Code Examples

```python
# Retrieve the references for the operation record specified
operationRecordReferences = system.mes.operation.getOperationRecordReferences('01JS20DCWR-PBFZR1MX-2SA37XFC')

# Output the operation record references
print(operationRecordReferences)
```
