
document.addEventListener("DOMContentLoaded", () => {
    const ok = document.getElementById("statusOk");
    const err = document.getElementById("statusErr");
    if(ok) ok.style.display = "none";
    if(err) err.style.display = "none";
});




window.handleSubmit = async (e) => {
    e.preventDefault(); 

    const form = document.getElementById("contact");
    const submitBtn = document.getElementById("submitBtn");
    const ok = document.getElementById("statusOk");
    const err = document.getElementById("statusErr");
    

    const show = (el) => { if (el) el.style.display = "block"; };
    const hide = (el) => { if(el) el.style.display = "none"; };

    hide(ok);
    hide(err);

    submitBtn.disabled = true;
    submitBtn.textContent = "Lähetetään..."; 






    try {

        if (typeof emailjs === "undefined") {
            throw new Error("EmailJS script is not loaded.");
        }



        emailjs.init("#");

        const SERVICE_ID = "#"; 
        const TEMPLATE_ID = "#"; 

        const templateParams = {
            name: document.getElementById("nimi")?.value || "N/A",
            email: document.getElementById("sposti")?.value || "N/A",
            project_type: document.getElementById("palvelu")?.value || "N/A",
            message: document.getElementById("viesti")?.value || "Ei viestiä",
        };





        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        
        btn.textContent = "Lähetetty ✓";
        console.log("Success!");
        show(ok);
        form.reset(); 




    } catch (error) {

        console.error("EmailJS Error caught:", error);
        show(err);
    }
    
    
    finally {

        submitBtn.disabled = false;
        submitBtn.textContent = "Lähetä viesti";
    }
    
};