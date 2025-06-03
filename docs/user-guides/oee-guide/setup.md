---
sidebar_position: 6
title: "Setup"
description: "OEE Setup Configuration"
---

# Setup

**Navigation:**
![setup-navigation.png](setup-navigation.png)

**Example:**
![setup.png](setup.png)

**Description:**
- The Setup screen allows users to configure the OEE model, including defining [States](#states), [Modes](#modes), [Downtime Reasons](#downtime-reasons), and other [OEE Configurations](#oee-configuration). This screen is essential for customizing the OEE tracking system to fit the specific needs of the manufacturing operation.

**How to use:**
- To populate the [OEE Configurations](#oee-configuration), [States](#states), [Modes](#modes), and [Downtime Reasons](#downtime-reasons) tabs, the user must first select a location from the location tree on the left side of the screen. This selection will determine which configurations are displayed and modified.

## OEE Configuration

**Example:**
![setup-oee-configuration.png](setup-oee-configuration.png)

### OEE Configuration Workflow

1. Select a location from the dropdown menu to configure OEE settings for that specific location.
2. Set the [Max Record Duration](#max-record-duration) and [Prune Days](#prune-days).
3. fill out the [Mode Expression](#mode-expression).
4. configure the [Availability](#availability) settings:
   - [Enable Availability](#enable-availability).
   - fill out the [State Expression](#state-expression).
   - configure the [Downtime Reason Source](#downtime-reason-source) and [Downtime Reason Expression](#downtime-reason-expression).
5. configure the [Performance](#performance) settings:
   - [Enable Performance](#enable-performance).
   - fill out the [Production Count Unit of Measure](#production-count-unit-of-measure).
   - fill out the [Production Rate Time Unit](#production-rate-time-unit).
   - fill out the [Production Count Expression](#production-count-expression).
   - select the [Production Count Calculation Type](#production-count-calculation-type).
   - set the [Production Count Overflow Value](#production-count-overflow-value).
   - configure the [Standard Rate Source](#standard-rate-source) and set the [Standard Rate (PCS/Minute)](#standard-rate-pcs-minute).
6. configure the [Quality](#quality) settings:
    - [Enable Quality](#enable-quality).
    - fill out the [Waste Count Expression](#waste-count-expression).
    - select the [Waste Count Calculation Type](#waste-count-calculation-type).
    - set the [Waste Count Overflow Value](#waste-count-overflow-value).
7. configure the [Production Order Source](#production-order-source).
8. Save the configuration by clicking the "Confirm" button at the bottom of the screen.

### OEE Configuration Fields

#### Export

Exports the OEE configuration for the selected location to a TODO file.

#### Delete

Deletes the OEE configuration for the selected location. This will remove all OEE records for this location, so use with caution.

#### Enabled

Toggles the OEE tracking for the selected location.

#### Max Record Duration

Maximum duration for OEE record collection. Many events will trigger an OEE record to end, if none of those events occur within this set amount of time, then the OEE record will end anyways. The purpose of this is to control the granularity of the records. Changing this value will not affect existing records, but will apply to new records created after the change.

#### Prune Days

Number of days to retain OEE records. (If blank, records will be kept indefinitely)

#### Mode Expression

TODO

#### Availability

TODO

##### Enable Availability

Enables availability tracking.

##### State Expression

TODO

##### Downtime Reason Source

TODO

##### Downtime Reason Expression

TODO

#### Performance

TODO

##### Enable Performance

Enables performance TODO

##### Production Count Unit of Measure

TODO

##### Production Rate Time Unit

TODO

##### Production Count Expression

TODO

##### Production Count Calculation Type

TODO

##### Production Count Overflow Value

TODO

##### Standard Rate Source

TODO

##### Standard Rate (PCS/Minute)

TODO

#### Quality

TODO

##### Enable Quality

TODO

##### Waste Count Expression

TODO

##### Waste Count Calculation Type

TODO

##### Waste Count Overflow Value

TODO

#### Production Order Source

TODO

## States

**Example:**
![setup-states.png](setup-states.png)

### State Workflow

1. Click on the "Add State" button to create a new state.


### State Fields

#### Delete

Deletes the selected state.

#### Edit

Opens the following popup to edit the selected state (in this case, "Downtime"):
![setup-states-edit.png](setup-states-edit.png)

Refer to [Edit or Create New State Popup Fields](#edit-or-create-new-state-popup-fields) for details on the popup.

#### Create New

Opens the following popup to create a new state:
![setup-states-create-new.png](setup-states-create-new.png)

Refer to [Edit or Create New State Popup Fields](#edit-or-create-new-state-popup-fields) for details on the popup.

#### Edit or Create New State Popup Fields

##### Enabled

Toggles the state on or off.

##### Name

TODO

##### Interruption Location

TODO

##### State Code

TODO

##### State Calculation Type

TODO

##### Colour

The color associated with the state, used for visual representation in the OEE timeline and [Line Graphic]().

## Modes

**Example:**
![setup-modes.png](setup-modes.png)

### Mode Workflow

1. Click on the "Add Mode" button to create a new mode.

### Mode Fields

#### Delete

Deletes the selected mode.

#### Edit

Opens the following popup to edit the selected mode (in this case, "CIP"):
![setup-modes-edit.png](setup-modes-edit.png)

Refer to [Edit or Create New Mode Popup Fields](#edit-or-create-new-mode-popup-fields) for details on the popup.

#### Create New

Opens the following popup to create a new mode:
![setup-modes-create-new.png](setup-modes-create-new.png)

Refer to [Edit or Create New Mode Popup Fields](#edit-or-create-new-mode-popup-fields) for details on the popup.

### Edit or Create New Mode Popup Fields

#### Name

TODO

#### Mode Code

TODO

#### Mode Calculation Type

TODO

#### Colour

TODO

#### Expected Duration Source

TODO

#### Expected Duration Expression

TODO

#### Expected Duration

TODO

## Downtime Reasons

**Example:**
![setup-downtime-reasons.png](setup-downtime-reasons.png)

### Downtime Reasons Workflow

1. Click on the "Add Downtime Reason" button to create a new downtime reason.

### Downtime Reasons Fields

#### Name

TODO

#### Description

TODO

#### Code

TODO

#### Parent Downtime Reason

TODO