// Test data
App.TestData = Ember.Object.extend({
  init: function() {
    var treaties = [],
        countries = [];

    for (var year = 1990; year <= 2014; year++) {
      for (var month = 0; month < 12; month++) {
        treaties.push({
          id: moment([year, month]).format('MMM-YYYY'),
          countries: [year+''+month+'1', year+''+month+'2', year+''+month+'3', year+''+month+'4', year+''+month+'5']
        });

       
        countries.push({
          id: year+''+month+'4',
          name: 'Albania',
          date:year+''+month+'4',
        });
        countries.push({
          id: year+''+month+'5',
          name: 'Argentina',
          date: year+''+month+'5',
        });
      }
    }

    this.set('treaties', treaties);
    this.set('countries', countries);
    return this._super();
  },
  treaties: [],
  countries: []
});

App.data = new App.TestData();

App.Treaty.FIXTURES = App.data.get('treaties');
App.Country.FIXTURES = App.data.get('countries');