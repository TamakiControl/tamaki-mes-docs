---
title: importPerformanceReasonsFromCsv
description: Imports performance reason configurations from CSV formatted data.
sidebar_position: 84
---

# system.mes.oee.importPerformanceReasonsFromCsv

## Description

Imports performance reason configurations from CSV formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importPerformanceReasonsFromCsv(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                             |
| --------- | -------- |----------| --------------------------------------- |
| `bytes`   | `byte[]` | False    | The CSV data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the CSV file
filePath = "C:/path/to/performance_reasons.csv"

try:
    # Read the file content as bytes
    csvBytes = system.file.readFileAsBytes(filePath)

    # Import the performance reasons
    result = system.mes.oee.importPerformanceReasonsFromCsv(csvBytes)

    if result.get('success'):
        print "Successfully imported {} performance reasons.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```

