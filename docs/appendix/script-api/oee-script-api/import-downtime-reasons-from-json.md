---
title: importDowntimeReasonsFromJson
description: Imports downtime reason configurations from Json formatted data.
sidebar_position: 40
---

# system.mes.oee.importDowntimeReasonsFromJson

Imports downtime reason configurations from Json formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importDowntimeReasonsFromJson(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                             |
| --------- | -------- | -------- | --------------------------------------- |
| `bytes`   | `byte[]` | False    | The CSV data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the CSV file
file_path = "C:/path/to/downtime_reasons.csv"

try:
    # Read the file content as bytes
    csv_bytes = system.file.readFileAsBytes(file_path)

    # Import the downtime reasons
    result = system.mes.oee.importDowntimeReasonsFromCsv(csv_bytes)

    if result.get('success'):
        print "Successfully imported {} downtime reasons.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```
