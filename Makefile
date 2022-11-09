# Workspace command

clas = $(shell bash -c 'read -p "Write your project name ? " talk; echo $$talk')
class:
	nx workspace-schematic class 1 --project=$(clas)

func = $(shell bash -c 'read -p "Write your project name ? " talk; echo $$talk')
function:
	nx workspace-schematic function 1 --project=$(func)

com = $(shell bash -c 'read -p "Write your project name ? " talk; echo $$talk')
component:
	nx workspace-schematic component 1 --project=$(com)


# Git command

chec = $(shell bash -c 'read -p "Choose your branch [main,web/landing] ? " talk; echo $$talk ')
checkout:
	git checkout $(chec)

pul = $(shell bash -c 'read -p "Choose your branch [main,web/landing] ? " talk; echo $$talk ')
pull:
	git pull origin $(pul)

commit:
	git add .
	npm run commit

pus = $(shell bash -c 'read -p "Choose your branch [main,web/landing] ? " talk; echo $$talk ')
push:
	git push origin $(pus)
