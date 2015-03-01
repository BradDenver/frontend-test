jest.dontMock('../elements/Total');
describe('Total', function() {
  it('calculates the correct total', function() {
    var React = require('react/addons');
    var Total = require('../elements/Total');
    var TestUtils = React.addons.TestUtils;

    var counters = [
      {count: 1},
      {count: 1}
    ];

    var div = TestUtils.renderIntoDocument(
        <Total counters={counters} />
    );

    var span = TestUtils.findRenderedDOMComponentWithTag(
      div, 'span');
    expect(span.getDOMNode().textContent).toEqual('2');

  });
});
