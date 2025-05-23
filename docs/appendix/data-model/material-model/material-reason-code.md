---
sidebar_position: 5
title: "material_reason_codes"
description: "Documentation for the material_reason_codes table, outlining its columns and structure."
---

# Material Reason Code

## Overview

The `MaterialReasonCode` entity represents standardized codes used for categorizing specific reasons associated with
material handling activities, such as scrapping, merging, or consumption. These codes aid in providing consistent
documentation and tracking for various material-related processes, enabling better reporting and analysis.

## Table Structure

The following table outlines the SQL columns for the `material_reason_codes` table, providing a brief description of
each, along with sample data where applicable.

| Column             | Type            | Description                                                                                                      | Example                                  |
|--------------------|-----------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------|
| `id`               | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`           |
| `enabled`          | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                                   |
| `created_date`     | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`                   |
| `created_by`       | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                              |
| `modified_date`    | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`                   |
| `modified_by`      | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                              |
| `notes`            | `Blob`          | Notes about the entity.                                                                                          | `This entity has these extra notes`      |
| `spare1`           | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`                   |
| `spare2`           | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`                   |
| `spare3`           | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`                   |
| `lot_record_type`  | `String` (Enum) | Describes the action that was taken on a lot, as defined by the **LotRecordType** enum.                          | `CONSUME`                                |
| `reason_code`      | `String`        | Unique code identifying the reason for material handling.                                                        | `SCRP001`                                |
| `description`      | `String`        | Detailed description of the reason for the material activity.                                                    | `Material scrapped due to contamination` |
| `require_comments` | `Boolean`       | Indicates whether additional comments are required when using this reason code.                                  | `true`                                   |

## Field Details

### `lot_record_type`

Defines the action that was taken on a lot, specified by the **LotRecordType** enum, which includes options such as
`CONSUME`, `PRODUCE`, `MOVE`, `SPLIT`, `MERGE`, `SCRAP`, `STATUS_CHANGE`, `EDIT`, `RECEIVE`, and `SHIP`. This helps categorize material actions.

### `reason_code`

A unique code that identifies the reason associated with the material handling process. This code enables standardized
reference for common reasons across operations.

### `description`

An optional field that provides a detailed description of the reason code’s purpose or application, allowing users to
add more context to the selected reason.

### `require_comments`

Specifies if additional comments are required when selecting this reason code, which helps in capturing additional
context or justification during the material handling process.
