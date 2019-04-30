const Ad = require('../models/Ad')

class SellerController {
  async store (req, res) {
    const { ad, purchase } = req.body

    const soldedAd = await Ad.findById(ad)

    if (soldedAd.purchasedBy) {
      return res.status(400).json({ error: 'The Ad has been sold' })
    }

    if (purchase.ad !== ad) {
      return res
        .status(400)
        .json({ error: 'Informed purchase is not associated with the ad' })
    }

    soldedAd.purchasedBy = purchase

    const UpdatedAd = await Ad.findOneAndUpdate(ad, soldedAd, {
      new: true
    })

    return res.json(UpdatedAd)
  }
}

module.exports = new SellerController()
