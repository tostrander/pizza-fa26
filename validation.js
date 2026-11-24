export function validateForm(data) {
    console.log("Validating...");
    console.log(data);

    // Store error messages in an array
    const errors = [];

    // Validate method (Pickup or delivery)
    const validMethods = ['pickup', 'delivery'];
    if(!validMethods.includes(data.method)) {
        errors.push("Method must be pickup or delivery.");
    }

    // Validate size (small, medium, large)
    const validSizes = ['small', 'medium', 'large'];
    if(!validSizes.includes(data.size)) {
        errors.push("Invalid size selected.");
    }

    // Validate toppings
    const validToppings = ['pepperoni', 'mushrooms', 'olives'];
    if (Array.isArray(data.toppings)) {

        for (const topping of data.toppings) {
            if (!validToppings.includes(topping)) {
                errors.push("Invalid topping selected");
                break;
            }
        }
    }

    // Return result
    console.log(errors);
    return {
        isValid: errors.length === 0,
        errors
    };
}