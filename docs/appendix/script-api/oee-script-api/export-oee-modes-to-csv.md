---
title: exportOeeModesToCsv
description: Export OEE mode configurations to CSV format.
sidebar_position: 20
---

# system.mes.oee.exportOeeModesToCsv

## Description

Exports OEE Mode configs to CSV format. You can export all modes or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportOeeModesToCsv([locationIdOrPaths])
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                        |
| ------------------- | ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | True     | (Optional) Array of location IDs or paths to export. If omitted or null, exports all mode configs. |

## Returns

Returns a byte array containing the CSV data of the exported OEE modes. If `locationIdOrPaths` is provided, only modes for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE modes
csvBytes = system.mes.oee.exportOeeModesToCsv()
system.perspective.download("oee_modes.csv", csvBytes)

# Export modes for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeModesToCsv(locationPaths)
system.perspective.download("oee_modes_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all OEE modes
csvBytes = system.mes.oee.exportOeeModesToCsv()
path = system.file.saveFile("oee_modes.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export modes for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeModesToCsv(locationPaths)
pathFiltered = system.file.saveFile("oee_modes_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
