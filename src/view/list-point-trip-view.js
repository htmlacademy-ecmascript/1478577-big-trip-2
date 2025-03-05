import { createElement } from '../render';

const createListPointTripTemplate = () => `<ul class="trip-events__list">
</ul>`;

export default class ListPointTripView {
  getTemplate() {
    return createListPointTripTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
