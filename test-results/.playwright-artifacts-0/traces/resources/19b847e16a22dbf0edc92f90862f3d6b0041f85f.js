class labelValue {
  constructor(id, options) {
    this.element = document.getElementById(id);
    this.elements = {
      label: this.element.firstElementChild,
      value: this.element.lastElementChild
    }
    this.options = options;
    this._build();
  }
  _setProps() {
    if (this.options.testId) {
      if (this.elements.label.firstElementChild) {
        this.elements.label.firstElementChild.setAttribute('data-testid', this.options.testId.concat('Label'));
      }
      if (this.elements.value.firstElementChild) {
        this.elements.value.firstElementChild.setAttribute('data-testid', this.options.testId.concat('Value'));
      }
    }
  }
  _build() {
    this._setProps();
  }
  render() {
    this._setProps();
  }
  parametersChanged(opt) {
    this.options = opt;
  }
}