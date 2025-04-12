# rergo v2

Custom made keyboard using ergopad, ergogen and kicad

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