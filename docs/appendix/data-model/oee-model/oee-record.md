---
sidebar_position: 3
title: "oee_records"
description: "Documentation for the oee_records table, outlining its columns and structure."
---

# OEE Record

## Overview

TODO: Add overview description of OEE Record entity

## Table Structure

The following table outlines the SQL columns for the `oee_records` table, providing a brief description of each, along
with sample data where applicable.

| Column                                    | Type                | Description                                                                                                                                   | Example                                                                                                        |
|-------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `id`                                      | `String` (ULID)     | Unique identifier for the entity.                                                                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                                                                                 |
| `enabled`                                 | `Boolean`           | If the entity is enabled or not.                                                                                                              | `true`                                                                                                         |
| `created_date`                            | `DateTime`          | Date the entity was created.                                                                                                                  | `2024-12-31T19:48:44Z`                                                                                         |
| `created_by`                              | `String`            | Person who created the entity.                                                                                                                | `TamakiMES`                                                                                                    |
| `modified_date`                           | `DateTime`          | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                  | `2024-12-31T19:48:44Z`                                                                                         |
| `modified_by`                             | `String`            | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                              | `TamakiMES`                                                                                                    |
| `notes`                                   | `Blob`              | Notes about the entity.                                                                                                                       | `This entity has these extra notes`                                                                            |
| `spare1`                                  | `String`            | The first spare column that can be used for additional context on the entity.                                                                 | `some extra context 1`                                                                                         |
| `spare2`                                  | `String`            | The second spare column that can be used for additional context on the entity.                                                                | `some extra context 2`                                                                                         |
| `spare3`                                  | `String`            | The third spare column that can be used for additional context on the entity.                                                                 | `some extra context 3`                                                                                         |
TODO: add more rows to match the actual table structure

## Field Details

TODO: Add field-specific details
