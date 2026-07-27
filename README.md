# rergo v4.0.3

Custom made keyboard using ergopad, ergogen and kicad

# V4

![PCB Design](/images/rergo-v4.0.1.png)

[rergo v4 design](/designs/v4/)

[rergo v4 kicad](/kicad/v4/)

[rergo v4 zmk config](/zmk-config/v4/)

# V3

![PCB Design](/images/rergo-v3.1.png)

[rergo v3 design](/designs/v3/)

[rergo v3 kicad](/kicad/v3/)

[rergo v3 zmk config](/zmk-config/v3/)

# V2

![PCB Design](/images/rergo-v2.png)

[rergo v2 design](/designs/v2/)

![ergopad and ergogen overlay](/images/rergo-v2-ergogen-overlay.jpg)

# V1

![PCB Design](/images/rergo-v1.png)

[rergo v1 design](/designs/v1/)

### Firmware (ZMK)

The keyboard runs [ZMK](https://zmk.dev). v4 firmware lives in its own repo (`zmk-config`); earlier versions are under [/zmk-config/v3/](/zmk-config/v3/). It builds a custom out-of-tree shield `rergo` for the **nice_nano v2**, split left/right.

* **Docker image must match ZMK's Zephyr version.** ZMK `main` pulls Zephyr 4.1, which needs Zephyr SDK 0.16/0.17 → use `zmkfirmware/zmk-build-arm:4.1-branch`. The `4.4-branch` image (SDK 1.0.1) is incompatible and will not build.
* First-time setup (fetches ~2GB into gitignored dirs): from the config repo root,
    ```
    docker run --rm -v"$(pwd)":/tmp/zmk-config -w /tmp/zmk-config zmkfirmware/zmk-build-arm:4.1-branch \
      bash -c 'west update && west zephyr-export'
    ```
* Build a target (`rergo_left` / `rergo_right` / `settings_reset`; see `build.yaml`). Run `west zephyr-export` again in the same container — it does not persist across `docker run`:
    ```
    docker run --rm -v"$(pwd)":/tmp/zmk-config -w /tmp/zmk-config zmkfirmware/zmk-build-arm:4.1-branch bash -c '
      west zephyr-export >/dev/null 2>&1
      west build -s zmk/app -d build/left -b "nice_nano//zmk" -S studio-rpc-usb-uart -- \
        -DSHIELD=rergo_left -DZMK_CONFIG=/tmp/zmk-config/config \
        -DZMK_EXTRA_MODULES=/tmp/zmk-config -DCONFIG_ZMK_STUDIO=y'
    ```
    Output is `build/<target>/zephyr/zmk.uf2`. Flash by double-tapping reset and copying the `.uf2` to the `NICENANO` USB drive.
* **Left half is central** (USB + ZMK Studio); right half is a BLE peripheral. Flash the matching `.uf2` to each.
* `settings_reset.uf2` clears stored BLE bonds — flash to both halves if pairing gets stuck, then reflash the normal firmware.

### Testing / bring-up

You do **not** need every diode and switch soldered to test a key — each key is an independent path (`col → switch → diode → row`). Test with only the nice_nano + that key's diode soldered; **bridge the switch pads with tweezers** to simulate a press.

Order of operations:
1. **Before soldering the nice_nano**: continuity-check every diode's orientation (see Diode Notes — cathode/`|` toward the row).
2. **Solder + flash the nice_nano**, then confirm the left half enumerates over USB (types characters / shows up in [ZMK Studio](https://studio.zmk.dev), enabled in this firmware).
3. **Walk the matrix**: short each key's pads with tweezers and watch the character appear in a text editor or key highlight in ZMK Studio. A key that never registers → recheck that key's diode joint and its col/row solder.
4. Only after the whole matrix reads correctly, solder the switches. Repeat for the right half (flash `rergo_right.uf2`, or pair it to the left and test via Studio).

Multimeter checks (power off):
* Use **diode mode** (not plain continuity) when a diode is in the path — `col2row` means it conducts col → row only. Red on the col pad, black on the row pad → ~0.5–0.7 V when pressed, open when released; reversed probes stay open (confirms diode direction).
* Plain continuity: switch pad ↔ its nice_nano pin pad (catches cold joints); adjacent col/row pins should **not** be connected when idle (catches bridges).

Deeper firmware debugging: add `CONFIG_ZMK_USB_LOGGING=y` to `config/rergo.conf`, rebuild, and open the USB serial port to see raw key press/release events with position numbers (turn it off for daily use — it raises power draw).

### KiCad Notes

`x` to start routing


`v` to create via when routing


`Round Tracks` plugin to round traces (**some traces might require deleting and redoing and re applying the plugin**)


`Edit > Edit Teardrops > Apply` to create teardrops on vias (**might also require some re doing of tracks and re applying of teardrop**)


`ctr + tab` changes the views (back vs. front layers)


### Soldering notes

* remember to bridge the pads under the nice-nano with solder
* connections can be checked with a multi-meter to verify pads have been soldered properly
* battery connector pads also need to be bridged, but these will be on the other side of the board

#### Diode Notes

POS ->|- GND

- Ground should face where the `|` is
- Measure with multimeter using continuity tool
    - Voltage will drop when direction is found
- Current diode choice will have:
    - lettering at the top (right side up) when Ground is on the left
    - lettering at the bottom (up side down) when Ground is on the right
    - Left Side Half: Diodes with lettering facing up
    - Right Side Half: Diode with lettering facing down
    - Diodes go at the bottom of the board

### PCB manufacturing notes

* File > Fabrication Outputs > Gerbers
* F&B: Cu, Paste, Silkscreen, Mask and Edge.Cuts
Output Folder: gerber
* Generate Drill Files... > Generate
* Plot

### Desoldering notes
- add solder to the iron
- hold the keyboard between legs
- use fingernail to press on the middle of the keyswitch whilst heating up both prongs, one after the other
- once the switch is loose, change the grip to hold the switch on both sides
- heat both prongs 1 at the time whilst wiggle switch out
- to clean switch, use solder wick
    - heat the prong next to the wick and slide the prong out of the wick
- Extra Notes
    - if prong seems stuck, add more solder
    - drop the switch as soon as it's out, it's REALLY hot, you'll get burnt