---
sidebar_position: 31
title: "exportAsCsv"
description: "Exports all locations as a CSV string (UTF-8 encoded)"
---

# system.mes.location.exportAsCsv

## Description

Exports all [Locations](../../data-model/location-model/location) as a CSV string (UTF-8 encoded).
Streams location data from the database and formats it as a CSV string, including a header row.

## Syntax

```python
system.mes.location.exportAsCsv()
```

## Parameters

No parameters.

## Returns

All locations as a CSV string (UTF-8 encoded).

## Code Examples

### Perspective
```python
csvString = system.mes.location.exportAsCsv()
system.perspective.download("locations.csv", csvBytes)
```

### Script Console
```python
csvString = system.mes.location.exportAsCsv()
path = system.file.saveFile("locations.csv")
if path is not None:
	system.file.writeFile(path, csvString)
```