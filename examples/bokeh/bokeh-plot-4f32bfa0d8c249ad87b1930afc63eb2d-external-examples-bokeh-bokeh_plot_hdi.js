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
    
      
      
    
      var element = document.getElementById("429a9454-67e9-48db-bdf7-f6809d003157");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '429a9454-67e9-48db-bdf7-f6809d003157' but no matching script tag was found.")
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
                    
                  var docs_json = '{"2b297855-eaf2-4081-b4b8-f249e327dd28":{"roots":{"references":[{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"69048","type":"Line"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"69032","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"69047"},"glyph":{"id":"69048"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69049"},"selection_glyph":null,"view":{"id":"69051"}},"id":"69050","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"AmfdIagsCMCy2NxotnMCwP4rHdAG9/+/gA5CGbTt/L+MeE+XHbr8v0It1JlKafy/X8QpLBtm+79b2naeUA77v47uXY7qtfm/WQ1OdNj3+L8Dxl5rbeD4v77564RlA/a/fgG4NThV8r9NYCApe5Pxv63by5iKY/G/FZOLl14A8b9tBZQlBdDwvxVCGOeqR/C/iqirqnkI7r/O4a0VEIPtv1WSDF58Fey/PKtSI8Po6r+NTBXqSXPpv2NDHxnmTeW/HmpkaJ4x5L/mpi2iBLXjv64HdYWbl+K/t7X4doU84r/ifFz7bKrgv+oJ0Mq6guC/5a/7oH8E4L/w49a/K+/fv7PkngHWe9u/Eokeoqbp178oCjZU44jWv02lX/0OHtC/MquHRtrhz7+ig58y2anHv+pblYrnoMW/8pC+O1dexb+iVIUfEkmzvySzYheYoLK/P7D6ZOcCsr8YLOA2VX2vvzmLs9VIm6C/oYiWwSOShL+xWEnmyI9Lv4FWHudWznU/cbdj1GSnmz8L7EoLVneqPwoPtzgg87I/Aw4XsQCAtz9LBhGlVJ+5P3VXk/3LPsA/ih4Hd7AHwT8cTbs6DlvCP2nBt1k7PsY/9RNBi1JbyT+ED7aMnIPOP+iOL0qvjtI/MVTlrtHw0j9HlVWsA2nUPy+xcNAWS9Y/anOfWMwP2j+v/4il/vXcP8kmK9rU+dw/gWbtFYws3j9a5LYSZbjfP+eG5nHHI+M/rgOlq4Vw5D9tL5DIYMnkPyHMK2s1/OU/+n3fhPKq5j9Q8RdTyc7mP/qOabHtL+k/xV+hjU+O6T/kSiToF3nqP1W4LC4Xq+w/24ZlL8H47D+NitrKuFbtP+jyEATLve8/MWjW3GbV7z/sUjOTkELwP+czvzdvp/A/9nVLV4/t8D8gTv5vqvPwP0PV5X5KTfE/GtqhjSQk8j9PMyNTOaryPx5WuNUty/M/2i7a/P7v8z9gm4rUbw71PzOQuNapo/Y/ISjoS4im9j/iPqwlItX3P+c4Rks1C/k/jGRo0+38+T9ArAx0Qan6P01izpLDLf8/R1PKGCN2AUA=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"+GOKeF9N3z+cTkYukxjrPwFq8Zd8BPA/wPhe8yWJ8T+6Q1g08aLxP1/pFbNay/E/0B3rafJM8j/SksSw13jyP7kI0bgKJfM/VPnYxROE8z/+nFBKyY/zPyEDij1N/vQ/Qf8j5WPV9j/az29rQjb3PyoSmrM6Tvc/djY6tNB/9z9K/TVt/Zf3P/bec4wq3Pc/3hVVleF9+D+Mh5T6O5/4P2vbfOig+vg/MVUrN89F+T/drHqFLaP5PycvuHmGrPo/eOXmZZjz+j9GlnTXvhL7PxS+oh4ZWvs/ktJBot5w+z/I4CjBZNX7P4b9S01R3/s/BxTBF+D++z+CIwWIGgL8P2ojzD+FkPw/3i68K8sC/T+7PnmV4y79P1YLVCA+/P0/TYWXW+IB/j/GB9ZsYoX+P0GqVofxpf4/8RZEjBqq/j9b1QNvt2X/P2fqRD/7av8/firYxOhv/z9QfySrCoL/P9MxqdySvf8/d2k+3G3r/z9qm3EDR/7/P5bHuZVzBQBAt2PUZKcbAEDYlRas7jQAQDzc4oDMSwBAOFzEAgBeAEAZRJRSfWYAQLya7F/2gQBA9Di4gz2IAEBp2tVx2JIAQAu+zdrxsQBAoAhalNrKAEB8sGXkHPQAQO74ovTqKAFAQ1XuGg0vAUBUWcU6kEYBQBMLB22xZAFAN/eJxfygAUD7j1jqX88BQG2yok2dzwFAaNZewcjiAUBGbitRhvsBQN3QPO54ZAJAdqB0tRCOAkDuBRIZLJkCQIR5Za2GvwJAv++bUF7VAkAq/mIq2dkCQN8xLbb9JQNA+Su08ckxA0BciQT9Ik8DQAuXxeVilQNA27DsJRifA0BSUVsZ16oDQF0egmC59wNABs2a26z6A0C71MwkpBAEQPrM783bKQRAft3S1WM7BECIk/+b6jwEQFF1uZ9SUwRAhnZoIwmJBEDUzMhUjqoEQIgVbnXL8gRAtos2v//7BEDYpiL1m0MFQA0krnXqqAVACAr6EqKpBUC4D2uJSPUFQDqO0VLNQgZAIxnadDt/BkAQKwNdUKoGQJOYs+RwywdApClljBG7CEA=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"69061"},"selection_policy":{"id":"69060"}},"id":"69047","type":"ColumnDataSource"},{"attributes":{},"id":"69009","type":"DataRange1d"},{"attributes":{"source":{"id":"69047"}},"id":"69051","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"69049","type":"Line"},{"attributes":{"axis":{"id":"69015"},"ticker":null},"id":"69018","type":"Grid"},{"attributes":{},"id":"69020","type":"BasicTicker"},{"attributes":{},"id":"69011","type":"LinearScale"},{"attributes":{"data_source":{"id":"69042"},"glyph":{"id":"69043"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"69044"},"selection_glyph":null,"view":{"id":"69046"}},"id":"69045","type":"GlyphRenderer"},{"attributes":{"source":{"id":"69042"}},"id":"69046","type":"CDSView"},{"attributes":{"text":""},"id":"69053","type":"Title"},{"attributes":{"formatter":{"id":"69055"},"ticker":{"id":"69020"}},"id":"69019","type":"LinearAxis"},{"attributes":{},"id":"69058","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"69030","type":"HoverTool"},{"attributes":{},"id":"69059","type":"Selection"},{"attributes":{"overlay":{"id":"69031"}},"id":"69025","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"69019"},"dimension":1,"ticker":null},"id":"69022","type":"Grid"},{"attributes":{"fill_alpha":0.1,"fill_color":"#ff0000","line_alpha":0.1,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"69044","type":"Patch"},{"attributes":{},"id":"69061","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"69023"},{"id":"69024"},{"id":"69025"},{"id":"69026"},{"id":"69027"},{"id":"69028"},{"id":"69029"},{"id":"69030"}]},"id":"69033","type":"Toolbar"},{"attributes":{},"id":"69023","type":"ResetTool"},{"attributes":{},"id":"69055","type":"BasicTickFormatter"},{"attributes":{},"id":"69028","type":"UndoTool"},{"attributes":{},"id":"69013","type":"LinearScale"},{"attributes":{},"id":"69060","type":"UnionRenderers"},{"attributes":{},"id":"69029","type":"SaveTool"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"69059"},"selection_policy":{"id":"69058"}},"id":"69042","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"69057"},"ticker":{"id":"69016"}},"id":"69015","type":"LinearAxis"},{"attributes":{"fill_alpha":0.5,"fill_color":"#ff0000","line_alpha":0,"line_color":"#ff0000","x":{"field":"x"},"y":{"field":"y"}},"id":"69043","type":"Patch"},{"attributes":{},"id":"69007","type":"DataRange1d"},{"attributes":{},"id":"69026","type":"WheelZoomTool"},{"attributes":{},"id":"69024","type":"PanTool"},{"attributes":{"overlay":{"id":"69032"}},"id":"69027","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"69031","type":"BoxAnnotation"},{"attributes":{},"id":"69016","type":"BasicTicker"},{"attributes":{"below":[{"id":"69015"}],"center":[{"id":"69018"},{"id":"69022"}],"left":[{"id":"69019"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"69045"},{"id":"69050"}],"title":{"id":"69053"},"toolbar":{"id":"69033"},"toolbar_location":"above","x_range":{"id":"69007"},"x_scale":{"id":"69011"},"y_range":{"id":"69009"},"y_scale":{"id":"69013"}},"id":"69006","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"69057","type":"BasicTickFormatter"}],"root_ids":["69006"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"2b297855-eaf2-4081-b4b8-f249e327dd28","root_ids":["69006"],"roots":{"69006":"429a9454-67e9-48db-bdf7-f6809d003157"}}];
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