---
sidebar_position: 3
title: "production_order_customers"
description: "Documentation for the production_order_customers table, detailing columns and constraints in the database schema."
---

# Production Order Customer

## Overview

The `ProductionOrderCustomer` entity stores information about customers associated with production orders, including
contact information, address, and other relevant details. This table facilitates customer management and communication
within the production order workflow.

## Table Structure

The following table outlines the SQL columns for the `production_order_customers` table, providing a brief description of
each, along with sample data where applicable.

| Column                  | Type               | Description                                                                                                      | Example                             |
|-------------------------|--------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                    | `String` (ULID)    | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`               | `Boolean`          | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`          | `DateTime`         | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`            | `String`           | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`         | `DateTime`         | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`           | `String`           | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                 | `String`           | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                | `String`           | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`                | `String`           | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`                | `String`           | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `name`                  | `String`           | Unique name of the customer.                                                                                     | `Dairy Co.`                         |
| `description`           | `String`           | Optional description of the customer.                                                                            | `Major dairy supplier`              |
| `address`               | `String` (max 200) | Customer's physical address.                                                                                     | `123 Milk Rd.`                      |
| `city`                  | `String` (max 100) | City where the customer is located.                                                                              | `Dairyville`                        |
| `state`                 | `String` (max 100) | State or region where the customer is located.                                                                   | `ID`                                |
| `country`               | `String` (max 100) | Country of the customer.                                                                                         | `USA`                               |
| `zip`                   | `String`           | Zip code of the customer's address.                                                                              | `83701`                             |
| `primary_contact`       | `String` (max 100) | Name of the primary contact person.                                                                              | `John Doe`                          |
| `primary_contact_email` | `String`           | Email address of the primary contact.                                                                            | `john.doe@dairyco.com`              |
| `primary_contact_phone` | `String`           | Phone number of the primary contact.                                                                             | `+1-800-555-1234`                   |
| `alt_contact`           | `String` (max 100) | Name of the alternate contact person.                                                                            | `Jane Smith`                        |
| `alt_contact_email`     | `String`           | Email address of the alternate contact.                                                                          | `jane.smith@dairyco.com`            |
| `alt_contact_phone`     | `String`           | Phone number of the alternate contact.                                                                           | `+1-800-555-5678`                   |

## Field Details

### `name`

The `name` field is a descriptive identifier for the customer.

### `description`

An optional field that provides a detailed description of the customer.

### `address`, `city`, `state`, `country`, `zip`

These columns hold the physical location of the customer.

### `primary_contact`, `primary_contact_email`, `primary_contact_phone`

These columns hold the information to reach the primary contact.

### `alt_contact`, `alt_contact_email`, `alt_contact_phone`

These columns hold the information to reach the alternative contact.
