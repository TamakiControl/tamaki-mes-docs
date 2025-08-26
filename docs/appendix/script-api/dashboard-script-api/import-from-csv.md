---
sidebar_position: 35
title: "importFromCsv"
description: "Imports dashboard widgets from a CSV file provided as raw bytes."
---

# system.mes.dashboard.importFromCsv

## Description

Imports Dashboard Widgets from a CSV file provided as raw bytes. The service parses the CSV content and creates or
updates widgets and their metadata accordingly.

## Syntax

```python
system.mes.dashboard.importFromCsv(importBytes)
```

## Parameters

| Parameter     | Type      | Nullable | Description                        |
|---------------|-----------|----------|------------------------------------|
| `importBytes` | `PyArray` | False    | The CSV file content as raw bytes. |

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
    csvBytes = event.file.getBytes()
    response = system.mes.dashboard.importFromCsv(csvBytes)
    print(response)
```
