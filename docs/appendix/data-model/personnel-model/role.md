---
sidebar_position: 5
title: "roles"
description: "Documentation for the roles table, outlining its columns and structure."
---

# Role

## Overview

The `Role` entity represents a specific position, responsibility, or function that a person may hold within the 
organization. Roles are used to define access levels and permissions for personnel. Each role consists of a set of 
permissions and required security levels, which determine what actions a person assigned to that role can perform.
If role requirement is `ANY_OF` then a person only needs one of the specified security levels to gain all of the 
permissions associated with the role. If set to `ALL_OF` then a person must have all of the specified security 
levels to gain the permissions associated with the role.

## Table Structure

The following table outlines the SQL columns for the `roles` table, providing a brief description of each, along with 
sample data where applicable.

| Column               | Type                    | Description                                                                                                      | Example                |
|----------------------|-------------------------|------------------------------------------------------------------------------------------------------------------|------------------------|
| `id`                 | `String` (ULID)         | Unique identifier for the role.                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1` |
| `enabled`            | `Boolean`               | If the entity is enabled or not.                                                                                 | `true`                 |
| `created_date`       | `DateTime`              | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z` |
| `created_by`         | `String`                | Person who created the entity.                                                                                   | `TamakiMES`            |
| `modified_date`      | `DateTime`              | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z` |
| `modified_by`        | `String`                | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`            |
| `notes`              | `String`                | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`             | `String`                | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1` |
| `spare2`             | `String`                | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2` |
| `spare3`             | `String`                | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3` |
| `security_levels`    | `String` (CSV)          | Comma-separated list of Ignition security levels required for this role.                                         | `Authenticated/Roles/Administrator,SecurityZones/Warehouse` |
| `permissions`        | `String` (CSV)          | Comma-separated list of MES permissions granted by this role.                                                    | `MATERIALS.WRITE,INVENTORY.READ`   |
| `role_requirement_type` | `Enum`                | Specifies if all or any security levels are required to grant permissions. See below.                            | `ALL_REQUIRED`         |

## Field Details

### `security_levels`

Comma-separated list of Ignition security levels required for this role. Example: `Authenticated/Roles/Administrator,SecurityZones/Warehouse`.
Security levels are hierarchical, so specifying a higher-level security level will also satisfy requirements for any 
lower-level security levels. For example, if a role requires `Certification/Warehouse/Operation`, a user with
`Certification/Warehouse` will also satisfy that requirement.

### `permissions`

Comma-separated list of MES permissions granted by this role. Example: `MATERIALS.WRITE,INVENTORY.READ`.
Permissions are hierarchical, so if a user is granted a higher-level permission, they will also have access to any
lower-level permissions. For example, if a user has permission for `INVENTORY.WRITE`, they will also have permission for
MATERIALS.WRITE.CONSUME`.

### `role_requirement_type`

Specifies if all security levels are required (`ALL_OF`) or if at least one is sufficient (`ANY_OF`) to grant the permissions. This uses the `RoleRequirementType` enum.

**RoleRequirementType enum values:**
- `ALL_OF`: All listed security levels are required.
- `ANY_OF`: At least one listed security level is required.

---
