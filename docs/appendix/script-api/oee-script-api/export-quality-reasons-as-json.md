---
title: exportQualityReasonsAsJson
description: 'Exports OEE Quality Reasons to a JSON file.'
sidebar_position: 94
---

# system.mes.oee.exportQualityReasonsAsJson

## Description

Exports OEE Quality Reasons to a JSON file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all quality reasons
system.mes.oee.exportQualityReasonsAsJson()

# Export specific quality reasons
system.mes.oee.exportQualityReasonsAsJson(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                       |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Quality Reasons to export. If omitted, all quality reasons are exported. |

## Returns

Returns a byte array containing the JSON data of the exported quality reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all quality reasons
jsonBytes = system.mes.oee.exportQualityReasonsAsJson()
system.perspective.download("quality_reasons.json", jsonBytes)

# Export specific quality reasons
reasonPaths = ["Packaging/Seal", "Packaging/Label"]
jsonBytesFiltered = system.mes.oee.exportQualityReasonsAsJson(reasonPaths)
system.perspective.download("quality_reasons_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all quality reasons
jsonBytes = system.mes.oee.exportQualityReasonsAsJson()
path = system.file.saveFile("quality_reasons.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export specific quality reasons
reasonPaths = ["Packaging/Seal", "Packaging/Label"]
jsonBytesFiltered = system.mes.oee.exportQualityReasonsAsJson(reasonPaths)
pathFiltered = system.file.saveFile("quality_reasons_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```

