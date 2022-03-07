# maze_generator

daniel shiffman's recursive backtracker maze generator code.

Starting in the top left corner and randomly walking around the maze searching for cells which have not
been visited. once it is surrounded by cells that have been visited it now calls the recursive back tracker. while walking
the program has coninuously logged all the previous spots into a stack so it may now go backwards in search of univisited cells.
if it is surrounded by more than one unvisited cell a random cell is chosen to visit. the process continues until there are no
more cells in the stack left to visit.
 
