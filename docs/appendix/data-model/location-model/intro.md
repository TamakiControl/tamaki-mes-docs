# Location Model Overview

The **Location** model in _TamakiMES_ is designed to represent the hierarchical structure and characteristics of
physical locations within a manufacturing environment. Each location can be a part of a larger organizational structure,
support specific types of processes, and include attributes like storage capabilities, inventory strategies, and maximum
capacities.

---

### 1. locations

The **Location** entity represents physical or logical locations within the facility. Locations are hierarchical and can
be of various types, such as `ENTERPRISE`, `COMPANY`, `SITE`, `AREA`, `LINE`, `CELL_GROUP`, `CELL`, and `UNIT`, allowing
flexible representation from high-level company structures down to specific production units.

### 2. location_properties

Defines a property that can apply to multiple locations, such as "Temperature Control" or "Storage Type."

### 3. location_property_values

Stores the actual values of properties for specific locations, allowing each location to have unique characteristics
based on its configuration.

---

## Summary

The Location model in _TamakiMES_ provides a robust framework for organizing, managing, and configuring the physical and
logical layout of a manufacturing facility. Through hierarchical locations, groupings, and customizable properties, the
model supports complex facility structures and flexible inventory strategies.
