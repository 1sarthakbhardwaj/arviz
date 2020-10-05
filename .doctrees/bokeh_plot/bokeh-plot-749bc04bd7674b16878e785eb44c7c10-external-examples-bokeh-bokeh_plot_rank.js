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
    
      
      
    
      var element = document.getElementById("25aba098-5b71-4d61-8690-bd6d5d5919ce");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '25aba098-5b71-4d61-8690-bd6d5d5919ce' but no matching script tag was found.")
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
                    
                  var docs_json = '{"146253b8-9de0-4e56-9b22-ad706ab8025f":{"roots":{"references":[{"attributes":{},"id":"90448","type":"LinearScale"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90547","type":"VBar"},{"attributes":{"data_source":{"id":"90545"},"glyph":{"id":"90546"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90547"},"selection_glyph":null,"view":{"id":"90549"}},"id":"90548","type":"GlyphRenderer"},{"attributes":{},"id":"90451","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90466","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90558","type":"VBar"},{"attributes":{},"id":"90442","type":"DataRange1d"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90552","type":"VBar"},{"attributes":{},"id":"90464","type":"SaveTool"},{"attributes":{},"id":"90444","type":"DataRange1d"},{"attributes":{"source":{"id":"90545"}},"id":"90549","type":"CDSView"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90553","type":"VBar"},{"attributes":{"children":[{"id":"90599"},{"id":"90597"}]},"id":"90600","type":"Column"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90550","type":"Span"},{"attributes":{},"id":"90585","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90591"},"selection_policy":{"id":"90590"}},"id":"90551","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90500","type":"BoxAnnotation"},{"attributes":{"source":{"id":"90551"}},"id":"90555","type":"CDSView"},{"attributes":{},"id":"90575","type":"UnionRenderers"},{"attributes":{"axis":{"id":"90454"},"dimension":1,"ticker":null},"id":"90457","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90559","type":"VBar"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90570"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90451"}},"id":"90450","type":"LinearAxis"},{"attributes":{},"id":"90576","type":"Selection"},{"attributes":{"data_source":{"id":"90551"},"glyph":{"id":"90552"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90553"},"selection_glyph":null,"view":{"id":"90555"}},"id":"90554","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"90465","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90556","type":"Span"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90593"},"selection_policy":{"id":"90592"}},"id":"90557","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90557"}},"id":"90561","type":"CDSView"},{"attributes":{},"id":"90446","type":"LinearScale"},{"attributes":{"data_source":{"id":"90557"},"glyph":{"id":"90558"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90559"},"selection_glyph":null,"view":{"id":"90561"}},"id":"90560","type":"GlyphRenderer"},{"attributes":{},"id":"90586","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90501","type":"PolyAnnotation"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90562","type":"Span"},{"attributes":{},"id":"90587","type":"Selection"},{"attributes":{},"id":"90577","type":"UnionRenderers"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90458"},{"id":"90459"},{"id":"90460"},{"id":"90461"},{"id":"90462"},{"id":"90463"},{"id":"90464"},{"id":"90465"}]},"id":"90468","type":"Toolbar"},{"attributes":{},"id":"90578","type":"Selection"},{"attributes":{"ticks":[0,1,2,3]},"id":"90535","type":"FixedTicker"},{"attributes":{},"id":"90568","type":"BasicTickFormatter"},{"attributes":{},"id":"90588","type":"UnionRenderers"},{"attributes":{},"id":"90589","type":"Selection"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90467","type":"PolyAnnotation"},{"attributes":{},"id":"90458","type":"ResetTool"},{"attributes":{"below":[{"id":"90450"}],"center":[{"id":"90453"},{"id":"90457"},{"id":"90516"},{"id":"90522"},{"id":"90528"},{"id":"90534"}],"left":[{"id":"90454"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90514"},{"id":"90520"},{"id":"90526"},{"id":"90532"}],"title":{"id":"90537"},"toolbar":{"id":"90468"},"toolbar_location":null,"x_range":{"id":"90442"},"x_scale":{"id":"90446"},"y_range":{"id":"90444"},"y_scale":{"id":"90448"}},"id":"90441","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"90459","type":"PanTool"},{"attributes":{},"id":"90495","type":"WheelZoomTool"},{"attributes":{},"id":"90480","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90513","type":"VBar"},{"attributes":{},"id":"90482","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90516","type":"Span"},{"attributes":{},"id":"90590","type":"UnionRenderers"},{"attributes":{"source":{"id":"90511"}},"id":"90515","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90519","type":"VBar"},{"attributes":{"overlay":{"id":"90466"}},"id":"90460","type":"BoxZoomTool"},{"attributes":{},"id":"90591","type":"Selection"},{"attributes":{"data_source":{"id":"90511"},"glyph":{"id":"90512"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90513"},"selection_glyph":null,"view":{"id":"90515"}},"id":"90514","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90524","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90574"},"selection_policy":{"id":"90573"}},"id":"90517","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"90484"}],"center":[{"id":"90487"},{"id":"90491"},{"id":"90544"},{"id":"90550"},{"id":"90556"},{"id":"90562"}],"left":[{"id":"90488"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90542"},{"id":"90548"},{"id":"90554"},{"id":"90560"}],"title":{"id":"90565"},"toolbar":{"id":"90502"},"toolbar_location":null,"x_range":{"id":"90442"},"x_scale":{"id":"90480"},"y_range":{"id":"90444"},"y_scale":{"id":"90482"}},"id":"90477","subtype":"Figure","type":"Plot"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90518","type":"VBar"},{"attributes":{},"id":"90570","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"90517"}},"id":"90521","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90589"},"selection_policy":{"id":"90588"}},"id":"90545","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90525","type":"VBar"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90530","type":"VBar"},{"attributes":{"children":[[{"id":"90441"},0,0],[{"id":"90477"},0,1]]},"id":"90597","type":"GridBox"},{"attributes":{"data_source":{"id":"90517"},"glyph":{"id":"90518"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90519"},"selection_glyph":null,"view":{"id":"90521"}},"id":"90520","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"90484"},"ticker":null},"id":"90487","type":"Grid"},{"attributes":{"callback":null},"id":"90499","type":"HoverTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90522","type":"Span"},{"attributes":{},"id":"90592","type":"UnionRenderers"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90583"},"ticker":{"id":"90563"}},"id":"90488","type":"LinearAxis"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90576"},"selection_policy":{"id":"90575"}},"id":"90523","type":"ColumnDataSource"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90585"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90485"}},"id":"90484","type":"LinearAxis"},{"attributes":{"source":{"id":"90523"}},"id":"90527","type":"CDSView"},{"attributes":{},"id":"90461","type":"WheelZoomTool"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90531","type":"VBar"},{"attributes":{},"id":"90485","type":"BasicTicker"},{"attributes":{},"id":"90593","type":"Selection"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90546","type":"VBar"},{"attributes":{},"id":"90463","type":"UndoTool"},{"attributes":{"data_source":{"id":"90523"},"glyph":{"id":"90524"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90525"},"selection_glyph":null,"view":{"id":"90527"}},"id":"90526","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90528","type":"Span"},{"attributes":{"axis":{"id":"90488"},"dimension":1,"ticker":null},"id":"90491","type":"Grid"},{"attributes":{"toolbars":[{"id":"90468"},{"id":"90502"}],"tools":[{"id":"90458"},{"id":"90459"},{"id":"90460"},{"id":"90461"},{"id":"90462"},{"id":"90463"},{"id":"90464"},{"id":"90465"},{"id":"90492"},{"id":"90493"},{"id":"90494"},{"id":"90495"},{"id":"90496"},{"id":"90497"},{"id":"90498"},{"id":"90499"}]},"id":"90598","type":"ProxyToolbar"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90578"},"selection_policy":{"id":"90577"}},"id":"90529","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90572"},"selection_policy":{"id":"90571"}},"id":"90511","type":"ColumnDataSource"},{"attributes":{"source":{"id":"90529"}},"id":"90533","type":"CDSView"},{"attributes":{},"id":"90571","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"90500"}},"id":"90494","type":"BoxZoomTool"},{"attributes":{},"id":"90493","type":"PanTool"},{"attributes":{"ticks":[0,1,2,3]},"id":"90563","type":"FixedTicker"},{"attributes":{},"id":"90572","type":"Selection"},{"attributes":{},"id":"90492","type":"ResetTool"},{"attributes":{"data_source":{"id":"90529"},"glyph":{"id":"90530"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90531"},"selection_glyph":null,"view":{"id":"90533"}},"id":"90532","type":"GlyphRenderer"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90568"},"ticker":{"id":"90535"}},"id":"90454","type":"LinearAxis"},{"attributes":{},"id":"90498","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90534","type":"Span"},{"attributes":{},"id":"90583","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"90501"}},"id":"90496","type":"LassoSelectTool"},{"attributes":{"source":{"id":"90539"}},"id":"90543","type":"CDSView"},{"attributes":{},"id":"90497","type":"UndoTool"},{"attributes":{"text":"tau"},"id":"90537","type":"Title"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90492"},{"id":"90493"},{"id":"90494"},{"id":"90495"},{"id":"90496"},{"id":"90497"},{"id":"90498"},{"id":"90499"}]},"id":"90502","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90541","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90540","type":"VBar"},{"attributes":{"overlay":{"id":"90467"}},"id":"90462","type":"LassoSelectTool"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90587"},"selection_policy":{"id":"90586"}},"id":"90539","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90512","type":"VBar"},{"attributes":{"axis":{"id":"90450"},"ticker":null},"id":"90453","type":"Grid"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90544","type":"Span"},{"attributes":{},"id":"90573","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"90539"},"glyph":{"id":"90540"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90541"},"selection_glyph":null,"view":{"id":"90543"}},"id":"90542","type":"GlyphRenderer"},{"attributes":{},"id":"90574","type":"Selection"},{"attributes":{"text":"mu"},"id":"90565","type":"Title"},{"attributes":{"toolbar":{"id":"90598"},"toolbar_location":"above"},"id":"90599","type":"ToolbarBox"}],"root_ids":["90600"]},"title":"Bokeh Application","version":"2.2.1"}}';
                  var render_items = [{"docid":"146253b8-9de0-4e56-9b22-ad706ab8025f","root_ids":["90600"],"roots":{"90600":"25aba098-5b71-4d61-8690-bd6d5d5919ce"}}];
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