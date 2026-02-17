---
sidebar_position: 4
title: "oee_downtime_reasons"
description: "Documentation for the oee_downtime_reasons table, outlining its columns and structure."
---

# OEE Downtime Reason

## Overview

The `OeeDowntimeReason` entity represents the reason for downtime at a [Location](../location-model/location.md).
The entity contains properties including the parent location for the downtime reason, a fault lookup code for the reason,
a description of the downtime reason, and a hierarchical path for the downtime reason.

## Table Structure

The following table outlines the SQL columns for the `oee_downtime_reasons` table, providing a brief description of each.

| Column          | Type            | Description                                                                                                      | Example                             |
|-----------------|-----------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`            | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`       | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`  | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`    | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date` | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`   | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`         | `String`        | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`        | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`        | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`        | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `location_id`   | `String` (ULID) | References the parent location for the downtime reason. See [Location](../location-model/location).              | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `parent_id`     | `String` (ULID) | References the parent downtime reason for the property. Retrieves another Oee Downtime Reason entity.            | `02K4M9QY3F-7XW8A2ZL-QM9D6B1P`      |
| `code`          | `Integer`       | Fault code of the downtime reason. Business key to look up a particular reason.                                  | `100`                               |
| `name`          | `String`        | Name of the downtime reason.                                                                                     | `Electrical`                        |
| `description`   | `String`        | Description of the reason. Any additional instructions to the operator.                                          | `Additional notes`                  |
| `path`          | `String`        | Path of the reason code in a tree to make it easier to query.                                                    | `Electrical/Power Supply/No Power`  |

## Field Details

### `location_id`

References the parent location for the downtime reason.
See [Location](../location-model/location) for details. 

### `parent_id`

References the parent downtime reason for the downtime reason. For example if the downtime reason is `No Power` the 
parent reason may be `Power Supply`. If the downtime reason is `Power Supply` the parent reason might be `Electrical`.
The id is used to retrieve another Oee Downtime Reason entity.

### `code`

Fault code of the downtime reason. Business key to look up a particular reason.

### `name`

Name of the downtime reason. Name must be less than 255 characters.

### `description`

Description of the reason. Any additional instructions to the operator. 

### `path`

Path of the reason code in a tree to make it easier to query. The path contains the names of the downtime reason, the 
parent reason, the parent of the parent reason, etc. For example if the downtime reason name is `No Power` then the path
may be `Electrical/Power Supply/No Power`.