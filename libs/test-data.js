// Test data
App.TestData = Ember.Object.extend({
  init: function() {
    var treaties = [],
        countries = [];

    for (var year = 1990; year <= 2014; year++) {
      for (var month = 0; month < 12; month++) {
        treaties.push({
          id: moment([year, month]).format('MMM-YYYY'),
               
     Conv.separators.column = "|";
     Csonv.separators.array  = "/";
   var jsonobj = "libs/treaties.csv".toObjects();
     //load mydata
  function requestData(data) {
    $.ajax({
      url: 'http://localhost:3000'+data,
      type: "GET",
      dataType: "json",
      success: function(seed) {
        var jsonobj = seed;
        var obj = jQuery.parseJSON(jsonobj);
        for(i=0;i<obj.length;i++)
          {
            mydata.push(parseInt(obj[i].country)); 
          }
        });  
         list: function(id) {
      // If we've already loaded the list, return it
      if (this._list) { return this._list; }

      var list = Em.A();
      defaultTreaties.forEach(function (id) {
        list.pushObject(App.TestData.create({id: id}));
      });

      // Remember what we've created so we don't request it twice.
      this._list = list;
      return list;
    },


    defaultTreaties: function() {
      return this.list()[0];
    }

  });
       
    loadTreaties: function() {
      var testdata=this;
      return Em.Deferred.promise(function (p) {

        if (testdata.get('loadedTreaties')) {
          // We've already loaded the treaties, let's return them!
          p.resolve(testdata.get('treaties'));
        } else {

          // If we haven't loaded the treaties, load them via JSON
          p.resolve($.getJSON(jsonobj + testdata.get('id') + "/.json?jsonp=?").then(function(response) {
            var treaties = Em.A();
            response.data.children.forEach(function (child) {
              child.data.testdata = testdata;
              links.pushObject(App.Treaty.create(child.data));
            });
           testdata.setProperties({treaties: treaties, loadedTreaties: true});
            return treaties;
          }));
        }
      });
    },

    findTreatyById: function(id) {
      return this.loadTreaties().then(function (treaties) {
        return treaties.findProperty('id', id);
      });
    }

  });

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