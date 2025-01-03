---
sidebar_position: 8
title: "material_suppliers"
description: "Documentation for the material_suppliers table, outlining its columns and structure."
---

# Material Suppliers

## Overview

The `MaterialSuppliers` entity represents the suppliers or vendors responsible for providing raw materials, components, or goods. 
This entity facilitates tracking supplier information, ensuring consistency in procurement processes, and supporting effective supply chain management.

## Table Structure

The following table outlines the SQL columns for the `material_suppliers` table, providing a brief description of
each, along with sample data where applicable.

| Column                     | Type               | Description                                                                                     | Example                                  |
|----------------------------|--------------------|-------------------------------------------------------------------------------------------------|------------------------------------------|
| `id`                       | `String` (ULID)    | Unique identifier for the entity.                                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`           |
| `enabled`                  | `Boolean`          | If the entity is enabled or not.                                                                | `true`                                   |
| `created_date`             | `DateTime`         | Date the entity was created.                                                                    | `2024-12-31T19:48:44Z`                   |
| `created_by`               | `String`           | Person who created the entity.                                                                  | `TamakiMES`                              |
| `modified_date`            | `DateTime`         | Date the entity was created.                                                                    | `2024-12-31T19:48:44Z`                   |
| `modified_by`              | `String`           | Last person to modify the entity.                                                               | `TamakiMES`                              |
| `notes`                    | `Blob`             | Notes about the entity.                                                                         | `This entity has these extra notes`      |
| `spare1`                   | `String`           | The first spare column that can be used for additional context on the entity.                   | `some extra context 1`                   |
| `spare2`                   | `String`           | The second spare column that can be used for additional context on the entity.                  | `some extra context 2`                   |
| `spare3`                   | `String`           | The third spare column that can be used for additional context on the entity.                   | `some extra context 3`                   |
| `name`                     | `String`           | The name of the supplier.                                                                       | `The Aluminum Company`                   |
| `description`              | `String` (max 500) | Detailed description of the supplier.                                                           | `Supplier for Aluminum`                  |
| `address`                  | `String` (max 200) | The address of the supplier.                                                                    | `205 Shoshone St N`                      |
| `city`                     | `String` (max 100) | The city of the supplier.                                                                       | `Twin Falls`                             |
| `state`                    | `String` (max 100) | The state of the supplier.                                                                      | `Idaho`                                  |
| `country`                  | `String` (max 100) | The country of the supplier.                                                                    | `USA`                                    |
| `zip`                      | `String`           | The zip code of the supplier.                                                                   | `83301`                                  |
| `primary_contact`          | `String` (max 100) | The primary contact's name.                                                                     | `John Smith`                             |
| `primary_contact_email`    | `String`           | The primary contact's email.                                                                    | `john.smith@gmail.com`                   |
| `primary_contact_phone`    | `String`           | The primary contact's phone number.                                                             | `1234567890`                             |
| `alt_contact`              | `String` (max 100) | The alternative contact's name.                                                                 | `Will Smith`                             |
| `alt_contact_email`        | `String`           | The alternative contact's email.                                                                | `Will.smith@gmail.com`                   |
| `alt_contact_phone`        | `String`           | The alternative contact's phone number.                                                         | `7891234560`                             |

## Field Details

### `name`

The `name` field is a descriptive identifier for the supplier.

### `description`

An optional field that provides a detailed description of the materials is supplied by the supplier.

### `address`, `city`, `state`, `country`, `zip`

These columns hold the physical location of the supplier.

### `primary_contact`, `primary_contact_email`, `primary_contact_phone`

These columns hold the information to reach the primary contact.

### `alt_contact`, `alt_contact_email`, `alt_contact_phone`

These columns hold the information to reach the alternative contact.