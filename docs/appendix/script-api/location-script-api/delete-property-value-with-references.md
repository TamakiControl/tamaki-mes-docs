---
sidebar_position: 32
title: "deletePropertyValueWithReferences"
description: "Deletes the location property value with the given ID and any immediate references to this property if possible."
---

# system.mes.location.deletePropertyValueWithReferences

## Description

Deletes a [Location Property Values](../../data-model/location-model/location-property-value) record by its ID.
Also deletes immediate references to this location if possible.

## Syntax
```python
system.mes.location.deletePropertyValueWithReferences(id)
```

## Parameters

| Parameter  | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| `id`       | `String` | The ID of the location property value to delete. |

## Returns

If successful, no response is returned.

## Code Examples

```python
# Delete a location property value by ID
system.mes.location.deletePropertyValueWithReferences('01JJ7AFN0V-ZZS5XSAR-05CGEXBW')
```