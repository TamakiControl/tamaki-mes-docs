---
sidebar_position: 28
title: "getLocationPropertyValueReferences"
description: "Retrieves a list of references to a location property value with the given ID."
---

# system.mes.location.getLocationPropertyValueReferences

## Description

Retrieves a list of references to a [Location Property Values](../../data-model/location-model/location-property-value) by its ID.

## Syntax

```python
system.mes.location.getLocationPropertyValueReferences(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                                          |
|-----------|----------|----------|------------------------------------------------------|
| `id`      | `String` | False    | The ULID of the location property value to retrieve. |

## Returns

Returns a list of JSON objects. Each JSON object has the following properties:

| Name         | Type                | Description                                                                      |
| ------------ | ------------------- | -------------------------------------------------------------------------------- |
| `tableName`  | `String`            | The name of the table that the reference is in.                                  |
| `references` | `List<JSON Object>` | List of JSON objects corresponding to references to the location property value. |

The JSON Objects in references has the following properties:

| Name        | Type            | Description                                                             |
| ----------- | --------------- | ----------------------------------------------------------------------- |
| `fkColName` | `String`        | The name of the foreign key column.                                     |
| `id`        | `String` (ULID) | The ULID of the object that is referencing the location property value. |

## Code Examples

```python
# Retrieve the references for the location property value specified
propertyValueReferences = system.mes.location.getLocationPropertyValueReferences('01JJ7AFN0V-ZZS5XSAR-05CGEXBW')

# Output the location property value references
print(propertyValueReferences)
```
