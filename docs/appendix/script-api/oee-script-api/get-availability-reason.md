---
sidebar_position: 20
title: 'getAvailabilityReason'
description: 'Retrieves an OEE availability reason by its ID.'
---

# system.mes.oee.getAvailabilityReason

## Description

Retrieves an OEE Availability Reason by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAvailabilityReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
| --------- | --------------- | -------- | -------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the availability reason to retrieve. |

## Returns

Returns a JSON representation of an `OeeAvailabilityReasonDTO` object if found, or `None` if the availability reason doesn't exist.

| Name           | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
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
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## Code Examples

```python
# Get a specific availability reason
reasonId = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"
reason = system.mes.oee.getAvailabilityReason(reasonId)

if reason:
    print reason['name'], reason['code']
else:
    print "Availability reason not found"
```
