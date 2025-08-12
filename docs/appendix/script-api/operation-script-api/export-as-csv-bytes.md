---
sidebar_position: 27
title: "exportAsCsvBytes"
description: "Exports all operations as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.operation.exportAsCsvBytes

## Description

Exports all [Operations](../../data-model/operation-model/operation) as raw bytes in CSV format 
(UTF-8 encoded). Streams operation data from the database and formats it as CSV, including a 
header row.

## Syntax

```python
system.mes.operation.exportAsCsvBytes()
system.mes.operation.exportAsCsvBytes(locationIdOrPaths)
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

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.operation.exportAsCsvBytes()
system.perspective.download("operations.csv", csvBytes)
```
