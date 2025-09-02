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
system.mes.operation.getOperationRecordForLocationAndDate(locationIdOrPath, startDateMillis, endDateMillis)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                          |
|--------------------|----------|----------|----------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location associated with the operation record. |
| `startDateMillis`  | `Long`   | True     | The start date of the operation in milliseconds since epoch.         |
| `endDateMillis`    | `Long`   | True     | The end date of the operation in milliseconds since epoch.           |

## Returns

Returns a JSON representation of the operation record. Returns nothing if no operation record is found.

## Code Examples

```python
# Retrieve an operation record by location, start date and end date
operation_record = system.mes.operation.getOperationRecordForLocationAndDate('01JD7M94CJ-HPEQEJ1F-QA8EQ6VE', 1704067200000, 1735708800000)

# Output the operation record
print(operation_record)
```
