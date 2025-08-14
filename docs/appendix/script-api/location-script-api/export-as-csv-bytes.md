---
sidebar_position: 32
title: "exportAsCsvBytes"
description: "Exports all locations as raw bytes in CSV format (UTF-8 encoded)"
---

# system.mes.location.exportAsCsvBytes

## Description

Exports all [Locations](../../data-model/location-model/location) as raw bytes in CSV format
(UTF-8 encoded). Streams location data from the database and formats it as CSV, including a
header row.

## Syntax

```python
system.mes.location.exportAsCsvBytes()
```

## Parameters

| Parameter | Type | Nullable | Description                                 |
|-----------|------|----------|---------------------------------------------|
| None      | -    | -        | This function does not take any parameters. |

## Returns

A Byte array (Byte[]) containing the raw byte data of the CSV export.

## Code Examples

### Perspective
```python
csvBytes = system.mes.location.exportAsCsvBytes()
system.perspective.download("locations.csv", csvBytes)
```