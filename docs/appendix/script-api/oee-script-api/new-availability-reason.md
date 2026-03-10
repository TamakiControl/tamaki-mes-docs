---
sidebar_position: 19
title: 'newAvailabilityReason'
description: 'Generates a new, empty availability reason object.'
---

# system.mes.oee.newAvailabilityReason

## Description

Generates an empty, non-persisted Availability Reason object. This object provides the structure required to save a new availability reason record using [`system.mes.oee.saveAvailabilityReason`](./save-availability-reason).

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.oee.newAvailabilityReason()
```

## Parameters

This method does not take any parameters.

## Returns

A JSON representation of an `OeeAvailabilityReasonDTO` object with default values, ready to be populated and saved.

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
# Create a new availability reason object
newReason = system.mes.oee.newAvailabilityReason()

# Now you can set properties on the new_reason object
newReason['locationId'] = 'some-location-id'
newReason['name'] = 'Mechanical Jam'
newReason['path'] = 'Mechanical/Jam'

# To persist the reason, pass it to the saveAvailabilityReason function
# savedReason = system.mes.oee.saveAvailabilityReason(**newReason)
```
