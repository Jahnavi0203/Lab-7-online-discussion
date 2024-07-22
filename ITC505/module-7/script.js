document.addEventListener('DOMContentLoaded', () => {
    const taskContainer = document.querySelector('.task-container');

    taskContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('complete-btn')) {
            const task = event.target.closest('.task');
            task.classList.remove('not-completed');
            task.classList.add('completed');
        } else if (event.target.classList.contains('not-complete-btn')) {
            const task = event.target.closest('.task');
            task.classList.remove('completed');
            task.classList.add('not-completed');
        }
    });

    const jsonString = `
        [
            {
                "title": "Casablanca",
                "director": "Michael Curtiz",
                "year": 1942,
                "genre": "Drama/Romance",
                "actors": ["Humphrey Bogart", "Ingrid Bergman", "Paul Henreid"]
            },
            {
                "title": "Gone with the Wind",
                "director": "Victor Fleming",
                "year": 1939,
                "genre": "Drama/Romance",
                "actors": ["Clark Gable", "Vivien Leigh", "Thomas Mitchell"]
            },
            {
                "title": "Citizen Kane",
                "director": "Orson Welles",
                "year": 1941,
                "genre": "Drama/Mystery",
                "actors": ["Orson Welles", "Joseph Cotten", "Dorothy Comingore"]
            },
            {
                "title": "Metropolis",
                "director": "Fritz Lang",
                "year": 1927,
                "genre": "Sci-Fi/Drama",
                "actors": ["Brigitte Helm", "Alfred Abel", "Gustav Fröhlich"]
            }
        ]`;

    // Parse the JSON string into a JavaScript array
    const movieCollection = JSON.parse(jsonString);

    // Log the movie titles
    console.log("Movies in the collection:");
    movieCollection.forEach(movie => {
        console.log(`- ${movie.title}`);
    });

    // Add a new movie to the collection
    movieCollection.push({
        "title": "The Maltese Falcon",
        "director": "John Huston",
        "year": 1941,
        "genre": "Crime/Drama",
        "actors": ["Humphrey Bogart", "Mary Astor", "Gladys George"]
    });

    // Log the updated movie collection
    console.log("Updated Movies in the collection:");
    movieCollection.forEach(movie => {
        console.log(`- ${movie.title}`);
    });

    // Convert the updated collection back to a JSON string
    const updatedJsonString = JSON.stringify(movieCollection, null, 2);
    console.log(updatedJsonString);
});
