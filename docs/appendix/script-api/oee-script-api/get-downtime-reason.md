---
sidebar_position: 32
title: 'getDowntimeReason'
description: 'Retrieves an OEE downtime reason by its ID.'
---

# system.mes.oee.getDowntimeReason

Retrieves an OEE Downtime Reason by its unique identifier.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                  |
| --------- | --------------- | -------- | -------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the downtime reason to retrieve. |

## Returns

Returns a JSON representation of an `OeeDowntimeReasonDTO` object if found, or `None` if the downtime reason doesn't exist.

| Name           | Type      | Nullable | Description                                                                | Default Value |
| -------------- | --------- | -------- | -------------------------------------------------------------------------- | ------------- |
| `id`           | `String`  | `True`   | The id of the Downtime Reason                                              | `null`        |
| `locationId`   | `String`  | `True`   | Identifier of the associated location where this downtime reason applies   | `null`        |
| `locationPath` | `String`  | `True`   | Path of the associated location where this downtime reason applies         | `null`        |
| `parentId`     | `String`  | `True`   | Identifier of the parent downtime reason, if applicable                    | `null`        |
| `code`         | `Integer` | `False`  | Unique fault code associated with this downtime reason                     | `0`           |
| `name`         | `String`  | `False`  | Name of the downtime reason                                                | `null`        |
| `description`  | `String`  | `True`   | Description of the downtime reason                                         | `null`        |
| `path`         | `String`  | `True`   | Path representation of the downtime reason within a hierarchical structure | `null`        |
| `notes`        | `String`  | `True`   | Notes associated with the Downtime Reason                                  | `null`        |
| `enabled`      | `boolean` | `True`   | Indicates whether the Downtime Reason is enabled                           | `true`        |
| `spare1`       | `String`  | `True`   | Extra field 1                                                              | `null`        |
| `spare2`       | `String`  | `True`   | Extra field 2                                                              | `null`        |
| `spare3`       | `String`  | `True`   | Extra field 3                                                              | `null`        |

## Code Examples

```python
# Get a specific downtime reason
reason_id = "01JCH3ENEB-SV2X8B3W-NFY8WZNK"
reason = system.mes.oee.getDowntimeReason(reason_id)

if reason:
    print reason['name'], reason['code']
else:
    print "Downtime reason not found"
```
