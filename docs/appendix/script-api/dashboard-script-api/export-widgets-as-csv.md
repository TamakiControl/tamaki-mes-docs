---
sidebar_position: 34
title: "exportWidgetsAsCsv"
description: "Exports dashboard widgets as raw bytes in CSV format (UTF-8 encoded)."
---

# system.mes.dashboard.exportWidgetsAsCsv

## Description

Exports dashboard widgets as raw bytes in CSV format (UTF-8 encoded). Use the no-argument form to export all widgets, or
pass a list of widget IDs or names to export only those selected widgets.

## Syntax

```python
system.mes.dashboard.exportWidgetsAsCsv()
system.mes.dashboard.exportWidgetsAsCsv(idsOrNames)
```

## Parameters

### Method 1: No Parameters (Export All Widgets)

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

### Method 2: Export Selected Widgets by ID or Name

| Parameter    | Type           | Nullable | Description                              |
|--------------|----------------|----------|------------------------------------------|
| `idsOrNames` | `List<String>` | False    | A list of widget IDs or names to export. |

## Returns

A Byte array (Byte[]) containing the raw CSV bytes of the exported widgets.

## Code Examples

### Perspective: Export All Widgets

```python
csvBytes = system.mes.dashboard.exportWidgetsAsCsv()
system.perspective.download("widgets.csv", csvBytes)
```

### Perspective: Export Selected Widgets by Name

```python
csvBytes = system.mes.dashboard.exportWidgetsAsCsv(["Time Series", "Summary"])
system.perspective.download("widgets.csv", csvBytes)
```
