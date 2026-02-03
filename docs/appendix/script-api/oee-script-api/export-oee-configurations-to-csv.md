---
sidebar_position: 10
title: 'exportOeeConfigurationsToCsv'
description: 'Exports OEE configurations to CSV format.'
---

# system.mes.oee.exportOeeConfigurationsToCsv

## Description

Exports OEE Configuration records to CSV format. You can export all configurations or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all OEE configurations
system.mes.oee.exportOeeConfigurationsToCsv()

# Export configurations for specific locations (filtering)
system.mes.oee.exportOeeConfigurationsToCsv(locationIdOrPaths)
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                  |
| ------------------- | ---------- |----------|----------------------------------------------------------------------------------------------|
| `locationIdOrPaths` | `String[]` | False    | (Optional) Array of location IDs or paths to export. If omitted, exports all configurations. |

## Returns

Returns a byte array containing the CSV data of the exported OEE configurations. If `locationIdOrPaths` is provided, only configurations for those locations are included.

## Code Examples

### Perspective

```python
# Export all OEE configurations
csvBytes = system.mes.oee.exportOeeConfigurationsToCsv()
system.perspective.download("oee_configurations.csv", csvBytes)

# Export configurations for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeConfigurationsToCsv(locationPaths)
system.perspective.download("oee_configurations_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all OEE configurations
csvBytes = system.mes.oee.exportOeeConfigurationsToCsv()
path = system.file.saveFile("oee_configurations.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export configurations for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeConfigurationsToCsv(locationPaths)
pathFiltered = system.file.saveFile("oee_configurations_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
