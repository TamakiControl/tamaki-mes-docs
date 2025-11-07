---
sidebar_position: 19
title: "getActiveOperationRecords"
description: "Retrieves all active operation records."
---

# system.mes.operation.getActiveOperationRecords

## Description

Retrieves all active [Operation Records](../../data-model/operation-model/operation-record).

## Syntax

```python
system.mes.operation.getActiveOperationRecords()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing the active operation records.

## Example Usage

```python
# Retrieve all active operation records
activeOperationRecords = system.mes.operation.getActiveOperationRecords()

# Output the list of operation records
print(activeOperationRecords)
```
