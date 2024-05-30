import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// .env dosyasını yükleyin
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// MongoDB bağlantısı
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch(error => console.error('connection error:', error));

app.use(cors());
app.use(express.json());

// Mongoose şema ve model tanımı
const summarySchema = new mongoose.Schema({
  url: String,
  summary: String,
  user: String,
});

const Summary = mongoose.model('Summary', summarySchema);

// Özetleri kaydetmek için POST endpoint
app.post('/summaries', async (req, res) => {
  const newSummary = new Summary(req.body);
  try {
    await newSummary.save();
    res.status(201).json(newSummary);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Özetleri almak için GET endpoint
app.get('/summaries', async (req, res) => {
  try {
    const summaries = await Summary.find();
    res.json(summaries);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});
