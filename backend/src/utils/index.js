/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const mapDBToModel = ({
  id,
  title,
  price,
  category,
  created_at,
  updated_at,
}) => ({
  id,
  title,
  price,
  category,
  createdAt: created_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToModel };
