import fs from 'fs';
import path from 'path';

const DATA_FILE = 'resorts.json';

export interface ResortData {
  id: string;
  createdAt: string;
  [key: string]: any;
}

export const saveResort = async (data: Omit<ResortData, 'id' | 'createdAt'>): Promise<ResortData> => {
  try {
    let resorts: ResortData[] = [];
    
    // Read existing data if file exists
    if (fs.existsSync(DATA_FILE)) {
      const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
      resorts = JSON.parse(fileContent);
    }

    // Create new resort entry
    const newResort: ResortData = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };

    // Add to array and save
    resorts.push(newResort);
    fs.writeFileSync(DATA_FILE, JSON.stringify(resorts, null, 2));

    return newResort;
  } catch (error) {
    console.error('Error saving resort:', error);
    throw new Error('Failed to save resort data');
  }
};

export const getResorts = async (): Promise<ResortData[]> => {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const fileContent = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error reading resorts:', error);
    throw new Error('Failed to read resort data');
  }
};