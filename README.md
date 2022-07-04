# Rergo

RDC ergo keyboard design

# V1

IMG: LINK TBC
DESIGN: LINK TBC

# Generate KiCad File

```
git clone https://github.com/benvallack/ergogen.git
docker run -it -v $(pwd)/ergogen:/opt node /bin/bash
cd /opt
node src/cli.js input/config-rergo.yaml -o rergo_output
```
