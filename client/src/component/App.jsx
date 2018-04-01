import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        
    }

    render() {
    }
}

// within the render method
    // return a single div containing the child components
    // EX:
        /**
         * 
         * @param {any} propData - any data you want to pass along, primitive or complex.
         * return (
         *  <div>
         *      <Child1 propName={propData} />
         *      <Child2 propName={propData} />
         *      <Child3 propName={propData} />
         *  </div>
         * )
         */