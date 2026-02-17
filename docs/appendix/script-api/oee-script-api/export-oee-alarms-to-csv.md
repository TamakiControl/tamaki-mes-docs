---
sidebar_position: 93
title: "exportOeeAlarmsToCsv"
description: "Exports OEE alarm configurations as CSV."
---

# system.mes.oee.exportOeeAlarmsToCsv

## Description

Exports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations to CSV format. You can export all alarms or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all OEE alarms
system.mes.oee.exportOeeAlarmsToCsv()

# Export alarms for specific locations (filtering)
system.mes.oee.exportOeeAlarmsToCsv(locationIdOrPaths)
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                        |
| ------------------- | ---------- |----------|----------------------------------------------------------------------------------------------------|
| `locationIdOrPaths` | `String[]` | False    | (Optional) Array of location IDs or paths to export. If omitted, exports all alarm configurations. |

## Returns

A byte array (byte[]) containing the raw CSV export data.

## Code Examples

### Perspective

```python
# Export all OEE alarms
csvBytes = system.mes.oee.exportOeeAlarmsToCsv()
system.perspective.download("oee_alarms.csv", csvBytes)

# Export alarms for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeAlarmsToCsv(locationPaths)
system.perspective.download("oee_alarms_filtered.csv", csvBytesFiltered)
```

### Script Console

```python
# Export all OEE alarms
csvBytes = system.mes.oee.exportOeeAlarmsToCsv()
path = system.file.saveFile("oee_alarms.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)

# Export alarms for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
csvBytesFiltered = system.mes.oee.exportOeeAlarmsToCsv(locationPaths)
pathFiltered = system.file.saveFile("oee_alarms_filtered.csv")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, csvBytesFiltered)
```
