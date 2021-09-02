#!/usr/bin/env node
import { getGameData, description } from '../src/games/progression.js';
import runGame from '../src/index.js';

runGame(getGameData, description);
