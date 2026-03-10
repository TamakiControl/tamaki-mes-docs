---
sidebar_position: 22
title: 'getAllAvailabilityReasonCodesByLocationHierarchical'
description: 'Retrieves all availability reason codes for a specific location, organized as a hierarchical tree structure.'
---

# system.mes.oee.getAllAvailabilityReasonCodesByLocationHierarchical

## Description

Retrieves all OEE Availability Reasons for a specific location, organized as a hierarchical tree structure. This method
returns availability reasons with their parent-child relationships intact, allowing for easy navigation of the reason
hierarchy.

## Permissions

This method requires `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAllAvailabilityReasonCodesByLocationHierarchical(locationIdOrPath)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                 |
|--------------------|----------|----------|-----------------------------------------------------------------------------|
| `locationIdOrPath` | `String` | True     | The ID or path of the location. If null, returns reasons for all locations. |

## Returns

A list of JSON objects representing root-level `OeeAvailabilityReasonHierarchicalDTO` objects, each containing nested
children.

| Name           | Type                                         | Nullable | Description                                                                                          | Default Value |
|----------------|----------------------------------------------|----------|------------------------------------------------------------------------------------------------------|---------------|
| `id`           | `String`                                     | `True`   | The id of the Availability Reason                                                                    | `null`        |
| `locationId`   | `String`                                     | `True`   | Identifier of the associated location (inherited from OeeAvailabilityReasonDTO)                      | `null`        |
| `locationPath` | `String`                                     | `True`   | Path of the associated location (inherited from OeeAvailabilityReasonDTO)                            | `null`        |
| `parentId`     | `String`                                     | `True`   | Identifier of the parent availability reason (inherited from OeeAvailabilityReasonDTO)               | `null`        |
| `code`         | `Integer`                                    | `False`  | Unique fault code associated with this availability reason (inherited from OeeAvailabilityReasonDTO) | `0`           |
| `name`         | `String`                                     | `False`  | Name of the availability reason (inherited from OeeAvailabilityReasonDTO)                            | `null`        |
| `description`  | `String`                                     | `True`   | Description of the availability reason (inherited from OeeAvailabilityReasonDTO)                     | `null`        |
| `path`         | `String`                                     | `True`   | Path representation of the availability reason (inherited from OeeAvailabilityReasonDTO)             | `null`        |
| `children`     | `List<OeeAvailabilityReasonHierarchicalDTO>` | `True`   | List of child availability reasons                                                                   | `null`        |
| `notes`        | `String`                                     | `True`   | Notes associated with the Availability Reason                                                        | `null`        |
| `enabled`      | `boolean`                                    | `True`   | Indicates whether the Availability Reason is enabled                                                 | `true`        |
| `spare1`       | `String`                                     | `True`   | Extra field                                                                                          | `null`        |
| `spare2`       | `String`                                     | `True`   | Extra field                                                                                          | `null`        |
| `spare3`       | `String`                                     | `True`   | Extra field                                                                                          | `null`        |

## Code Examples

```python
# Get hierarchical availability reasons for a specific location
location = "Site/Area/Line 1"
hierarchy = system.mes.oee.getAllAvailabilityReasonCodesByLocationHierarchical(location)

def print_hierarchy(reasons, indent=0):
    for reason in reasons:
        print "  " * indent + reason['name']
        if reason['children']:
            print_hierarchy(reason['children'], indent + 1)

print_hierarchy(hierarchy)
```
