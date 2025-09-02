---
sidebar_position: 29
title: "exportMaterialsAsJsonBytes"
description: "Exports all materials as raw bytes in JSON format (UTF-8 encoded)"
---

# system.mes.material.exportMaterialsAsJsonBytes

## Description

Exports all [Materials](../../data-model/material-model/material) as raw bytes in JSON format
(UTF-8 encoded). Streams material data from the database and formats it as JSON, including a
header row.

## Syntax

```python
system.mes.material.exportMaterialsAsJsonBytes()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective
```python
jsonBytes = system.mes.material.exportMaterialsAsJsonBytes()
system.perspective.download("materials.json", jsonBytes)
```
