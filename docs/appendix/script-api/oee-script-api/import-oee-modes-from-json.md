---
title: importOeeModesFromJson
description: Imports OEE mode configurations from JSON formatted data.
sidebar_position: 18
---

# system.mes.oee.importOeeModesFromJson

Imports OEE mode configurations from JSON formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importOeeModesFromJson(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                              |
| --------- | -------- | -------- | ---------------------------------------- |
| `bytes`   | `byte[]` | False    | The JSON data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the JSON file
file_path = "C:/path/to/oee_modes.json"

try:
    # Read the file content as bytes
    json_bytes = system.file.readFileAsBytes(file_path)

    # Import the OEE modes
    result = system.mes.oee.importOeeModesFromJson(json_bytes)

    if result.get('success'):
        print "Successfully imported {} OEE modes.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```
