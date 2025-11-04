---
title: exportOeeStatesToJson
description: Export OEE state configurations to JSON format with comprehensive metadata and integration options.
sidebar_position: 29
---

# system.mes.oee.exportOeeStatesToJson

## Description

Exports OEE State configs to JSON format. You can export all states or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.exportOeeStatesToJson([locationIdOrPaths])
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                         |
| ------------------- | ---------- | -------- | --------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | True     | (Optional) Array of location IDs or paths to export. If omitted or null, exports all state configs. |

## Returns

Returns a byte array containing the JSON data of the exported OEE states. If `locationIdOrPaths` is provided, only states for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE states
jsonBytes = system.mes.oee.exportOeeStatesToJson()
system.perspective.download("oee_states.json", jsonBytes)

# Export states for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeStatesToJson(locationPaths)
system.perspective.download("oee_states_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all OEE states
jsonBytes = system.mes.oee.exportOeeStatesToJson()
path = system.file.saveFile("oee_states.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export states for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeStatesToJson(locationPaths)
pathFiltered = system.file.saveFile("oee_states_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```
