var seneca = require("seneca")();

// Node 1
// seneca.add({ cmd: "salestax" }, function (msg, done) {
//   console.log(msg);
//   var rate = 0.23;
//   var total = msg.net * (1 + rate);
//   done(null, { total: total });
// });

// seneca.act({ cmd: "salestax", net: 100 }, function (err, result) {
//   console.log(result.total);
// });

// Node 2
// seneca.add({ cmd: "config" }, function (msg, done) {
//   console.log(msg);
//   var config = { rate: 0.23 };
//   var value = config[msg.prop];
//   done(null, { value: value });
// });

// seneca.add({ cmd: "salestax" }, function (msg, done) {
//   seneca.act({ cmd: "config", prop: "rate" }, function (err, result) {
//     console.log(result);
//     var rate = parseFloat(result.value);
//     var total = msg.net * (1 + rate);
//     done(null, { total: total });
//   });
// });

// seneca.act({ cmd: "salestax", net: 100 }, function (err, result) {
//   console.log(result.total);
// });
