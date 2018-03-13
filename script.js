/*var element = 
    React.createElement('div', {},
        React.createElement('h1',{}, 'Lista filmów'),
        React.createElement('ul', {},
            React.createElement('li',{},
                React.createElement('h2', {}, 'Harry Poterr'),
                React.createElement('p', {}, 'Film o czarodzieju')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, 'Król lew'),
                React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
            )
        )
    );
*/

var movies = [
    {
        id: 1,
        title: '7 rzeczy o których nie wiecie o facetach',
        desc: 'komedia romantyczna',
        img: 'images/img_1.jpg'
    },
    {
        id: 2,
        title: 'Zwierzogród',
        desc: 'bajka',
        img: 'images/img_2.jpg'
    },
    {
        id: 3,
        title: 'Służąca',
        desc: 'thriller',
        img: 'images/img_3.jpg'
    },
    {
        id: 4,
        title: 'Sprawiedliwy',
        desc: 'obyczyjowy',
        img: 'images/img_4.jpg'
    },
    {
        id: 5,
        title: 'Moja matka',
        desc: 'obyczajowy',
        img: 'images/img_5.jpg'
    }
  ];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.img})
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));