---
sidebar_position: 25
title: "exportAsCsv"
description: "Exports materials as raw CSV bytes (UTF-8 encoded)"
---

# system.mes.material.exportAsCsv

## Description

**No Parameter:**

Exports all [Materials](../../data-model/material-model/material) and 
[Material Classes](../../data-model/material-model/material-class) as raw CSV bytes (UTF-8 encoded).
Streams material data from the database and formats it as CSV, including a header row.

**With a Parameter:**

Exports selected [Materials](../../data-model/material-model/material) and 
[Material Classes](../../data-model/material-model/material-class) by ids or paths as raw CSV bytes (UTF-8 encoded).
Streams material data from the database and formats it as CSV, including a header row.

## Syntax

```python
system.mes.material.exportAsCsv()
system.mes.material.exportAsCsv(idsOrPaths)
```

## Parameters

**No Parameter:**

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

**With a Parameter:**

| Parameter   | Type        | Nullable | Description                                               |
|-------------|-------------|----------|-----------------------------------------------------------|
| `idsOrPaths`| `PyList`    | True     | Optional list of material ids or paths to export only.    |

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.material.exportAsCsv()
system.perspective.download("materials.csv", csvBytes)
```

### Script Console
```python
csvBytes = system.mes.material.exportAsCsv()
path = system.file.saveFile("materials.csv")
if path is not None:
	system.file.writeFile(path, csvBytes)
```
