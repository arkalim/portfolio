#!/usr/bin/env node

var spawnSync = require('child_process').spawnSync;

var cli = require('../');


var args = process.argv;

if (/node(\.exe)?$|iojs$|nodejs$/.test(args[0])) {
  args = args.slice(2);
}

var options = {
  verbose: args.find((a) => /-([^\s]*v[^\s]*|-verbose)/.test(a))
};

cli.withHugo(options, function(err, hugoPath) {

  if (err) {
    console.error('failed to grab hugo :-(');
    console.error(err);

    process.exit(1);
  }

  process.exit(spawnSync(hugoPath, args, { stdio: 'inherit' }).status);
});

