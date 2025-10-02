export const validatePlayer = (req, res, next) => {
  const { firstName, lastName, team, position } = req.body;

  if (!firstName || !lastName || !team || !position) {
    return res.status(400).json({
      error: "firstName, lastName, team, and position are required fields",
    });
  }

  next();
};