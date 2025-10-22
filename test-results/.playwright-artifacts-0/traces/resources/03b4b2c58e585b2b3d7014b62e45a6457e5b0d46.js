class progressBar {
  constructor(id, options) {
    this.class = 'progress-bar';
    this.element = document.getElementById(id);
    this.elementsClasses = {
      step: this.class.concat('__step-item')
    };
    this.elements = {
      bar: this.element.firstElementChild,
      steps: this.element.lastElementChild
    };
    this.listeners = {
      _update: this._update.bind(this)
    };
    this.options = options;
    this._build();
  }
  _update() {
    this.element.style.setProperty('--percentage', this.options.progress + '%');
  }
  _set(delay = false) {
    if (this.options.progress < 0) {
      this.options.progress = 0;
    } else {
      if (this.options.progress > 100) {
        this.options.progress = 100;
      }
    }
    this.elements.bar.setAttribute('aria-valuenow', this.options.progress);
    if (this.options.steps != this.elements.steps.childElementCount) {
      this.elements.steps.innerHTML = '';
      this.element.style.setProperty('--steps', this.options.steps);
      for (let i = 0; i < this.options.steps; i++) {
        let step = document.createElement('div');
        step.classList.add(this.elementsClasses.step);
        this.elements.steps.append(step);
      }
    }
    delay ? setTimeout(this.listeners._update, 500) : this._update();
  }
  _build() {
    this._set(true);
  }
  parametersChanged(options) {
    this.options = options;
    this._set();
  }
}