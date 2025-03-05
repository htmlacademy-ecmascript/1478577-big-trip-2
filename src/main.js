import FiltersView from './view/filter-view';

import {render} from './render';
import EventsPresenter from './presenter/events-presenter';

const filtersContainer = document.querySelector('.trip-controls__filters');
const tripEventsContainer = document.querySelector('.trip-events');
const eventsPresenter = new EventsPresenter({eventsContainer: tripEventsContainer});

render(new FiltersView(), filtersContainer);
eventsPresenter.init();
