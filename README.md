# Rergo

RDC ergo keyboard design

# V1

![PCB Design](/images/rergo.png)

[rergo-v1 design](/designs/v1/)

# Generate KiCad File

```
git clone https://github.com/benvallack/ergogen.git
docker run -it -v $(pwd)/ergogen:/opt node /bin/bash
cd /opt
npm install
node src/cli.js input/config-rergo.yaml -o rergo_output
```
