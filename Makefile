CONFIG ?=

build:
	ln -s $(CONFIG) config.yaml
	ergogen . || unlink config.yaml
	unlink config.yaml 2> /dev/null

case:
	@echo Go To https://3d.hrg.hr/jscad/V1/
	@echo Drop the jscad file on bototm left
	@echo Download STL file

clean:
	rm -rf output 2> /dev/null
	unlink config.yaml 2> /dev/null
