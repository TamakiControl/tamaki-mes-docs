---
sidebar_position: 2
title: "utilities_document_data"
description: "Documentation for the utilities_document_data table, outlining its columns and structure."
---

# Document Data

## Overview

The `DocumentData` entity represents the data of documents within the database. The table contains the actual data
of the documents, the status and version of the file and the document_id that links it to a **Documents** entity
that contains the metadata of the document.

## Table Structure

The following table outlines the SQL columns for the `utilities_document_data` table, providing a brief description of each,
along with sample data where applicable.

| Column           | Type            | Description                                                                                      | Example                              |
|------------------|-----------------|--------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`             | `String` (ULID) | Unique identifier for the entity.                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`        | `Boolean`       | If the entity is enabled or not.                                                                 | `true`                               |
| `created_date`   | `DateTime`      | Date the entity was created.                                                                     | `2024-12-31T19:48:44Z`               |
| `created_by`     | `String`        | Person who created the entity.                                                                   | `TamakiMES`                          |
| `modified_date`  | `DateTime`      | Date the entity was created.                                                                     | `2024-12-31T19:48:44Z`               |
| `modified_by`    | `String`        | Last person to modify the entity.                                                                | `TamakiMES`                          |
| `notes`          | `Blob`          | Notes about the entity.                                                                          | `This entity has these extra notes`  |
| `spare1`         | `String`        | The first spare column that can be used for additional context on the entity.                    | `some extra context 1`               |
| `spare2`         | `String`        | The second spare column that can be used for additional context on the entity.                   | `some extra context 2`               |
| `spare3`         | `String`        | The third spare column that can be used for additional context on the entity.                    | `some extra context 3`               |
| `data`           | `Blob`          | Stores the data of the uploaded document (binary large object).                                  | `Binary data`                        |
| `status`         | `String`        | The status of the uploaded document, as defined by the **DocumentStatus** enum.                  | `ACTIVE`                             |
| `version`        | `Integer`       | Version of the uploaded Document. Must be greater than 0.                                        | `1`                                  |
| `document_id`    | `String` (ULID) | References a document. See [utilities_documents](../../utility-models/document-model/documents). | `01JAP8RJBN-9WTGQRQW-Y3XCRTXF`       |

## Field Details

### `data`

Stores the data of the uploaded document as a binary large object.

### `status`

Defines the status of the document, based on the **DocumentStatus** enum, which includes options 
such as `ACTIVE`, `RETIRED`, `UNDER_REVIEW`, `TRIAL`, `DRAFT` and `REJECTED`.

### `version`

The `version` field provides a version number to the uploaded document to permit tracking changes
and updates to files.

### `document_id`

References a `Document` entity that contains the metadata for the uploaded document.
See [utilities_documents](../../utility-models/document-model/documents) for details.