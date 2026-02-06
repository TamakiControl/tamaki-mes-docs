---
title: exportOeeStatesToCsv
description: Export OEE state configurations to CSV.
sidebar_position: 89
---

# system.mes.oee.exportOeeStatesToCsv

## Description

Exports OEE State configs to CSV format. You can export all states or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportOeeStatesToCsv(locationIdOrPaths)
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                 |
| ------------------- | ---------- |----------| ------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | False    | (Optional) Array of location IDs or paths to export. If omitted, exports all state configs. |

## Returns

Returns a byte array containing the CSV data of the exported OEE states. If `locationIdOrPaths` is provided, only states for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE states
csvBytes = system.mes.oee.exportOeeStatesToCsv()
system.perspective.download("oee_states.csv", csvBytes)

# Export states for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeStatesToCsv(locationPaths)
system.perspective.download("oee_states_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all OEE states
csvBytes = system.mes.oee.exportOeeStatesToCsv()
path = system.file.saveFile("oee_states.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export states for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeStatesToCsv(locationPaths)
pathFiltered = system.file.saveFile("oee_states_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
