exports.handler = async(event, ctx, callback) => {

    // receive the request event and get the user's details from it
    console.log(JSON.parse(event.body));
    const {
        name,
        email,
        track,
        mobileTrack,
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
        mobileTrack: mobileTrack,
        price: price
    }

    // Send user back to the client
    return {
        statusCode: 200,
        body: JSON.stringify(newUserDetails)

    }
}