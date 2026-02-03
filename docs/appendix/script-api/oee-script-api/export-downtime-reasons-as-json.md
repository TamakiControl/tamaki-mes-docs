---
title: exportDowntimeReasonsAsJson
description: 'Exports OEE Downtime Reasons to a JSON file.'
sidebar_position: 41
---

# system.mes.oee.exportDowntimeReasonsAsJson

Exports OEE Downtime Reasons to a JSON file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all downtime reasons
system.mes.oee.exportDowntimeReasonsAsJson()

# Export specific downtime reasons
system.mes.oee.exportDowntimeReasonsAsJson(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                             |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Downtime Reasons to export. If omitted, all downtime reasons are exported. |

## Returns
Returns a byte array containing the JSON data of the exported downtime reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all downtime reasons
jsonBytes = system.mes.oee.exportDowntimeReasonsAsJson()
system.perspective.download("downtime_reasons.json", jsonBytes)

# Export specific downtime reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
jsonBytesFiltered = system.mes.oee.exportDowntimeReasonsAsJson(reasonPaths)
system.perspective.download("downtime_reasons_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all downtime reasons
jsonBytes = system.mes.oee.exportDowntimeReasonsAsJson()
path = system.file.saveFile("downtime_reasons.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export specific downtime reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
jsonBytesFiltered = system.mes.oee.exportDowntimeReasonsAsJson(reasonPaths)
pathFiltered = system.file.saveFile("downtime_reasons_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```
