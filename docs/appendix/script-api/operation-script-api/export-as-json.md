---
sidebar_position: 26
title: "exportAsJson"
description: "Exports all operations as a JSON string (UTF-8 encoded)"
---

# system.mes.operation.exportAsJson

## Description

Exports all [Operations](../../data-model/operation-model/operation) as a JSON string (UTF-8 encoded).
Streams operation data from the database and formats it as a JSON string, including a header row.

## Syntax

```python
system.mes.operation.exportAsJson()
```

## Parameters

No parameters.

## Returns

All operations as a JSON string (UTF-8 encoded).

## Code Examples

### Perspective
```python
jsonString = system.mes.operation.exportAsJson()
system.perspective.download("operations.json", jsonBytes)
```

### Script Console
```python
jsonString = system.mes.operation.exportAsJson()
path = system.file.saveFile("operations.json")
if path is not None:
	system.file.writeFile(path, jsonString)
```

