MKDIR emptyFolder

IF %1.==. GOTO No1

robocopy emptyFolder\ %1\ /E /PURGE /NP /MT:128
GOTO End1

:No1
robocopy emptyFolder\ _node_modules\ /E /PURGE /NP /MT:128
GOTO End1

:End1
RD emptyFolder
