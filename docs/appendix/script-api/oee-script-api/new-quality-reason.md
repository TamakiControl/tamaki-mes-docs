---
sidebar_position: 35
title: 'newQualityReason'
description: 'Generates a new, empty quality reason object.'
---

# system.mes.oee.newQualityReason

## Description

Generates an empty, non-persisted Quality Reason object. This object provides the structure required to save a new
quality reason record using [`system.mes.oee.saveQualityReason`](./save-quality-reason).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newQualityReason()
```

## Parameters

This method does not take any parameters.

## Returns

A JSON representation of an `OeeQualityReasonDTO` object with default values, ready to be populated and saved.

| Name           | Type      | Nullable | Description                                                                 | Default Value |
|----------------|-----------|----------|-----------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Quality Reason                                                | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this quality reason applies     | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this quality reason applies           | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent quality reason, if applicable                      | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this quality reason                       | `0`           |
| `name`         | `String`  | `False`  | Name of the quality reason                                                  | `null`        |
| `description`  | `String`  | `True`   | Description of the quality reason                                           | `null`        |
| `path`         | `String`  | `True`   | Path representation of the quality reason within a hierarchical structure   | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Quality Reason                                    | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Quality Reason is enabled                             | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                               | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                               | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                               | `null`        |

## Code Examples

```python
# Create a new quality reason object
newReason = system.mes.oee.newQualityReason()

# Now you can set properties on the new_reason object
newReason['locationId'] = 'some-location-id'
newReason['name'] = 'Bad Packaging'

# To persist the reason, pass it to the saveQualityReason function
# savedReason = system.mes.oee.saveQualityReason(**newReason)
```

