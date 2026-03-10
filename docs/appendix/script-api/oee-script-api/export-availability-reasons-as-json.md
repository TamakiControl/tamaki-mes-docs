---
title: exportAvailabilityReasonsAsJson
description: 'Exports OEE Availability Reasons to a JSON file.'
sidebar_position: 90
---

# system.mes.oee.exportAvailabilityReasonsAsJson

## Description

Exports OEE Availability Reasons to a JSON file.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all availability reasons
system.mes.oee.exportAvailabilityReasonsAsJson()

# Export specific availability reasons
system.mes.oee.exportAvailabilityReasonsAsJson(idsOrPaths)
```

## Parameters

| Parameter    | Type       | Nullable | Description                                                                                                             |
| ------------ |------------|----------| ----------------------------------------------------------------------------------------------------------------------- |
| `idsOrPaths` | `String[]` | False    | (Optional) A list of IDs or paths of the OEE Availability Reasons to export. If omitted, all availability reasons are exported. |

## Returns
Returns a byte array containing the JSON data of the exported availability reasons. If `idsOrPaths` is provided, only reasons for those ids or paths are included.

## Code Examples

### Perspective

```python
# Export all availability reasons
jsonBytes = system.mes.oee.exportAvailabilityReasonsAsJson()
system.perspective.download("availability_reasons.json", jsonBytes)

# Export specific availability reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
jsonBytesFiltered = system.mes.oee.exportAvailabilityReasonsAsJson(reasonPaths)
system.perspective.download("availability_reasons_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all availability reasons
jsonBytes = system.mes.oee.exportAvailabilityReasonsAsJson()
path = system.file.saveFile("availability_reasons.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export specific availability reasons
reasonPaths = ["Electrical/Sensors", "Electrical/Wiring"]
jsonBytesFiltered = system.mes.oee.exportAvailabilityReasonsAsJson(reasonPaths)
pathFiltered = system.file.saveFile("availability_reasons_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```
