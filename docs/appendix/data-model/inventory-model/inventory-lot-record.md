---
sidebar_position: 3
title: "inventory_lot_records"
description: "Documentation for the inventory_lot_records table, outlining its columns and structure."
---

# Inventory Lot Record

## Overview

The `InventoryLotRecord` entity captures changes and actions related to specific inventory lots, including activities such
as consumption, production, and movement. Each record maintains details about the type of change, associated locations,
quantities, and timestamps, providing a comprehensive history of inventory flow.

## Table Structure

The following table outlines the SQL columns for the `inventory_lot_records` table, providing a brief description of
each, along with sample data where applicable.

| Column                       | Type            | Description                                                                                                                       | Example                              |
|------------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                  | `true`                               |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                      | `2024-12-31T19:48:44Z`               |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                    | `TamakiMES`                          |
| `modified_date`              | `DateTime`      | Date the entity was created.                                                                                                      | `2024-12-31T19:48:44Z`               |
| `modified_by`                | `String`        | Last person to modify the entity.                                                                                                 | `TamakiMES`                          |
| `notes`                      | `Blob`          | Notes about the entity.                                                                                                           | `This entity has these extra notes`  |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                     | `some extra context 1`               |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                    | `some extra context 2`               |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                     | `some extra context 3`               |
| `lot_record_type`            | `String`        | Describes the action that was taken on a lot, as defined by the **LotRecordType** enum.                                           | `CONSUME`                            |
| `inventory_lot_id`           | `String` (ULID) | References the primary inventory lot affected by the record. See [inventory_lots](../inventory-model/inventory-lot).              | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `secondary_inventory_lot_id` | `String` (ULID) | References a secondary inventory lot involved in the record, if applicable.                                                       | `01JAP8RJBN-9WTGQRQW-Y3XCRTXF`       |
| `operation_record_id`        | `String` (ULID) | References the associated operation record. See [operation_records](../operation-model/operation-record).                         | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |
| `production_order_id`        | `String` (ULID) | References the associated production order. See [production_orders](../production-order-model/production-order).                  | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`       |
| `material_reason_code_id`    | `String` (ULID) | References an optional reason code for the inventory action. See [material_reason_codes](../material-model/material-reason-code). | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `source_location_id`         | `String` (ULID) | Location where the inventory is sourced. See [locations](../location-model/location).                                             | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |
| `destination_location_id`    | `String` (ULID) | Location where the inventory is transferred. See [locations](../location-model/location).                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `lot_status`                 | `String`        | Initial status of the inventory lot, as defined by the **LotStatus** enum.                                                        | `OPEN`                               |
| `quantity`                   | `Double`        | Quantity of material involved in the record.                                                                                      | `100.5`                              |
| `start_date`                 | `DateTime`      | Timestamp marking the beginning of the change.                                                                                    | `2024-05-10T08:00:00Z`               |
| `end_date`                   | `DateTime`      | Timestamp marking the end of the change.                                                                                          | `2024-05-10T10:00:00Z`               |
| `status`                     | `String`        | Status of the inventory lot record, as defined by the **Status** enum.                                                            | `RUNNING`                            |

## Field Details

### `lot_record_type`

Defines the action that was taken on a lot, specified by the **LotRecordType** enum, which includes options such as 
`CONSUME`, `UNCONSUME`, `PRODUCE`, `MOVE`, `SPLIT`, `MERGE`, `SCRAP`, `RETURN`, `STATUS_CHANGE`, `EDIT`, `RECEIVE`, and `SHIP`. This helps categorize inventory actions.

### `inventory_lot_id`

References the primary `InventoryLot` impacted by the record, which serves as the main context for the inventory action.
- Consumptions: this the lot being consumed
- Productions: this is the lot being produced
- Split: this is the original lot being split
- Merge: this is the lot being merged into
See [inventory_lots](../inventory-model/inventory-lot) for details.

### `secondary_inventory_lot_id`

Points to an optional secondary `InventoryLot` involved in the record, used in cases like splitting or merging.
- Consumptions: this the lot consuming the primary
- Productions: this is the lot producing the primary
- Split: this is the new lot split from the original
- Merge: this is the lot merging into the primary

### `operation_record_id`

Optional reference to an `OperationRecord` associated with this inventory action, providing context for operational activities.
See [operation_records](../operation-model/operation-record) for details.

### `production_order_id`

Optional reference to an associated `ProductionOrder`, linking the record to a specific production order. This provides
traceability for production-related inventory activities.
See [production_orders](../production-order-model/production-order) for details.

### `material_reason_code_id`

Optional reference to a `MaterialReasonCode` that provides a reason for the inventory action, especially useful for scrap
activities.
See [material_reason_codes](../material-model/material-reason-code) for details.

### `source_location_id` and `destination_location_id`

**source_location_id**: Specifies the location where the inventory originates.
- Consumptions: this the location of the inventory being consumed from.
- Productions: this is the location produced inventory comes from
- Ship: this is the location of the inventory being shipped from
- Scrap: this is the location of the inventory being scrapped
- Split: this is the location of the inventory being split
- Move: this is the location inventory is being moved from
- EditInventoryQuantity: this is the location of the inventory being edited

**destination_location_id**: Specifies the location where the inventory is moved or transferred.
- Consumptions: this the location the consumed inventory goes to
- Productions: this is the location inventory is being produced to
- Receive: this is the location receiving the inventory
- Move: this is the location inventory is being moved to

Both fields reference the `Location` entity, facilitating precise tracking of inventory movements within the facility.
See [locations](../location-model/location) for details.

### `lot_status`

Represents the initial state of the inventory lot, specified by the **LotStatus** enum, which includes options such as 
`OPEN`, `AVAILABLE`, `QA_HOLD`, `EXPIRED`, `SHIPPED`, and `CLOSED`, helping to indicate the status of the lot at the time of the record.

### `start_date` and `end_date`

- **start_date**: Timestamp indicating when the inventory action began.
- **end_date**: Timestamp indicating when the inventory action concluded.

These timestamps provide temporal context for each inventory activity.

### `status`

Represents the status of the inventory lot record, specified by the **Status** enum, which includes options such as 
`IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`, helping to monitor the state of the inventory operation.
Note only `RUNNING` and `COMPLETED` are used for `InventoryLotRecord`.