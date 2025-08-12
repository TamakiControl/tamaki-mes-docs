---
sidebar_position: 29
title: "exportAsJsonBytes"
description: "Exports all operations as raw bytes in JSON format (UTF-8 encoded)"
---

# system.mes.operation.exportAsJsonBytes

## Description

Exports all [Operations](../../data-model/operation-model/operation) as raw bytes in JSON format
(UTF-8 encoded). Streams operation data from the database and formats it as JSON, including a
header row.

## Syntax

```python
system.mes.operation.exportAsJsonBytes()
system.mes.operation.exportAsJsonBytes(locationIdOrPaths)
```

## Parameters

### Method 1: Export all operations

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

### Method 2: Export operations for specific locations

| Parameter           | Type       | Nullable | Description                                                 |
|---------------------|------------|----------|-------------------------------------------------------------|
| `locationIdOrPaths` | `String[]` | False    | The IDs or paths of the locations to export operations for. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective
```python
jsonBytes = system.mes.operation.exportAsJsonBytes()
system.perspective.download("operations.json", jsonBytes)
```
