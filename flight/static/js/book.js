document.addEventListener('DOMContentLoaded', () => {
    flight_duration();
});

function flight_duration() {
    document.querySelectorAll(".duration").forEach(element => {
        let time = element.dataset.value.split(":");
        element.innerText = time[0]+"h "+time[1]+"m";
    });
}


// function add_traveller() {
//     let div = document.querySelector('.add-traveller-div');
//     let fname = div.querySelector('#fname');
//     let lname = div.querySelector('#lname');
//     let gender = div.querySelectorAll('.gender');
//     let gender_val = null
//     if(fname.value.trim().length === 0) {
//         alert("Please enter First Name.");
//         return false;
//     }

//     if(lname.value.trim().length === 0) {
//         alert("Please enter Last Name.");
//         return false;
//     }

//     if (!gender[0].checked) {
//         if (!gender[1].checked) {
//             alert("Please select gender.");
//             return false;
//         }
//         else {
//             gender_val = gender[1].value;
//         }
//     }
//     else {
//         gender_val = gender[0].value;
//     }

//     let passengerCount = div.parentElement.querySelectorAll(".each-traveller-div .each-traveller").length;

//     let traveller = `<div class="row each-traveller">
//                         <div>
//                             <span class="traveller-name">${fname.value} ${lname.value}</span><span>,</span>
//                             <span class="traveller-gender">${gender_val.toUpperCase()}</span>
//                         </div>
//                         <input type="hidden" name="passenger${passengerCount+1}FName" value="${fname.value}">
//                         <input type="hidden" name="passenger${passengerCount+1}LName" value="${lname.value}">
//                         <input type="hidden" name="passenger${passengerCount+1}Gender" value="${gender_val}">
//                         <div class="delete-traveller">
//                             <button class="btn" type="button" onclick="del_traveller(this)">
//                                 <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                     <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                                     <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>`;
//     div.parentElement.querySelector(".each-traveller-div").innerHTML += traveller;
//     div.parentElement.querySelector("#p-count").value = passengerCount+1;
//     div.parentElement.querySelector(".traveller-head h6 span").innerText = passengerCount+1;
//     div.parentElement.querySelector(".no-traveller").style.display = 'none';
//     fname.value = "";
//     lname.value = "";
//     gender.forEach(radio => {
//         radio.checked = false;
//     });

//     let pcount = document.querySelector("#p-count").value;
//     let fare = document.querySelector("#basefare").value;
//     let fee = document.querySelector("#fee").value;
//     if (parseFloat(pcount)!==0) {
//         document.querySelector(".base-fare-value span").innerText = parseFloat(fare)*parseFloat(pcount);
//         document.querySelector(".total-fare-value span").innerText = (parseFloat(fare)*parseInt(pcount))+parseInt(fee);
//     }

// }




// function add_traveller() {
//     let div = document.querySelector('.add-traveller-div');
//     let fname = div.querySelector('#fname');
//     let lname = div.querySelector('#lname');
//     let gender = div.querySelectorAll('.gender');
//     let seat = div.querySelector('#temp-seat');  // ID for seat dropdown
//     let gender_val = null;

//     if(fname.value.trim().length === 0) {
//         alert("Please enter First Name.");
//         return false;
//     }

//     if(lname.value.trim().length === 0) {
//         alert("Please enter Last Name.");
//         return false;
//     }

//     if (!gender[0].checked) {
//         if (!gender[1].checked) {
//             alert("Please select gender.");
//             return false;
//         }
//         else {
//             gender_val = gender[1].value;
//         }
//     }
//     else {
//         gender_val = gender[0].value;
//     }

//     if (!seat || seat.value.trim() === "") {
//         alert("Please select a seat.");
//         return false;
//     }

//     let passengerCount = div.parentElement.querySelectorAll(".each-traveller-div .each-traveller").length;

//     let traveller = `<div class="row each-traveller">
//                         <div>
//                             <span class="traveller-name">${fname.value} ${lname.value}</span><span>,</span>
//                             <span class="traveller-gender">${gender_val.toUpperCase()}</span><span>,</span>
//                             <span class="traveller-seat">Seat: ${seat.value}</span>
//                         </div>
//                         <input type="hidden" name="passenger${passengerCount+1}FName" value="${fname.value}">
//                         <input type="hidden" name="passenger${passengerCount+1}LName" value="${lname.value}">
//                         <input type="hidden" name="passenger${passengerCount+1}Gender" value="${gender_val}">
//                         <input type="hidden" name="passenger${passengerCount+1}Seat" value="${seat.value}">
//                         <div class="delete-traveller">
//                             <button class="btn" type="button" onclick="del_traveller(this)">
//                                 <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                     <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                                     <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>`;

//     div.parentElement.querySelector(".each-traveller-div").innerHTML += traveller;
//     div.parentElement.querySelector("#p-count").value = passengerCount + 1;
//     div.parentElement.querySelector(".traveller-head h6 span").innerText = passengerCount +1;
//     div.parentElement.querySelector(".no-traveller").style.display = 'none';

//     // Reset inputs
//     fname.value = "";
//     lname.value = "";
//     seat.selectedIndex = 0;
//     gender.forEach(radio => radio.checked = false);

//     // Update fare
//     let pcount = document.querySelector("#p-count").value;
//     let fare = document.querySelector("#basefare").value;
//     let fee = document.querySelector("#fee").value;
//     if (parseFloat(pcount) !== 0) {
//         document.querySelector(".base-fare-value span").innerText = (parseFloat(fare) * parseFloat(pcount));
//         document.querySelector(".total-fare-value span").innerText = ((parseFloat(fare) * parseInt(pcount)) + parseInt(fee));
//     }

//     return true;
// }


function add_traveller() {
    const div = document.querySelector('.add-traveller-div');
    const fname = div.querySelector('#fname');
    const lname = div.querySelector('#lname');
    const gender = div.querySelectorAll('.gender');

    const div2 = document.querySelector('.seat-map');
    const seat = div2.querySelector('#tempseat');
    let gender_val = null;

    // Validate inputs
    if (fname.value.trim() === "") {
        alert("Please enter First Name.");
        return false;
    }
    if (lname.value.trim() === "") {
        alert("Please enter Last Name.");
        return false;
    }
    if (!gender[0].checked && !gender[1].checked) {
        alert("Please select gender.");
        return false;
    }
    gender_val = gender[0].checked ? gender[0].value : gender[1].value;

    if (!seat || seat.value.trim() === "") {
        alert("Please select a seat.");
        return false;
    }

    const selectedSeat = seat.value;
    const passengerCount = div.parentElement.querySelectorAll(".each-traveller-div .each-traveller").length + 1;

    const traveller = `
        <div class="row each-traveller">
            <div>
                <span class="traveller-name">${fname.value} ${lname.value}</span><span>, </span>
                <span class="traveller-gender">${gender_val.toUpperCase()}</span><span>, </span>
                <span class="traveller-seat">Seat: ${selectedSeat}</span>
            </div>
            <input type="hidden" name="passenger${passengerCount}FName" value="${fname.value}">
            <input type="hidden" name="passenger${passengerCount}LName" value="${lname.value}">
            <input type="hidden" name="passenger${passengerCount}Gender" value="${gender_val}">
            <input type="hidden" name="passenger${passengerCount}Seat" value="${selectedSeat}">
            <div class="delete-traveller">
                <button class="btn" type="button" onclick="del_traveller(this)">
                    <svg width="1.1em" height="1.1em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        </div>`;

    div.parentElement.querySelector(".each-traveller-div").insertAdjacentHTML('beforeend', traveller);
    div.parentElement.querySelector("#p-count").value = passengerCount;
    div.parentElement.querySelector(".traveller-head h6 span").innerText = passengerCount;
    div.parentElement.querySelector(".no-traveller").style.display = 'none';

    // Disable selected seat option
    seat.querySelector(`option[value="${selectedSeat}"]`).disabled = true;
    seat.selectedIndex = 0;

    // Reset form
    fname.value = "";
    lname.value = "";
    gender.forEach(r => r.checked = false);

    // Update fare
    const fare = parseFloat(document.querySelector("#basefare").value || 0);
    const fee = parseFloat(document.querySelector("#fee").value || 0);
    const pcount = parseInt(document.querySelector("#p-count").value);
    if (pcount > 0) {
        document.querySelector(".base-fare-value span").innerText = (fare * pcount);
        document.querySelector(".total-fare-value span").innerText = (fare * pcount + fee);
    }

    return true;
}


function del_traveller(btn) {
    let traveller = btn.parentElement.parentElement;
    let tvl = btn.parentElement.parentElement.parentElement.parentElement;
    let cnt = tvl.querySelector("#p-count");
    cnt.value = parseInt(cnt.value)-1;
    tvl.querySelector(".traveller-head h6 span").innerText = cnt.value;
    if(parseInt(cnt.value) <= 0) {
        tvl.querySelector('.no-traveller').style.display = 'block';
    }
    traveller.remove();
    
    let pcount = document.querySelector("#p-count").value;
    let fare = document.querySelector("#basefare").value;
    let fee = document.querySelector("#fee").value;
    if (parseInt(pcount) !== 0) {
        document.querySelector(".base-fare-value span").innerText = parseFloat(fare)*parseFloat(pcount);
        document.querySelector(".total-fare-value span").innerText = (parseFloat(fare)*parseFloat(pcount))+parseFloat(fee);   
    }
}

function book_submit() {
    let pcount = document.querySelector("#p-count");
    if(parseFloat(pcount.value) > 0) {
        return true;
    }
    alert("Please add atleast one passenger.")
    return false;
}

  