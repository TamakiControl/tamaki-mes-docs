---
sidebar_position: 18
title: "getOeeStateRecordDetailed"
description: "Gets detailed state record information."
---

# system.mes.oee.getOeeStateRecordDetailed

## Description

Retrieves detailed information for a specific [OEE State Record](../../data-model/oee-model/oee-state-record) by its ID, including related mode records, alarm records, and other associated data.

## Syntax

```python
system.mes.oee.getOeeStateRecordDetailed(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
|-----------|-----------------|----------|----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the state record to retrieve.      |

## Returns

Returns a JSON representation of the detailed state record with expanded information. Returns nothing if no record is found.

## Code Examples

```python
# Get detailed state record
detailed_record = system.mes.oee.getOeeStateRecordDetailed('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')

# Output the detailed record
print(detailed_record)
```