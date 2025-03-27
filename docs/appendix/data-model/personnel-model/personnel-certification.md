---
sidebar_position: 5
title: "personnel_certifications"
description: "Documentation for the personnel_certifications table, outlining its columns and structure."
---

# Personnel Certification

## Overview

The `PersonnelCertification` entity represents specific certifications held by personnel within the organization. Each
certification includes a name and a description, which provides context on the purpose or requirements of the
certification.

## Table Structure

The following table outlines the SQL columns for the `personnel_certifications` table, providing a brief description of
each, along with sample data where applicable.

| Column        | Type                | Description                                                      | Example                                                        |
| ------------- | ------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`          | `String` (ULID)     | Unique identifier for the certification.                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                                 |
| `name`        | `String`            | Name of the certification. Must be unique.                       | `Forklift Operator`                                            |
| `description` | `String` (max 2048) | Detailed description of the certification requirements or scope. | `Certified to operate forklifts in the warehouse environment.` |

## Field Details

### `name`

The `name` field provides a concise identifier for the certification, such as "Forklift Operator" or "Safety Training."
This field must be unique within the table, ensuring each certification is distinct.

### `description`

An optional field that offers additional details about the certification, such as requirements, training content, or
context. This description can be up to 2048 characters long, providing ample space for details that may help clarify the
certification’s relevance or scope within the organization.
