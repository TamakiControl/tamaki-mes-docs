---
sidebar_position: 57
title: "getAllMaterialReasonCodes"
description: "Retrieves all material reason codes."
---

# system.mes.material.getAllMaterialReasonCodes

## Description

Retrieves a list of all [Material Reason Codes](../../data-model/material-model/material-reason-code) records in the system.

## Syntax

```python
system.mes.material.getAllMaterialReasonCodes()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of JSON objects representing all material reason codes.

## Code Examples

```python
# Retrieve all materials
all_material_reason_codes = system.mes.material.getAllMaterialReasonCodes()

# Output the list of materials
print(all_material_reason_codes)
```
