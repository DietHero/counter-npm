# @diet-hero/counters 

Package with two 'Counters' and 'DecreasingCounter' constructors 

##
```
npm install @diethero/counters 
```

## Usage 
To run demo app clone this repo and simply run:

```
npm instal
```

```
npm start
```

## API

Every counter gest one argument -selector of element to be rendered in
Counter should be initialized after creation by calling '.init()' method.
 ```javascript
 import { Counter, DecreasingCounter } from '@diethero/counters' 

const counter1 = new Counter('.counter-1')
counter1.init()

const counter2 = new DecreasingCounter('.counter-2')
counter2.init()
```# counter-npm
