'use strict';

(function(exports){

  function Note(name, string) {
    this.text = string;
    this._name = name;
    this._date = new Date();
    this._id = 0
  };

  Note.prototype.updateText = function (newtext) {
    this.text = newtext;
    return this.text;
  };

  Note.prototype.name = function() {
    return this._name;
  };

  Note.prototype.date = function() {
    return this._date.toDateString();
  };

  Note.prototype.id = function() {
    return this._id;
  };

  Note.prototype.preview = function() {
    if (this.text.length > 50) {
      return this.text.slice(0, 47) + '...';
    } else {
      return this.text;
    };
  }

  exports.Note = Note;

})(this);
