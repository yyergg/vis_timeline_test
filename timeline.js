// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');
// Create a DataSet (allows two way data-binding)


// create a data set with groups
var names = ['000', '001', '002', '003', '004', '005', '000'];
var groups = new vis.DataSet();
for (var g = 0; g < 6; g++) {
  if (g % 2 == 0) {
    groups.add({
      id: g,
      content: names[g],
      className: "even_row"
    });
  } else {
    groups.add({
      id: g,
      content: names[g],
      className: "odd_row aaaaaa"
    });
  }

}

var items = new vis.DataSet([{
  id: 1,
  group: 0,
  content: 'item 1',
  start: '2014-04-20'
}, {
  id: 2,
  group: 1,
  content: 'item 2',
  start: '2014-04-14',
  end: '2014-04-19'
}, {
  id: 3,
  group: 2,
  content: 'item 3',
  start: '2014-04-18',
  end: '2014-04-19'
}, {
  id: 4,
  group: 3,
  content: 'item 4',
  start: '2014-04-16',
  end: '2014-04-19'
}, {
  id: 5,
  group: 4,
  content: 'item 5',
  start: '2014-04-25'
}, {
  id: 6,
  group: 5,
  content: 'item 6',
  start: '2014-04-27',
  type: 'point'
}]);
// Configuration for the Timeline
var options = {
  orientation: {
    axis: "both"
  },
  showCurrentTime: true
};
// Create a Timeline
var timeline = new vis.Timeline(container);
timeline.setOptions(options);
timeline.setGroups(groups);
timeline.setItems(items);