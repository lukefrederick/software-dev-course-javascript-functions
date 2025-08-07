/*
===========================================
🤝 Collaborative Coding Challenge: Event Helpers
===========================================

🎯 Objective:
Students will work in small teams to collaboratively design and implement
reusable functions that solve specific tasks. This activity encourages:

- Teamwork
- Critical thinking
- Knowledge sharing
*/

const { isValidElement } = require("react");

// ============================================
// 🎉 Scenario:
// Your bootcamp is organizing an event to showcase projects.
// Your team will write reusable JavaScript functions to help manage the event.
// Each function must:
// - Use parameters
// - Use return statements
// - Follow the single responsibility principle
// ============================================


// ============================================
// 🧩 Task 1: Generate Attendee Badge
// ============================================
// Create a function that:
// - Takes a name and a role (e.g., "Alice", "speaker")
// - Returns a string in the format: "Name: Alice, Role: Speaker"

// Steps:
// 1. Define the function with two parameters.
// 2. Format the output string properly.
// 3. Capitalize the role if needed.
// 4. Return the result.


function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

function generateBadge(name, role) {
    return `Name: ${capitalizeFirstLetter(name)}, Role: ${capitalizeFirstLetter(role)}`;
}

// console.log(generateBadge("luke", "cohort"))


// ============================================
// 🧩 Task 2: Calculate Event Cost
// ============================================
// Create a function that:
// - Takes number of attendees and cost per attendee.
// - Applies a 10% discount if attendees exceed 100.
// - Returns the total cost.

// Steps:
// 1. Multiply attendees by cost.
// 2. Check if attendee count is over 100.
// 3. If so, apply a 10% discount.
// 4. Return the final total.


function calculateCost(attendeeNumber, costPerAttendee) {
    return costPerAttendee * attendeeNumber;
}

function checkDiscount(attendees, costPerAttendee) {
    return attendees > 100;
}

function applyDiscount(cost) {
    return cost * 0.9;
}


function calculateTotalCost (attendees, singleCost) {
    let baseCost = calculateCost(attendees, singleCost);
    if(checkDiscount) {
        baseCost = applyDiscount(baseCost);
    }
    return baseCost;
}

// console.log("101 attendees price: " + calculateCost(101));
// console.log("99 attendees price: " + calculateCost(99));

// ============================================
// 🧩 Task 3: Validate Email
// ============================================
// Create a function that:
// - Takes an email string as input.
// - Returns true if the email contains both "@" and "." characters.
// - Returns false otherwise.

// Steps:
// 1. Check if the string includes both "@" and ".".
// 2. Return true or false accordingly.

/*
function validateEmail(email) {

    if(email.includes('.') && email.includes('@')) {
        return true;
    }
    return false;
}
*/

function checkForPeriod(email) {
    return email.includes('.');
}

function checkForAt(email) {
    return email.includes('@');
}

function validateEmail(email) {
    if (checkForPeriod(email) && checkForAt(email) {
        return true;
    }
    return false;
}


// console.log("Test no . " + validateEmail("asdf@"))
// console.log("Test no @ " + validateEmail("asdf."));
// console.log("With all: " + validateEmail("test@gmail.com"))


// ============================================
// 🧠 Collaborative Steps
// ============================================

// 📌 Design Phase:
// - Brainstorm function requirements: What inputs and outputs are needed?
// - Assign roles within your team:
//   ▸ Pseudocode Writer
//   ▸ Initial Coder
//   ▸ Testers / Debuggers

// 🛠️ Implementation Phase:
// - Write and refine your three functions as a team
// - Use return statements and ensure reusability

// 🧪 Testing Phase:
// - Each member writes test cases for each function
// - Use console.log() to test different inputs and edge cases

// 🎤 Presentation Phase:
// - Share your functions with the class
// - Explain how your team approached the design and testing process

// ✅ Bonus: Can you extend any of the functions to be more flexible or reusable?
