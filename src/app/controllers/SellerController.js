const Ad = require('../models/Ad')

class SellerController {
  async store (req, res) {
    const { ad, purchase } = req.body

    const sold = await Ad.findById(ad)
    sold.purchasedBy = purchase

    const UpdatedAd = await Ad.findOneAndUpdate(ad, sold, {
      new: true
    })

    return res.json(UpdatedAd)
  }
}

module.exports = new SellerController()
