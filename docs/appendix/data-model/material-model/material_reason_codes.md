---
sidebar_position: 6
title: "material_reason_codes"
description: "Documentation for the material_reason_codes table, outlining its columns and structure."
---

# Material Reason Codes

## Overview

The `MaterialReasonCode` entity represents standardized codes used for categorizing specific reasons associated with
material handling activities, such as scrapping, merging, or consumption. These codes aid in providing consistent
documentation and tracking for various material-related processes, enabling better reporting and analysis.

## Table Structure

The following table outlines the SQL columns for the `material_reason_codes` table, providing a brief description of
each, along with sample data where applicable.

| Column            | Type               | Description                                                                                     | Example                                  |
|-------------------|--------------------|-------------------------------------------------------------------------------------------------|------------------------------------------|
| `id`              | `String` (ULID)    | Unique identifier for the reason code.                                                          | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`           |
| `lotRecordType`   | `Enum`             | Specifies the type of lot record this reason code applies to, such as `CONSUMPTION` or `SCRAP`. | `SCRAP`                                  |
| `reasonCode`      | `String`           | Unique code identifying the reason for material handling.                                       | `SCRP001`                                |
| `description`     | `String` (max 255) | Detailed description of the reason for the material activity.                                   | `Material scrapped due to contamination` |
| `requireComments` | `Boolean`          | Indicates whether additional comments are required when using this reason code.                 | `true`                                   |

## Field Details

### `lotRecordType`

Represents the specific type of lot record that this reason code pertains to, allowing categorization of codes based on
material handling activities, such as `CONSUMPTION`, `SCRAP`, or `MERGE`. This helps in identifying the context for each
reason code.

### `reasonCode`

A unique code that identifies the reason associated with the material handling process. This code enables standardized
reference for common reasons across operations.

### `description`

An optional field that provides a detailed description of the reason code’s purpose or application, allowing users to
add more context to the selected reason.

### `requireComments`

Specifies if additional comments are required when selecting this reason code, which helps in capturing additional
context or justification during the material handling process.