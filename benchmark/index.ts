import { execSync } from 'child_process';
import path from 'path';

process.chdir(
  path.resolve(__dirname)
);

interface Times {
  oset: number[];
  _set: number[];
}

let times: Times = {
  oset: [],
  _set: []
};

let bench = (lib: keyof Times) => {
  for (let i = 1; i <= 1000; i++) {
    console.log(`[${lib}] ${i}...`);

    let res = String(
      execSync(`node ./${lib}.js`)
    ).split('\n');

    times[lib].push(
      parseInt(res[res.length - 2])
    );
  }
}

let print = (lib: keyof Times) => console.log(
  `[${lib}] average time:`,
  times[lib].reduce((a, b) => a + b, 0) / times[lib].length
);

bench('oset');
bench('_set');

print('oset');
print('_set');
