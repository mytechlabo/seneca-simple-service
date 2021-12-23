var seneca = require("seneca")();

// fixed rate
seneca.add({ cmd: "salestax" }, function (msg, done) {
  var rate = 0.23;
  var total = msg.net * (1 + rate);
  done(null, { total: total });
});

// local rates
seneca.add({ cmd: "salestax", country: "US" }, function (msg, done) {
  var state = {
    NY: 0.04,
    CA: 0.0625,
    // ...
  };
  var rate = state[msg.state];
  var total = msg.net * (1 + rate);
  done(null, { total: total });
});

// categories
seneca.add({ cmd: "salestax", country: "IE" }, function (msg, done) {
  var category = {
    top: 0.23,
    reduced: 0.135,
    // ...
  };
  var rate = category[msg.category];
  var total = msg.net * (1 + rate);
  done(null, { total: total });
});

seneca.act("cmd:salestax,net:100,country:DE", function (err, result) {
  console.log("DE: " + result.total);
});

seneca.act("cmd:salestax,net:100,country:US,state:NY", function (err, result) {
  console.log("US,NY: " + result.total);
});

seneca.act("cmd:salestax,net:100,country:IE,category:reduced", function (err, result) {
  console.log("IE: " + result.total);
});
