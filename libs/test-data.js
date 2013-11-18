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
        companies.push({
          id: year+''+month+'1',
          cid: 1
          name: 'Alabania',
    
        });
           companies.push({
          id: year+''+month+'2',
          cid: 15
          name: 'Cuba',
    
        });
          companies.push({
          id: year+''+month+'4',
          cid: 10
          name: 'Rusia',
    
        });
           companies.push({
          id: year+''+month+'3',
          cid: 19
          name: 'Chili',
    
        });
             companies.push({
          id: year+''+month+'5',
          cid: 16
          name: 'France',
    
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