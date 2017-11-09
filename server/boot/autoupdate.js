module.exports = function (app, cb) {
  var ds = app.datasources.psql;

  if (ds.connected) {
    ds.autoupdate(cb);
  } else {
    ds.once('connected', function () {
      ds.autoupdate(cb);
    });
  }
};