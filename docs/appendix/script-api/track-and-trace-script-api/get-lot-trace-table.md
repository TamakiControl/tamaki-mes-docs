---
title: "getLotTraceTable"
description: "Retrieves detailed rows of data for the track and trace table for the given inventory lot record IDs."
sidebar_position: 1
---

# system.mes.trackandtrace.getLotTraceTable

## Description

Retrieves detailed data for the track and trace table for the given inventory lot record IDs. This function returns information about the connections between inventory lots, including source and target lots, locations, quantities, and timestamps.

While [`getLotTraceGraph`](./get-lot-trace-graph.md) provides a visual representation of material flows, `getLotTraceTable` provides more detailed tabular data about specific inventory lot records.

## Permissions

This scripting function has no client permission restrictions.

## Syntax
```python
system.mes.trackandtrace.getLotTraceTable(inventoryLotRecordIds)
```

## Parameters

| Parameter              | Type                    | Description                                | Required |
|------------------------|-------------------------|--------------------------------------------|----------|
| `inventoryLotRecordIds` | `List` of `String` (ULID) | List of inventory lot record IDs to retrieve | Yes      |

## Returns

A list of trace table row objects with the following properties:

### TraceTableRow

| Property                 | Type           | Description                                                                            |
|--------------------------|----------------|----------------------------------------------------------------------------------------|
| `id`                     | `String` (ULID) | ID of the inventory lot record                                                         |
| `lotRecordType`          | `String`       | Inventory lot record type (e.g. "Consume", "Produce", "Split", "Merge")                |
| `sourceInventoryLotId`   | `String` (ULID) | ID of the source inventory lot                                                         |
| `sourceInventoryLotName` | `String`       | Name of the source inventory lot                                                       |
| `targetInventoryLotId`   | `String` (ULID) | ID of the target inventory lot                                                         |
| `targetInventoryLotName` | `String`       | Name of the target inventory lot                                                       |
| `sourceLocationId`       | `String` (ULID) | ID of the source location                                                              |
| `sourceLocationPath`     | `String`       | Path of the source location                                                            |
| `destinationLocationId`  | `String` (ULID) | ID of the destination location                                                         |
| `destinationLocationPath`| `String`       | Path of the destination location                                                       |
| `quantity`               | `Double`       | Quantity of the record                                                                 |
| `unitOfMeasureId`        | `String` (ULID) | ID of the unit of measure for the quantity                                             |
| `unitOfMeasureName`      | `String`       | Name of the unit of measure                                                            |
| `unitOfMeasureSymbol`    | `String`       | Symbol of the unit of measure (e.g., "kg", "L")                                        |
| `startDate`              | `Date`         | Record start date                                                                      |
| `endDate`                | `Date`         | Record end date                                                                        |
| `durationInMillis`       | `Long`         | Duration of the record in milliseconds (end date - start date)                         |
| `sourceMaterialId`       | `String` (ULID) | ID of the material associated with the source lot                                      |
| `sourceMaterialName`     | `String`       | Name of the material associated with the source lot                                    |
| `targetMaterialId`       | `String` (ULID) | ID of the material associated with the target lot                                      |
| `targetMaterialName`     | `String`       | Name of the material associated with the target lot                                    |

## Code Example

```python
# First get the trace graph to obtain the edge IDs
inventoryLotId = "01JZJZ1FSE-WAW6VBVG-4506XP0C"
traceGraph = system.mes.trackandtrace.getLotTraceGraph(inventoryLotId, "OUTPUT")

# Extract the edge IDs from the trace graph
edgeIds = [edge["id"] for edge in traceGraph["edges"]]

# Use the edge IDs to get detailed trace table information
traceTableRows = system.mes.trackandtrace.getLotTraceTable(edgeIds)

# Print the table data
for row in traceTableRows:
    print(f"Record Type: {row['lotRecordType']}")
    print(f"Source Lot: {row['sourceInventoryLotName']} (Material: {row['sourceMaterialName']})")
    print(f"Target Lot: {row['targetInventoryLotName']} (Material: {row['targetMaterialName']})")
    print(f"Quantity: {row['quantity']} {row['unitOfMeasureSymbol']}")
    print(f"From: {row['sourceLocationPath']} → To: {row['destinationLocationPath']}")
    print(f"Start: {row['startDate']}, End: {row['endDate']}, Duration: {row['durationInMillis']}ms")
    print("---")
```

### Example Output
```
Record Type: Produce
Source Lot: Lot-01JZJZ (Material: apple)
Target Lot: Lot-01JRGM (Material: cherry)
Quantity: 100.0 kg
From: /Facility/Line1 → To: /Facility/Warehouse
Start: 2023-06-15T14:30:00Z, End: 2023-06-15T14:45:00Z, Duration: 900000ms
---
```