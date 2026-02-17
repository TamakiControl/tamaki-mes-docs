# Overall Equipment Effectiveness (OEE) Model

The Overall Equipment Effectiveness (OEE) model is designed to track and manage equipment performance within a manufacturing environment.

---

### 1. OEE Alarm

Defines the configuration for OEE alarms at a specific location. The entity contains several parameters that control how
alarms are processed including the Ignition tag that triggers the alarms, the minimum alarm priority to include in 
events, and a filter label to determine what alarms to include.

### 2. OEE Alarm Record

Represents a historical record of an alarm event within the OEE system. Each object captures the state and metadata of 
Ignition alarms for OEE analysis and reporting. The entity contains several parameters such as the location and Oee 
State Record corresponding to the alarm record, the Ignition source that produced the alarm, and the time the alarm was
active.

### 3. OEE Configuration

Represents a configuration for an OEE provider for a given location in the factory. The entity contains several 
parameters to determine how OEE is calculated. Parameters include the location the configuration belongs to, parameters
defining machine production count, parameters defining quality calculation, parameters defining production rate, and 
parameters defining production order, among others.

### 4. OEE Downtime Reason

Represents the reason for downtime at a location. The entity contains properties including the parent location for the 
downtime reason, a fault lookup code for the reason, a description of the downtime reason, and a hierarchical path for 
the downtime reason.

### 5. OEE Mode

Represents a mode of operation for an OEE Configuration. Modes in OEE are used primarily to calculate TEEP 
(Total Effective Equipment Performance). These modes tell the system if the time period that a machine is in a given 
mode should be considered scheduled/unscheduled time that the machine is supposed to be running. The entity contains 
properties including OEE calculation type, expected duration for the mode, and location the mode belongs to.

### 6. OEE Mode Record

Represents a record of an Oee Mode event. The entity contains properties including the start and end time of the record,
the calculation type for the OEE mode, the location for the record, and the status of the OEE record.

### 7. OEE Record

Stores information for Past/Current runs in SQL to be reported on later. The entity contains several properties 
including the start and end time of the OEE record, the expected, quality, and total production units count, and the 
standard rate of production.

### 8. OEE State

Represents a configuration for a machine state for use in OEE calculations. Each OEE State has a calculation type 
corresponding to a machine state (e.g RUNNING, STARVED, BLOCKED, etc) which affects how the state is incorporated in OEE
calculations. The entity also contains properties such as configuration parent location, a unique integer code, and an 
auto acknowledge flag.

### 9. OEE State Record

Represents a recording of an OEE state event. The entity contains several properties including the start and end date 
time for the record, status of the machine during the record, a list of OEE records associated with the state record,
and if the record has been acknowledged and if so when and by whom.

---

Each entity in this model supports specific OEE tracking, performance monitoring, and efficiency measurement tasks, 
enhancing the overall equipment effectiveness management within the system.
