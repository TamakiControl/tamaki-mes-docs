---
sidebar_position: 3
title: "production_order_customers"
description: "Documentation for the production_order_customers table, detailing columns and constraints in the database schema."
---

# Production Order Customers Table

## Overview

The `production_order_customers` table stores information about customers associated with production orders, including
contact information, address, and other relevant details. This table facilitates customer management and communication
within the production order workflow.

## Table Structure

| Column                  | Type           | Description                                      | Example                  |
|-------------------------|----------------|--------------------------------------------------|--------------------------|
| `id`                    | `varchar(255)` | Primary key, unique identifier for the customer. | `01FZ8P9BJN-4VYZUKE1`    |
| `address`               | `varchar(200)` | Customer's physical address.                     | `123 Milk Rd.`           |
| `alt_contact`           | `varchar(100)` | Name of the alternate contact person.            | `Jane Smith`             |
| `alt_contact_email`     | `varchar(255)` | Email address of the alternate contact.          | `jane.smith@dairyco.com` |
| `alt_contact_phone`     | `varchar(255)` | Phone number of the alternate contact.           | `+1-800-555-5678`        |
| `city`                  | `varchar(100)` | City where the customer is located.              | `Dairyville`             |
| `country`               | `varchar(100)` | Country of the customer.                         | `USA`                    |
| `description`           | `varchar(255)` | Optional description of the customer.            | `Major dairy supplier`   |
| `name`                  | `varchar(255)` | Unique name of the customer.                     | `Dairy Co.`              |
| `primary_contact`       | `varchar(100)` | Name of the primary contact person.              | `John Doe`               |
| `primary_contact_email` | `varchar(255)` | Email address of the primary contact.            | `john.doe@dairyco.com`   |
| `primary_contact_phone` | `varchar(255)` | Phone number of the primary contact.             | `+1-800-555-1234`        |
| `state`                 | `varchar(100)` | State or region where the customer is located.   | `ID`                     |
| `zip`                   | `varchar(255)` | Zip code of the customer's address.              | `83701`                  |

## Constraints

- **Primary Key**: `id` - Uniquely identifies each customer.
- **Unique Key**: `name` - Ensures that each customer name is unique within the system.

---

The `production_order_customers` table provides a structured repository for customer information, supporting effective
customer management and communication within TamakiMES.