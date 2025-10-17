'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + ``).slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    // store the cadence (steps per minutes)
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km /h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

// DOM ELEMENTS
// main form element
const form = document.querySelector('.form');
// container workout list
const containerWorkouts = document.querySelector('.workouts');
// input type
const inputType = document.querySelector('.form__input--type');
// input distance
const inputDistance = document.querySelector('.form__input--distance');
// input duration
const inputDuration = document.querySelector('.form__input--duration');
// input cadence
const inputCadence = document.querySelector('.form__input--cadence');
// input elevation
const inputElevation = document.querySelector('.form__input--elevation');
class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App is starting');
    this._getLocalStorage();
    this._getPosition();
    // atach event handlers to form sumbmission
    form.addEventListener('submit', this._newWorkout.bind(this));
    // attach event handlers for workout type change
    inputType.addEventListener('change', this._toggleElevationField.bind(this));

    // add click handling for workout list items
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener('keydown', this._handleKeydown.bind(this));
  }

  _handleKeydown(e) {
    //close form when escape key is pressed
    if (e.key === 'Escape' && !form.classList.contains('hidden')) {
      this._hideForm();
      console.log('Form closed with Escape key');
    }
  }

  _moveToPopup(e) {
    // find the closest workout element from the clicked target
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    // find the workout object using the data-id attribute
    const workout = this.#workouts.find(work => work.id === workoutEl.dataset.id);

    // move the map to the workout's coordinates
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    console.log(`Navigated to ${workout.type} workout at`, workout.coords);
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍user location');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);

    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message += 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        message += 'Location request timed out.';
        break;
      default:
        message += 'An unknown error occurred.';
        break;
    }

    alert(`📍 ${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('Loading default map location (Manila)');

    // put the actual coordinates
    const defaultCoords = [14.604, 120.994];
    // from 13 to this.#mapZoomLevel
    // from const map to this.#map
    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://{s}.tile.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // new map event listener
    this.#map.on('click', this._showForm.bind(this));

    this._renderStoredWorkouts();

    console.log('Default map loaded successfully');
  }

  _loadMap(position) {
    // extract coordinates from the geolocation position
    const { latitude, longitude } = position.coords;
    // test loading map
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    // IMPORTANT PART
    // create coordinate array for leaflet to understand
    const coords = [latitude, longitude];

    // initialize the map centered at user's location with a zoom level 13
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // add openstreetmap
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://{s}.tile.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // add a marker blue
    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();
  }
} // end class App

// instantiate the app
const app = new App();


