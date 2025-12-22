---
sidebar_position: 6
title: "splitOeeRecord"
description: "Splits an OEE record at a specific time."
---

# system.mes.oee.splitOeeRecord

## Description

Splits an [OEE Record](../../data-model/oee-model/oee-record) at a specific date, creating two separate records.

## Syntax

```python
system.mes.oee.splitOeeRecord(oeeRecordId, splitDate)
```

## Parameters

| Parameter      | Type            | Nullable | Description                                    |
|----------------|-----------------|----------|------------------------------------------------|
| `oeeRecordId`  | `String` (ULID) | False    | The ID of the OEE record to split.             |
| `splitDate`    | `Date`          | False    | The date at which to split the record.         |

## Returns

This method does not return a value.

## Code Examples

```python
# Split an OEE record at a specific date
split_date = system.time.now()

system.mes.oee.splitOeeRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',
    split_date
)
```
