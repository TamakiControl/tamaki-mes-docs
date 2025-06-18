---
sidebar_position: 5
title: "Downtime Entry"
description: "OEE Downtime Entry Screen"
---

# Downtime Entry

**Navigation:**

![Navigation menu showing the Downtime Entry selection in the OEE module](./images/downtime-entry-navigation.png)

**Example:**

![Complete Downtime Entry screen showing location tree, downtime reason tree, and event table](./images/downtime-entry.png)

**Description:**
- The Downtime Entry screen allows users to acknowledge downtime events and enter details about the downtime, such as the reason for the downtime, the start and end times, and any additional notes. This information is crucial for analyzing downtime trends and improving [OEE](terms-and-definitions#oee-overall-equipment-effectiveness).

**Components:**
- [Location Tree](#location-tree)
- [Downtime Reason Tree](#downtime-reason-tree)
- [Downtime Event Table](#downtime-event-table)

## Location Tree
**Example:**

![Location Tree panel showing hierarchical structure of production equipment locations](./images/downtime-entry-location-tree.png)

**Description:**
- The Location Tree displays the hierarchy of locations within the production line. Users can select a specific location to view and manage downtime events associated with that location. The tree structure allows for easy navigation through different levels of the production line.

## Downtime Reason Tree
**Example:**

![Downtime Reason Tree showing categorized list of possible downtime reasons](./images/downtime-entry-reason-tree.png)

**Description:**
- The Downtime Reason Tree displays the available downtime reasons that can be selected when entering a downtime event. Users can select a reason to view and manage downtime events associated with that reason. The tree structure allows for easy navigation through different categories of downtime reasons.

## Downtime Event Table
**Example:**

![Downtime Event Table showing list of downtime events with details about duration, location, and reason](./images/downtime-entry-event-table.png)

**Description:**
- The Downtime Event Table displays a list of downtime events that have been entered for the selected location and downtime reason. Each row in the table represents a specific downtime event.

### Components

#### Table Columns
| **Column**          | **Description**                                                                                                                                 |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **Start Date**      | Start date of the downtime event.                                                                                                               |
| **End Date**        | End date of the downtime event.                                                                                                                 |
| **Duration**        | Duration of the downtime event.                                                                                                                 |
| **State**           | State of the Location during the downtime event.                                                                                                |
| **Location**        | Location that the downtime event is occuring for.                                                                                               |
| **Color**           | TODO Color of the state of the downtime event.                                                                                                  |
| **Type**            | Type of the downtime event.                                                                                                                     |
| **Downtime Reason** | Downtime reason associated with the downtime event. see [OEE Downtime Reason Model](../../appendix/data-model/oee-model/oee-downtime-reason.md) |
| **Notes**           | Additional notes or comments about the downtime event.                                                                                          |
| **Acknowledged**    | Boolean of whether the downtime event has been acknowledged.                                                                                    |

#### Table Buttons

##### View Event Details

- The `View Event Details` button, ![View Event Details Button](./images/line-overview-button-view-event-details.png#icon), opens the Downtime Event Details popup:

![Downtime Event Details popup showing detailed information about the selected downtime event](./images/line-overview-downtime-event-details-popup.png)

- **Sections:**
  - **Top Bar State:** displays the current [State](terms-and-definitions#state) of the downtime event and its corresponding color.
  - **Basic and Timing Information:** Displays the basic information about the downtime event, including the following:
      - Location
      - Calculation Type
      - Duration
      - Start Date
      - End Date
      - Acknowledged (Yes/No)
      - Acknowledged By
      - Notes
  - **Downtime Information:** Displays the information about the downtime, including the following:
      - Downtime Reason
      - Reason Path
      - Interruption Location

##### Acknowledge Event

- The `Acknowledge Downtime Event` button, ![Acknowledge Downtime Event Button](./images/line-overview-button-acknowledge-event.png#icon), opens the Acknowledge Downtime Event popup:

![Acknowledge Downtime Event popup with acknowledgment confirmation and notes field](./images/line-overview-acknowledge-downtime-event-popup.png)

- **Sections:**
  - **Confirm:** Click `Confirm` to acknowledge the selected downtime event, marking it as reviewed and preventing further edits.

##### Set Reason Code
 
- The `Set Downtime Reason` button, ![Set Downtime Reason Button](./images/button-set-reason.png#icon), opens the downtime reason selection popup:

![Downtime reason selection popup with hierarchical tree of reasons and notes field](./images/downtime-reason-popup.png)

- **Sections:**
  - **Downtime Reason Selection Tree:** Allows users to select a reason for the downtime event from a hierarchical list of predefined reasons.
  - **Acknowledge Button:** Clicking this button acknowledges the downtime event, marking it as reviewed and preventing further edits.
  - **Notes Field:** A text field for users to add additional notes or comments related to the downtime event.

##### Split Downtime Event
- The `Split Downtime Event` button, ![Split Downtime Event Button](./images/button-split-event.png#icon), opens the Split Downtime Event popup:

![Split Downtime Event popup with slider to select the split point between two events](./images/split-event-popup.png)

- **Sections:**
  - **Slider:** Select and drag the middle slider to choose the split point for the downtime event.
  - **Confirm:** Click `Confirm` to split the selected downtime event into two separate events at the chosen point.