---
sidebar_position: 24
title: "getOeeAlarmRecord"
description: "Retrieves a specific alarm record by ID."
---

# system.mes.oee.getOeeAlarmRecord

## Description

Retrieves a specific [OEE Alarm Record](../../data-model/oee-model/oee-alarm-record) by its ID.

## Syntax

```python
system.mes.oee.getOeeAlarmRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                              |
|-----------|-----------------|----------|------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the alarm record to retrieve.  |

## Returns

Returns a JSON representation of the alarm record. Returns nothing if no record is found.

## Code Examples

```python
# Retrieve an alarm record by ID
alarm_record = system.mes.oee.getOeeAlarmRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the record
print(f"Active Date: {alarm_record['activeDate']}")
print(f"Cleared Date: {alarm_record.get('clearedDate', 'Not cleared')}")
```