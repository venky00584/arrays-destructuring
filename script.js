// 1
function addThreeNumbers(a) {
    return function(b) {
        return function(c) {
            console.log(a + b + c);
        };
    };
}

addThreeNumbers(10)(20)(30);


// 2
function studentInformation(name) {
    return function(department) {
        return function(salary) {
            console.log(name);
            console.log(department);
            console.log(salary);
        };
    };
}

studentInformation("Venkat")("CSE")(40000);


// 3
function multiplyThreeNumbers(a) {
    return function(b) {
        return function(c) {
            console.log(a * b * c);
        };
    };
}

multiplyThreeNumbers(2)(3)(4);


// 4
function addThreeUncurried(a, b, c) {
    console.log(a + b + c);
}

addThreeUncurried(10, 20, 30);


// 5
function addFourCurried(a) {
    return function(b) {
        return function(c) {
            return function(d) {
                console.log(a + b + c + d);
            };
        };
    };
}

addFourCurried(10)(20)(30)(40);

function addFourUncurried(a, b, c, d) {
    console.log(a + b + c + d);
}

addFourUncurried(10, 20, 30, 40);


// 6
let numbersFirst = [1, 2, 3, 4, 5];
let numbersSecond = [6, 7, 8, 9, 10];

let mergedNumbers = [...numbersFirst, ...numbersSecond];

console.log(mergedNumbers);


// 7
let studentNamesFirst = ["Venkat", "Rahul", "Kiran"];
let studentNamesSecond = ["Arun", "Suresh"];

let allStudentNames = [...studentNamesFirst, ...studentNamesSecond];

console.log(allStudentNames);


// 8
let oldNumberList = [10, 20, 30, 40, 50];

let newNumberList = [...oldNumberList, 60, 70, 80];

console.log(newNumberList);


// 9
let employeeDetailsFirst = {
    name: "Venkat",
    role: "Developer"
};

let employeeDetailsSecond = {
    salary: 40000,
    city: "Nellore"
};

let completeEmployeeDetails = {
    ...employeeDetailsFirst,
    ...employeeDetailsSecond
};

console.log(completeEmployeeDetails);


// 10
let basicEmployee = {
    name: "Venkat",
    role: "Developer"
};

let employeeWithSalary = {
    ...basicEmployee,
    salary: 40000
};

console.log(employeeWithSalary);


// 11
let personDetailsFirst = {
    name: "Venkat",
    age: 22
};

let personDetailsSecond = {
    city: "Nellore",
    college: "SRM University"
};

let completePersonDetails = {
    ...personDetailsFirst,
    ...personDetailsSecond
};

console.log(completePersonDetails);


// 12
let firstNumberArray = [1, 2, 3];
let secondNumberArray = [4, 5, 6];

let reverseOrderArray = [...secondNumberArray, ...firstNumberArray];

console.log(reverseOrderArray);


// 13
function showFixedAndRemaining(valueOne, valueTwo, ...remainingValues) {
    console.log(valueOne);
    console.log(valueTwo);
    console.log(remainingValues);
}

showFixedAndRemaining(10, 20, 30, 40, 50);


// 14
function studentMarksDetails(studentName, studentDepartment, ...studentMarks) {
    console.log(studentName);
    console.log(studentDepartment);
    console.log(studentMarks);
}

studentMarksDetails("Venkat", "CSE", 80, 85, 90);


// 15
function calculateAdditionalNumbers(numberOne, numberTwo, ...additionalNumbers) {
    console.log(numberOne);
    console.log(numberTwo);
    console.log(additionalNumbers);
}

calculateAdditionalNumbers(10, 20, 30, 40, 50);


// 16
function printFifthValue(...allValues) {
    console.log(allValues[4]);
}

printFifthValue(10, 20, 30, 40, 50, 60);


// 17
function showProductDetails(productName, productPrice, ...productInformation) {
    console.log(productName);
    console.log(productPrice);
    console.log(productInformation);
}

showProductDetails("Laptop", 50000, "Dell", "Black", "1 Year Warranty");


// 18
function showTenNumbers(firstNumberValue, secondNumberValue, ...remainingNumbers) {
    console.log(firstNumberValue);
    console.log(secondNumberValue);
    console.log(remainingNumbers);
}

showTenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// 19
let fourValueArray = [10, 20, 30, 40];

let [firstValue, secondValue, thirdValue, fourthValue] = fourValueArray;

console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
console.log(fourthValue);


// 20
let studentDetailsArray = ["Venkat", "CSE", 8.5];

let [studentNameValue, studentDepartmentValue, studentCgpaValue] = studentDetailsArray;

console.log(studentNameValue);
console.log(studentDepartmentValue);
console.log(studentCgpaValue);


// 21
let fiveValueNumbers = [10, 20, 30, 40, 50];

let [firstSelectedNumber, , , fourthSelectedNumber] = fiveValueNumbers;

console.log(firstSelectedNumber);
console.log(fourthSelectedNumber);


// 22
let simpleNestedArray = [10, [20, 30]];

let [nestedFirstValue, [nestedSecondValue, nestedThirdValue]] = simpleNestedArray;

console.log(nestedFirstValue);
console.log(nestedSecondValue);
console.log(nestedThirdValue);


// 23
let threeLevelNumbers = [10, [20, [30, 40]]];

let [
    levelOneValue,
    [levelTwoValue, [levelThreeValue, levelFourValue]]
] = threeLevelNumbers;

console.log(levelOneValue);
console.log(levelTwoValue);
console.log(levelThreeValue);
console.log(levelFourValue);


// 24
let employeeObjectOne = {
    name: "Venkat",
    designation: "Developer",
    salary: 40000
};

let {
    name: employeeObjectName,
    designation: employeeObjectDesignation,
    salary: employeeObjectSalary
} = employeeObjectOne;

console.log(employeeObjectName);
console.log(employeeObjectDesignation);
console.log(employeeObjectSalary);


// 25
let studentObjectOne = {
    name: "Venkat",
    department: "CSE",
    cgpa: 8.5
};

let {
    name: studentObjectName,
    department: studentObjectDepartment,
    cgpa: studentObjectCgpa
} = studentObjectOne;

console.log(studentObjectName);
console.log(studentObjectDepartment);
console.log(studentObjectCgpa);


// 26
let fivePropertyObject = {
    name: "Venkat",
    age: 22,
    city: "Nellore",
    college: "SRM University",
    course: "B.Tech"
};

let {
    name: selectedPersonName,
    city: selectedPersonCity,
    course: selectedPersonCourse
} = fivePropertyObject;

console.log(selectedPersonName);
console.log(selectedPersonCity);
console.log(selectedPersonCourse);


// 27
let companyTeamDetails = {
    employee: {
        name: "Venkat"
    },
    team: {
        members: ["Rahul", "Kiran", "Arun"]
    }
};

let {
    employee: { name: companyEmployeeName },
    team: { members: teamMembers }
} = companyTeamDetails;

console.log(companyEmployeeName);
console.log(teamMembers);


// 28
let companyDepartmentDetails = {
    department: {
        employee: {
            name: "Venkat"
        }
    }
};

let {
    department: {
        employee: {
            name: nestedCompanyEmployeeName
        }
    }
} = companyDepartmentDetails;

console.log(nestedCompanyEmployeeName);


// 29
let fruitList = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

fruitList.push("Papaya");
fruitList.push("Pineapple");
fruitList.push("Watermelon");

console.log(fruitList);


// 30
let fiveNumberList = [10, 20, 30, 40, 50];

fiveNumberList.pop();

console.log(fiveNumberList);


// 31
let fiveStudentNames = ["Venkat", "Rahul", "Kiran", "Arun", "Ravi"];

fiveStudentNames.shift();

console.log(fiveStudentNames);


// 32
let fourNumberList = [30, 40, 50, 60];

fourNumberList.unshift(10, 20);

console.log(fourNumberList);


// 33
let replaceNumberList = [10, 20, 30, 40, 50];

replaceNumberList.splice(2, 1, 100);

console.log(replaceNumberList);


// 34
let removeMiddleValues = [10, 20, 30, 40, 50, 60];

removeMiddleValues.splice(2, 2);

console.log(removeMiddleValues);


// 35
let addMiddleValues = [10, 20, 60, 70];

addMiddleValues.splice(2, 0, 30, 40, 50);

console.log(addMiddleValues);


// 36
let replaceMiddleValues = [10, 20, 30, 40, 50];

replaceMiddleValues.splice(2, 2, 100, 200, 300);

console.log(replaceMiddleValues);


// 37
let studentListMiddle = ["Venkat", "Rahul", "Kiran", "Arun", "Ravi"];

studentListMiddle.splice(2, 1);

console.log(studentListMiddle);


// 38
let shoppingCart = ["Laptop", "Mouse", "Keyboard"];

shoppingCart.push("Monitor");
console.log(shoppingCart);

shoppingCart.pop();
console.log(shoppingCart);

shoppingCart.shift();
console.log(shoppingCart);

shoppingCart.unshift("Mobile");
console.log(shoppingCart);


// 39
let concatFirstArray = [1, 2, 3];
let concatSecondArray = [4, 5, 6];

let concatResult = concatFirstArray.concat(concatSecondArray);

console.log(concatResult);


// 40
let concatArrayOne = [1, 2];
let concatArrayTwo = [3, 4];
let concatArrayThree = [5, 6];

let threeArrayResult = concatArrayOne.concat(
    concatArrayTwo,
    concatArrayThree
);

console.log(threeArrayResult);


// 41
let eightValueArray = [10, 20, 30, 40, 50, 60, 70, 80];

let extractedValues = eightValueArray.slice(2, 6);

console.log(extractedValues);


// 42
let studentNameList = ["Venkat", "Rahul", "Kiran", "Arun", "Ravi"];

let firstThreeStudents = studentNameList.slice(0, 3);

console.log(firstThreeStudents);


// 43
let threeLevelNestedArray = [1, [2, [3, 4]]];

let singleLevelArray = threeLevelNestedArray.flat(2);

console.log(singleLevelArray);


// 44
let fourLevelNestedArray = [1, [2, [3, [4, 5]]]];

let fourLevelFlatArray = fourLevelNestedArray.flat(3);

console.log(fourLevelFlatArray);


// 45
let sliceExampleArray = [10, 20, 30, 40, 50];

let sliceExampleResult = sliceExampleArray.slice(1, 3);

console.log(sliceExampleResult);
console.log(sliceExampleArray);

let spliceExampleArray = [10, 20, 30, 40, 50];

let spliceExampleResult = spliceExampleArray.splice(1, 2);

console.log(spliceExampleResult);
console.log(spliceExampleArray);


// 46
let includeNumbers = [10, 20, 30, 40, 50];

console.log(includeNumbers.includes(50));


// 47
let firstOccurrenceNumbers = [10, 20, 30, 20, 40, 20];

console.log(firstOccurrenceNumbers.indexOf(20));


// 48
let lastOccurrenceNumbers = [10, 20, 30, 20, 40, 20];

console.log(lastOccurrenceNumbers.lastIndexOf(20));


// 49
let numbersToSort = [50, 10, 40, 20, 30];

numbersToSort.sort((a, b) => a - b);

console.log(numbersToSort);


// 50
let numbersToReverse = [1, 2, 3, 4, 5];

numbersToReverse.reverse();

console.log(numbersToReverse);