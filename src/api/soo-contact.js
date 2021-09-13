const axios = require("axios")

module.exports = async (req, res) => {
  // TODO Send the data to strapi
  const formBody = req.body

  try {
    const strapiResponse = await axios({
      method: "POST",
      url: "https://soo-portfolio-api.herokuapp.com/contact-forms",
      data: formBody,
    })
    res.status(200).send(strapiResponse)
  } catch (error) {
    res.send(error)
    console.log(error)
  }
}
