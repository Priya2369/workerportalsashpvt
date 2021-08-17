import axios from "axios"

export const sendContactMail = async (detail) => {
    // const data = {
    //     email,
    //     name,
    //     No,
    //     message
    // }

    try {
        const res = await axios({
            method: "post",
            url: "/api/contact",
            headers: {
                "Content-Type": "application/json"
            },
            detail
        })
        return res

    } catch (error) {
        return error
    }
}
//[1]