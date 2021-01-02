exports.handler = async(event, ctx, callback) => {

    // We can store new users in the users array for now
    const users = []

    // receive the request event and get the user's details from it
    console.log(JSON.parse(event.body));
    const {
        name,
        email,
        track,
        moblileTrack,
        price
    } = JSON.parse(event.body)

    // create a new user object and do what you want with, like: 
    // Save user to a database
    // Authenticate user
    // Send event details to user's email
    // etc.

    const newUserDetails = {
        username: name,
        email: email,
        track: track,
        mobileTrack: moblileTrack,
        price: price
    }

    users.push(newUserDetails)

    // Send user back to the client
    return {
        statusCode: 200,
        body: JSON.stringify(newUserDetails)

    }
}