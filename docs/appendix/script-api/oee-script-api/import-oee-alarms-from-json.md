---
sidebar_position: 25
title: "importOeeAlarmsFromJson"
description: "Imports OEE alarm configurations from JSON."
---

# system.mes.oee.importOeeAlarmsFromJson

## Description

Imports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations from a JSON file provided as raw bytes. The service layer will parse the JSON content and create or update OEE alarm entities.

Large imports are automatically detected and processed asynchronously in batches. The function returns an `ImportResponseDTO` object wrapped in `ApiResponse` with import progress information.

Recommended to export at least one pre-existing OEE Alarm to JSON using the [Export Oee Alarms to JSON](export-oee-alarms-to-json.md)
functionality to ensure the correct format of the JSON file.

## Syntax

```python
system.mes.oee.importOeeAlarmsFromJson(importBytes)
```

## Parameters

| Parameter     | Type      | Nullable | Description                     |
| ------------- | --------- | -------- | ------------------------------- |
| `importBytes` | `PyArray` | False    | The JSON content as raw bytes.  |

## Returns

An `ApiResponse` object where `data` is an `ImportResponseDTO` object containing:
- `numRowsProcessed` (Integer) - Number of rows processed
- `numRowsQueued` (Integer) - Number of rows queued for processing
- `batchFlushDelayMillis` (Integer) - Delay between batch flushes
- `batchSize` (Integer) - Size of processing batches
- `estimatedTimeRemainingMillis` (Integer) - Estimated time to complete

## Code Examples

```python
def runAction(self, event):
    jsonBytes = event.file.getBytes()
    response = system.mes.oee.importOeeAlarmsFromJson(jsonBytes)
    print(f"Rows processed: {response.data.numRowsProcessed}")
    print(f"Rows queued: {response.data.numRowsQueued}")
```