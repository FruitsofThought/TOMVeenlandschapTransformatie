"use strict";
define(
  ['require', 'scene'],
  function(require, Scene) {

    class TOMVeenlandschapTransformatie extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMVeenlandschapTransformatie");
          var config = {
            "id": "TOMVeenlandschapTransformatie",
            "groupid": "landscape",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
    };

    return new TOMVeenlandschapTransformatie();

  });
