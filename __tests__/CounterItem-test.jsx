jest.dontMock('../elements/CounterItem');
describe('Total', function() {
  it('display the correct data', function() {
    var React = require('react/addons');
    var CounterItem = require('../elements/CounterItem');
    var TestUtils = React.addons.TestUtils;

    var counter = {
      id: '12345',
      title: 'aaa',
      count: 0
    };

    var noop = function(){};

    var item = TestUtils.renderIntoDocument(
        <CounterItem counter={counter} incCounter={noop} removeCounter={noop} />
    );

    var button = TestUtils.findRenderedDOMComponentWithClass(
      item, 'active');
    expect(button.getDOMNode().textContent).toEqual('0');

    var title = TestUtils.findRenderedDOMComponentWithClass(
      item, 'col-xs-6');
    expect(title.getDOMNode().textContent).toEqual('aaa');

  });
  
  it('disables the decrement button by default', function() {
    var React = require('react/addons');
    var CounterItem = require('../elements/CounterItem');
    var TestUtils = React.addons.TestUtils;

    var counter = {
      id: '12345',
      title: 'aaa',
      count: 0
    };

    var noop = function(){};

    var item = TestUtils.renderIntoDocument(
        <CounterItem counter={counter} incCounter={noop} removeCounter={noop} />
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithClass(
      item, 'btn');
    expect(buttons[1].getDOMNode().disabled).toBeTruthy();

  });

  it('enables the decrement button', function() {
    var React = require('react/addons');
    var CounterItem = require('../elements/CounterItem');
    var TestUtils = React.addons.TestUtils;

    var counter = {
      id: '12345',
      title: 'aaa',
      count: 1
    };

    var noop = function(){};

    var item = TestUtils.renderIntoDocument(
        <CounterItem counter={counter} incCounter={noop} removeCounter={noop} />
    );

    var buttons = TestUtils.scryRenderedDOMComponentsWithClass(
      item, 'btn');
    expect(buttons[1].getDOMNode().disabled).toBeFalsy();

  });

});
