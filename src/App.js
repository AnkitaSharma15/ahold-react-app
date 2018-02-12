import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery';
import 'bootstrap';
import 'popper.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [
        {id: 'ankita', name: 'Ankita', left: 71.5, top: 80.3, about: 'It was nice to meet you'},
        {id: 'swati', name: 'Swati', left: 357.5, top: 80.3, about: 'Something about me'},
        {id: 'shane', name: 'Shane', left: 1098.5, top: 80.3, about: 'Something about me'},
        {id: 'jasmine', name: 'Jasmine', left: 71.5, top: 318.01, about: 'Something about me'},
        {id: 'seth', name: 'Seth', left: 357.5, top: 318.01, about: 'Something about me'},
        {id: 'jake', name: 'Jake', left: 1098.5, top: 318.01, about: 'Something about me'},
        {id: 'musa', name: 'Musa', left: 1098.5, top: 560, about: 'Something about me'},
        {id: 'json', name: 'Jason', left: 200, top: 560, about: 'Something about me'}
      ]
    }
  }

  handleOnIconClick(i) {
    let selectedEmployee = this.state.employees[i];
    // Hide other popovers
    this.state.employees.forEach(function(employee, index) {
      $('#employee-position-' + index).popover('dispose');
    });
    $('#employee-position-' + i).popover({placement: 'top', content: 'Hi! my name is ' + selectedEmployee.name}).popover('show');
  }

  handleOnPersonClick(i) {
    let selectedEmployee = this.state.employees[i];

    this.state.employees.forEach(function(employee, index) {
      $('#employee-position-' + index).popover('dispose');
    });
    $('#employee-position-' + i).popover({placement: 'top', content: 'Hi! my name is ' + selectedEmployee.name + '<br />' + selectedEmployee.about, html: true})
      .popover('show');
  }

  render() {
    return (
      <div className="container-fluid" style={{width: '1450px' , margin: '0px'}}>
        <div className="row" style={{height: '100vh'}}>
          <div className="col-1 bg-warning" style={{overflow: 'auto'}}>
            <div className="py-3">
            {
              this.state.employees.map((employee, i) => 
                <button className="btn btn-link mb-3 p-0" 
                  key={i} onClick={this.handleOnIconClick.bind(this, i)}>
                  <img src={'icons/' + employee.id + '.png'} alt="" className="img-fluid rounded-circle" />
                </button>
              )
            }
            </div>
          </div>
          <div className="col-11 bg-light">
            <div className="underlay row justify-content-between">
              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>
              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>

              <div className="w-100"></div>

              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>
              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>

              <div className="w-100"></div>

              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>
              <div className="col-4">
                <div className="desk bg-secondary"></div>
              </div>
            </div>
            <div style={{position: 'relative', zIndex: 1}}>
            {
              this.state.employees.map((employee, i) => 
                <button id={'employee-position-' + i} key={i} onClick={this.handleOnPersonClick.bind(this, i)}
                  className="btn btn-link p-0"
                  style={{position: 'absolute', marginLeft: -50, top: employee.top + 'px', left: employee.left + 'px', width: '100px', height: '100px' }}>
                  <img src={'icons/' + employee.id + '.png'} alt="" className="img-fluid rounded-circle" />
                </button>
              )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
