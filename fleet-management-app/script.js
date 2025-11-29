let data =[]
let originalData =[]
document.getElementById("addFleeet").addEventListener("click", (){
    let reg =
    document.getElementById("reg").Value.trim();
    let cat=document.getElementById("category").Value.;
    let driver =document.getElementById("driver").Value.trim();
    let avail=document.getElementById("available").Value;

    if(!reg || !cat || !driver){
        alert("Please fill all the fields");
        return;
    }
    let vehicle ={
        reg, cat, driver, avail,
        img:"https://via.placeholder.com/150"
    };
    data.push(vehicle);
    originalData= [...data];
    render(data);

    document.getElementById("reg").Value="";
    document.getElementById("category").Value="";
    document.getElementById("driver").Value="";
    });
    function render(arr) {
        document.getElementById("fleetCards").innerHTML = "";
        arr.foreach((ele,i) =>{
            let card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
            <img src ="${ele.img}" width="100%"><br><br>
            <p><b>Reg:</b> ${ele.reg}</p>
            <p><b>Category:</b> ${ele.cat}</p>
            <p><b>Driver:</b> ${ele.driver}</p>
            <p><b>Status:</b> ${ele.avail}</p>
            <button onclick="updateDrivers(${i})">Update Driver</button>
            <button onclick="changeAvail(${i})">Change Availability</button>
            <button onclick="del(${i})">Delete</button>
            `;
            document.getElementById("fleetCards").append(card);
        })
    }
    function updateDrivers(i){
        let newDriver = prompt("Enter new driver name:");
        if(!newDriver|| newDriver.trim()===""){
            alert("Driver name cannot be empty");
            return
        }
        data[i].driver=newDriver;
        render(data);
    }
    function changeAvail(i){
        data[i].avail = data[i].avail === "Available" ? "Unavailable" : "Available";
        render(data);
    }
    function del(i){
        let conf=confirm("Are you sure you want to delete this vehicle?");
        if(conf){
            data.splice(i,1);
            render(data);
        }
    }
    document.getElementById("filterCategory").addEventListener("change",applyFilters)
    document.getElementById("filterAvailability").addEventListener("change",applyFilters)

    function applyFilters(){
        let cat = document.getElementById("filterCategory").value;
        let avail = document.getElementById("filterAvail").value;
        document.getElementById("filterCategory").value;
        document.getElementById("filterAvail").value;
        let filtered = originalData.filter(v => {
            let cMatch = (cat === "All" || v.cat === cat);
            let aMatch = (avail === "All" || v.avail === avail);
            return cMatch && aMatch;
        });
        data=filtered;
        render(data);
    }
    document.getElementById("clearFilters").addEventListener("click",()=>{
        data = [...originalData];
        document.getElementById("filterCategory").value="All";
        document.getElementById("filterAvail").value="All";
        render(data);
    });
