---
title: importOeeStatesFromCsv
description: Imports OEE state configurations from CSV formatted data.
sidebar_position: 78
---

# system.mes.oee.importOeeStatesFromCsv

## Description

Imports OEE state configurations from CSV formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importOeeStatesFromCsv(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                             |
| --------- | -------- |----------| --------------------------------------- |
| `bytes`   | `byte[]` | True     | The CSV data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the CSV file
file_path = "C:/path/to/oee_states.csv"

try:
    # Read the file content as bytes
    csv_bytes = system.file.readFileAsBytes(file_path)

    # Import the OEE states
    result = system.mes.oee.importOeeStatesFromCsv(csv_bytes)

    if result.get('success'):
        print "Successfully imported {} OEE states.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```
