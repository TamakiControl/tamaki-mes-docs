---
sidebar_position: 4
title: "getOeeRecord"
description: "Retrieves a specific OEE record by ID."
---

# system.mes.oee.getOeeRecord

## Description

Retrieves a specific [OEE Record](../../data-model/oee-model/oee-record) by its ID.

## Syntax

```python
system.mes.oee.getOeeRecord(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                          |
|-----------|-----------------|----------|--------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the OEE record to retrieve. |

## Returns

Returns a JSON representation of the OEE record. Returns nothing if no record is found.

## Code Examples

```python
# Retrieve an OEE record by ID
oee_record = system.mes.oee.getOeeRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the record
print(oee_record)
```