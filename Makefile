CONFIG ?=

build:
	ln -s $(CONFIG) config.yaml
	ergogen . || unlink config.yaml
	unlink config.yaml 2> /dev/null

clean:
	rm -rf output 2> /dev/null
	unlink config.yaml 2> /dev/null
