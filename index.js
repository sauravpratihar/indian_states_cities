console.log('test');

$.get('states.json',function(data, response){
    var states = data;
    $.get('cities.json', function(data, response){
        var cities = data;
        // console.log(cities.cities);
        // console.log(cities.cities[0]);
       
         
        var obj = {}
        // var data1 = [];
        var oh = [];
        var final = [];
        

        
        for(var x in states){
            var data1 = [];                
            
            for(var y in cities){
                if(parseInt(cities[y].states_id) === parseInt(states[x].id)){
                    data1.push(cities[y].name);
                }
            }
            if(data1.length !== 0){
                final.push({
                    name: states[x].name,
                    cities: data1
                })

            }
            

          
                

        }

        document.write(JSON.stringify(final));
        });
    });