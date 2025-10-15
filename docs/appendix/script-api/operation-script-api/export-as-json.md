---
sidebar_position: 26
title: 'exportAsJson'
description: 'Exports all operations as a JSON string (UTF-8 encoded)'
---

# system.mes.operation.exportAsJson

## Description

Exports all [Operations](../../data-model/operation-model/operation) as raw bytes in JSON format
(UTF-8 encoded). Streams operation data from the database and formats it as JSON, including a
header row.

## Permissions

This method requires the `OPERATION.READ.GET` permission.

## Syntax

```python
system.mes.operation.exportAsJson()
system.mes.operation.exportAsJson(locationIdOrPaths)
```

## Parameters

### Method 1: Export all operations

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

### Method 2: Export operations for specific locations

| Parameter           | Type       | Nullable | Description                                                 |
| ------------------- | ---------- | -------- | ----------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | False    | The IDs or paths of the locations to export operations for. |

## Returns

All operations as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective

```python
jsonBytes = system.mes.operation.exportAsJsonBytes()
system.perspective.download("operations.json", jsonBytes)
```

### Script Console

```python
jsonBytes = system.mes.operation.exportAsJson()
path = system.file.saveFile("operations.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```
