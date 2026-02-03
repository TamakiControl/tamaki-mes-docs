---
sidebar_position: 9
title: 'exportOeeConfigurationsToJson'
description: 'Exports OEE configurations to JSON format.'
---

# system.mes.oee.exportOeeConfigurationsToJson

## Description

Exports OEE Configuration records to JSON format. You can export all configurations or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all OEE configurations
system.mes.oee.exportOeeConfigurationsToJson()

# Export configurations for specific locations (filtering)
system.mes.oee.exportOeeConfigurationsToJson(locationIdOrPaths)
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                  |
| ------------------- | ---------- |----------| -------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `String[]` | False    | (Optional) Array of location IDs or paths to export. If omitted, exports all configurations. |

## Returns

Returns a byte array containing the JSON data of the exported OEE configurations. If `locationIdOrPaths` is provided, only configurations for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE configurations
jsonBytes = system.mes.oee.exportOeeConfigurationsToJson()
system.perspective.download("oee_configurations.json", jsonBytes)

# Export configurations for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeConfigurationsToJson(locationPaths)
system.perspective.download("oee_configurations_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all OEE configurations
jsonBytes = system.mes.oee.exportOeeConfigurationsToJson()
path = system.file.saveFile("oee_configurations.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export configurations for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeConfigurationsToJson(locationPaths)
pathFiltered = system.file.saveFile("oee_configurations_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```
