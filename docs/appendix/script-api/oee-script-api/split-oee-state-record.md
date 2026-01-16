---
sidebar_position: 5
title: "splitOeeStateRecord"
description: "Splits a state record at a specific time."
---

# system.mes.oee.splitOeeStateRecord

## Description

Splits an [OEE State Record](../../data-model/oee-model/oee-state-record) at a specific date, creating two separate records.

## Syntax

```python
system.mes.oee.splitOeeStateRecord(oeeStateRecordId, splitDate)
```

## Parameters

| Parameter           | Type            | Nullable | Description                                                      |
|---------------------|-----------------|----------|------------------------------------------------------------------|
| `oeeStateRecordId`  | `String` (ULID) | False    | The ID of the state record to split.                             |
| `splitDate`         | `Date`          | False    | The date at which to split the record.                           |

## Returns

This method does not return a value.

## Code Examples

```python
# Split a state record at a specific date
split_date = system.time.now()

system.mes.oee.splitOeeStateRecord(
    '01JAP8RJBN-8ZTPXSGY-J9GSDPE1',
    split_date
)
```
