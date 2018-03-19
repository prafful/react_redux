export const clickUser = (user) => {

    console.log("User clicked: " + user.first);
    return{
        type:"USER_CLICKED",
        payload: user
    }

};