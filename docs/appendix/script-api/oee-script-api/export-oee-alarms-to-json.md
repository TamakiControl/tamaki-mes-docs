---
sidebar_position: 26
title: "exportOeeAlarmsToJson"
description: "Exports OEE alarm configurations as JSON."
---

# system.mes.oee.exportOeeAlarmsToJson

## Description

**No Parameter:**

Exports all [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations as raw JSON bytes (UTF-8 encoded). Streams alarm configuration data from the database and formats it as JSON.

**With a Parameter:**

Exports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations for specific locations as raw JSON bytes (UTF-8 encoded). Streams alarm configuration data from the database and formats it as JSON.

## Syntax

```python
system.mes.oee.exportOeeAlarmsToJson()
system.mes.oee.exportOeeAlarmsToJson(locationIdOrPaths)
```

## Parameters

**No Parameter:**

| Parameter | Type | Nullable | Description                                 |
| --------- | ---- | -------- | ------------------------------------------- |
| None      | -    | -        | This function does not take any parameters. |

**With a Parameter:**

| Parameter           | Type     | Nullable | Description                                                                                             |
| ------------------- | -------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `PyList` | True     | List of location ids or paths used to determine which associated OEE alarm configurations will be exported. |

## Returns

A byte array (byte[]) containing the raw JSON export data.

## Code Examples

### Export All Alarms

```python
# Perspective
jsonBytes = system.mes.oee.exportOeeAlarmsToJson()
system.perspective.download("oee_alarms.json", jsonBytes)

# Script Console
jsonBytes = system.mes.oee.exportOeeAlarmsToJson()
path = system.file.saveFile("oee_alarms.json")
if path is not None:
    system.file.writeFile(path, jsonBytes)
```

### Export Alarms for Specific Locations

```python
# Export alarms for specific locations
locationPaths = ['DairyCo/Plant1/Line1', 'DairyCo/Plant1/Line2']
jsonBytes = system.mes.oee.exportOeeAlarmsToJson(locationPaths)
system.perspective.download("oee_alarms_filtered.json", jsonBytes)
```


