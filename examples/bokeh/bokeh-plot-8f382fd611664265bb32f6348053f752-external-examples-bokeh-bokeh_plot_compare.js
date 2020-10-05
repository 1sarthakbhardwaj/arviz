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
    
      
      
    
      var element = document.getElementById("0dd2dc4b-f4cb-4d66-ae65-5f377950c9e9");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '0dd2dc4b-f4cb-4d66-ae65-5f377950c9e9' but no matching script tag was found.")
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
                    
                  var docs_json = '{"3dfd352a-4a23-4299-860b-d43881417dd6":{"roots":{"references":[{"attributes":{"source":{"id":"65501"}},"id":"65505","type":"CDSView"},{"attributes":{},"id":"65521","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65507","type":"Circle"},{"attributes":{},"id":"65518","type":"Selection"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65520"},"selection_policy":{"id":"65519"}},"id":"65491","type":"ColumnDataSource"},{"attributes":{"children":[[{"id":"65448"},0,0]]},"id":"65530","type":"GridBox"},{"attributes":{"source":{"id":"65506"}},"id":"65510","type":"CDSView"},{"attributes":{},"id":"65526","type":"Selection"},{"attributes":{},"id":"65455","type":"LinearScale"},{"attributes":{"text":""},"id":"65513","type":"Title"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65503","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65492","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65484","type":"FixedTicker"},{"attributes":{},"id":"65465","type":"ResetTool"},{"attributes":{"data_source":{"id":"65501"},"glyph":{"id":"65502"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65503"},"selection_glyph":null,"view":{"id":"65505"}},"id":"65504","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65487","type":"Triangle"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65522"},"selection_policy":{"id":"65521"}},"id":"65496","type":"ColumnDataSource"},{"attributes":{},"id":"65466","type":"PanTool"},{"attributes":{},"id":"65514","type":"BasicTickFormatter"},{"attributes":{},"id":"65525","type":"UnionRenderers"},{"attributes":{},"id":"65519","type":"UnionRenderers"},{"attributes":{},"id":"65449","type":"DataRange1d"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65474","type":"PolyAnnotation"},{"attributes":{},"id":"65524","type":"Selection"},{"attributes":{"data_source":{"id":"65486"},"glyph":{"id":"65487"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65488"},"selection_glyph":null,"view":{"id":"65490"}},"id":"65489","type":"GlyphRenderer"},{"attributes":{"source":{"id":"65491"}},"id":"65495","type":"CDSView"},{"attributes":{"source":{"id":"65496"}},"id":"65500","type":"CDSView"},{"attributes":{"below":[{"id":"65457"}],"center":[{"id":"65460"},{"id":"65464"}],"left":[{"id":"65461"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65489"},{"id":"65494"},{"id":"65499"},{"id":"65504"},{"id":"65509"},{"id":"65511"}],"title":{"id":"65513"},"toolbar":{"id":"65475"},"toolbar_location":null,"x_range":{"id":"65449"},"x_scale":{"id":"65453"},"y_range":{"id":"65451"},"y_scale":{"id":"65455"}},"id":"65448","subtype":"Figure","type":"Plot"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65473","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65508","type":"Circle"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65518"},"selection_policy":{"id":"65517"}},"id":"65486","type":"ColumnDataSource"},{"attributes":{},"id":"65468","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65488","type":"Triangle"},{"attributes":{"overlay":{"id":"65473"}},"id":"65467","type":"BoxZoomTool"},{"attributes":{"source":{"id":"65486"}},"id":"65490","type":"CDSView"},{"attributes":{},"id":"65520","type":"Selection"},{"attributes":{},"id":"65470","type":"UndoTool"},{"attributes":{},"id":"65458","type":"BasicTicker"},{"attributes":{"toolbars":[{"id":"65475"}],"tools":[{"id":"65465"},{"id":"65466"},{"id":"65467"},{"id":"65468"},{"id":"65469"},{"id":"65470"},{"id":"65471"},{"id":"65472"}]},"id":"65531","type":"ProxyToolbar"},{"attributes":{},"id":"65523","type":"UnionRenderers"},{"attributes":{},"id":"65516","type":"BasicTickFormatter"},{"attributes":{"data":{"xs":[[-32.02532987962574,-29.34925075715389],[-32.09543952228525,-29.525308830914856]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65524"},"selection_policy":{"id":"65523"}},"id":"65501","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"65491"},"glyph":{"id":"65492"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65493"},"selection_glyph":null,"view":{"id":"65495"}},"id":"65494","type":"GlyphRenderer"},{"attributes":{},"id":"65471","type":"SaveTool"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65511","type":"Span"},{"attributes":{"data":{"x":[-32.37106695144684,-32.71848009989285],"y":[0.0,-1.0]},"selected":{"id":"65526"},"selection_policy":{"id":"65525"}},"id":"65506","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65465"},{"id":"65466"},{"id":"65467"},{"id":"65468"},{"id":"65469"},{"id":"65470"},{"id":"65471"},{"id":"65472"}]},"id":"65475","type":"Toolbar"},{"attributes":{"overlay":{"id":"65474"}},"id":"65469","type":"LassoSelectTool"},{"attributes":{"data_source":{"id":"65496"},"glyph":{"id":"65497"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65498"},"selection_glyph":null,"view":{"id":"65500"}},"id":"65499","type":"GlyphRenderer"},{"attributes":{"children":[{"id":"65532"},{"id":"65530"}]},"id":"65533","type":"Column"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65497","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65498","type":"Circle"},{"attributes":{"axis":{"id":"65461"},"dimension":1,"ticker":null},"id":"65464","type":"Grid"},{"attributes":{"toolbar":{"id":"65531"},"toolbar_location":"above"},"id":"65532","type":"ToolbarBox"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65493","type":"MultiLine"},{"attributes":{"data_source":{"id":"65506"},"glyph":{"id":"65507"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65508"},"selection_glyph":null,"view":{"id":"65510"}},"id":"65509","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"65514"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65484"}},"id":"65461","type":"LinearAxis"},{"attributes":{"axis_label":"Log","formatter":{"id":"65516"},"ticker":{"id":"65458"}},"id":"65457","type":"LinearAxis"},{"attributes":{},"id":"65517","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"65451","type":"DataRange1d"},{"attributes":{"callback":null},"id":"65472","type":"HoverTool"},{"attributes":{"axis":{"id":"65457"},"ticker":null},"id":"65460","type":"Grid"},{"attributes":{},"id":"65522","type":"Selection"},{"attributes":{},"id":"65453","type":"LinearScale"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65502","type":"MultiLine"}],"root_ids":["65533"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"3dfd352a-4a23-4299-860b-d43881417dd6","root_ids":["65533"],"roots":{"65533":"0dd2dc4b-f4cb-4d66-ae65-5f377950c9e9"}}];
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