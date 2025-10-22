class bottomBar {
  constructor(id, options) {
    this.element = document.getElementById(id);
    this.class = 'bottom-bar';
    this.elementsClasses = {
      item: this.class.concat('__item'),
    }
    this.stateClasses = {
      item: {
        active: this.elementsClasses.item.concat('--active')
      }
    }
    this.elements = {
      items: null
    };
    this.active = null;
    this.options = options;
    this.listeners = {
      _resize: this._resize.bind(this)
    };
    this.resizeObserver = new ResizeObserver((x) => x.forEach(this.listeners._resize));
    this._build();
  }
  _setCSSVars() {
    if (this.element.isConnected) {
      document.body.style.setProperty('--bottom-bar-height', `${this.element.offsetHeight}px`);
    } else {
      let element = document.getElementsByClassName(this.class)[0];
      if (element) {
        document.body.style.setProperty('--bottom-bar-height', `${element.offsetHeight}px`);
      } else {
        document.body.style.removeProperty('--bottom-bar-height');
      }
    }
  }
  _resize(entry) {
    this._setCSSVars();
  }
  _removeActive() {
    if (this.active) {
      this.active.item.classList.remove(this.stateClasses.item.active);
      this.active = null;
    }
  }
  _setActive() {
    if (this.elements.items) {
      this._removeActive();
      if (this.options.active === -1) {
        let activeItem = this.elements.items.find(i => i.link.href === window.location.href);
        if (activeItem) {
          activeItem.item.classList.add(this.stateClasses.item.active);
          this.active = activeItem;
        }
      } else {
        this.elements.items[this.options.active].item.classList.add(this.stateClasses.item.active);
        this.active = this.elements.items[this.options.active];
      }
    }
  }
  _setItems() {
    let items = [...this.element.getElementsByClassName(this.elementsClasses.item)];
    if (items) {
      this.elements.items = items.map(item => ({
        'item': item,
        'link': item.closest('a'),
      }));
      this._setActive();
    }
  }
  _build() {
    this.resizeObserver.observe(this.element);
    this._resize();
  }
  render() {
    this._setItems();
  }
  parametersChanged(options) {
    this.options = options;
  }

}