---
sidebar_position: 36
title: 'getQualityReason'
description: 'Retrieves an OEE quality reason by its ID.'
---

# system.mes.oee.getQualityReason

## Description

Retrieves an OEE Quality Reason by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getQualityReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
|-----------|-----------------|----------|----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the quality reason to retrieve.  |

## Returns

Returns a JSON representation of an `OeeQualityReasonDTO` object if found, or `None` if the quality reason
doesn't exist.

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
# Get a specific quality reason
reasonId = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"
reason = system.mes.oee.getQualityReason(reasonId)

if reason:
    print reason['name'], reason['code']
else:
    print "Quality reason not found"
```

