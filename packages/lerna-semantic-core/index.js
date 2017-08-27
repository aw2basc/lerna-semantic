var pino = require("pino")({ prettyPrint: true });

pino.info("lerna-semantic-core");
pino.info(`\n${require("@jmaxwell/lerna-semantic-utils")}`);
pino.info(require("@jmaxwell/lerna-semantic-component"));
