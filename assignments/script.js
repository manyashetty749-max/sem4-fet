const KEY = "Manya2024";

let tries = 3;

const input =
document.getElementById("passInput");

const btn =
document.getElementById("verifyBtn");

const msg =
document.getElementById("status-msg");

const attempts =
document.getElementById("attempts-left");

const portal =
document.getElementById("portal");

btn.addEventListener("click", verifyPassword);

function verifyPassword()
{

    let value = input.value;

    // DO WHILE LOOP

    do
    {

        // WHILE LOOP

        while(tries > 0)
        {

            if(value === KEY)
            {

                msg.className = "success";

                msg.innerText =
                "ACCESS GRANTED";

                portal.style.display = "block";

                input.disabled = true;

                btn.disabled = true;

                return;

            }

            else
            {

                tries--;

                input.value = "";

                msg.className = "error";

                msg.innerText =
                "INVALID SECURITY KEY";

                attempts.innerText =
                tries + " attempts remaining";

                if(tries === 0)
                {

                    msg.innerText =
                    "SYSTEM LOCKED";

                    input.disabled = true;

                    btn.disabled = true;

                    return;

                }

                break;

            }

        }

    }
    while(tries > 0);

}

// ENTER KEY

input.addEventListener("keypress",
function(e)
{

    if(e.key === "Enter")
    {

        verifyPassword();

    }

});
