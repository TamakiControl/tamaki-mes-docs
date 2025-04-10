---
sidebar_position: 47
title: "deletePropertyValueWithReferences"
description: "Deletes the material property value with the given ID and any immediate references to this property value if possible."
---

# system.mes.material.deletePropertyValueWithReferences

## Description

Deletes a [Material Property Values](../../data-model/material-model/material-property-value) record by its ID.
Also deletes immediate references to this material property value if possible.

## Syntax

```python
system.mes.material.deletePropertyValueWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                                            |
| --------- | --------------- | ------------------------------------------------------ |
| `id`      | `String` (ULID) | The ID of the material order property value to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a material property value by ID
system.mes.material.deletePropertyValueWithReferences('01JRDP4APW-5D56ZQ8C-8949XKYT')
```
