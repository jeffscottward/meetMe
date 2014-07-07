angular.module('meetMe')
  .factory('appointmentStorage', function () {
    return { 
      data : [
        {
          'uid': '349q98dwy2djksjda',
          'title': 'Doctor Checkup',
          'startTime': '3:00 PM',
          'endTime': '5:00 PM',
          'appointmentWith': 'Dr. Kovorkian',
          'description': 'Need to get my head examined'
        },
        {
          'uid': 'hda9824gds98',
          'title': 'Job Interview',
          'startTime': '12:00 PM',
          'endTime': '3:00 PM',
          'appointmentWith': 'Micheal Fastburger',
          'description': 'Make sure to mention all the awards they have won'
        },
        {
          'uid': '98u23rc9q83f2nf',
          'title': 'Food Shopping',
          'startTime': '6:00 PM',
          'endTime': '7:00 PM',
          'appointmentWith': 'Dad',
          'description': 'Don\'t forget fish and potatoes'
        }
      ]
    };
  });
