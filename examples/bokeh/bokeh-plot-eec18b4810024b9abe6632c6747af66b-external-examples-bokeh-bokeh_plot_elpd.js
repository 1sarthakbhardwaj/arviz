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
    
      
      
    
      var element = document.getElementById("11444683-64df-4234-92a0-09d488afdf7d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '11444683-64df-4234-92a0-09d488afdf7d' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2ab178f4-06f2-471c-9270-60c26341f1a8":{"roots":{"references":[{"attributes":{"data_source":{"id":"67671"},"glyph":{"id":"67670"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"67673"}},"id":"67672","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"67660","type":"PolyAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"67651"},{"id":"67652"},{"id":"67653"},{"id":"67654"},{"id":"67655"},{"id":"67656"},{"id":"67657"},{"id":"67658"}]},"id":"67661","type":"Toolbar"},{"attributes":{},"id":"67639","type":"LinearScale"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"67682"},"selection_policy":{"id":"67681"}},"id":"67671","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"67659"}},"id":"67653","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"67647"},"dimension":1,"ticker":null},"id":"67650","type":"Grid"},{"attributes":{"toolbar":{"id":"67687"},"toolbar_location":"above"},"id":"67688","type":"ToolbarBox"},{"attributes":{},"id":"67635","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"67661"}],"tools":[{"id":"67651"},{"id":"67652"},{"id":"67653"},{"id":"67654"},{"id":"67655"},{"id":"67656"},{"id":"67657"},{"id":"67658"}]},"id":"67687","type":"ProxyToolbar"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"67670","type":"Cross"},{"attributes":{},"id":"67654","type":"WheelZoomTool"},{"attributes":{},"id":"67680","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"67658","type":"HoverTool"},{"attributes":{"below":[{"id":"67643"}],"center":[{"id":"67646"},{"id":"67650"}],"left":[{"id":"67647"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"67672"}],"title":{"id":"67674"},"toolbar":{"id":"67661"},"toolbar_location":null,"x_range":{"id":"67635"},"x_scale":{"id":"67639"},"y_range":{"id":"67637"},"y_scale":{"id":"67641"}},"id":"67634","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"67660"}},"id":"67655","type":"LassoSelectTool"},{"attributes":{},"id":"67656","type":"UndoTool"},{"attributes":{"source":{"id":"67671"}},"id":"67673","type":"CDSView"},{"attributes":{"formatter":{"id":"67680"},"ticker":{"id":"67644"}},"id":"67643","type":"LinearAxis"},{"attributes":{},"id":"67637","type":"DataRange1d"},{"attributes":{"children":[[{"id":"67634"},0,0]]},"id":"67686","type":"GridBox"},{"attributes":{},"id":"67651","type":"ResetTool"},{"attributes":{},"id":"67641","type":"LinearScale"},{"attributes":{},"id":"67644","type":"BasicTicker"},{"attributes":{"axis":{"id":"67643"},"ticker":null},"id":"67646","type":"Grid"},{"attributes":{},"id":"67682","type":"Selection"},{"attributes":{},"id":"67648","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"67659","type":"BoxAnnotation"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"67678"},"ticker":{"id":"67648"}},"id":"67647","type":"LinearAxis"},{"attributes":{},"id":"67657","type":"SaveTool"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"67674","type":"Title"},{"attributes":{},"id":"67678","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"67688"},{"id":"67686"}]},"id":"67689","type":"Column"},{"attributes":{},"id":"67681","type":"UnionRenderers"},{"attributes":{},"id":"67652","type":"PanTool"}],"root_ids":["67689"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"2ab178f4-06f2-471c-9270-60c26341f1a8","root_ids":["67689"],"roots":{"67689":"11444683-64df-4234-92a0-09d488afdf7d"}}];
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