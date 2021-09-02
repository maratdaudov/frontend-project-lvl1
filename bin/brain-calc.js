#!/usr/bin/env node
import { getGameData, description } from '../src/games/calc.js';
import runGame from '../src/index.js';

runGame(getGameData, description);
