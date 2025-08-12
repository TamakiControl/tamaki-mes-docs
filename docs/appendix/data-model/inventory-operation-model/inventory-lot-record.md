---
sidebar_position: 3
title: "inventory_lot_records"
description: "Documentation for the inventory_lot_records table, outlining its columns and structure."
---

# Inventory Lot Record

## Overview

The `InventoryLotRecord` entity represents an instance of an inventory operation that has been performed within the MES 
system. Key attributes include status, start and end dates, type, material, and associated operation and production
order details. These fields enable tracking of the execution and completion of specific operations, providing a record 
of when and where each inventory operation took place.

## Table Structure

The following table outlines the SQL columns for the `inventory_lot_records` table, providing a brief description of 
each, along with sample data where applicable.

| Column                     | Type            | Description                                                                                                                                   | Example                             |
|----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                       | `String` (ULID) | Unique identifier for the entity, inherited from the `BaseEntity`.                                                                            | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                  | `Boolean`       | Indicates whether the entity is enabled, inherited from the `BaseEntity`.                                                                     | `true`                              |
| `created_date`             | `DateTime`      | Date the entity was created, inherited from the `BaseEntity`.                                                                                 | `2024-12-31T19:48:44Z`              |
| `created_by`               | `String`        | Person who created the entity, inherited from the `BaseEntity`.                                                                               | `TamakiMES`                         |
| `modified_date`            | `DateTime`      | Date the entity was last modified, inherited from the `BaseEntity`.                                                                           | `2024-12-31T19:48:44Z`              |
| `modified_by`              | `String`        | Last person to modify the entity, inherited from the `BaseEntity`.                                                                            | `TamakiMES`                         |
| `lot_record_type`          | `String` (Enum) | Specifies the type of change for the record (e.g., `CONSUME`, `PRODUCE`, `SPLIT`, `MERGE`).                                                   | `CONSUME`                           |
| `inventory_lot_id`         | `String` (FK)   | References the primary `InventoryLot` for the record.                                                                                         | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `secondary_inventory_lot_id` | `String` (FK) | References the secondary `InventoryLot` for operations like split or merge.                                                                   | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `operation_record_id`      | `String` (FK)   | References the parent `OperationRecord` associated with this lot record.                                                                      | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `production_order_id`      | `String` (FK)   | References the associated `ProductionOrder`.                                                                                                  | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `material_reason_code_id`  | `String` (FK)   | References the `MaterialReasonCode` for additional context.                                                                                   | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |
| `source_location_id`       | `String` (FK)   | References the source `Location` of the lot/inventory being operated.                                                                         | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `destination_location_id`  | `String` (FK)   | References the destination `Location` of the lot/inventory being operated.                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `lot_status`               | `String` (Enum) | Represents the status of the lot (e.g., `ACTIVE`, `INACTIVE`, `SCRAPPED`).                                                                    | `ACTIVE`                            |
| `quantity`                 | `Double`        | Specifies the quantity of units produced, consumed, scrapped, etc.                                                                            | `100.0`                             |
| `start_date`               | `DateTime`      | Timestamp marking the beginning of the lot change.                                                                                            | `2024-05-10T08:00:00Z`              |
| `end_date`                 | `DateTime`      | Timestamp marking the end of the lot change.                                                                                                  | `2024-05-10T10:00:00Z`              |
| `status`                   | `String` (Enum) | Represents the status of the record (e.g., `RUNNING`, `COMPLETED`, `FAULTED`).                                                                | `COMPLETED`                         |
| `schedule_shift_record_id` | `String` (FK)   | References the `ScheduleShiftRecord` in which the inventory lot record occurred.                                                              | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |

## Field Details

### `lot_record_type`

Specifies the type of change for the record, as defined by the **LotRecordType** enum, with possible values:

- **CONSUME**: The lot is being consumed.
- **PRODUCE**: The lot is being produced.
- **SPLIT**: The lot is being split into multiple lots.
- **MERGE**: Multiple lots are being merged into one.

### `inventory_lot_id`

References the primary [InventoryLot](../inventory-model/inventory-lot.md) associated with the record. This is required for operations like consumption, production, split, or merge.

### `secondary_inventory_lot_id`

References the secondary [InventoryLot](../inventory-model/inventory-lot.md) used in operations like split or merge.

### `operation_record_id`

References the parent [OperationRecord](../operation-model/operation-record.md) associated with this lot record.

### `production_order_id`

References the associated [ProductionOrder](../production-order-model/production-order.md) for the inventory operation.

### `material_reason_code_id`

References the [MaterialReasonCode](../material-model/material-reason-code.md) providing additional context for the operation.

### `source_location_id`

References the source [Location](../location-model/location.md) of the lot or inventory being operated on.

### `destination_location_id`

References the destination [Location](../location-model/location.md) of the lot or inventory being operated on.

### `lot_status`

Represents the resulting status of the lot, as defined by the **LotStatus** enum, with possible values:

- **ACTIVE**: The lot is active and available for inventory operations.
- **INACTIVE**: The lot is inactive and not available for inventory operations.
- **SCRAPPED**: The lot has been scrapped.

### `quantity`

Specifies the quantity of units involved in the inventory operation (e.g., produced, consumed, scrapped).

### `start_date`

The timestamp marking the beginning of the Inventory change. Defaults to the record creation time.

### `end_date`

The timestamp marking the end of the Inventory change. A `null` value indicates the inventory operation is still ongoing.

### `status`

Represents the current status of the record, as defined by the **Status** enum, with possible values:

- **RUNNING**: The inventory operation is currently in progress.
- **COMPLETED**: The inventory operation has successfully completed.
- **FAULTED**: The inventory operation encountered an error.

### `schedule_shift_record_id`

References the ScheduleShiftRecord in which the inventory lot record occurred.

