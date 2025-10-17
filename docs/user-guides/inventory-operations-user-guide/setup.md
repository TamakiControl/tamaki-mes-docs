---
sidebar_position: 2
title: "Setup"
description: "Inventory Operation Configuration"
---
import setupNavigation from './images/setup-navigation.webm';
import setupLandingPage from './images/landing-page.webm';
import createInvOpGeneral from './images/create-inv-op-general.webm';
import createInvOpTrigger from './images/create-inv-op-trigger.webm';
import createInvOpMovement from './images/create-inv-op-movement.webm';
import createInvOpLotHandling from './images/create-inv-op-lot-handling.webm';

# Setup

**Navigation:**

<video controls style={{ width: '50vw', borderRadius: '0.5rem' }}>
  <source src={setupNavigation}/>
</video>

**Inventory Operation Landing Page:**

<video controls style={{ width: '50vw', borderRadius: '0.5rem' }}>
  <source src={setupLandingPage}/>
</video>

**Description:**
The landing page shows the Inventory Operations for the system and can be filtered by location using the location tree on the left side of the screen. From here, users can create, edit, delete, import, and export Inventory Operations. Users can set live values to true to have the page refresh every 5 seconds to show current status of active inventory operations.

## Inventory Operations Workflow
Start by click the `Create New` button at the top right of the screen. This will open an inventory operation popup. The popup has four sections: General, Trigger, Movement, and Lot Handling. Once the fields in these sections are filled out, click the `Confirm` button at the bottom of the view to save.

### General
<video controls style={{ width: '40vw', borderRadius: '0.5rem' }}>
  <source src={createInvOpGeneral}/>
</video>

#### Enabled
Toggles whether the inventory operation is active. When enabled, the inventory operation can be triggered based on its configuration. Disabling an inventory operation prevents it from being triggered without deleting its configuration, allowing it to be re-enabled later if needed.

#### Name
The name of the inventory operation. This should be a descriptive name that clearly indicates the purpose of the inventory operation (e.g., "Move Raw Materials", "Bay1 Receives into Raw Silo 1").

#### Inventory Operation Type
- CONSUME
  - Consumes a primary lot for the primary material at the source location. Consumes into the secondary lot for the secondary material at the destination location if configured. This will be tracked as an CONSUME [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- PRODUCE
  - Produces a primary lot for the primary material at the destination location. Produces from the secondary lot for the secondary material at the source location if configured. This will be tracked as an PRODUCE [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- UNCONSUME
  - Functionally the same as a PRODUCE operation, but is used to reverse a CONSUME operation. This will be tracked as an UNCONSUME [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- RECEIVE
  - Receives a primary lot for the primary material at the destination location. Receives from the secondary lot for the secondary material at the source location if configured. This will be tracked as a RECEIVE [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- RECEIVE_AND_CONSUME
  - Performs both a RECEIVE and a CONSUME operation in one operation. Receives a primary lot for the primary material at the source location first, then consumes that lot for that primary material from that source location. Consumes into the secondary lot for the secondary material at the destination location if configured. This will be tracked in the inventory lot record history in 2 inventory lot records; a RECEIVE and a CONSUME [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- SHIP
  - Ships a primary lot for the primary material at the source location. Ships to the secondary lot for the secondary material at the destination location if configured. This will be tracked as a SHIP [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- SCRAP
  - Functionally the same as a SHIP operation, but is used to scrap inventory. This will be tracked as a SCRAP [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- RETURN
  - Functionally the same as a SHIP operation, but is used to return inventory. This will be tracked as a RETURN [Inventory Lot Record](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md).
- SCRAP_ALL
  - Scraps all inventory for the primary material at the source location. This will be tracked as multiple SCRAP [Inventory Lot Records](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md), one for each lot scrapped.

#### Reason Code Input (_Optional_)
The [Material Reason Code](..%2F..%2Fappendix%2Fdata-model%2Fmaterial-model%2Fmaterial-reason-code.md) to associate with the [Inventory Lot Records](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md) created by this Inventory Operation.

#### Operation (_Optional_)
The [Operation](..%2F..%2Fappendix%2Fdata-model%2Foperation-model%2Foperation.md) associated with this inventory operation. All [Inventory Lot Records](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md) created by this Inventory Operation will use this to link to the Operation's current [Operation Record](..%2F..%2Fappendix%2Fdata-model%2Foperation-model%2Foperation-record.md) if one exists.

#### Notes (_Optional_)
Any additional notes or comments about the inventory operation. These notes will be added to all [Inventory Lot Records](..%2F..%2Fappendix%2Fdata-model%2Finventory-operation-model%2Finventory-lot-record.md) and [inventory.md](..%2F..%2Fappendix%2Fdata-model%2Finventory-model%2Finventory.md) created or modified by this Inventory Operation.

### Trigger
<video controls style={{ width: '40vw', borderRadius: '0.5rem' }}>
  <source src={createInvOpTrigger}/>
</video>

#### Trigger Source
- Manual
  - The inventory operation is triggered by an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) and [Stop Inventory Operation](../../appendix/script-api/inventory-operation-script-api/stop-inventory-operation.md) for more information.
- Expression 
  - The inventory operation is triggered by start and stop expressions, which are evaluated at regular intervals. When an expression evaluates to its trigger value, the inventory operation will start or stop accordingly.
- Parent (**_Only allowed if Operation is set_**)
  - The inventory operation is triggered to start and stop based on the start and stop of a parent [Operation](..%2F..%2Fappendix%2Fdata-model%2Foperation-model%2Foperation.md). When the parent operation starts, this inventory operation will start. When the parent operation stops, this inventory operation will stop.

#### Start Trigger Expression
If the Trigger Source is set to `Expression`, this is the expression that triggers the inventory operation to start. This field is required if the trigger source is set to `Expression`. The expression must evaluate to a boolean or numeric value. Numeric values are interpreted as false if they are 0 and true if they are any other number.

#### Start Trigger Type
- Rising Edge
  - The inventory operation will start when the trigger expression changes from false to true.
- Falling Edge
  - The inventory operation will start when the trigger expression changes from true to false.
- Any Change
  - The inventory operation will start whenever the trigger expression changes value.

#### Stop Trigger Expression
If the Trigger Source is set to `Expression`, this is the expression that triggers the inventory operation to stop. This field is required if the trigger source is set to `Expression`. The expression must evaluate to a boolean or numeric value. Numeric values are interpreted as false if they are 0 and true if they are any other number.

#### Stop Trigger Type
- Rising Edge
  - The inventory operation will stop when the trigger expression changes from false to true.
- Falling Edge
  - The inventory operation will stop when the trigger expression changes from true to false.
- Any Change
  - The inventory operation will stop whenever the trigger expression changes value.

_*It is recommended to set the start and stop trigger expressions to the same tag and the start and stop trigger types to opposite values (e.g. start on rising edge, stop on falling edge)._

### Movement
<video controls style={{ width: '40vw', borderRadius: '0.5rem' }}>
  <source src={createInvOpMovement}/>
</video>

#### Source Location
The source location for the inventory operation and will mean different things for each Inventory Operation Type with respect to the primary lot and primary material:
- CONSUME
  - The location of the primary lot for the primary material to consume from.
- PRODUCE
  - The location of the secondary lot for the secondary material to produce from if configured.
- UNCONSUME
  - The location of the secondary lot for the secondary material to produce from if configured.
- RECEIVE
  - The location of the secondary lot for the secondary material to receive from if configured.
- RECEIVE_AND_CONSUME
  - The location of the primary lot for the primary material to consume from.
- SHIP
  - The location of the primary lot for the primary material to ship from.
- SCRAP
  - The location of the primary lot for the primary material to scrap from.
- RETURN
  - The location of the primary lot for the primary material to return from.
- SCRAP_ALL
  - The location of the primary material to scrap all inventory from. 

#### Destination Location
The destination location for the inventory operation and will mean different things for each Inventory Operation Type with respect to the primary lot and primary material:
- CONSUME
  - The location of the secondary lot for the secondary material to consume into if configured.
- PRODUCE
  - The location of the primary lot for the primary material to produce into.
- UNCONSUME
  - The location of the primary lot for the primary material to produce into.
- RECEIVE
  - The location of the primary lot for the primary material to receive into.
- RECEIVE_AND_CONSUME
  - The location of the secondary lot for the secondary material to consume into.
- SHIP
  - The location of the secondary lot for the secondary material to ship into if configured.
- SCRAP
  - The location of the secondary lot for the secondary material to scrap into if configured.
- RETURN
  - The location of the secondary lot for the secondary material to return into if configured.
- SCRAP_ALL
  - Not used.

#### Quantity Source
- Expression
  - The quantity is determined by evaluating an expression when the inventory operation starts.
- Manual
  - The quantity is specified when starting the inventory operation via an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) for more information.

#### Quantity Calculation Type
If the Quantity Source is set to `Expression`, this defines how the quantity expression is evaluated.
- Delta
  - The quantity expression is evaluated when the inventory operation starts and when it stops. The quantity is the difference between the two values.
- Direct
  - The quantity expression is evaluated when the inventory operation stops. The quantity is that value.

#### Quantity Expression
If the Quantity Source is set to `Expression`, this is the expression that determines the quantity for the inventory operation. This field is required if the quantity source is set to `Expression`. The expression must evaluate to a numeric value greater than 0.

#### Quantity Overflow Value
If the Quantity Source is set to `Expression` and the Quantity Calculation Type is set to `Delta`, this field defines how value overflow is handled. For example, if the quantity expression is bound to a tag that is a counter that resets to 0 after reaching 100, and the counter starts at 90 when the inventory operation starts and ends at 10 when the inventory operation stops, the quantity would be -80 if overflow is not handled. Instead of -80, the quantity would be 20 if the Quantity Overflow Value is set to 100. This will work even if there is multiple overflow cycles.

#### Increment Production Order Count
If the inventory operation is associated with an [Operation](..%2F..%2Fappendix%2Fdata-model%2Foperation-model%2Foperation.md) that is associated with a [Production Order](..%2F..%2Fappendix%2Fdata-model%2Fproduction-order-model%2Fproduction-order.md), enabling this will increment the production order's produced count by the quantity of this inventory operation when it stops if the inventory operation type is set to `PRODUCE`. This will do nothing if the inventory operation type is set to anything other than `PRODUCE`.

### Lot Handling
<video controls style={{ width: '40vw', borderRadius: '0.5rem' }}>
  <source src={createInvOpLotHandling}/>
</video>

#### Primary Material Source
- Static
  - The primary material is a fixed value entered in the Primary Material field.
- Expression
  - The primary material is determined by evaluating an expression when the inventory operation starts.
- Manual
  - The primary material is specified when starting the inventory operation via an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) for more information.

#### Primary Material
If the Primary Material Source is set to `Static`, this is the [Material](..%2F..%2Fappendix%2Fdata-model%2Fmaterial-model%2Fmaterial.md) for the primary lot. The primary material means different things for each Inventory Operation Type:
- CONSUME
  - The material of the primary lot to consume from the source location.
- PRODUCE
  - The material of the primary lot to produce into the destination location.
- UNCONSUME
  - The material of the primary lot to produce into the destination location.
- RECEIVE
  - The material of the primary lot to receive into the destination location.
- RECEIVE_AND_CONSUME
  - The material of the primary lot to consume from the source location.
- SHIP
  - The material of the primary lot to ship from the source location.
- SCRAP
  - The material of the primary lot to scrap from the source location.
- RETURN
  - The material of the primary lot to return from the source location.
- SCRAP_ALL
  - The material of the primary lots to scrap all inventory from the source location.

#### Primary Material Expression
If the Primary Material Source is set to `Expression`, this is the expression that determines the primary material for the inventory operation. The expression must evaluate to a string that is a valid material path or ID.

#### Primary Lot Resolution Strategy
- Auto Generate
  - The primary lot will be automatically generated when the inventory operation starts. The lot code will be a UUID.
- Manual
  - The primary lot is specified when starting the inventory operation via an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) for more information.
- Expression
  - The primary lot code is determined by evaluating an expression when the inventory operation starts.
- From Location (**_Only supported for CONSUME, RETURN, SHIP, SCRAP_**)
  - The primary lot will be selected from the source [location](..%2F..%2Fappendix%2Fdata-model%2Flocation-model%2Flocation.md) when the inventory operation starts. It will be resolved using the LotStorageStrategy at the source location for the primary material.

#### Primary Lot Code Expression
If the Primary Lot Resolution Strategy is set to `Expression`, this is the expression that determines the primary lot code for the inventory operation.

#### Secondary Material
This is the [Material](..%2F..%2Fappendix%2Fdata-model%2Fmaterial-model%2Fmaterial.md) for the secondary lot. The secondary material means different things for each Inventory Operation Type:
- CONSUME
  - The material of the secondary lot to consume into the destination location if configured.
- PRODUCE
  - The material of the secondary lot to produce from the source location if configured.
- UNCONSUME
  - The material of the secondary lot to produce from the source location if configured.
- RECEIVE
  - The material of the secondary lot to receive from the source location if configured.
- RECEIVE_AND_CONSUME
  - The material of the secondary lot to consume into the destination location if configured.
- SHIP
  - The material of the secondary lot to ship into the destination location if configured.
- SCRAP
  - The material of the secondary lot to scrap into the destination location if configured.
- RETURN
  - The material of the secondary lot to return into the destination location if configured.
- SCRAP_ALL
  - Not used.

#### Secondary Lot Resolution Strategy
- Auto Generate
  - The secondary lot will be automatically generated when the inventory operation starts. The lot code will be a UUID.
- Manual
  - The secondary lot is specified when starting the inventory operation via an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) for more information.
- Expression
  - The secondary lot code is determined by evaluating an expression when the inventory operation starts.
- From Location (**_NOT SUPPORTED FOR SECONDARY LOT_**)

#### Secondary Lot Expression
If the Secondary Lot Resolution Strategy is set to `Expression`, this is the expression that determines the secondary lot code for the inventory operation.

#### Create Lot(s) If Not Exists
If enabled, the inventory operation will create the primary and/or secondary lot if it does not already exist when the inventory operation starts. If disabled, the inventory operation will fail to start if the primary and/or secondary lot does not already exist.

#### Inventory Name Resolution Strategy
- Expression
  - The inventory name is determined by evaluating an expression when the inventory operation starts.
- Manual
  - The inventory name is specified when starting the inventory operation via an API call. See [Start Inventory Operation](../../appendix/script-api/inventory-operation-script-api/start-inventory-operation.md) for more information.
- Static
  - The inventory name is a fixed value entered in the Inventory Name field.
- Auto Generate
  - The inventory name will be automatically generated when the inventory operation starts. The inventory name will be a UUID.

#### Inventory Name
If the Inventory Name Resolution Strategy is set to `Static`, this is the name to give to any [Inventory](..%2F..%2Fappendix%2Fdata-model%2Finventory-model%2Finventory.md) created by this inventory operation. 

#### Inventory name Expression
If the Inventory Name Resolution Strategy is set to `Expression`, this is the expression that determines the inventory name for any [Inventory](..%2F..%2Fappendix%2Fdata-model%2Finventory-model%2Finventory.md) created by this inventory operation.

#### Unit of Measure Resolution Strategy
- Static 
  - The [Unit of Measure](..%2F..%2Fappendix%2Fdata-model%2Futility-models%2Funit-of-measure-model%2Funit-of-measure.md) is a fixed value entered in the Unit of Measure Name field.
- From Context
  - The unit of measure will remain null on this Inventory Operation and will be determined based on context when the inventory operation is started. The PRODUCE inventory operation type will first look at the ProductionOrder's Unit of Measure. If that is null, it will look at the Material's Base Unit of Measure. All other inventory operation types will look at the Material's Base Unit of Measure.