---
sidebar_position: 31
title: 'newDowntimeReason'
description: 'Generates a new, empty downtime reason object.'
---

# system.mes.oee.newDowntimeReason

Generates an empty, non-persisted Downtime Reason object. This object provides the structure required to save a new downtime reason record using [`system.mes.oee.saveDowntimeReason`](./save-downtime-reason).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newDowntimeReason()
```

## Parameters

This method does not take any parameters.

## Returns

An `OeeDowntimeReasonDTO` object with default values, ready to be populated and saved.

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
# Create a new downtime reason object
new_reason = system.mes.oee.newDowntimeReason()

# Now you can set properties on the new_reason object
new_reason['locationId'] = 'some-location-id'
new_reason['name'] = 'Mechanical Jam'
new_reason['path'] = 'Mechanical/Jam'

# To persist the reason, pass it to the saveDowntimeReason function
# saved_reason = system.mes.oee.saveDowntimeReason(**new_reason)
```
