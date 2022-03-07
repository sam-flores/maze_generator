# maze_generator

daniel shiffman's recursive backtracker maze generator code.

Starting in the top left corner and randomly walking from cell to cell randomly selecting unvisited cells. Once the current searched cell is surrounded by cells that have been visited the program calls the recursive back tracker. While walking, the program has coninuously logged all the previous spots into a stack so it may now go backwards in the search to find unvisited cells. The process continues until there are no more cells in the stack left to visit.
 
