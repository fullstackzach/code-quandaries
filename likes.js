function likes (people) {
    if (people.length === 0) {
        return 'no one likes this'
    }
    if (people.length === 1) {
        return `${people[0]} likes this`
    }
    if (people.length === 2) {
        return `${people[0]} and ${people[1]} like this`
    }
    if (people.length === 3) {
        return `${people[0]}, ${people[1]} and ${people[2]} like this`
    }
    if (people.length >= 4) {
        return `${people[0]}, ${people[1]} and ${people.length - 2} others like this`
    }
}

console.log(likes([])) // "no one likes this"
console.log(likes(["Peter"])) // "Peter likes this"
console.log(likes(["Jacob", "Alex"])) // "Jacob and Alex likes this"
console.log(likes(["Max", "John", "Mark"])) // "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])) // "Alex, Jacob and 2 others like this" 
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Joe"])) // "Alex, Jacob and 2 others like this" 
