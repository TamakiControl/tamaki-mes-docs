---
title: exportPerformanceReasonsAsJson
description: 'Exports OEE Performance Reasons to a JSON file.'
sidebar_position: 96
---

# system.mes.oee.exportPerformanceReasonsAsJson

## Description

Exports OEE Performance Reasons to a JSON file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all performance reasons
system.mes.oee.exportPerformanceReasonsAsJson()

# Export specific performance reasons
system.mes.oee.exportPerformanceReasonsAsJson(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                              |
| ------------ |------------|----------| ------------------------------------------------------------------------------------------------------------------------ |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Performance Reasons to export. If omitted, all performance reasons are exported. |

## Returns

Returns a byte array containing the JSON data of the exported performance reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all performance reasons
jsonBytes = system.mes.oee.exportPerformanceReasonsAsJson()
system.perspective.download("performance_reasons.json", jsonBytes)

# Export specific performance reasons
reasonPaths = ["SpeedLoss/MinorStoppage", "SpeedLoss/ReducedSpeed"]
jsonBytesFiltered = system.mes.oee.exportPerformanceReasonsAsJson(reasonPaths)
system.perspective.download("performance_reasons_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all performance reasons
jsonBytes = system.mes.oee.exportPerformanceReasonsAsJson()
path = system.file.saveFile("performance_reasons.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export specific performance reasons
reasonPaths = ["SpeedLoss/MinorStoppage", "SpeedLoss/ReducedSpeed"]
jsonBytesFiltered = system.mes.oee.exportPerformanceReasonsAsJson(reasonPaths)
pathFiltered = system.file.saveFile("performance_reasons_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```

