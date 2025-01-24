---
sidebar_position: 31
title: "deletePropertyValue"
description: "Deletes a specified location property value with the given ID."
---

# system.mes.location.deletePropertyValue

## Description

Deletes a [Location Property Values](../../data-model/location-model/location-property-value) record by its ID.
This cannot delete a location property value with references to it.

## Syntax
```python
system.mes.location.deletePropertyValue(id)
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
system.mes.location.deletePropertyValue('01JJ7AFN0V-ZZS5XSAR-05CGEXBW')
```