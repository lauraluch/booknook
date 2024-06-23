import sqlite3 from "sqlite3";
import fs from "fs";

const DATABASE_FILE = process.env.DATABASE_FILE || "./database.db";

if (!DATABASE_FILE) {
  throw new Error("Database file not found.");
}

const createTables = (db: sqlite3.Database) => {
  const createBookUserTable = `
  CREATE TABLE IF NOT EXISTS bookuser (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      biography VARCHAR(255),
      creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      birth_date VARCHAR(255)
  );`;

  const createBookTable = `
  CREATE TABLE IF NOT EXISTS book (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(255) NOT NULL,
      author VARCHAR(255),
      readAt VARCHAR(255),
      finished INTEGER,
      favorite INTEGER,
      user_id INTEGER,
      rating INTEGER CHECK (rating >= 0 AND rating <= 5),
      color VARCHAR(255),
      FOREIGN KEY(user_id) REFERENCES BookUser(user_id)
  );`;

  const createBookEntryTable = `
  CREATE TABLE IF NOT EXISTS bookentry (
      entry_id INTEGER PRIMARY KEY AUTOINCREMENT,
      book_id INTEGER,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      last_modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY(book_id) REFERENCES Book(book_id)
  );`;

  const createBookTagTable = `
  CREATE TABLE IF NOT EXISTS booktag (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title VARCHAR(255) NOT NULL,
      color VARCHAR(255),
      user_id INTEGER
  );`;

  const createTagsAndBookTable = `
  CREATE TABLE IF NOT EXISTS tagsandbook (
      book_id INTEGER,
      tag_id INTEGER,
      FOREIGN KEY(book_id) REFERENCES Book(book_id),
      FOREIGN KEY(tag_id) REFERENCES BookTag(tag_id)
  );`;

  db.serialize(() => {
    db.run(createBookUserTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela BookUser:", err.message);
      }
    });

    db.run(createBookTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela Book:", err.message);
      }
    });

    db.run(createBookEntryTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela BookEntry:", err.message);
      }
    });

    db.run(createBookTagTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela BookTag:", err.message);
      }
    });

    db.run(createTagsAndBookTable, (err) => {
      if (err) {
        console.error("Erro ao criar a tabela TagsAndBook:", err.message);
      }
    });

    console.log("Tabelas criadas/verificadas com sucesso.");
  });
};

export const openConnection = () => {
  const dbExists = fs.existsSync(DATABASE_FILE);
  const db = new sqlite3.Database(DATABASE_FILE, (err) => {
    if (err) {
      console.error("Erro ao abrir o banco de dados:", err.message);
    } else if (!dbExists) {
      console.log("Banco de dados não encontrado. Criando novas tabelas.");
      createTables(db);
    } else {
      console.log("Conectado ao banco de dados SQLite.");
    }
  });
  return db;
};

export const dbQuery = (query: string, params?: any[]) => {
  const db = openConnection();
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }).finally(() => db.close());
};
