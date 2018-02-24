/*jshint esversion: 6 */

// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// A common interview question to show knowledge of some of the common DOM events
// we use, and how to register, trigger and deregister them.

class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler - event might be 'click', 'hover', etc
  // and callback might be a func to do some work.
  on(eventName, callback) {
    if (this.events[eventName]) { // if there is an array aleady
      this.events[eventName].push(callback); // push cb to it
    } else {
      this.events[eventName] = [callback]; // else, start a new arr with the cb
    }
  }

  // Trigger all callbacks associated
  // with a given eventName (ie, 'click' w/c runs a function, etc. )
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let callback of this.events[eventName]) {
        callback(); // run each cb associated w/ the event name
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}
