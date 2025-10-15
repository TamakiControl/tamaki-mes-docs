---
sidebar_position: 2
title: "Prerequisites"
description: "Potential Dependencies and Recommended Order of Imports"
---

## Prerequisites

When importing data, certain entities may depend on others through foreign key relationships. To ensure data integrity and avoid validation errors, imports should follow a recommended sequence that respects these dependencies.

### Potential Dependencies

The table below lists common entities and their dependencies. A dependency indicates that the referenced entity should typically be imported before the dependent one.

| Entity                      | Dependencies                                   |
| --------------------------- | ---------------------------------------------- |
| **UnitOfMeasure**           | None                                           |
| **Location**                | None                                           |
| **Material**                | UnitOfMeasure, Location                        |
| **UnitOfMeasureConversion** | UnitOfMeasure, Material                        |
| **Shift**                   | Location                                       |
| **Operation**               | Location                                       |
| **InventoryOperation**      | UnitOfMeasure, Location, Material, Operation   |
| **OEE Modes**               | Location                                       |
| **OEE States**              | Location                                       |
| **OEE Configs**             | UnitOfMeasure, Location, OEE Modes, OEE States |
| **Widgets**                 | None                                           |

---

### Recommended Import Order

Based on these dependencies, the recommended order of imports is:

1. **UnitOfMeasure**
2. **Location**
3. **Material**
4. **UnitOfMeasureConversion**
5. **Shift**
6. **Operation**
7. **InventoryOperation**
8. **OEE Modes**
9. **OEE States**
10. **OEE Configs**
11. **Widgets**

Following this order ensures that any foreign key references can be resolved at the time of import, reducing errors and avoiding partial imports.
