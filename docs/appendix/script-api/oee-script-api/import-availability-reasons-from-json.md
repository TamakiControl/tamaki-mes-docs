---
title: importAvailabilityReasonsFromJson
description: Imports availability reason configurations from Json formatted data.
sidebar_position: 81
---

# system.mes.oee.importAvailabilityReasonsFromJson

## Description

Imports availability reason configurations from Json formatted data.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importAvailabilityReasonsFromJson(bytes)
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
filePath = "C:/path/to/availability_reasons.json"

try:
    # Read the file content as bytes
    jsonBytes = system.file.readFileAsBytes(filePath)

    # Import the availability reasons
    result = system.mes.oee.importAvailabilityReasonsFromJson(jsonBytes)

    if result.get('success'):
        print "Successfully imported {} availability reasons.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```
