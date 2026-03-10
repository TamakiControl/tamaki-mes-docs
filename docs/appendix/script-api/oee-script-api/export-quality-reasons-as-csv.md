---
title: exportQualityReasonsAsCsv
sidebar_position: 95
---

## system.mes.oee.exportQualityReasonsAsCsv

## Description

Exports OEE Quality Reasons to a CSV file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all quality reasons
system.mes.oee.exportQualityReasonsAsCsv()

# Export specific quality reasons
system.mes.oee.exportQualityReasonsAsCsv(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                       |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Quality Reasons to export. If omitted, all quality reasons are exported. |

## Returns

Returns a byte array containing the CSV data of the exported quality reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all quality reasons
csvBytes = system.mes.oee.exportQualityReasonsAsCsv()
system.perspective.download("quality_reasons.csv", csvBytes)

# Export specific quality reasons
reasonPaths = ["Packaging/Seal", "Packaging/Label"]
csvBytesFiltered = system.mes.oee.exportQualityReasonsAsCsv(reasonPaths)
system.perspective.download("quality_reasons_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all quality reasons
csvBytes = system.mes.oee.exportQualityReasonsAsCsv()
path = system.file.saveFile("quality_reasons.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export specific quality reasons
reasonPaths = ["Packaging/Seal", "Packaging/Label"]
csvBytesFiltered = system.mes.oee.exportQualityReasonsAsCsv(reasonPaths)
pathFiltered = system.file.saveFile("quality_reasons_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```

