---
sidebar_position: 51
title: "deletePropertyValuesWithReferences"
description: "Deletes all material property values with the given IDs and any immediate references to this property value if possible."
---

# system.mes.material.deletePropertyValuesWithReferences

## Description

Deletes all [Material Property Values](../../data-model/material-model/material-property-value) records by the given IDs.
Also deletes immediate references to any material property value if possible.

## Syntax

```python
system.mes.material.deletePropertyValuesWithReferences(ids)
```

## Parameters

| Parameter | Type                  | Description                                            |
| --------- | --------------------- | ------------------------------------------------------ |
| `ids`     | `List<String>` (ULID) | List of IDs of the material property values to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete all material property values by the given IDs
system.mes.material.deletePropertyValuesWithReferences(['01JRDP4APW-5D56ZQ8C-8949XKYT','01JRE81R3T-YEV59020-VHK88GPN'])
```
