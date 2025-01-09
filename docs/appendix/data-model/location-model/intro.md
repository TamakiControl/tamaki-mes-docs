# Location Model Overview

The **Location** model in *TamakiMES* is designed to represent the hierarchical structure and characteristics of
physical locations within a manufacturing environment. Each location can be a part of a larger organizational structure,
support specific types of processes, and include attributes like storage capabilities, inventory strategies, and maximum
capacities.

---

### 1. Location

The **Location** entity represents physical or logical locations within the facility. Locations are hierarchical and can
be of various types, such as `ENTERPRISE`, `SITE`, `AREA`, or `UNIT`, allowing flexible representation from high-level
company structures down to specific production units.

### 2. LocationGroup

**LocationGroup** enables the creation of logical groupings of locations. These groups are useful for organizing
locations into sets that can be managed collectively, such as grouping all locations in a specific department or
production area.

### 3. Location-LocationGroup

The **location_location_groups** table is a join table that establishes a many-to-many relationship between the **Location** and
**LocationGroup** entities. This structure enables locations to be organized into various groups, which can be used for
categorization, reporting, and managing subsets of locations within the manufacturing environment.

### 4. LocationProperty 

Defines a property that can apply to multiple locations, such as "Temperature Control" or "Storage Type."

### 5. LocationPropertyValue

Stores the actual values of properties for specific locations, allowing each location to have unique characteristics 
based on its configuration.

---

## Summary

The Location model in *TamakiMES* provides a robust framework for organizing, managing, and configuring the physical and
logical layout of a manufacturing facility. Through hierarchical locations, groupings, and customizable properties, the
model supports complex facility structures and flexible inventory strategies.