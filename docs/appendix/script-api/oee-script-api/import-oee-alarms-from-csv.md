---
sidebar_position: 14
title: "importOeeAlarmsFromCsv"
description: "Imports OEE alarm configurations from a CSV file."
---

# system.mes.oee.importOeeAlarmsFromCsv

## Description

Imports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations from a CSV file provided as raw bytes. The service layer will parse the CSV content and create or update OEE alarm entities.

Large imports are automatically detected and processed asynchronously in batches. The function returns an `ImportResponseDTO` object wrapped in `ApiResponse` with import progress information.

Recommended to export at least one pre-existing OEE Alarm to CSV using the [Export Oee Alarms to CSV](export-oee-alarms-to-csv.md)
functionality to ensure the correct format of the CSV file.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importOeeAlarmsFromCsv(bytes)
```

## Parameters

| Parameter | Type      | Nullable | Description                   |
|-----------|-----------| -------- | ----------------------------- |
| `bytes`   | `byte[] ` | False    | The CSV content as raw bytes. |

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

# Path to the CSV file
file_path = "C:/path/to/oee_alarms.csv"

try:
    # Read the file content as bytes
    csv_bytes = system.file.readFileAsBytes(file_path)

    # Import the alarms
    result = system.mes.oee.importOeeAlarmsFromCsv(csv_bytes)

    if result.get('success'):
        print "Successfully imported {} OEE alarms.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```

