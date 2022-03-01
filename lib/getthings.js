import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'data')

export async function getAllThingIDs() {
    const fileNames = await fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
      return {
        params: {
          thing: fileName.replace(/\.json$/, '')
        }
      }
    })
  }

  export async function getThingData(thing) {

    const fullPath = path.join(postsDirectory, `${thing}.json`)
    const fileContents = fs.readFileSync(fullPath)
    const fileContent = await JSON.parse(fileContents);
  
    return {
      thing,
      fileContent
    }
  }