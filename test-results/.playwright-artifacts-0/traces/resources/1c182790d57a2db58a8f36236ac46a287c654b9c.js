class cardState {
  constructor(id, options, events) {
    this.element = document.getElementById(id);
    this.class = 'card-state';
    this.listeners = {
      _keypress: this._keypress.bind(this)
    }
    this.options = options;
    this.events = events;
    this._build();
  }
  _keypress(e) {
    if (e.code === 'Enter') {
      this.events.click();
    }
  }
  _setClickProps() {
    if (this.options.clickable) {
      this.element.setAttribute('tabindex', 0);
      this.element.addEventListener('keypress', this.listeners._keypress);
    } else {
      this.element.removeAttribute('tabindex');
      this.element.removeEventListener('keypress', this.listeners._keypress);
    }
  }
  _build() {
    this._setClickProps();
  }
  parametersChanged(options) {
    this.options = options;
    this._setClickProps();
  }
}