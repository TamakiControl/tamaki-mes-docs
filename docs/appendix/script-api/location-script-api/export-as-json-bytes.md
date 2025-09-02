---
sidebar_position: 34
title: "exportAsJsonBytes"
description: "Exports all locations as raw bytes in JSON format (UTF-8 encoded)"
---

# system.mes.location.exportAsJsonBytes

## Description

Exports all [Locations](../../data-model/location-model/location) as raw bytes in JSON format
(UTF-8 encoded). Streams location data from the database and formats it as JSON, including a
header row.

## Syntax

```python
system.mes.location.exportAsJsonBytes()
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
|-----------|------|----------|---------------------------------------------|
| None      | -    | -        | This function does not take any parameters. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the JSON export.

## Code Examples

### Perspective
```python
jsonBytes = system.mes.location.exportAsJsonBytes()
system.perspective.download("locations.json", jsonBytes)
```