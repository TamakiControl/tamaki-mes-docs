---
sidebar_position: 2
title: "utilities_documents"
description: "Documentation for the utilities_documents table, outlining its columns and structure."
---

# Documents

## Overview

The `Document` entity represents specific documents within the database. The table contains metadata on uploaded documents
such as the name, document type, latest version, and the unique path needed to reach the document in the database.

## Table Structure

The following table outlines the SQL columns for the `documents` table, providing a brief description of each,
along with sample data where applicable.

| Column           | Type              | Description                                                                                                      | Example                             |
|------------------|-------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`             | `String` (ULID)   | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`        | `Boolean`         | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`   | `DateTime`        | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`     | `String`          | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`  | `DateTime`        | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`    | `String`          | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`          | `Blob`            | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`         | `String`          | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`         | `String`          | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`         | `String`          | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `name`           | `String`          | Name of the uploaded document.                                                                                   | `Hours.word`                        |
| `document_type`  | `String`          | Type of the uploaded document.                                                                                   | `word`                              |
| `latest_version` | `Integer`         | Latest version of the uploaded Document. Must be greater than 0.                                                 | `2`                                 |
| `path`           | `String` (unique) | Unique path to the document inside the database.                                                                 | `/Documents/Hours.word`             |

## Field Details

### `name`

The `name` field provides a unique identifier for the document, used to distinguish it from documents.

### `document_type`

The `document_type` field provides a type associated with the uploaded document to prevent file corruption
when opening the file.

### `latest_version`

The `latest_version` field provides a version number to the newest version of the uploaded document to
permit tracking changes and updates to files.

### `path`

The unique `path` field allows the system to find the document within the database.
