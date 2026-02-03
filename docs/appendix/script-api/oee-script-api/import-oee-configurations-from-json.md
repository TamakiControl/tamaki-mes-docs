---
sidebar_position: 8
title: 'importOeeConfigurationsFromJson'
description: 'Imports OEE configurations from JSON format data.'
---

# system.mes.oee.importOeeConfigurationsFromJson

Imports OEE Configuration records from JSON format data into the system.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.importOeeConfigurationsFromJson(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                              |
| --------- | -------- |----------| ---------------------------------------- |
| `bytes`   | `byte[]` | True     | The JSON data as a byte array to import. |

## Returns

An `ApiResponse` object indicating success or failure. On success, the `data` attribute contains the count of imported records.

## Code Examples

```python
import system.file

# Path to the JSON file
file_path = "C:/path/to/oee_configurations.json"

try:
    # Read the file content as bytes
    json_bytes = system.file.readFileAsBytes(file_path)

    # Import the configurations
    result = system.mes.oee.importOeeConfigurationsFromJson(json_bytes)

    if result.get('success'):
        print "Successfully imported {} OEE configurations.".format(result.get('data'))
    else:
        print "Import failed: {}".format(result.get('message'))

except Exception as e:
    print "An error occurred: {}".format(str(e))
```
