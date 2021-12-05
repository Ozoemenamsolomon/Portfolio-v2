import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"
import { FormValueProp } from "../pages/contact"

const axios = require("axios")

export default async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  // TODO Send the data to strapi
  const formBody: FormValueProp = req.body
  console.log(formBody)

  if (
    formBody.email == "" ||
    formBody.message == "" ||
    formBody.name == "" ||
    formBody.subject == ""
  ) {
    res.status(400).send({ message: "Invalid form body" })
  }

  try {
    const strapiResponse = await axios({
      method: "POST",
      url: "https://soo-portfolio-api.herokuapp.com/contact-forms",
      data: formBody,
    })
    res.status(200).send({ ...strapiResponse })
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}
