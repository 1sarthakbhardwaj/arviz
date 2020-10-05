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
    
      
      
    
      var element = document.getElementById("dc63b5fc-c71c-4bbc-9eb0-3a8fe8a591ed");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'dc63b5fc-c71c-4bbc-9eb0-3a8fe8a591ed' but no matching script tag was found.")
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
                    
                  var docs_json = '{"522b05e8-897a-4d24-a137-37396299a0f8":{"roots":{"references":[{"attributes":{"above":[{"id":"67931"}],"below":[{"id":"67883"}],"center":[{"id":"67886"},{"id":"67890"}],"left":[{"id":"67887"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"67913"},{"id":"67918"},{"id":"67923"},{"id":"67928"},{"id":"67930"}],"title":{"id":"67934"},"toolbar":{"id":"67901"},"toolbar_location":null,"x_range":{"id":"67875"},"x_scale":{"id":"67879"},"y_range":{"id":"67877"},"y_scale":{"id":"67881"}},"id":"67874","subtype":"Figure","type":"Plot"},{"attributes":{"text":"b"},"id":"67934","type":"Title"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"67928"},{"id":"67923"}]},"id":"67933","type":"LegendItem"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67921","type":"Line"},{"attributes":{"children":[[{"id":"67874"},0,0]]},"id":"67952","type":"GridBox"},{"attributes":{"data_source":{"id":"67925"},"glyph":{"id":"67926"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67927"},"selection_glyph":null,"view":{"id":"67929"}},"id":"67928","type":"GlyphRenderer"},{"attributes":{},"id":"67945","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"67920"},"glyph":{"id":"67921"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67922"},"selection_glyph":null,"view":{"id":"67924"}},"id":"67923","type":"GlyphRenderer"},{"attributes":{},"id":"67888","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67917","type":"Line"},{"attributes":{},"id":"67892","type":"PanTool"},{"attributes":{"source":{"id":"67920"}},"id":"67924","type":"CDSView"},{"attributes":{},"id":"67943","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"67922","type":"Line"},{"attributes":{},"id":"67946","type":"Selection"},{"attributes":{"source":{"id":"67910"}},"id":"67914","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67948"},"selection_policy":{"id":"67947"}},"id":"67925","type":"ColumnDataSource"},{"attributes":{},"id":"67940","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"67910"},"glyph":{"id":"67911"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67912"},"selection_glyph":null,"view":{"id":"67914"}},"id":"67913","type":"GlyphRenderer"},{"attributes":{},"id":"67942","type":"Selection"},{"attributes":{"source":{"id":"67915"}},"id":"67919","type":"CDSView"},{"attributes":{"axis_label":"ESS","formatter":{"id":"67938"},"ticker":{"id":"67888"}},"id":"67887","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67926","type":"Circle"},{"attributes":{},"id":"67944","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67891"},{"id":"67892"},{"id":"67893"},{"id":"67894"},{"id":"67895"},{"id":"67896"},{"id":"67897"},{"id":"67898"}]},"id":"67901","type":"Toolbar"},{"attributes":{},"id":"67877","type":"DataRange1d"},{"attributes":{},"id":"67938","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67900","type":"PolyAnnotation"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"67913"},{"id":"67918"}]},"id":"67932","type":"LegendItem"},{"attributes":{},"id":"67891","type":"ResetTool"},{"attributes":{"source":{"id":"67925"}},"id":"67929","type":"CDSView"},{"attributes":{},"id":"67897","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67944"},"selection_policy":{"id":"67943"}},"id":"67915","type":"ColumnDataSource"},{"attributes":{},"id":"67879","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67911","type":"Circle"},{"attributes":{"click_policy":"hide","items":[{"id":"67932"},{"id":"67933"}],"location":"center_right","orientation":"horizontal"},"id":"67931","type":"Legend"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBoscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67942"},"selection_policy":{"id":"67941"}},"id":"67910","type":"ColumnDataSource"},{"attributes":{},"id":"67947","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"67916","type":"Line"},{"attributes":{},"id":"67875","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67927","type":"Circle"},{"attributes":{"callback":null},"id":"67898","type":"HoverTool"},{"attributes":{"children":[{"id":"67954"},{"id":"67952"}]},"id":"67955","type":"Column"},{"attributes":{"toolbar":{"id":"67953"},"toolbar_location":"above"},"id":"67954","type":"ToolbarBox"},{"attributes":{},"id":"67948","type":"Selection"},{"attributes":{"overlay":{"id":"67899"}},"id":"67893","type":"BoxZoomTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"67940"},"ticker":{"id":"67884"}},"id":"67883","type":"LinearAxis"},{"attributes":{"axis":{"id":"67887"},"dimension":1,"ticker":null},"id":"67890","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkAD5BVCu9ZkQIkda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"67946"},"selection_policy":{"id":"67945"}},"id":"67920","type":"ColumnDataSource"},{"attributes":{},"id":"67894","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"67900"}},"id":"67895","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"67915"},"glyph":{"id":"67916"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"67917"},"selection_glyph":null,"view":{"id":"67919"}},"id":"67918","type":"GlyphRenderer"},{"attributes":{},"id":"67896","type":"UndoTool"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"67930","type":"Span"},{"attributes":{},"id":"67884","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67899","type":"BoxAnnotation"},{"attributes":{},"id":"67881","type":"LinearScale"},{"attributes":{},"id":"67941","type":"UnionRenderers"},{"attributes":{"axis":{"id":"67883"},"ticker":null},"id":"67886","type":"Grid"},{"attributes":{"toolbars":[{"id":"67901"}],"tools":[{"id":"67891"},{"id":"67892"},{"id":"67893"},{"id":"67894"},{"id":"67895"},{"id":"67896"},{"id":"67897"},{"id":"67898"}]},"id":"67953","type":"ProxyToolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"67912","type":"Circle"}],"root_ids":["67955"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"522b05e8-897a-4d24-a137-37396299a0f8","root_ids":["67955"],"roots":{"67955":"dc63b5fc-c71c-4bbc-9eb0-3a8fe8a591ed"}}];
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