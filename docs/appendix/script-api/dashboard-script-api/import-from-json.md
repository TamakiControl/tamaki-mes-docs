---
sidebar_position: 36
title: "importFromJson"
description: "Imports dashboard widgets from a JSON file provided as raw bytes."
---

# system.mes.dashboard.importFromJson

## Description

Imports Dashboard Widgets from a JSON file provided as raw bytes. The service parses the JSON content and creates or
updates widgets and their metadata accordingly.

## Syntax

```python
system.mes.dashboard.importFromJson(bytes)
```

## Parameters

| Parameter | Type     | Nullable | Description                         |
|-----------|----------|----------|-------------------------------------|
| `bytes`   | `Byte[]` | False    | The JSON file content as raw bytes. |

## Returns

An ApiResponse object indicating success or failure of the import.

| Name      | Type      | Description                                       |
|-----------|-----------|---------------------------------------------------|
| `success` | `Boolean` | Indicates if the import was successful.           |
| `message` | `String`  | Details about the import outcome.                 |
| `data`    | `Integer` | The number of widgets imported (when successful). |
| `error`   | `String`  | Error details if the import failed.               |

## Code Examples

### Perspective File Upload (onFileReceived)

```python
def runAction(self, event):
    jsonBytes = event.file.getBytes()
    response = system.mes.dashboard.importFromJson(jsonBytes)
    print(response)
```
