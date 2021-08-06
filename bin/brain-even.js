#!/usr/bin/env node
import checkParity from '../src/check-parity.js';
import { askName } from '../src/cli.js';

askName();
checkParity();
