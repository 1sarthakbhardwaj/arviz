(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("cc8e1897-be57-44e2-a7e0-cceaa1d9a971");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cc8e1897-be57-44e2-a7e0-cceaa1d9a971' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js": "qkRvDQVAIfzsJo40iRBbxt6sttt0hv4lh74DG7OK4MCHv4C5oohXYoHUM5W11uqS", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js": "Sb7Mr06a9TNlet/GEBeKaf5xH3eb6AlCzwjtU82wNPyDrnfoiVl26qnvlKjmcAd+", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js": "HaJ15vgfmcfRtB4c4YBOI4f1MUujukqInOWVqZJZZGK7Q+ivud0OKGSTn/Vm2iso"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e1d7ab52-5614-40a3-a33e-7235a16c5f5c":{"roots":{"references":[{"attributes":{"overlay":{"id":"67532"}},"id":"67528","type":"BoxZoomTool"},{"attributes":{},"id":"67516","type":"LinearScale"},{"attributes":{},"id":"67488","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[512]}},"selected":{"id":"67578"},"selection_policy":{"id":"67577"}},"id":"67556","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"67571"},"ticker":{"id":"67523"}},"id":"67522","type":"LinearAxis"},{"attributes":{},"id":"67479","type":"DataRange1d"},{"attributes":{"data_source":{"id":"67556"},"glyph":{"id":"67557"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67558"},"selection_glyph":null,"view":{"id":"67560"}},"id":"67559","type":"GlyphRenderer"},{"attributes":{},"id":"67512","type":"DataRange1d"},{"attributes":{"axis":{"id":"67522"},"dimension":1,"ticker":null},"id":"67525","type":"Grid"},{"attributes":{"text":""},"id":"67546","type":"Title"},{"attributes":{},"id":"67577","type":"UnionRenderers"},{"attributes":{},"id":"67514","type":"LinearScale"},{"attributes":{"axis":{"id":"67487"},"ticker":null},"id":"67490","type":"Grid"},{"attributes":{},"id":"67529","type":"SaveTool"},{"attributes":{"children":[{"id":"67478"},{"id":"67509"}]},"id":"67561","type":"Row"},{"attributes":{"text":""},"id":"67565","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67526"},{"id":"67527"},{"id":"67528"},{"id":"67529"},{"id":"67530"},{"id":"67531"}]},"id":"67533","type":"Toolbar"},{"attributes":{},"id":"67523","type":"BasicTicker"},{"attributes":{},"id":"67510","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67501","type":"BoxAnnotation"},{"attributes":{},"id":"67492","type":"BasicTicker"},{"attributes":{},"id":"67483","type":"LinearScale"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67542","type":"Quad"},{"attributes":{},"id":"67526","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67558","type":"Line"},{"attributes":{},"id":"67519","type":"BasicTicker"},{"attributes":{},"id":"67527","type":"WheelZoomTool"},{"attributes":{"source":{"id":"67556"}},"id":"67560","type":"CDSView"},{"attributes":{"below":[{"id":"67518"}],"center":[{"id":"67521"},{"id":"67525"}],"left":[{"id":"67522"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67559"}],"title":{"id":"67565"},"toolbar":{"id":"67533"},"x_range":{"id":"67510"},"x_scale":{"id":"67514"},"y_range":{"id":"67512"},"y_scale":{"id":"67516"}},"id":"67509","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"#000000"},"left":{"field":"left"},"line_alpha":{"value":0},"line_color":{"value":"#000000"},"right":{"field":"right"},"top":{"field":"top"}},"id":"67541","type":"Quad"},{"attributes":{},"id":"67485","type":"LinearScale"},{"attributes":{"items":[{"id":"67555"}]},"id":"67554","type":"Legend"},{"attributes":{"overlay":{"id":"67501"}},"id":"67497","type":"BoxZoomTool"},{"attributes":{"source":{"id":"67540"}},"id":"67544","type":"CDSView"},{"attributes":{},"id":"67573","type":"BasicTickFormatter"},{"attributes":{},"id":"67548","type":"BasicTickFormatter"},{"attributes":{},"id":"67571","type":"BasicTickFormatter"},{"attributes":{},"id":"67550","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"67487"}],"center":[{"id":"67490"},{"id":"67494"},{"id":"67554"}],"left":[{"id":"67491"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67543"}],"title":{"id":"67546"},"toolbar":{"id":"67502"},"x_range":{"id":"67479"},"x_scale":{"id":"67483"},"y_range":{"id":"67481"},"y_scale":{"id":"67485"}},"id":"67478","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"67540"},"glyph":{"id":"67541"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67542"},"selection_glyph":null,"view":{"id":"67544"}},"id":"67543","type":"GlyphRenderer"},{"attributes":{"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"top":{"__ndarray__":"nMQgsHJokT8730+Nl26yP9NNYhBYOcQ/ObTIdr6fyj8OLbKd76fGPzMzMzMzM8M/SgwCK4cWuT8zMzMzMzOzP3npJjEIrJw/+n5qvHSTiD/8qfHSTWJgP/yp8dJNYmA/AAAAAAAAAAAAAAAAAAAAAPyp8dJNYlA/","dtype":"float64","order":"little","shape":[15]}},"selected":{"id":"67552"},"selection_policy":{"id":"67551"}},"id":"67540","type":"ColumnDataSource"},{"attributes":{},"id":"67500","type":"HelpTool"},{"attributes":{"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"67557","type":"Line"},{"attributes":{},"id":"67481","type":"DataRange1d"},{"attributes":{"axis":{"id":"67518"},"ticker":null},"id":"67521","type":"Grid"},{"attributes":{},"id":"67578","type":"Selection"},{"attributes":{},"id":"67531","type":"HelpTool"},{"attributes":{},"id":"67530","type":"ResetTool"},{"attributes":{},"id":"67551","type":"UnionRenderers"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"67543"}]},"id":"67555","type":"LegendItem"},{"attributes":{"formatter":{"id":"67550"},"ticker":{"id":"67488"}},"id":"67487","type":"LinearAxis"},{"attributes":{"formatter":{"id":"67573"},"ticker":{"id":"67519"}},"id":"67518","type":"LinearAxis"},{"attributes":{},"id":"67499","type":"ResetTool"},{"attributes":{"formatter":{"id":"67548"},"ticker":{"id":"67492"}},"id":"67491","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67532","type":"BoxAnnotation"},{"attributes":{},"id":"67495","type":"PanTool"},{"attributes":{},"id":"67496","type":"WheelZoomTool"},{"attributes":{},"id":"67498","type":"SaveTool"},{"attributes":{"axis":{"id":"67491"},"dimension":1,"ticker":null},"id":"67494","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67495"},{"id":"67496"},{"id":"67497"},{"id":"67498"},{"id":"67499"},{"id":"67500"}]},"id":"67502","type":"Toolbar"},{"attributes":{},"id":"67552","type":"Selection"}],"root_ids":["67561"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"e1d7ab52-5614-40a3-a33e-7235a16c5f5c","root_ids":["67561"],"roots":{"67561":"cc8e1897-be57-44e2-a7e0-cceaa1d9a971"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();