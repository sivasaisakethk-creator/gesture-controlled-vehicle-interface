# Gesture-Controlled Vehicle Interface

## Overview

This project is a gesture-based vehicle control system built using a Microsoft Micro:bit and its onboard 3-axis accelerometer.

The controller interprets hand movements and converts them into directional navigation commands that can be used to operate a robotic vehicle.

The project was developed as a standalone control interface and serves as a foundation for future wireless robotic vehicle integration.

---

## Features

* 8-direction gesture recognition
* Forward, backward, left and right navigation
* Diagonal movement support
* Variable speed control (3 speed levels)
* Normal mode and Sport mode
* Emergency stop functionality
* Real-time accelerometer sensing
* Serial telemetry output

---

## Hardware

* Microsoft Micro:bit V2
* Built-in Accelerometer
* USB Interface

---

## Control Scheme

| Gesture             | Action              |
| ------------------- | ------------------- |
| Tilt Forward        | Move Forward        |
| Tilt Backward       | Move Backward       |
| Tilt Left           | Turn Left           |
| Tilt Right          | Turn Right          |
| Tilt Forward Left   | Move Forward Left   |
| Tilt Forward Right  | Move Forward Right  |
| Tilt Backward Left  | Move Backward Left  |
| Tilt Backward Right | Move Backward Right |

### Buttons

| Input | Function                   |
| ----- | -------------------------- |
| A     | Toggle Normal / Sport Mode |
| A + B | Emergency Stop             |

---

## Speed Levels

The controller supports three speed levels based on tilt intensity:

* Speed 1 (Low)
* Speed 2 (Medium)
* Speed 3 (High)

---

## Future Improvements

* Wireless communication
* Bluetooth connectivity
* ESP32 vehicle integration
* Autonomous navigation modes
* Telemetry dashboard

---

## Skills Demonstrated

* Embedded Systems
* Accelerometer Integration
* Human-Machine Interfaces
* Gesture Recognition
* Signal Processing
* Rapid Prototyping

---

## Demonstration

See the demo video for a complete showcase of the controller and its functionality.

