# Material Model Overview

The **Material** model organizes and manages data related to materials within the system, supporting functions like
categorization, inventory tracking, and detailed record-keeping for audits and production. This model consists of the
following primary entities:

---

### 1. MaterialClass

Defines categories or types of materials, allowing hierarchical grouping (e.g., "Raw Material" or "Packaging"). Material
classes have paths, making them hierarchical and unique, and they can be used to assign properties common to all
materials within that class.

### 2. Material

Represents individual materials under a `MaterialClass`. Each material includes specific attributes, such as its name,
unit of measure, ERP identifier, shelf life, and associated safety data sheets. `Material` entities enable detailed
tracking and unique identification within the manufacturing environment.

### 3. MaterialInventory

Tracks quantities of materials at specific `Locations`. It maintains records for each lot within a particular location
and enables inventory control through association with a lot, making it easier to manage stock levels.

### 4. MaterialLot

Identifies a batch or specific quantity of a material, tracking attributes such as status (open or closed), quantity,
expiration date, and the unit of measure. This entity supports lot-based tracking essential for quality control,
traceability, and inventory management.

### 5. MaterialLotRecord

Keeps a historical record of changes to material lots, such as consumption, production, or scrapping. Each record
provides details on quantity changes, associated operation records, and linked production orders, enabling a
comprehensive audit trail for material movements.

### 6. MaterialProperty and MaterialPropertyValue

Define custom properties for materials, with `MaterialProperty` specifying the property details (e.g., name, data type)
and `MaterialPropertyValue` assigning specific values to these properties for individual materials. This supports
tailored data storage for each material as required by the organization.

### 7. MaterialReasonCode

Provides additional context for actions on materials, such as scrapping or quality holds, using predefined codes. This
enables standardized reasons for material adjustments, ensuring consistency in reporting and audits.

### 8. MaterialSupplier

Stores supplier information for materials, including contact details, addresses, and primary/alternate contacts. This
entity links materials to suppliers, supporting procurement and vendor management processes.

---

Each entity in this model supports specific material tracking, inventory control, and classification tasks, enhancing
the overall traceability and management of materials within the system. The `Material` model integrates closely with
inventory and production management, enabling end-to-end visibility and control across the manufacturing lifecycle.