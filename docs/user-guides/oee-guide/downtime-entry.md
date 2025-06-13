---
sidebar_position: 5
title: "Downtime Entry"
description: "OEE Downtime Entry Screen"
---

# Downtime Entry

**Navigation:**

<img src={require('./images/downtime-entry-navigation.png').default} alt="Navigation menu showing the Downtime Entry selection in the OEE module" />

**Example:**

<img src={require('./images/downtime-entry.png').default} alt="Complete Downtime Entry screen showing location tree, downtime reason tree, and event table" />

**Description:**
- The Downtime Entry screen allows users to acknowledge downtime events and enter details about the downtime, such as the reason for the downtime, the start and end times, and any additional notes. This information is crucial for analyzing downtime trends and improving [OEE](terms-and-definitions#oee-overall-equipment-effectiveness).

**Components:**
- [Location Tree](#location-tree)
- [Downtime Reason Tree](#downtime-reason-tree)
- [Downtime Event Table](#downtime-event-table)

## Location Tree
**Example:**

<img src={require('./images/downtime-entry-location-tree.png').default} alt="Location Tree panel showing hierarchical structure of production equipment locations" />

**Description:**
- TODO The Location Tree displays the hierarchy of locations within the production line. Users can select a specific location to view and manage downtime events associated with that location. The tree structure allows for easy navigation through different levels of the production line.

## Downtime Reason Tree
**Example:**

<img src={require('./images/downtime-entry-reason-tree.png').default} alt="Downtime Reason Tree showing categorized list of possible downtime reasons" />

**Description:**
- The Downtime Reason Tree displays the available downtime reasons that can be selected when entering a downtime event. Users can select a reason to view and manage downtime events associated with that reason. The tree structure allows for easy navigation through different categories of downtime reasons.

## Downtime Event Table
**Example:**

<img src={require('./images/downtime-entry-event-table.png').default} alt="Downtime Event Table showing list of downtime events with details about duration, location, and reason" />

**Description:**
- The Downtime Event Table displays a list of downtime events that have been entered for the selected location and downtime reason. Each row in the table represents a specific downtime event.

## Components

### Table Columns
| **Column**          | **Description**                                                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Start Date**      | Start date of the downtime event.                                                                                                               |
| **End Date**        | End date of the downtime event.                                                                                                                 |
| **Duration**        | Duration of the downtime event.                                                                                                                 |
| **State**           | State of the Location during the downtime event.                                                                                                |
| **Location**        | Location that the downtime event is occuring for.                                                                                               |
| **Color**          | TODO Color of the state of the downtime event.                                                                                                 |
| **Type**            | Type of the downtime event.                                                                                                                     |
| **Downtime Reason** | Downtime reason associated with the downtime event. see [OEE Downtime Reason Model](../../appendix/data-model/oee-model/oee-downtime-reason.md) |
| **Notes**           | Additional notes or comments about the downtime event.                                                                                          |
| **Acknowledged**    | Boolean of whether the downtime event has been acknowledged.                                                                                    |

### Table Buttons

#### View Event Details
- The View Event Details button <img src={require('./images/button-view-details.png').default} alt="View Event Details Button" align="center" width="30" /> opens the following popup:

<img src={require('./images/popup-view-event-details.png').default} alt="View Event Details popup showing comprehensive information about the selected downtime event" />

**Description:** Displays detailed information about the selected downtime event. This includes the start and end times, duration, state, location, downtime reason, notes, and whether the event has been acknowledged.

#### Acknowledge Event
- The Acknowledge Event button <img src={require('./images/button-acknowledge-event.png').default} alt="Acknowledge Event Button" align="center" width="30" /> opens the following popup:

<img src={require('./images/popup-acknowledge-event.png').default} alt="Acknowledge Event popup allowing users to mark the event as reviewed with optional notes" />

**Description:** Allows users to acknowledge the selected downtime event. TODO Acknowledging an event marks it as reviewed and prevents further edits. Users can also add notes related to the acknowledgment.

#### Set Reason Code
- The Set Reason Code button <img src={require('./images/button-set-reason.png').default} alt="Set Reason Code Button" align="center" width="30" /> opens the downtime reason selection popup:

<img src={require('./images/popup-set-reason.png').default} alt="Set Reason Code popup with tree structure for selecting the specific cause of downtime" />

**Description:** TODO Allows users to select a downtime reason for the selected event. The popup displays a tree structure of predefined downtime reasons, enabling users to choose the most appropriate reason for the downtime event. Users can also add notes related to the downtime reason.

#### Split Downtime Event
- The Split Downtime Event button <img src={require('./images/button-split-event.png').default} alt="Split Downtime Event Button" align="center" width="30" /> opens the Split Downtime Event popup:

<img src={require('./images/popup-split-event.png').default} alt="Split Downtime Event popup with slider control to divide a downtime event into two separate events" />

**Description:** Allows users to split the selected downtime event into two separate events. This is useful when a downtime event spans multiple reasons or states. The popup allows users to drag the split line to adjust the start and end times of the new event.
