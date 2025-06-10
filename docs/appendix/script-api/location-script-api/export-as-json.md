---
sidebar_position: 33
title: "exportAsJson"
description: "Exports all locations as a JSON string (UTF-8 encoded)"
---

# system.mes.location.exportAsJson

## Description

Exports all [Locations](../../data-model/location-model/location) as a JSON string (UTF-8 encoded).
Streams location data from the database and formats it as a JSON string, including a header row.

## Syntax

```python
system.mes.location.exportAsJson()
```

## Parameters

No parameters.

## Returns

All locations as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective
```python
jsonString = system.mes.location.exportAsJson()
system.perspective.download("locations.json", jsonBytes)
```

### Script Console
```python
jsonString = system.mes.location.exportAsJson()
path = system.file.saveFile("locations.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```