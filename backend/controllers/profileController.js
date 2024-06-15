const { Profile } =require('../models');

exports.createProfile = async (req, res) => {
    try {
        const profileData = {
            ...req.body,
            freelancer_id: HTMLTableRowElement.user.freelancer_id
        };
        const profile = await Profile.create(profileData);
        res.status(201).json(profileData);
    } catch (error) {
        res.status(500).json({ error: err.message });
    }
};