
const collection = [
    {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Mystery', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "Rear Window Ethics: An Original Documentary"
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with John Fawell'
            },
            {
                type: 'Interview',
                title: 'Hitchcock/Truffaut Interview Excerpts'
            }
        ]
    },
    {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock',
        digitalCode: null,
        genreTags: ['Horror', 'Suspense'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: 'The Making of Psycho'
            },
            {
                type: 'Commentary',
                title: 'Feature Commentary with Stephen Rebello'
            }
        ]
    },
    {
        title: 'The Thing',
        year: '1982',
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Horror', 'Science Fiction'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Feature Commentary with Star Kurt Russell and Director John Carpenter'
            },
        ]
    },
    {
        title: 'Big Trouble in Little China',
        year: 1986,
        director: 'John Carpenter',
        digitalCode: null,
        genreTags: ['Comedy', 'Fantasy'],
        specialFeatures: [
            {
                type: 'Commentary',
                title: 'Audio Commentary with Director John Carpenter and Actor Kurt Russell'
            },
            {
                type: 'Alternate Edits',
                title: 'Deleted Scenes'
            },
            {
                type: 'Interview',
                title: 'Vintage Interviews with Cast and Crew'
            }
        ]
    },
    {
        title: 'Fright Night',
        year: 1985,
        director: 'Tom Holland',
        digitalCode: null,
        genreTags: ['Horror', 'Vampire'],
        specialFeatures: [
            {
                type: 'Documentary',
                title: "'You're So Cool, Brewster!' Documentary"
            },
            {
                type: 'Interview',
                title: 'First Ever Fright Night Reunion Panel'
            }
        ]
    }
];

// PROBLEM #1 //


const setDigitalCode = function(array, value){

    // looping backwards through every other element in array
    for (let i = array.length - 1; i >= 0; i -= 2) {
        // assiging value to digitalCode
        array[i].digitalCode = value;
    }
    // returning updated array
    return array;

   
};


// PROBLEM #2 //

const filterByGenreTag = function(array, tag){
    // filtering through each movie in array of movies
    return array.filter(function(movie) {
        // Looping through genreTags array
        for (let i = 0; i < movie.genreTags.length; i++) {
            // if genreTag matches input tag
            if (movie.genreTags[i] === tag) {
                return true;
            }
        }
        // otherwise return false
        return false;

    });


};



// PROBLEM #3 //

const filterBySpecialFeatureType = function(array, type){
    // filtering through movies array
    return array.filter(function(movie){
        // returning movies that include type specialFeature
        return movie.specialFeatures.includes(type);
    })

};


// PROBLEM #4 //

const getTopSpecialFeature = function(array, title){
    // base
    // if array is empty
    if (array.length === 0) {
        return "no matching title found";
    }
    // first movie in array
    let movie = array[0];
    // if movie title matches input title
    if (movie.title === title) {
        // returning formatted string
        return movie.title + ' Special Feature: ' + movie.specialFeatures[0];
    }
    // recursion
    // calling func again with rest of array minus first element
    return getTopSpecialFeature(array.slice(1), title)
    
};


// PROBLEM #5 //

const mapTitles = function(array){
    // looping through each movie in array using map
    return array.map(function(movie) {
        // returning formatted string with title, year, director
        return `${movie.title} (${movie.year}) - dir. ${movie.director}`
    })
    
};



// PROBLEM #6 //

const mapSpecialFeatures = function(array){
    // looping through each movie in array using map
    return array.map(function(movie) {
        // returning titles of special features
        return movie.specialFeatures;


    })

    
};

// PROBLEM #7 //

const createNonsenseString = function(array, index){
    // Looping through array of movies using reduce
    return array.reduce(function(acc, current) {


    }, "");
    
};

// PROBLEM #8 //

const getValues = function(object, props){
    // Looping through props array (keys) using map
    return props.map(function(key) {
        // returning new arary with values that exist at that key
        return object[key];
    })
    
};
