---
sidebar_position: 33
title: "exportWidgetsAsJson"
description: "Exports dashboard widgets as raw bytes in JSON format (UTF-8 encoded)."
---

# system.mes.dashboard.exportWidgetsAsJson

## Description

Exports dashboard widgets as raw bytes in JSON format (UTF-8 encoded). Use the no-argument form to export all widgets,
or pass a list of widget IDs or names to export only those selected widgets.


## Permissions

This method requires the `DASHBOARD.READ.GET` permission.

## Syntax

```python
system.mes.dashboard.exportWidgetsAsJson()
system.mes.dashboard.exportWidgetsAsJson(idsOrNames)
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

A Byte array (Byte[]) containing the raw JSON bytes of the exported widgets.

## Code Examples

### Perspective: Export All Widgets

```python
jsonBytes = system.mes.dashboard.exportWidgetsAsJson()
system.perspective.download("widgets.json", jsonBytes)
```

### Perspective: Export Selected Widgets by Name

```python
jsonBytes = system.mes.dashboard.exportWidgetsAsJson(["Time Series", "Summary"])
system.perspective.download("widgets.json", jsonBytes)
```
