# Design Pattern in JavaScript

Structuring code becomes more important as applications become larger. Design patterns prove crucial to solving this challenge.

For detailed read: [a link](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know#undefined)

## Design Patterns

* Module Design Pattern
* Prototype Design Pattern
* Observer Design Pattern
* Singleton Design Pattern

## Module Design Pattern

Modules are JavaScript "classes". One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels.

A closure that protect variables and methods (however, it will return an object instead of a function). This is what it looks like:

```
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();
```

Here we instantiate the private variables and/or functions before returning our object that we want to return. 

Code outside of our closure is unable to access these private variables since it is not in the same scope. Let's take a more concrete implementation:

```
var HTMLChanger = (function() {
  var contents = 'contents'

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();
HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
```

## Prototype Design Pattern

The Prototype design pattern relies on the JavaScript prototypical inheritance. The prototype model is used mainly for creating objects in performance-intensive situations.

The objects created are clones (shallow clones) of the original object that are passed around. One use case of the prototype pattern is performing an extensive database operation to create an object used for other parts of the application. If another process needs to use this object, instead of having to perform this substantial database operation, it would be advantageous to clone the previously created object.

```
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}
```

### Observer Design Pattern

There are many times when one part of the application changes, other parts needs to be updated. In React using Redux, if an events is fired, an action gets dispatched to update store which in turns updates UI as it is obverving store(object) attribute. The observer pattern incorporates just that - if an object is modified it broadcasts to dependent objects that a change has occurred.

Another prime example is the model-view-controller (MVC) architecture; The view updates when the model changes. One benefit is decoupling the view from the model to reduce dependencies.

```
var Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: function(observer) {
      this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for(var i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      };
    }
  };
};

var Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!
```

## Singleton

A Singleton only allows for a single instantiation, but many instances of the same object. The Singleton restricts clients from creating multiple objects, after the first object created, it will return instances of itself.

Finding use cases for Singletons is difficult for most who have not yet used it prior. One example is using an office printer. If there are ten people in an office, and they all use one printer, ten computers share one printer (instance). By sharing one printer, they share the same resources.

```
var printer = (function () {

  var printerInstance;

  function create () {

    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() {
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

  function Singleton () {
    if(!printerInstance) {
      printerInstance = intialize();
    }
  };

})();

var officePrinter = printer.getInstance();
```

Race conditions occur in multi-threaded applications when more than one thread tries to access the same resource. 

Singletons are susceptible to race conditions, such that if no instance were initialized first, two threads could then create two objects instead of returning and instance. This defeats the purpose of a singleton. Therefore, developers must be privy to synchronization when implementing singletons in multithreaded applications.

## Security Design



SECURITY in Data

* Unauthorized access
* Unauthorized modification
* Becoming unavailable from authorized users
* Association of actions that affect the enterprise’s data with the person or persons who perform those actions

**Strong** __Policies for data integrity must clearly define who can modify what data. Data corruption can be attributed in part to the deliberate modifications to datasets or processes by unauthorized users.__

Security is broken into sub-topics, Confidentiality, Integrity, Accoutability, Availability.
- Confidentiality can be broken into Authentication and Authorization.
- Integrity can be broken into Completeness, Precision, Timeliness and Validity.
- Availability gets sub divided into Usability, Reliability and Compatibility.
- Accountability as Logging, Monitoring and Reporting

Brief about terms above - 
- Authentication Should the system authenticate a user before allowing access to the system?

- Authorization Should the system require a user to be authorized to access data before
allowing the user to access sensitive data?

- Completeness For each type of data that a system stores, under what circumstances must that data be stored in full? For those types of data that can sometimes be stored in
part, when is it acceptable to do so? Also, what degree of incompleteness is acceptable?

- Precision How precise, in significant digits, should numeric values be stored within a system? Should names include middle names?

- Timeliness For each type of data that a system presents to its users, under what circumstances must the system present the most recent version of that type to its users? For
those types of data for which the system may present an older version of that data,
how old may that version be?

- Validity For each type of data that a system stores, under what circumstances may that
data be invalid?

- Logging What events that occur within a system, if any, should the system track?

- Monitoring For each type of resource that the system supports, should the system provide
monitoring for that resource? And, if so, how timely should the data be?

- Reporting To which third parties, if any, should the system report events or other information about its operation? What sorts of information should be reported?

- Usability Should the system allow users to view functionality that they are not authorized
to use? If so, should they be allowed to access this functionality, then be subjected to
errors when using unauthorized functionality?

- Reliability Under what circumstances is it acceptable for a system that is under attack to
be taken offline for any length of time?

- Compatibility In what environments (e.g., Linux and Windows) must the system run?

```
* The problem, a set of scenarios, describes the situations in which the pattern is needed.
* The solution, a characterization of the pattern’s implementation, describes the design’s
component parts and their responsibilities; how these parts collaborate; and the relationships between the parts
```

Few of Security Design Patterns:

Pattern Name NFR Category Design        Level
Authenticator                           Confidentiality
Authorization                           Confidentiality
Check Point                             Confidentiality
Clear Sensitive information             Confidentiality
Controlled Object Factory               Integrity
Distrustful Decomposition [10]          Integrity
Full View with Errors [22]              Availability