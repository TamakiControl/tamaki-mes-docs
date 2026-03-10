---
title: importQualityReasonsFromJson
description: Imports quality reason configurations from JSON formatted data.
sidebar_position: 83
---

# system.mes.oee.importQualityReasonsFromJson

## Description

Imports quality reason configurations from JSON formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importQualityReasonsFromJson(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                              |
| --------- | -------- | -------- |------------------------------------------|
| `bytes`   | `byte[]` | False    | The JSON data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the JSON file
filePath = "C:/path/to/quality_reasons.json"

try:
    # Read the file content as bytes
    jsonBytes = system.file.readFileAsBytes(filePath)

    # Import the quality reasons
    result = system.mes.oee.importQualityReasonsFromJson(jsonBytes)

    if result.get('success'):
        print "Successfully imported {} quality reasons.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```

