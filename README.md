# rergo v3.1

Custom made keyboard using ergopad, ergogen and kicad

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