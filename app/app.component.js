(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Hello Angular2JS</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://v2.angular.io/license
*/