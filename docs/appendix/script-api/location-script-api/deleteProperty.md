---
sidebar_position: 8
title: "deleteProperty"
description: "Deletes a specified location property."
---

# deleteProperty

Deletes a specified location property by its ID. An option to force deletion is available if the property is still in
use.

## Method Description

This function deletes a location property based on the provided ID or name. If the property is still in use, setting the
`force` parameter to `True` allows it to be removed. If the property is referenced by other objects and `force` is not
set, an `InUseException` will be thrown.

## Throws

- **InUseException**: If the property is still referenced by other objects and `force` is not set to `True`.

## Parameters

| Parameter  | Type    | Description                                                                                           |
|------------|---------|-------------------------------------------------------------------------------------------------------|
| `idOrName` | String  | The ULID or name of the property to be deleted.                                                       |
| `force`    | Boolean | Optional. Set to `True` to forcefully delete the property and all of it's references if it is in use. |

## Example Usage

```python
system.mes.location.deleteProperty("Temperature", force=force)
```