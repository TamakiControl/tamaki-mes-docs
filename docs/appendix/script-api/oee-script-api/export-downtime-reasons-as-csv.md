---
title: exportDowntimeReasonsAsCsv
sidebar_position: 42
---

## system.mes.oee.exportDowntimeReasonsAsCsv

Exports OEE Downtime Reasons to a CSV file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all downtime reasons
system.mes.oee.exportDowntimeReasonsAsCsv()

# Export specific downtime reasons
system.mes.oee.exportDowntimeReasonsAsCsv(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                             |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Downtime Reasons to export. If omitted, all downtime reasons are exported. |

## Returns
Returns a byte array containing the CSV data of the exported downtime reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all downtime reasons
csvBytes = system.mes.oee.exportDowntimeReasonsAsCsv()
system.perspective.download("downtime_reasons.csv", csvBytes)

# Export specific downtime reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
csvBytesFiltered = system.mes.oee.exportDowntimeReasonsAsCsv(reasonPaths)
system.perspective.download("downtime_reasons_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all downtime reasons
csvBytes = system.mes.oee.exportDowntimeReasonsAsCsv()
path = system.file.saveFile("downtime_reasons.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export specific downtime reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
csvBytesFiltered = system.mes.oee.exportDowntimeReasonsAsCsv(reasonPaths)
pathFiltered = system.file.saveFile("downtime_reasons_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
