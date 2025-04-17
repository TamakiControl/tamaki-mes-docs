---
sidebar_position: 20
title: "getOperationRecordForLocationAndDate"
description: "Retrieves the operation record given the location ID or path, the start date and the end date."
---

# system.mes.operation.getOperationRecordForLocationAndDate

## Description

Retrieves a [Operation Records](../../data-model/operation-model/operation-record) record by the location ID or path, the start date and the end date.

## Syntax

```python
system.mes.operation.getOperationRecordForLocationAndDate(locationIdOrPath, startDate, endDate)
```

## Parameters

| Parameter          | Type     | Description                                                          |
| ------------------ | -------- | -------------------------------------------------------------------- |
| `locationIdOrPath` | `String` | The ID or path of the location associated with the operation record. |
| `startDate`        | `String` | The start date of the operation.                                     |
| `endDate`          | `String` | The end date of the operation.                                       |

## Returns

Returns a JSON representation of the operation record. Returns nothing if no operation record is found.

## Code Examples

```python
# Retrieve an operation record by location, start date and end date
operation_record = system.mes.operation.getOperationRecordForLocationAndDate('01JD7M94CJ-HPEQEJ1F-QA8EQ6VE', '2025-01-01T00:00:00Z', '2026-01-01T00:00:00Z')

# Output the operation record
print(operation_record)
```
