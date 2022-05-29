function loadDataAndCalculatePrice() {
    totalPrice = 0
    var name = document.getElementById("confirm_name")
    var age = document.getElementById("confirm_age")
    var email = document.getElementById("confirm_email")
    var phone = document.getElementById("confirm_phone")
    var occupation = document.getElementById("confirm_occupation")
    var courses = document.getElementById("confirm_courses")
    var payment = document.getElementById("confirm_payment")
    var total = document.getElementById("confirm_total")
    name.textContent = sessionStorage.firstname + " " + sessionStorage.lastname
    email.textContent = sessionStorage.email
    phone.textContent = sessionStorage.phone
    age.textContent = sessionStorage.age
    occupation.textContent = sessionStorage.occupation
    var yourCourses = ""
    var count = 0
    if (sessionStorage.logicmath == "true") {
        totalPrice += 499
        yourCourses += "logicmath, "
        count += 1
    }
    if (sessionStorage.ai == "true") {
        totalPrice += 499
        yourCourses += "ai, "
        count += 1
    }
    if (sessionStorage.python == "true") {
        totalPrice += 799
        count += 1
        yourCourses += "python, "
    }
    if (sessionStorage.game == "true") {
        totalPrice += 149
        count += 1
        yourCourses += "game, "
    }
    if (sessionStorage.datascience == "true") {
        totalPrice += 249
        count += 1
        yourCourses += "datascience, "
    }
    if (sessionStorage.web == "true") {
        totalPrice += 749
        count += 1
        yourCourses += "web, "
    }
    var discount = ""
    if (count >= 3) {
        totalPrice = totalPrice * 80/100
        discount += " Discount 20% because you register more than 3 courses"
    }
    if (sessionStorage.occupation == "highschool") {
        totalPrice=totalPrice * 90/100
        discount+=" , discount extra 10% because you are in highschool"
    }
    if (sessionStorage.payment == "paypal") {
        totalPrice = totalPrice * 105/100
        discount += ", increase 5% surcharge because you choose paypal."
    }
    yourCourses = yourCourses.substring(0,yourCourses.length -2)
    courses.textContent = yourCourses
    payment.textContent = sessionStorage.payment
    total.textContent = totalPrice + discount
}
function cancelButton() {
    window.location = "web.html"
}
function init() {
    loadDataAndCalculatePrice()
    var cancel = document.getElementById("cancel_button")
    cancel.onclick = cancelButton
}
window.onload = init