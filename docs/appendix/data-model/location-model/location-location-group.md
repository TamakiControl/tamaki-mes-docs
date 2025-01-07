---
sidebar_position: 4
title: "location_location_groups"
description: "Documentation for the location_location_groups join table, connecting Location and LocationGroup entities."
---

# Location-Location Groups

## Overview

The `location_location_groups` table is a join table that establishes a many-to-many relationship between `Location` and
`LocationGroup` entities. This structure enables locations to be organized into various groups, which can be used for
categorization, reporting, and managing subsets of locations within the manufacturing environment.

## Table Structure

The following table outlines the SQL columns for the `location_location_groups` table, providing a brief description of
each.

| Column              | Type            | Description                                                                                                                | Example                        |
|---------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| `location_group_id` | `String` (ULID) | References the `LocationGroup` this entry is associated with. See [location_groups](../location-model/location-group).     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `location_id`       | `String` (ULID) | References the specific `Location` within the group. See [locations](../location-model/location).                          | `01JAP8R5RT-3FPXQABY-7KQZT6VF` |

## Field Details

### `location_group_id`

This column references the `LocationGroup` entity that the location belongs to, allowing for flexible grouping of
locations based on shared attributes or functionality. 
See [location_groups](../location-model/location-group) for details.

### `location_id`

This column references the `Location` entity within the group, linking individual locations to their associated groups.
See [locations](../location-model/location) for details.

## Relationship Structure

Each entry in the `location_location_groups` table associates one `Location` with one `LocationGroup`, enabling a
many-to-many relationship. This allows:

- Multiple `Location` entities to be grouped under one or more `LocationGroups`.
- Each `LocationGroup` to contain multiple `Location` entries, facilitating flexible grouping and management.