import chalk from 'chalk';
import * as discord from 'discord.js';
import Log4js from 'log4js';

const LOGGER = Log4js.getLogger('index.ts');
LOGGER.level = 'debug';

LOGGER.info(chalk.green('Starting bot...'));