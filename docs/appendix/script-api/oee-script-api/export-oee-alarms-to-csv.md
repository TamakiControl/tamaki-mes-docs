---
sidebar_position: 15
title: "exportOeeAlarmsToCsv"
description: "Exports OEE alarm configurations as CSV."
---

# system.mes.oee.exportOeeAlarmsToCsv

## Description

**No Parameter:**

Exports all [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations as raw CSV bytes (UTF-8 encoded). Streams alarm configuration data from the database and formats it as CSV, including a header row.

**With a Parameter:**

Exports [OEE Alarm](../../data-model/oee-model/oee-alarm) configurations for specific locations as raw CSV bytes (UTF-8 encoded). Streams alarm configuration data from the database and formats it as CSV, including a header row.

## Syntax

```python
system.mes.oee.exportOeeAlarmsToCsv()
system.mes.oee.exportOeeAlarmsToCsv(locationIdOrPaths)
```

## Parameters

**No Parameter:**

| Parameter | Type | Nullable | Description                                 |
| --------- | ---- | -------- | ------------------------------------------- |
| None      | -    | -        | This function does not take any parameters. |

**With a Parameter:**

| Parameter           | Type     | Nullable | Description                                                                                                 |
| ------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| `locationIdOrPaths` | `PyList` | True     | List of location ids or paths used to determine which associated OEE alarm configurations will be exported. |

## Returns

A byte array (byte[]) containing the raw CSV export data.

## Code Examples

### Export All Alarms

```python
# Perspective
csvBytes = system.mes.oee.exportOeeAlarmsToCsv()
system.perspective.download("oee_alarms.csv", csvBytes)

# Script Console
csvBytes = system.mes.oee.exportOeeAlarmsToCsv()
path = system.file.saveFile("oee_alarms.csv")
if path is not None:
    system.file.writeFile(path, csvBytes)
```

### Export Alarms for Specific Locations

```python
# Export alarms for specific locations
locationPaths = ['DairyCo/Plant1/Line1', 'DairyCo/Plant1/Line2']
csvBytes = system.mes.oee.exportOeeAlarmsToCsv(locationPaths)
system.perspective.download("oee_alarms_filtered.csv", csvBytes)
```
