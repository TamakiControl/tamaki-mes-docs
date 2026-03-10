---
title: exportPerformanceReasonsAsCsv
description: 'Exports OEE Performance Reasons to a CSV file.'
sidebar_position: 97
---

# system.mes.oee.exportPerformanceReasonsAsCsv

## Description

Exports OEE Performance Reasons to a CSV file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all performance reasons
system.mes.oee.exportPerformanceReasonsAsCsv()

# Export specific performance reasons
system.mes.oee.exportPerformanceReasonsAsCsv(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                              |
| ------------ |------------|----------| ------------------------------------------------------------------------------------------------------------------------ |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Performance Reasons to export. If omitted, all performance reasons are exported. |

## Returns

Returns a byte array containing the CSV data of the exported performance reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all performance reasons
csvBytes = system.mes.oee.exportPerformanceReasonsAsCsv()
system.perspective.download("performance_reasons.csv", csvBytes)

# Export specific performance reasons
reasonPaths = ["SpeedLoss/MinorStoppage", "SpeedLoss/ReducedSpeed"]
csvBytesFiltered = system.mes.oee.exportPerformanceReasonsAsCsv(reasonPaths)
system.perspective.download("performance_reasons_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all performance reasons
csvBytes = system.mes.oee.exportPerformanceReasonsAsCsv()
path = system.file.saveFile("performance_reasons.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export specific performance reasons
reasonPaths = ["SpeedLoss/MinorStoppage", "SpeedLoss/ReducedSpeed"]
csvBytesFiltered = system.mes.oee.exportPerformanceReasonsAsCsv(reasonPaths)
pathFiltered = system.file.saveFile("performance_reasons_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```

