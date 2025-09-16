---
sidebar_position: 26
title: "exportAsJson"
description: "Exports materials as raw JSON bytes (UTF-8 encoded)"
---

# system.mes.material.exportAsJson

## Description

**No Parameter:**

Exports all [Materials](../../data-model/material-model/material) and
[Material Classes](../../data-model/material-model/material-class) as raw JSON bytes (UTF-8 encoded).
Streams material data from the database and formats it as JSON, including a header row.

**With a Parameter:**

Exports selected [Materials](../../data-model/material-model/material) and
[Material Classes](../../data-model/material-model/material-class) by ids or paths as raw JSON bytes (UTF-8 encoded).
Streams material data from the database and formats it as JSON, including a header row.

## Syntax

```python
system.mes.material.exportAsJson()
system.mes.material.exportAsJson(idsOrPaths)
```

## Parameters

**No Parameter:**

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

**With a Parameter:**

| Parameter    | Type     | Nullable | Description                                   |
| ------------ | -------- | -------- | --------------------------------------------- |
| `idsOrPaths` | `PyList` | True     | List of material ids or paths to export only. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective

```python
jsonBytes = system.mes.material.exportAsJson()
system.perspective.download("materials.json", jsonBytes)
```

### Script Console

```python
jsonBytes = system.mes.material.exportAsJson()
path = system.file.saveFile("materials.json")
if path is not None:
	system.file.writeFile(path, jsonBytes)
```
