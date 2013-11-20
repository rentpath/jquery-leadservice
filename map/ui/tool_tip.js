// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define([], function() {
    var ToolTip;
    return ToolTip = (function(_super) {
      __extends(ToolTip, _super);

      function ToolTip(map) {
        this.map = map;
        this.mapDiv = $("#" + (this.map.getDiv().id));
      }

      ToolTip.prototype.container = $("<div/>", {
        "class": "hood_info_window"
      });

      ToolTip.prototype.listener = [];

      ToolTip.prototype.offset = {
        x: 20,
        y: 20
      };

      ToolTip.prototype.destroy = function() {
        return this.setMap(null);
      };

      ToolTip.prototype.onAdd = function() {
        return this.container.appendTo(this.getPanes().floatPane);
      };

      ToolTip.prototype.onRemove = function() {
        return this.container.remove();
      };

      ToolTip.prototype.draw = function() {};

      ToolTip.prototype.setContent = function(html) {
        this.container.html(html);
        return this.setMap(this.map);
      };

      ToolTip.prototype.hide = function() {
        this.container.hide().empty();
        return google.maps.event.clearListeners(this.overlay, "mousemove");
      };

      ToolTip.prototype.show = function() {
        return this.container.show();
      };

      ToolTip.prototype.onMouseMove = function(latLng) {
        var px;
        px = this.getProjection().fromLatLngToContainerPixel(latLng);
        return this.container.css({
          left: this.getLeft(px),
          top: this.getTop(px)
        });
      };

      ToolTip.prototype.getLeft = function(position) {
        var pos;
        pos = this.mapWidth() - position.x - this.container.outerWidth() - this.offset.x;
        if (pos < 0) {
          return this.mapWidth() - this.container.outerWidth() - this.offset.x;
        } else {
          return position.x;
        }
      };

      ToolTip.prototype.getTop = function(position) {
        var pos;
        pos = this.mapHeight() - position.y - this.container.outerHeight() - this.offset.y;
        if (pos < 0) {
          return this.mapHeight() - this.container.outerHeight() - this.offset.y;
        } else {
          return position.y;
        }
      };

      ToolTip.prototype.mapWidth = function() {
        return this.mapDiv.outerWidth();
      };

      ToolTip.prototype.mapHeight = function() {
        return this.mapDiv.outerHeight();
      };

      ToolTip.prototype.updatePosition = function(overlay) {
        var _this = this;
        this.overlay = overlay;
        google.maps.event.addListener(this.overlay, "mousemove", function(event) {
          return _this.onMouseMove(event.latLng, overlay);
        });
        return this.show();
      };

      return ToolTip;

    })(google.maps.OverlayView);
  });

}).call(this);