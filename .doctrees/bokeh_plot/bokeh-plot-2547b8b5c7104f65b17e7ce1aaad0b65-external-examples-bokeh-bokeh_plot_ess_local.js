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
    
      
      
    
      var element = document.getElementById("daa802d4-31ef-4530-8d29-599169f82244");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'daa802d4-31ef-4530-8d29-599169f82244' but no matching script tag was found.")
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
                    
                  var docs_json = '{"53f18508-f554-426e-9661-eb861016d4d0":{"roots":{"references":[{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68062","type":"Span"},{"attributes":{"data_source":{"id":"68058"},"glyph":{"id":"68057"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68060"}},"id":"68059","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68071"},"selection_policy":{"id":"68070"}},"id":"68052","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"68079"},{"id":"68077"}]},"id":"68080","type":"Column"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68073"},"selection_policy":{"id":"68072"}},"id":"68058","type":"ColumnDataSource"},{"attributes":{},"id":"68038","type":"UndoTool"},{"attributes":{},"id":"68067","type":"BasicTickFormatter"},{"attributes":{},"id":"68033","type":"ResetTool"},{"attributes":{},"id":"68036","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"68025"}],"center":[{"id":"68028"},{"id":"68032"}],"left":[{"id":"68029"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68055"},{"id":"68059"},{"id":"68061"},{"id":"68062"}],"title":{"id":"68063"},"toolbar":{"id":"68043"},"toolbar_location":null,"x_range":{"id":"68017"},"x_scale":{"id":"68021"},"y_range":{"id":"68019"},"y_scale":{"id":"68023"}},"id":"68016","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"68029"},"dimension":1,"ticker":null},"id":"68032","type":"Grid"},{"attributes":{},"id":"68070","type":"UnionRenderers"},{"attributes":{},"id":"68071","type":"Selection"},{"attributes":{},"id":"68039","type":"SaveTool"},{"attributes":{"overlay":{"id":"68042"}},"id":"68037","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"68025"},"ticker":null},"id":"68028","type":"Grid"},{"attributes":{},"id":"68021","type":"LinearScale"},{"attributes":{"source":{"id":"68052"}},"id":"68056","type":"CDSView"},{"attributes":{"source":{"id":"68058"}},"id":"68060","type":"CDSView"},{"attributes":{},"id":"68019","type":"DataRange1d"},{"attributes":{},"id":"68069","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68061","type":"Span"},{"attributes":{"toolbars":[{"id":"68043"}],"tools":[{"id":"68033"},{"id":"68034"},{"id":"68035"},{"id":"68036"},{"id":"68037"},{"id":"68038"},{"id":"68039"},{"id":"68040"}]},"id":"68078","type":"ProxyToolbar"},{"attributes":{},"id":"68023","type":"LinearScale"},{"attributes":{},"id":"68017","type":"DataRange1d"},{"attributes":{},"id":"68026","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68057","type":"Dash"},{"attributes":{"text":"mu"},"id":"68063","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68041","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68033"},{"id":"68034"},{"id":"68035"},{"id":"68036"},{"id":"68037"},{"id":"68038"},{"id":"68039"},{"id":"68040"}]},"id":"68043","type":"Toolbar"},{"attributes":{"overlay":{"id":"68041"}},"id":"68035","type":"BoxZoomTool"},{"attributes":{},"id":"68073","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68069"},"ticker":{"id":"68026"}},"id":"68025","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"68078"},"toolbar_location":"above"},"id":"68079","type":"ToolbarBox"},{"attributes":{},"id":"68030","type":"BasicTicker"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68042","type":"PolyAnnotation"},{"attributes":{"callback":null},"id":"68040","type":"HoverTool"},{"attributes":{"data_source":{"id":"68052"},"glyph":{"id":"68053"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68054"},"selection_glyph":null,"view":{"id":"68056"}},"id":"68055","type":"GlyphRenderer"},{"attributes":{},"id":"68034","type":"PanTool"},{"attributes":{},"id":"68072","type":"UnionRenderers"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68067"},"ticker":{"id":"68030"}},"id":"68029","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68054","type":"Circle"},{"attributes":{"children":[[{"id":"68016"},0,0]]},"id":"68077","type":"GridBox"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68053","type":"Circle"}],"root_ids":["68080"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"53f18508-f554-426e-9661-eb861016d4d0","root_ids":["68080"],"roots":{"68080":"daa802d4-31ef-4530-8d29-599169f82244"}}];
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