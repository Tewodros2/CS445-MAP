class User {
    constructor(name) {
        this.name = name;
    }
    logger() {
        return this.name;
    }
}

class DecoratedUser {
    constructor(user, streetAddress, city) {
        this.name = user.name;
        this.user = user;
        this.streetAddress = streetAddress;
        this.city = city;
    }
    logger() {
        console.log("Decorated User: " + user.logger() + ", " +
            this.streetAddress + ", " + this.city);
    };
}

var user = new User("Kelly");

var decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();