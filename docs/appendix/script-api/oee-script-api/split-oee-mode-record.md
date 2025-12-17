---
sidebar_position: 12
title: "splitOeeModeRecord"
description: "Split the OEE Mode Record at the given time."
---

# system.mes.oee.splitOeeModeRecord

## Description

Splits the [OEE Mode Record](../../data-model/oee-model/oee-mode-record.md) at the given time.

## Syntax

```python
system.mes.oee.splitOeeModeRecord(oeeModeRecordId, splitDate)
```

## Parameters

| Parameter         | Type            | Nullable | Description                              |
|-------------------|-----------------|----------|------------------------------------------|
| `oeeModeRecordId` | String (ULID)   | False    | The ID of the oee mode record to update. |
| `splitDate`       | Date            | False    | The date and time to split the record at.|

## Returns

No return value.

## Code Examples

```python
oeeModeRecordId = "01K4OEEMRC-UNIT1-0001"  

splitDate = "2025-09-05 14:58:30"    
splitDate = system.date.parse(splitDate, "yyyy-MM-dd HH:mm:ss")  
  
system.mes.oee.splitOeeModeRecord(oeeModeRecordId, splitDate)
```
