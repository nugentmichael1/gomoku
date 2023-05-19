
const postNewRegistration = async (formValues) => {

    //use axios to trigger backend registration route
    const result = await http.post("/userRegister", formValues)

        .then(res => {

            //debug
            // console.log(res.data)

            return res.data
        })

        .catch(error => {
            console.log("error in postNewRegistration():", error)
            return error
        })

    return result
}
