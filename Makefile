CONFIG ?=
CASE ?=

build:
	ln -s $(CONFIG) config.yaml
	ergogen . || unlink config.yaml
	unlink config.yaml 2> /dev/null

case-online:
	@echo Go To https://3d.hrg.hr/jscad/V1/
	@echo Drop the jscad file on bototm left
	@echo Download STL file

case:
	npx @jscad/cli@1 output/cases/$(CASE).jscad -of stla -o output/cases/$(CASE).stl

logo-footprints:
	@echo Open KiCad - Image Converter
	@echo Load Source Image
	@echo Update the MM size
	@echo Output Format: footprint
	@echo Export to clipboard - Save in a raw file
	@echo Complete the templates/image.template.js file witht he clipboard copied points

eg:
	@echo make build CONFIG=$(pwd)/designs/v2/rergo-config.yaml && open output/pcbs/rergo.kicad_pcb

clean:
	rm -rf output 2> /dev/null
	unlink config.yaml 2> /dev/null
