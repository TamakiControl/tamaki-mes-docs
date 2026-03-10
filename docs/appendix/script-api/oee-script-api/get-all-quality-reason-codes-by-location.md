---
sidebar_position: 37
title: 'getAllQualityReasonCodesByLocation'
description: 'Retrieves all quality reason codes for a specific location as a flat list.'
---

# system.mes.oee.getAllQualityReasonCodesByLocation

## Description

Retrieves all OEE Quality Reasons configured for a specific location as a flat list, regardless of their
hierarchical structure.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllQualityReasonCodesByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing `OeeQualityReasonDTO` objects.

Each object has the following properties:

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
# Get all quality reason codes for a specific location
location = "Site/Area/Line 1"
reasons = system.mes.oee.getAllQualityReasonCodesByLocation(location)

for reason in reasons:
    print "Code: %d, Name: %s, Path: %s" % (reason['code'], reason['name'], reason['path'])
```

