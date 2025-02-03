---
sidebar_position: 30
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

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the property value that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|---------- |-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a location property value by ID
system.mes.location.deletePropertyValue('01JJ7AFN0V-ZZS5XSAR-05CGEXBW')
```