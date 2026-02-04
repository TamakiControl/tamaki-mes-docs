---
sidebar_position: 26
title: "exportOeeAlarmsToJson"
description: "Exports OEE alarm configurations as JSON."
---

# system.mes.oee.exportOeeAlarmsToJson

## Description

Exports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations to JSON format. You can export all alarms or filter by specific locations using the optional `locationIdOrPaths` parameter.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
# Export all OEE alarms
system.mes.oee.exportOeeAlarmsToJson()

# Export alarms for specific locations (filtering)
system.mes.oee.exportOeeAlarmsToJson(locationIdOrPaths)
```

## Parameters

| Parameter           | Type       | Nullable | Description                                                                                        |
| ------------------- | ---------- |----------|----------------------------------------------------------------------------------------------------|
| `locationIdOrPaths` | `String[]` | False    | (Optional) Array of location IDs or paths to export. If omitted, exports all alarm configurations. |

## Returns

A byte array (byte[]) containing the raw JSON export data.

## Code Examples

### Perspective

```python
# Export all OEE alarms
jsonBytes = system.mes.oee.exportOeeAlarmsToJson()
system.perspective.download("oee_alarms.json", jsonBytes)

# Export alarms for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeAlarmsToJson(locationPaths)
system.perspective.download("oee_alarms_filtered.json", jsonBytesFiltered)
```

### Script Console

```python
# Export all OEE alarms
jsonBytes = system.mes.oee.exportOeeAlarmsToJson()
path = system.file.saveFile("oee_alarms.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)

# Export alarms for specific locations
locationPaths = ["Enterprise/Site/Area/Line1", "Enterprise/Site/Area/Line2"]
jsonBytesFiltered = system.mes.oee.exportOeeAlarmsToJson(locationPaths)
pathFiltered = system.file.saveFile("oee_alarms_filtered.json")
if pathFiltered is not None:
    system.file.writeFile(pathFiltered, jsonBytesFiltered)
```


