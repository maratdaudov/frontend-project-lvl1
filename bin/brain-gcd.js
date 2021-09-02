#!/usr/bin/env node
import { getGameData, description } from '../src/games/gcd.js';
import runGame from '../src/index.js';

runGame(getGameData, description);
