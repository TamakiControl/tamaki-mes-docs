---
sidebar_position: 7
title: "material_lot_records"
description: "Documentation for the material_lot_records table, outlining its columns and structure."
---

# Material Lot Record

## Overview

The `MaterialLotRecord` entity captures changes and actions related to specific material lots, including activities such
as consumption, production, and movement. Each record maintains details about the type of change, associated locations,
quantities, and timestamps, providing a comprehensive history of material flow.

## Table Structure

The following table outlines the SQL columns for the `material_lot_records` table, providing a brief description of
each, along with sample data where applicable.

| Column                      | Type            | Description                                                                                                                      | Example                              |
|-----------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`                        | `String` (ULID) | Unique identifier for the entity.                                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`                   | `Boolean`       | If the entity is enabled or not.                                                                                                 | `true`                               |
| `created_date`              | `DateTime`      | Date the entity was created.                                                                                                     | `2024-12-31T19:48:44Z`               |
| `created_by`                | `String`        | Person who created the entity.                                                                                                   | `TamakiMES`                          |
| `modified_date`             | `DateTime`      | Date the entity was created.                                                                                                     | `2024-12-31T19:48:44Z`               |
| `modified_by`               | `String`        | Last person to modify the entity.                                                                                                | `TamakiMES`                          |
| `notes`                     | `Blob`          | Notes about the entity.                                                                                                          | `This entity has these extra notes`  |
| `spare1`                    | `String`        | The first spare column that can be used for additional context on the entity.                                                    | `some extra context 1`               |
| `spare2`                    | `String`        | The second spare column that can be used for additional context on the entity.                                                   | `some extra context 2`               |
| `spare3`                    | `String`        | The third spare column that can be used for additional context on the entity.                                                    | `some extra context 3`               |
| `lot_record_type`           | `String`        | Describes the action that was taken on a lot, as defined by the **LotRecordType** enum.                                          | `CONSUME`                            |
| `material_lot_id`           | `String` (ULID) | References the primary material lot affected by the record. See [material_lots](../material-model/material-lot).                 | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `secondary_material_lot_id` | `String` (ULID) | References a secondary material lot involved in the record, if applicable.                                                       | `01JAP8RJBN-9WTGQRQW-Y3XCRTXF`       |
| `operation_record_id`       | `String` (ULID) | References the associated operation record. See [operation_records](../operation-model/operation-record).                        | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |
| `production_order_id`       | `String` (ULID) | References the associated production order. See [production_orders](../production-order-model/production-order).                 | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`       |
| `material_scrap_code_id`    | `String` (ULID) | References an optional reason code for the material action. See [material_reason_codes](../material-model/material-reason-code). | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `source_location_id`        | `String` (ULID) | Location where the material is sourced. See [locations](../location-model/location).                                             | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |
| `destination_location_id`   | `String` (ULID) | Location where the material is transferred. See [locations](../location-model/location).                                         | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `lot_status`                | `String`        | Initial status of the material lot, as defined by the **LotStatus** enum.                                                        | `OPEN`                               |
| `quantity`                  | `Double`        | Quantity of material involved in the record.                                                                                     | `100.5`                              |
| `start_date`                | `DateTime`      | Timestamp marking the beginning of the change.                                                                                   | `2024-05-10T08:00:00Z`               |
| `end_date`                  | `DateTime`      | Timestamp marking the end of the change.                                                                                         | `2024-05-10T10:00:00Z`               |
| `status`                    | `String`        | Status of the material lot record, as defined by the **Status** enum.                                                            | `RUNNING`                            |

## Field Details

### `lot_record_type`

Defines the action that was taken on a lot, specified by the **LotRecordType** enum, which includes options such as 
`CONSUME`, `PRODUCE`, `MOVE`, `SPLIT`, `MERGE`, `SCRAP`, `STATUS_CHANGE`, `EDIT`, `RECEIVE`, and `SHIP`. This helps categorize material actions.

### `material_lot_id`

References the primary `MaterialLot` impacted by the record, which serves as the main context for the material action.
See [material_lots](../material-model/material-lot) for details.

### `secondary_material_lot_id`

Points to an optional secondary `MaterialLot` involved in the record, used in cases like splitting or merging.

### `operation_record_id`

References the `OperationRecord` associated with this material action, providing context for operational activities.
See [operation_records](../operation-model/operation-record) for details.

### `production_order_id`

Indicates the associated `ProductionOrder`, linking the record to a specific production order. This provides
traceability for production-related material activities.
See [production_orders](../production-order-model/production-order) for details.

### `material_scrap_code_id`

Optional reference to a `MaterialReasonCode` that provides a reason for the material action, especially useful for scrap
activities.
See [material_reason_codes](../material-model/material-reason-code) for details.

### `source_location_id` and `destination_location_id`

- **source_location_id**: Specifies the location where the material originates.
- **destination_location_id**: Specifies the location where the material is moved or transferred.

Both fields reference the `Location` entity, facilitating precise tracking of material movements within the facility.
See [locations](../location-model/location) for details.

### `lot_status`

Represents the initial state of the material lot, specified by the **LotStatus** enum, which includes options such as 
`OPEN`, `AVAILABLE`, `QA_HOLD`, `EXPIRED`, `SHIPPED`, and `CLOSED`, helping to indicate the status of the lot at the time of the record.

### `quantity`

Specifies the amount of material involved in this action, enabling quantification of the material movement or usage.

### `start_date` and `end_date`

- **start_date**: Timestamp indicating when the material action began.
- **end_date**: Timestamp indicating when the material action concluded.

These timestamps provide temporal context for each material activity.

### `status`

Represents the status of the material lot record, specified by the **Status** enum, which includes options such as 
`IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`, helping to monitor the state of the material operation.
Note only `RUNNING` and `COMPLETED` are used for MaterialLotRecord.