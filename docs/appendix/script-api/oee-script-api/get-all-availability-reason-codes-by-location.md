---
sidebar_position: 21
title: 'getAllAvailabilityReasonCodesByLocation'
description: 'Retrieves all availability reason codes for a specific location as a flat list.'
---

# system.mes.oee.getAllAvailabilityReasonCodesByLocation

## Description

Retrieves all OEE Availability Reasons configured for a specific location as a flat list, regardless of their
hierarchical structure.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllAvailabilityReasonCodesByLocation(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing `OeeAvailabilityReasonDTO` objects.

Each object has the following properties:

| Name           | Type      | Nullable | Description                                                                    | Default Value |
|----------------|-----------|----------|--------------------------------------------------------------------------------|---------------|
| `id`           | `String`  | `True`   | The id of the Availability Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this availability reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this availability reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent availability reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this availability reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the availability reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the availability reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the availability reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Availability Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Availability Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                                  | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                                  | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                                  | `null`        |

## Code Examples

```python
# Get all availability reason codes for a specific location
location = "Site/Area/Line 1"
reasons = system.mes.oee.getAllAvailabilityReasonCodesByLocation(location)

for reason in reasons:
    print "Code: %d, Name: %s, Path: %s" % (reason['code'], reason['name'], reason['path'])
```
