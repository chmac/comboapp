scripts
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/scripts.svg)](https://npmjs.org/package/scripts)
[![Downloads/week](https://img.shields.io/npm/dw/scripts.svg)](https://npmjs.org/package/scripts)
[![License](https://img.shields.io/npm/l/scripts.svg)](https://github.com/chmac/comboapp/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g scripts
$ scripts COMMAND
running command...
$ scripts (-v|--version|version)
scripts/0.1.0 darwin-x64 node-v13.5.0
$ scripts --help [COMMAND]
USAGE
  $ scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`scripts hello [FILE]`](#scripts-hello-file)
* [`scripts help [COMMAND]`](#scripts-help-command)

## `scripts hello [FILE]`

describe the command here

```
USAGE
  $ scripts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ scripts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/chmac/comboapp/blob/v0.1.0/src/commands/hello.ts)_

## `scripts help [COMMAND]`

display help for scripts

```
USAGE
  $ scripts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
