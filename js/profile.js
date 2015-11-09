var user = localStorage.getItem("uid");
console.log("USER ID: " + user);
getProfile();

function getProfile() {
    var link = "https://commonplaceapp.firebaseio.com/users/" + user;
    console.log(link);
    var ref = new Firebase(link);
    ref.on("value", function(snapshot) {
        var newEvent = snapshot.val();
        var profilepic = newEvent.profilepic;
        if (profilepic === undefined || null) { //IF INVALID THEN SET TO PLACEHOLDER
            profilepic = "images/profileplaceholder.png";
        }
        var fullname = newEvent.firstname + " " + newEvent.lastname;
        var location = newEvent.town + ", " + newEvent.country;
        var bio = newEvent.bio;
        var birthday = newEvent.birthday;
        var interests = newEvent.interests;
        document.getElementById("profilepic").src = profilepic;
        document.getElementById("fullname").innerHTML = fullname;
        document.getElementById("location").innerHTML = location;
        document.getElementById("bio").innerHTML = bio;
        document.getElementById("birthday").innerHTML = birthday;
        document.getElementById("interests").innerHTML = interests;
    })
}