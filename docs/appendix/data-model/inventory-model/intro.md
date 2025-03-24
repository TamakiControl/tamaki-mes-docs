# Inventory Model Overview

The **Inventory** model organizes and manages stock levels, movement, and traceability within the system, ensuring 
efficient inventory control. It supports functions such as location-based tracking, lot management, and historical 
record-keeping for audits and production. This model consists of the following primary entities:

---

### 1. Inventory

Tracks quantities of materials at specific **Locations**. It maintains records for each lot within a particular location
and enables inventory control through association with a lot, making it easier to manage stock levels.

### 2. InventoryLot

Identifies a batch or specific quantity of a material, tracking attributes such as status (open or closed), quantity,
expiration date, and the unit of measure. This entity supports lot-based tracking essential for quality control,
traceability, and inventory management.

### 3. InventoryLotRecord

Keeps a historical record of changes to inventory lots, such as consumption, production, or scrapping. Each record
provides details on quantity changes, associated operation records, and linked production orders, enabling a
comprehensive audit trail for inventory movements.

### 4. InventoryOperation

Represents the interaction between operations and inventories, including actions on inventory lots, inventory handling, 
and quantity management. It ensures accurate tracking and alignment of materials with operational processes.

---

Each entity in this model supports stock tracking, lot management, and inventory movement, enhancing the overall accuracy 
and control of materials within the system. The **Inventory** model integrates closely with material and production management, 
enabling real-time visibility, traceability, and compliance across the supply chain and manufacturing lifecycle.