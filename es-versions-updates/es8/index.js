// Object.values(obj) returns all obj properties as an array
function objectValues() {
    const person = {
        name: "Julian Andrade",
        age: 33,
        gender: "Male"
    };
    console.log("Person: ", person);

    // Instead of
    console.log("Object.keys(person).map(key => person[key]) = ", Object.keys(person).map(key => person[key]));

    // Use
    console.log("Object.values(person) = ", Object.values(person));
}
objectValues();

// Object.entries(obj) returns all obj entries as an array
function objectEntries() {
    const person = {
        name: "Julian Andrade",
        age: 33,
        gender: "Male"
    };
    console.log("Person: ", person);

    // Instead of
    Object.keys(person).forEach(key => {
        console.log(`key: ${key} - value: ${person[key]} `);
    });

    // Use
    console.log(Object.entries(person));
    Object.entries(person).forEach(([key, value]) => {
        console.log(`key: ${key} - value: ${value}`);
    });

}
objectEntries();

// String padding methods
function stringPadding() {
    const formatted = [1, 101, 11, 111].map(num => {
        return num.toString().padStart(8, 0);
    });
    console.log(`padStart(8, '0'): `, formatted);

    const formatted2 = ['Julian', 'Joseph', 'José', 'Marina'].map(name => {
        return name.toString().padEnd(15, ' -');
    });
    console.log(`padEnd(15, ' -'): `, formatted2);
}
stringPadding();
