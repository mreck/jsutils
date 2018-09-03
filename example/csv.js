const fsrcsv = require('../lib/fsrcsv');

const print = (n, d) => process.stdout.write(n + ' ' + JSON.stringify(d, null, 2) + '\n');
const fn = __dirname + '/avengers.csv';

const avengers = fsrcsv(fn);
print('avengers:', avengers);

const avengers_obj_header = fsrcsv.obj(fn);
print('avengers_obj_header:', avengers_obj_header);

const avengers_obj_no_header = fsrcsv.obj(fn, { header: false });
print('avengers_obj_no_header:', avengers_obj_no_header);
