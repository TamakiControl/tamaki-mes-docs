---
title: exportOeeModesToJson
description: Export OEE mode configurations to JSON format.
sidebar_position: 19
---

# system.mes.oee.exportOeeModesToJson

## Description

Exports OEE Mode configs to JSON format. You can export all modes or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportOeeModesToJson([locationIdOrPaths])
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                        |
| ------------------- | ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | True     | (Optional) Array of location IDs or paths to export. If omitted or null, exports all mode configs. |

## Returns

Returns a byte array containing the JSON data of the exported OEE modes. If `locationIdOrPaths` is provided, only modes for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE modes
jsonBytes = system.mes.oee.exportOeeModesToJson()
system.perspective.download("oee_modes.json", jsonBytes)

# Export modes for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeModesToJson(locationPaths)
system.perspective.download("oee_modes_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all OEE modes
jsonBytes = system.mes.oee.exportOeeModesToJson()
path = system.file.saveFile("oee_modes.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export modes for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeModesToJson(locationPaths)
pathFiltered = system.file.saveFile("oee_modes_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```
