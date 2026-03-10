---
title: exportAvailabilityReasonsAsCsv
sidebar_position: 91
---

## system.mes.oee.exportAvailabilityReasonsAsCsv

## Description

Exports OEE Availability Reasons to a CSV file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all availability reasons
system.mes.oee.exportAvailabilityReasonsAsCsv()

# Export specific availability reasons
system.mes.oee.exportAvailabilityReasonsAsCsv(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                             |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Availability Reasons to export. If omitted, all availability reasons are exported. |

## Returns
Returns a byte array containing the CSV data of the exported availability reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all availability reasons
csvBytes = system.mes.oee.exportAvailabilityReasonsAsCsv()
system.perspective.download("availability_reasons.csv", csvBytes)

# Export specific availability reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
csvBytesFiltered = system.mes.oee.exportAvailabilityReasonsAsCsv(reasonPaths)
system.perspective.download("availability_reasons_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all availability reasons
csvBytes = system.mes.oee.exportAvailabilityReasonsAsCsv()
path = system.file.saveFile("availability_reasons.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export specific availability reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
csvBytesFiltered = system.mes.oee.exportAvailabilityReasonsAsCsv(reasonPaths)
pathFiltered = system.file.saveFile("availability_reasons_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
