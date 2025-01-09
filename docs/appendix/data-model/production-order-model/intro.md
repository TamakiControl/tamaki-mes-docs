# Production Order Model Overview

The **ProductionOrder** model in **TamakiMES** is designed to manage and track production orders within the
manufacturing environment. This schema facilitates efficient scheduling, material usage, and customer order tracking to
ensure a streamlined production process.

---

### 1. ProductionOrder

Represents a specific production order, detailing information such as product, quantity, status, 
and associated customer. Each **ProductionOrder** is linked to relevant materials and locations, providing a central 
entity for managing production activities from initiation to completion.

### 2. ProductionOrderBillOfMaterial (BOM)

Defines the materials required for producing a unit within a production order. The BOM specifies quantities, 
unit of measure, and material types, enabling precise planning and material allocation for production.

### 3. ProductionOrderCustomer

Stores information about customers associated with production orders. This includes customer contact details, 
addresses, and other relevant data, enabling effective communication and customer order management.

### 4. ProductionOrderProperty

Allows for the definition of custom properties on production orders, enabling tailored 
configurations that can address unique production requirements or classifications.

### 5. ProductionOrderPropertyValue

Stores specific values for each custom property on a production order, allowing for unique configurations at 
the individual order level. This ensures flexibility in handling various production scenarios.

---

The Production Order schema in **TamakiMES** supports comprehensive management of production activities, from defining
required materials to tracking customer-specific details. This structure enables efficient handling of production
orders, material planning, and customer interactions, ensuring that production processes are well-organized and
responsive to operational needs.

This high-level overview provides a clear picture of how the **Production Order** schema functions within TamakiMES,
focusing on key components without delving into field-level details. Each element contributes to a complete and
adaptable system for managing production orders within the manufacturing environment.