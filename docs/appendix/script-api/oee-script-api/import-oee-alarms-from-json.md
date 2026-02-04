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
system.mes.oee.importOeeAlarmsFromJson(bytes)
```

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Parameters

| Parameter | Type     | Nullable | Description                     |
|-----------|----------| -------- | ------------------------------- |
| `bytes`   | `byte[]` | False    | The JSON content as raw bytes.  |

## Returns

An `ApiResponse` object where `data` is an `ImportResponseDTO` object containing:
- `numRowsProcessed` (Integer) - Number of rows processed
- `numRowsQueued` (Integer) - Number of rows queued for processing
- `batchFlushDelayMillis` (Integer) - Delay between batch flushes
- `batchSize` (Integer) - Size of processing batches
- `estimatedTimeRemainingMillis` (Integer) - Estimated time to complete

## Code Examples

```python
import system.file

# Path to the JSON file
file_path = "C:/path/to/oee_alarms.json"

try:
    # Read the file content as bytes
    json_bytes = system.file.readFileAsBytes(file_path)

    # Import the alarms
    result = system.mes.oee.importOeeAlarmsFromJson(json_bytes)

    if result.get('success'):
        print "Successfully imported {} OEE alarms.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```