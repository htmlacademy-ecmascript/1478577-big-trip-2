import ListPointTripView from '../view/list-point-trip-view';
import NewPointTrip from '../view/new-point-trip-view';
import SortView from '../view/list-sort-view';
import PointTripView from '../view/point-trip-view';
import PointTripEditorView from '../view/point-trip-editor-view';
import { render } from '../render';

export default class EventsPresenter {
  listComponent = new ListPointTripView();

  constructor({ eventsContainer }) {
    this.eventsContainer = eventsContainer;
  }

  init() {
    render(new SortView(), this.eventsContainer);
    render(this.listComponent, this.eventsContainer);
    render(new PointTripEditorView(), this.listComponent.getElement());
    render(new NewPointTrip(), this.listComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointTripView(), this.listComponent.getElement());
    }
  }
}


