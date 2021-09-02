#!/usr/bin/env node
import { getGameData, description } from '../src/games/prime.js';
import runGame from '../src/index.js';

runGame(getGameData, description);
