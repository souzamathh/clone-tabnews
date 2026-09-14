export const up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "uuid",
      primaryKey: true,
      default: pgm.func("gen_random_uuid()"),
    },

    // For reference, Github limits usernames to 39 characters.
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
    },

    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },

    password: {
      type: "varchar(72)",
      notNull: true,
    },

    created_at: {
      type: "timestamptz",
<<<<<<< Updated upstream
      notNull: true,
      default: pgm.func("timezone('utc', now ())"),
=======
      default: pgm.func("now()"),
>>>>>>> Stashed changes
    },

    updated_at: {
      type: "timestamptz",
<<<<<<< Updated upstream
      notNull: true,
      default: pgm.func("timezone('utc', now ())"),
=======
      default: pgm.func("now()"),
>>>>>>> Stashed changes
    },
  });
};

export const down = false;
