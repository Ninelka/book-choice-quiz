import axios from 'axios';
import * as fs from "node:fs";
import * as path from "node:path";
import books from '../public/data/books_en.json'

const __dirname = path.resolve('../')

async function getBookCover(author: string, title: string) {
    const query = `author:${author} title:${title}`;
    const url = `https://openlibrary.org/search?q=${encodeURIComponent(query)}&mode=everything&limit=1&lang=rus`;

    try {
        const response = await axios.get(url);

        const coverId = response?.data?.docs?.[0]?.cover_i;

        if (coverId) {
            return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
        } else {
            console.log(`Обложка для "${title}" не найдена.`);
            return null;
        }
    } catch (error) {
        console.error(`Ошибка при запросе данных о книге: ${title}`, error);
        return null;
    }
}

const imagesDirectory = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDirectory)) {
    fs.mkdirSync(imagesDirectory, { recursive: true });
}

async function saveCoverImage(imageUrl: string, bookId: number) {
    try {
        const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
        const filePath = path.join(imagesDirectory, `${bookId}.jpg`);

        fs.writeFileSync(filePath, response.data);
        console.log(`Обложка книги сохранена как ${filePath}`);
    } catch (error) {
        console.error(`Ошибка при сохранении обложки для книги с ID ${bookId}`, error);
    }
}

async function downloadBookCovers() {
    for (const book of books) {
        const { author, title, id } = book;
        console.log(`Ищу обложку для "${title}" автора ${author}...`);

        const coverUrl = await getBookCover(author, title);

        if (coverUrl) {
            await saveCoverImage(coverUrl, id);
        }
    }
}

downloadBookCovers();
